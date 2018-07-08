import enTranslations from "../languages/en";

translations.$inject = ["$translateProvider"];

export default function translations($translateProvider) {
  $translateProvider.translations("en", enTranslations);
  $translateProvider.useSanitizeValueStrategy(null);
  $translateProvider.preferredLanguage("en");
}
