import external from "rollup-plugin-peer-deps-external";
import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import { terser } from "@rollup/plugin-terser";
import dts from "rollup-plugin-dts";
import styles from "rollup-plugin-styles";
import commonjs from "@rollup/plugin-commonjs";
import alias from "@rollup/plugin-alias";

export default [
  {
    input: "./src/index.ts",
    output: [
      {
        file: "dist/index.js",
        format: "cjs",
      },
      {
        file: "dist/index.es.js",
        format: "es",
        exports: "named",
      },
    ],
    plugins: [
      external(),
      resolve({
        jsnext: true,
        main: true,
        browser: true,
      }),
      alias({
        entries: [
          { find: "@components", replacement: path.resolve(__dirname, "src/components") },
          { find: "@hooks", replacement: path.resolve(__dirname, "src/hooks") },
          { find: "@utils", replacement: path.resolve(__dirname, "src/utils") },
          { find: "@types", replacement: path.resolve(__dirname, "src/types") },
          { find: "@styles", replacement: path.resolve(__dirname, "src/styles") },
        ],
      }),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      babel({
        exclude: "node_modules/**",
        presets: ["@babel/preset-env", "@babel/preset-typescript", "@babel/preset-react"],
        plugins: ["styled-components"],
      }),
      styles(),
      terser(),
    ],
  },
  {
    input: "./src/index.ts",
    output: [
      {
        file: "dist/types.d.ts",
        format: "es",
      },
    ],
    plugins: [dts],
  },
];
