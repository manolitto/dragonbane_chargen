const I18N = {
    de: I18N_de,
    en: I18N_en
};

function translate(key, ctx) {

    if (typeof key === 'number') {
        return '' + key;
    }

    if (/^[+-]?\d*[dD]\d+$/.test(key)) {
        return key.replaceAll(/[dD]/g, I18N[ctx.lang]['DICE_CHARACTER'])
    }

    if (key) {
        const text = I18N[ctx.lang][key];
        if (text === undefined) {
            console.warn(`Missing ${ctx.lang} translation for: ${key}`);
            return key;
        }
        if (ctx.gender && typeof text !== 'string') {
            return text[ctx.gender];
        }
        return text;
    }

    return '';
}
