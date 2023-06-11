import { lightPalette, darkPalette } from "./palatte";

const theme = {
  light: {
    ui: {
      primary: lightPalette.primary,
      secondary: lightPalette.secondary,
      tertiary: lightPalette.ashWhite,
      quaternary: lightPalette.black,
      disabled: lightPalette.gray2,
      // error: lightPalette.red,
      // success: lightPalette.blue,
      // border: lightPalette.lightGray,
    },
    bg: {
      primary: lightPalette.white,
      secondary: lightPalette.secondary,
      tertiary: lightPalette.tertiary,
      quaternary: lightPalette.lightWhite,
    },
    text: {
      primary: lightPalette.primary,
      secondary: lightPalette.secondary,
      label: lightPalette.gray,
      // disabled: lightPalette.black,
      inverse: lightPalette.white,
      // error: lightPalette.red,
      // success: lightPalette.blue,
      // dark: lightPalette.darkSienna,
    },
    tint: {
      primary: lightPalette.white,
    },
    button: {
      primary: darkPalette.primary,
    },
    card:{
      primary: lightPalette.lightWhite
    },
    common:{
      primary: lightPalette.white
    }
  },
  dark: {
    ui: {
      primary: darkPalette.primary,
      secondary: darkPalette.white,
      tertiary: darkPalette.ashWhite,
      quaternary: darkPalette.black,
      disabled: darkPalette.gray,
      // error: lightPalette.red,
      // success: lightPalette.blue,
      // border: lightPalette.lightGray,
    },
    bg: {
      primary: darkPalette.black,
      secondary: darkPalette.secondary,
      tertiary: darkPalette.tertiary,
      quaternary: darkPalette.lightWhite,
    },
    text: {
      primary: darkPalette.white,
      secondary: darkPalette.secondary,
      label: darkPalette.gray,
      // disabled: lightPalette.black,
      inverse: darkPalette.white,
      // error: lightPalette.red,
      // success: lightPalette.blue,
      // dark: lightPalette.darkSienna,
    },
    tint: {
      primary: darkPalette.white,
    },
    button: {
      primary: darkPalette.primary,
    },
    card:{
      primary: darkPalette.secondary
    },
    common:{
      primary: lightPalette.white
    }
  },
};

export default theme;
