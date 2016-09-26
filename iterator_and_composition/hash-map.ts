import { IIterator } from './interator';
import { IteratorResult } from './interator';

type HashMapEntries = { [key: string]: any };

export class HashMap {

    constructor() {
        this.entries = {};
    }

    get(name: string): any {
        return this.entries[name];
    }

    set(name: string, item: any): void {
        this.entries[name] = item;
    }

    size(): number {
        return Object.keys(this.entries).length;
    }

    [Symbol.iterator](): IIterator {
        let currentPos: number = 0;
        let entries: HashMapEntries = this.entries;
        let keys: string[] = Object.keys(this.entries);

        return {
            next: function (): IteratorResult {
                let result: IteratorResult;

                if (currentPos < keys.length) {
                    let key: string = keys[currentPos++];
                    result = entries[key];
                }
                else {
                    result = undefined;
                }

                return result;
            },

            hasNext: function (): boolean {
                return currentPos < keys.length;
            }
        }
    }

    private entries: HashMapEntries;
}