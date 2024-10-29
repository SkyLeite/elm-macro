import Type from "./Type";

export default class TypeAlias {
    public name: string;
    public fields: Field[] = [];

    constructor(name: string) {
        this.name = name;
    }
}

export class Field {
    public name: string;
    public type_: Type;

    constructor(name: string, type_: Type) {
        this.name = name;
        this.type_ = type_;
    }
}
