import { MenuComponent } from './menu-component';
import { CompositeIterator } from './composite-iterator';
import { UnsupportedOperationException } from './unsupported-operation-exception';

export class Waitress {
    private menu: MenuComponent;

    constructor(menu: MenuComponent) {
        this.menu = menu;
    }

    printDrinks(): void {
        let iterator: CompositeIterator = this.menu.createIterator();

        while(iterator.hasNext()) {
            let component: MenuComponent = iterator.next();

            try {
                if (component.isDrink()) {
                    component.print();
                }
            } catch (e) {}
        }
    }

    printVegeterian(): void {
        let iterator: CompositeIterator = this.menu.createIterator();

        while(iterator.hasNext()) {
            let component: MenuComponent = iterator.next();

            try {
                if (component.isVegetarian()) {
                    component.print();
                }
            } catch (e) {}
        }
    }
}
