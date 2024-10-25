declare module 'tailwindcss/lib/util/flattenColorPalette' {
    declare function flattenColorPalette(colors: object): { [key: string]: string };
    export = flattenColorPalette;
  }