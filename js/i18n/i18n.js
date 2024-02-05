const I18N = {
    de: I18N_de,
    en: I18N_en
};

function translate(key, lang, gender) {
    if (key) {
        const text = I18N[lang][key];
        if (text === undefined) {
            console.warn(`Missing ${lang} translation for: ${key}`);
            return key;
        }
        if (gender && typeof text !== 'string') {
            return text[gender];
        }
        return text;
    }
    return '';
}
