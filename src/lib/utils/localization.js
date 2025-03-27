export const translate = (key, lang = 'en') => {
    const translations = {
      en: {
        welcome: 'Welcome',
        search: 'Search',
      },
      es: {
        welcome: 'Bienvenido',
        search: 'Buscar',
      },
    };
    return translations[lang][key] || key;
  };