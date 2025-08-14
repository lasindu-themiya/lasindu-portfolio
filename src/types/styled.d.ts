import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      primaryDark: string;
      secondary: string;
      accent: string;
      background: string;
      backgroundAlt: string;
      text: string;
      textLight: string;
      white: string;
      border: string;
      success: string;
      error: string;
      gradient: string;
      cardBg: string;
      navBg: string;
      footerBg: string;
      footerText: string;
      footerTextLight: string;
      footerSocialBg: string;
    };
    shadows: {
      small: string;
      medium: string;
      large: string;
      hover: string;
    };
    breakpoints: {
      mobile: string;
      tablet: string;
      desktop: string;
      large: string;
    };
    spacing: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
    };
    borderRadius: {
      small: string;
      medium: string;
      large: string;
      xl: string;
    };
  }
}
