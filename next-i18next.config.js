module.exports = {
  i18n: {
    defaultLocale: "en",
    fallbackLng: "en",
    locales: ["en", "ar"],
    detection: {
      caches: ["cookie"],
      cookieSameSite: "strict",
      lookupCookie: "locale",
      order: ["header", "cookie"],
    },
  },
};
