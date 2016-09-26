import { UnsupportedOperationException } from './unsupported-operation-exception';
import { CompositeIterator } from './composite-iterator';

export abstract class MenuComponent {
    addItem(item: MenuComponent): void {
        throw new UnsupportedOperationException();
    }

    getName(): string {
        throw new UnsupportedOperationException();
    }

    getDescription(): string {
        throw new UnsupportedOperationException();
    }

    getPrice(): number {
        throw new UnsupportedOperationException();
    }

    print(): void {
        throw new UnsupportedOperationException();
    }

    isVegetarian(): boolean {
        throw new UnsupportedOperationException();
    }

    isDrink(): boolean {
        throw new UnsupportedOperationException();
    }

    createIterator(): CompositeIterator {
        throw new UnsupportedOperationException();
    }
}