export interface IIterator {
    next(): IteratorResult;
    hasNext(): boolean;
}

export type IteratorResult = any;
