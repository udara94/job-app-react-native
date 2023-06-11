import { lightPalette } from './palatte';
export const colors = {
  lightPalette,
  brand: {
    primary: lightPalette.black,
    secondary: lightPalette.red,
    muted: '',
  },
  ui: {
    primary: lightPalette.red,
    secondary: lightPalette.blue,
    tertiary: lightPalette.tertiary,
    quaternary: lightPalette.black,
    disabled: lightPalette.white,
    error: lightPalette.red,
    success: lightPalette.blue,
    border: lightPalette.lightGray,
  },
  bg: {
    primary: lightPalette.white,
    secondary: '',
  },
  text: {
    primary: lightPalette.black,
    secondary: lightPalette.white,
    label: lightPalette.gray,
    disabled: lightPalette.black,
    inverse: lightPalette.white,
    error: lightPalette.red,
    success: lightPalette.blue,
    dark: lightPalette.darkSienna,
  },
};
