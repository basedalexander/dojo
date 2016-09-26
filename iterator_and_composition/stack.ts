export class Stack {
    constructor() {
        this.elements = [];
    }

    size(): number {
        return this.elements.length;
    }

    push(item: any) {
        return this.elements.push(item);
    };

    pop(): any {
        return this.elements.pop();
    }

    peek(): any {
        if (this.isEmpty()) {
            return null;
        }

        return this.elements[this.size() - 1];
    }

    isEmpty(): boolean {
        return this.size() === 0;
    }

    private elements: any;
}