import { findDerives } from "../src";

test("Derive can find known derives", () => {
    const input = `module Input exposing (..)

--# derive(Default)
type alias MyType = {
    foo: String
}
`;

    const derives = findDerives(input);
    expect(derives).toEqual(["Default"]);
});

test("Derive ignores unknown derives", () => {
    const input = `module Input exposing (..)

--# derive(Default, UnknownDerive)
type alias MyType = {
    foo: String
}
`;

    const derives = findDerives(input);
    expect(derives).toEqual(["Default"]);
});

test("Derive is case-sensitive", () => {
    const input = `module Input exposing (..)

--# derive(default)
type alias MyType = {
    foo: String
}
`;

    const derives = findDerives(input);
    expect(derives).toEqual([]);
});
