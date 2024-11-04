// List of available locales
const availableLocales = ["en", "vi"];

// Default locale.
const defaultLanguage = "en";

// Manually detect users' language, strip languages such as `en-GB` to just `en`.
let language = (
  window.navigator.userLanguage || window.navigator.language
).substr(0, 2);

// If `?lang=` exists in URL params & is valid, then use that instead.
const urlParams = new URLSearchParams(window.location.search);
const langFromUrl = urlParams.get("lang");
if (langFromUrl && availableLocales.includes(langFromUrl)) {
  language = langFromUrl;
}

// Set `pageLanguage` only if its available within our locales, otherwise default.
let pageLanguage = defaultLanguage;
if (availableLocales.includes(language)) {
  pageLanguage = language;
}

// Locale translations.
const locales = {
  // EN
  en: {
    // navbar
    navbar: {
      easyApp: "EASY APP",
      products: "PRODUCTS",
      projects: "PROJECTS",
      faqs: "FAQs",
      language: "LANGUAGE",
    },
    // Banner Section
    banner: {
      shortTitle: "Together, a better life",
      mainTitle: "Meet Sino, Fulfill Your Dreams",
    },
  },

  // VI
  vi: {
    // navbar
    navbar: {
      easyApp: "ỨNG DỤNG DỄ DÀNG",
      products: "SẢN PHẨM",
      projects: "DỰ ÁN",
      faqs: "CÂU HỎI THƯỜNG GẶP",
      language: "NGÔN NGỮ",
    },
    // Banner Section
    banner: {
      shortTitle: "Cùng nhau, một cuộc sống tốt hơn",
      mainTitle: "Gặp gỡ Sino, thực hiện ước mơ của bạn",
    },
  },
};

// Get all page elements to be translated.
const elements = document.querySelectorAll("[data-i18n]");

// Get JSON object of translations.
const json = locales[pageLanguage];

// On each element, found the translation from JSON file & update.
elements.forEach((element, index) => {
  const key = element.getAttribute("data-i18n");
  let text = key.split(".").reduce((obj, i) => (obj ? obj[i] : null), json);

  // Does this text have any variables? (eg {something})
  const variables = text.match(/{(.*?)}/g);
  if (variables) {
    // Iterate each variable in the text.
    variables.forEach((variable) => {
      // Filter all `data-*` attributes for this element to find the matching key.
      Object.entries(element.dataset).filter(([key, value]) => {
        if (`{${key}}` === variable) {
          try {
            // Attempt to run actual JavaScript code.
            text = text.replace(
              `${variable}`,
              new Function(`return (${value})`)()
            );
          } catch (error) {
            // Probably just static text replacement.
            text = text.replace(`${variable}`, value);
          }
        }
      });
    });
  }

  // Regular text replacement for given locale.
  element.innerHTML = text;
});

// Set <html> tag lang attribute.
const htmlElement = document.querySelector("html");
htmlElement.setAttribute("lang", pageLanguage);

function switchLanguage(lang) {
  const url = new URL(window.location);
  url.searchParams.set("lang", lang);
  window.location.href = url.toString(); // Reload page with new lang parameter
}
