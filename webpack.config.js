import path from "path";

export default {
  entry: path.resolve("./elm-src/Main.elm"),
  mode: "production",
  module: {
    rules: [
      {
        test: /\.elm$/,
        use: [
          {
            loader: path.resolve("./ts-dist/src/index.js"),
            options: {},
          },
        ],
      },
      {
        test: () => true,
        sideEffects: true,
      },
    ],
  },
};
