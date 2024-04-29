import { EStyleThemeTypes } from "@/styles/types";
import "@emotion/react";
import { Property } from "csstype";

declare module "@emotion/react" {
  export type ColorSet = {
    [key in EStyleThemeTypes]: {
      background: Property.Background;
      color: Property.Color;
    };
  };

  export type LinkSet = {
    normal: {
      color: Property.Color;
      textDecoration: Property.TextDecoration;
    };
    hover: {
      color: Property.Color;
      textDecoration: Property.TextDecoration;
    };
  };

  export type ButtonSet = {
    width: string;
    height: string;
    fontSize: string;
  };

  export type EButtonSizeTypesSet = {
    [key in EButtonSizeTypes]: {
      height: string;
      fontSize: string;
      lineHeight: string;
      borderRadius: string;
    };
  };

  export type ButtonThemeSet = {
    [key in EStyleThemeTypes]: {
      normal: {
        background: Property.Background;
        color: Property.Color;
      };
      hover: {
        background: Property.Background;
        color: Property.Color;
      };
    };
  };

  export type ButtonStyleSet = {
    [key in EButtonStyleTypes]: {
      normal: {
        background: Property.Background;
        color: Property.Color;
      };
      hover: {
        background: Property.Background;
        color: Property.Color;
      };
    };
  };

  export type FontSizeSet = {
    LABEL: string;
  };

  export type TabSet = {
    normal: {
      [key: string]: string;
    };
    selected: {
      [key: string]: string | number;
    };
  };

  export type TabsSet = {
    [key in EStyleThemeTypes]: {
      outer: React.CSSProperties;
      inner: TabSet;
    };
  };

  export interface Theme {
    colors: ColorSet;
    enabledColors: ColorSet;
    disabledColors: ColorSet;
    haxColors: Record<string, string>;
    fontSize: FontSizeSet;
    ButtonSet: ButtonSet;
    mq: {
      laptop: string;
      tablet: string;
      mobile: string;
    };
  }
}
