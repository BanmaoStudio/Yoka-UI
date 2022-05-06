import { defineConfig } from 'dumi';

let base = '/Yoka-UI';
let publicPath = '/Yoka-UI/';

export default defineConfig({
    title: "Yoka UI",
    mode: "site",
    outputPath: "doc-site",
    exportStatic: {},
    dynamicImport: {},
    base,
    publicPath,
});

