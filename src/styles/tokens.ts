import { ColorSet, FontSizeSet, TabsSet } from "@emotion/react";
import { EStyleSize, EStyleThemeTypes } from "./types";

export const haxColors = {
  primary: "#000",
  primaryHover: "#333333",
  secondary: "#EB4335",
  secondaryHover: "#c32a1d",
  required: "#DA291E",

  white: "#FFFFFF",
  black: "#000000",

  gray100: "#F0F0F0",
  gray200: "#222222",
  gray300: "#333333",
  gray301: "#3A3B3F",
  gray400: "#444444",
  gray500: "#E0E0E0",
  gray550: "#F5F5F5",
  gray600: "#666666",
  gray800: "#888888",
  gray900: "#EEEEEE",

  beige100: "#FFF5DA",
  brown200: "#F2EFE7",
  blue500: "#0000ff",
  blueGray600: "#6C7288",
  yellow400: "#FCB449",
  red200: "#DA291E",
  red400: "#FDF4F4",
  green600: "#605C1F",

  transparent: "rgba(0,0,0,0)",
  TextDecoration: "none",
} as const;

export const colors: ColorSet = {
  [EStyleThemeTypes.PRIMARY]: {
    color: haxColors.white,
    background: haxColors.gray200,
  },
  [EStyleThemeTypes.SECONDARY]: {
    color: haxColors.gray200,
    background: haxColors.white,
  },
};

export const fontSize: FontSizeSet = {
  LABEL: "12px",
};

export const size = {
  [EStyleSize["FULL-AUTO"]]: {
    width: "100%",
    height: "auto",
  },
};

export const tabs: TabsSet = {
  [EStyleThemeTypes.PRIMARY]: {
    outer: {},
    inner: {
      normal: {
        color: haxColors.gray600,
        background: haxColors.gray500,
      },
      selected: {
        color: haxColors.gray300,
        background: haxColors.white,
      },
    },
  },
  [EStyleThemeTypes.SECONDARY]: {
    outer: {
      borderBottom: `2px solid ${haxColors.gray600}`,
      display: "flex",
      height: "30px",
    },
    inner: {
      normal: {
        color: haxColors.gray600,
        background: haxColors.gray500,
        height: "30px",
        padding: "0 8px",
      },
      selected: {
        color: haxColors.gray600,
        background: haxColors.white,
        border: `2px solid ${haxColors.gray600}`,
        borderBottom: 0,
      },
    },
  },
};
