import { useState } from "react";
import { createTheme, responsiveFontSizes } from "@material-ui/core/styles";
import { i18n } from "next-i18next";
import { useRouter } from "next/router";

export const initial = createTheme({
  palette: {
    primary: {
      main: "#03a247",
    },
    secondary: {
      main: "#f4a52e",
    },
  },
  typography: {
    fontFamily: ["Cairo", "Roboto"].join(","),
    h1: {
      fontFamily: ["Cairo-bold", "Roboto"].join(","),
      fontSize: "3rem",
      letterSpacing: "-0.007em",
    },
    h2: {
      fontFamily: ["Cairo-bold", "Roboto"].join(","),
      fontSize: "2rem",
      letterSpacing: "-0.01em",
    },
    h3: {
      fontFamily: ["Cairo-semi", "Roboto"].join(","),
      fontSize: "1.8rem",
      letterSpacing: "-0.01em",
    },
    h4: {
      fontFamily: ["Cairo-semi", "Roboto"].join(","),
      fontSize: "1.5rem",
      letterSpacing: "-0.01em",
    },
    h5: {
      fontFamily: ["Cairo-semi", "Roboto"].join(","),
      fontSize: "1.2rem",
      letterSpacing: "-0.01em",
    },
    h6: {
      fontFamily: ["Cairo-semi", "Roboto"].join(","),
      fontSize: "1rem",
      letterSpacing: "-0.01em",
    },
  },
});

export const useCustomTheme = () => {
  const { locale } = useRouter();
  const [theme, setTheme] = useState(
    responsiveFontSizes({
      ...initial,
      direction: i18n?.dir ? i18n.dir(locale) : "ltr",
    })
  );

  return {
    theme,
  };
};
