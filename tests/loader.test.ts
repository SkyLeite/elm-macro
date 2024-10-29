import loader from "../src";
import fs from "fs";
import path from "path";

const basePath = "./tests/elm-cases";
const cases = fs.readdirSync(path.resolve(basePath), {
    recursive: false,
});

for (let test_case of cases) {
    const input = fs.readFileSync(
        path.resolve(`${basePath}/${test_case}/Input.elm`),
        { encoding: "utf-8" }
    );
    const output = fs.readFileSync(
        path.resolve(`${basePath}/${test_case}/Output.elm`),
        { encoding: "utf-8" }
    );

    test(`${test_case}`, () => {
        expect(loader(input)).toBe(output);
    });
}
