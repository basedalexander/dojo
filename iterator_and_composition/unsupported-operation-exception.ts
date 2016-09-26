export class UnsupportedOperationException extends Error {
    constructor() {
        super();

        this.message = 'Operation is not allowed';
    }
}