type cssModuleObj = Record<string, string>;

type cssModuleBuilt = {
  style: cssModuleObj;
  s: cssModuleObj;
  css: { styles: string; id: string };
};

declare module "inline-css-modules-react" {
  export const cssModules: (
    strings: TemplateStringsArray,
    ...args: unknown[]
  ) => cssModuleBuilt;
  export const useCssModules: (
    cssModuleBuiltCss: cssModuleBuilt["css"],
  ) => undefined;
}
