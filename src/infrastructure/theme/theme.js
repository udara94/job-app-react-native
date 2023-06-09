import { palatte } from "./palatte";

const theme = {
  light: {
    ui: {
      primary: palatte.red,
      secondary: palatte.blue,
      tertiary: palatte.tertiary,
      quaternary: palatte.black,
      disabled: palatte.white,
      error: palatte.red,
      success: palatte.blue,
      border: palatte.lightGray,
    },
    bg: {
      primary: palatte.white,
      secondary: "",
    },
    text: {
      primary: palatte.black,
      secondary: palatte.white,
      label: palatte.gray,
      disabled: palatte.black,
      inverse: palatte.white,
      error: palatte.red,
      success: palatte.blue,
      dark: palatte.darkSienna,
    },
  },
  dark: {
    ui: {
      primary: palatte.red,
      secondary: palatte.blue,
      tertiary: palatte.tertiary,
      quaternary: palatte.black,
      disabled: palatte.white,
      error: palatte.red,
      success: palatte.blue,
      border: palatte.lightGray,
    },
    bg: {
      primary: palatte.black,
      secondary: "",
    },
    text: {
      primary: palatte.black,
      secondary: palatte.white,
      label: palatte.gray,
      disabled: palatte.black,
      inverse: palatte.white,
      error: palatte.red,
      success: palatte.blue,
      dark: palatte.darkSienna,
    },
  },
};


export default theme;