import { Stack } from './stack';

import { MenuComponent } from './menu-component';
import { IIterator } from './interator';
import { IteratorResult } from './interator';
import { Menu } from './menu';

export class CompositeIterator implements IIterator {

    constructor(iterator: Iterator<any>) {
        this.stack = new Stack();
        this.stack.push(iterator);
    }

    hasNext(): boolean {
        if (this.stack.isEmpty()) {
            return false;
        }

        let iterator: IIterator = this.stack.peek();

        if (iterator.hasNext()) {
            return true;
        }
        else {
            this.stack.pop();
            return this.hasNext();
        }
    }

    next(): IteratorResult {
        if (this.hasNext()) {
            let iterator: IIterator = this.stack.peek();
            let component: MenuComponent = iterator.next();

            if (component instanceof Menu) {
                this.stack.push(component.createIterator());
            }

            return component;
        }
        else {
            return null;
        }
    }

    private stack: Stack;
}