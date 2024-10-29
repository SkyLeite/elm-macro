const regexes = {
    derive: /--#\s+derive\((\w+(?:,\s\w+){0,1})+\)/,
};

const Derives = {
    Default: (source: string) => source,
};

export const findDerives = (source: string): string[] => {
    const result = regexes.derive.exec(source);
    if (!result) {
        return [];
    }

    const derives_str = result[1];
    const derives = derives_str.replace(/\s/g, "").split(",");

    return derives.filter((derive) => Object.keys(Derives).includes(derive));
};

export default function (source: string) {
    const derives = findDerives(source);

    return `module Input exposing (..)

--# derive(Default)
type alias MyType = {
    foo: String
}

MyTypeDefault : MyType
MyTypeDefault =
    { foo: "" }
`;
}
