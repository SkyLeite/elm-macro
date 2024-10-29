import TypeAlias from "./TypeAlias";

export interface Derive {
    name: string;

    transform(typeAlias: TypeAlias): String;
}
