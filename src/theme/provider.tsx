import React, { useCallback, useEffect } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { CacheProvider } from "@emotion/react";
import createCache, { StylisPlugin } from "@emotion/cache";
import { useCustomTheme } from "./theme";
import rtlPlugin from "stylis-plugin-rtl";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [rtlPlugin as StylisPlugin],
});

const MuiProvider = ({ children }: { children: JSX.Element }) => {
  const { theme } = useCustomTheme();
  const { locale } = useRouter();
  const { i18n } = useTranslation();

  const setLocale = useCallback(
    (lang?: string) => {
      if (!lang || !i18n?.dir) return;
      const dir = i18n?.dir(lang);
      document.documentElement.lang = lang;
      document.documentElement.dir = dir;
    },
    [i18n]
  );

  useEffect(() => {
    setLocale(locale);
  }, [locale, setLocale]);

  let content = children;

  if (i18n?.dir && i18n?.dir(locale) === "rtl") {
    content = <CacheProvider value={cacheRtl}>{children}</CacheProvider>;
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {content}
    </ThemeProvider>
  );
};

export default MuiProvider;
