import { MenuComponent } from './menu-component';
import { HashMap } from './hash-map';
import { CompositeIterator } from './composite-iterator';


export class Menu extends MenuComponent {
    private menuComponents: HashMap;

    private name: string;
    private description: string;

    constructor(name: string, description: string) {
        super();

        this.menuComponents = new HashMap();

        this.name = name;
        this.description = description;
    }

    addItem(item: MenuComponent): void {
        this.menuComponents.set(item.getName(), item);
    }

    getName(): string {
        return this.name;
    }

    getDescription(): string {
        return this.description;
    }

    print(): void {
        console.log(this.name);
        console.log('-------------');
        console.log(this.description);


        for (let component of this.menuComponents) {
            component.print();
        }
    }

    createIterator(): CompositeIterator {
        return new CompositeIterator(this.menuComponents[Symbol.iterator]());
    }
}

export class MenuItem extends MenuComponent {
    private name: string;
    private description: string;
    private price: number;
    private drink: boolean;
    private vegetarian: boolean;

    constructor(
        name: string,
        description: string,
        price: number,
        drink: boolean,
        vegetarian: boolean
    ) {
        super();

        this.name = name;
        this.description = description;
        this.price = price;
        this.drink = drink;
        this.vegetarian = vegetarian;
    }

    getName(): string {
        return this.name;
    }
    getDescription(): string {
        return this.description;
    }
    getPrice(): number{
        return this.price;
    }

    isVegetarian(): boolean {
        return this.vegetarian;
    }

    isDrink(): boolean {
        return this.drink;
    }

    print(): void {
        console.log(`${this.name} - ${this.price}`);
        console.log(this.description);
        console.log('-----------------------------------');
    }
}