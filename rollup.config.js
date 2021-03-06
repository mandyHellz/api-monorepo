
import typescript from "rollup-plugin-typescript2";
import pkg from "./package.json";

export default {
    input: "packages/fetchpokeapi-package/src/index.tsx",
    output: [
        {
            file: pkg.main,
            format: "cjs",
            exports: "named",
            sourcemap: true,
            strict: false,
        },
    ],
    plugins: [
        typescript({ objectHashIgnoreUnknownHack: true }),
    ],
    external: ["react", "react-dom"],
};