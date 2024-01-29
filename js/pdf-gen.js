const { PDFDocument } = PDFLib

async function createPdf(char, ctx) {
    // Fetch the PDF with form fields
    const formUrl = `./sheet-templates/${ctx.template}`;
    const formPdfBytes = await fetch(formUrl).then(res => res.arrayBuffer())

    // // Fetch the Mario image
    // const marioUrl = 'https://pdf-lib.js.org/assets/small_mario.png'
    // const marioImageBytes = await fetch(marioUrl).then(res => res.arrayBuffer())
    //
    // // Fetch the emblem image
    // const emblemUrl = 'https://pdf-lib.js.org/assets/mario_emblem.png'
    // const emblemImageBytes = await fetch(emblemUrl).then(res => res.arrayBuffer())

    // Load a PDF with form fields
    const pdfDoc = await PDFDocument.load(formPdfBytes)

    // // Embed the Mario and emblem images
    // const marioImage = await pdfDoc.embedPng(marioImageBytes)
    // const emblemImage = await pdfDoc.embedPng(emblemImageBytes)

    // Get the form containing all the fields
    const form = pdfDoc.getForm()

    fillOutForm(
        form,
        char,
        {...ctx, gender: char.gender}
    );

    // Get all fields in the PDF by their names
    // const characterImageField = form.getButton('CHARACTER IMAGE')
    // Fill the character image field with our Mario image
    // characterImageField.setImage(marioImage)

    // Serialize the PDFDocument to bytes (a Uint8Array)
    const pdfBytes = await pdfDoc.save()
    return pdfBytes;
}

function fillOutForm(form, char, ctx) {
    const fs = FIELD[ctx.template];
    setTextField(ctx, form, fs.KIN, char.kin);
    setTextField(ctx, form, fs.AGE, char.age);
    setTextField(ctx, form, fs.PROFESSION, char.profession);
    setTextField(ctx, form, fs.NAME, char.firstname, char.nickname);
    setTextField(ctx, form, fs.STR, char.str);
    setTextField(ctx, form, fs.CON, char.con);
    setTextField(ctx, form, fs.AGL, char.agl);
    setTextField(ctx, form, fs.INT, char.int);
    setTextField(ctx, form, fs.WIL, char.wil);
    setTextField(ctx, form, fs.CHA, char.cha);
    setTextField(ctx, form, fs.DAMAGE_BONUS_STR, char.damageBonStr);
    setTextField(ctx, form, fs.DAMAGE_BONUS_AGL, char.damageBonAgl);
    setTextField(ctx, form, fs.MOVEMENT, char.movement);
    setTextField(ctx, form, fs.HP, char.hp);
    setTextField(ctx, form, fs.WP, char.wp);
    setTextField(ctx, form, fs.ABILITY, [...char.abilities, ...char.heroicAbilities]);
    for (const s of Object.keys(fs.SKILL)) {
        setTextField(ctx, form, fs.SKILL[s], char.skills[s]);
    }
    setTextField(ctx, form, fs.APPEARANCE, char.appearance);
    setTextField(ctx, form, fs.ENCUMBRANCE, char.encumbrance);
    setTextField(ctx, form, fs.INVENTORY, char.inventory);
    setTextField(ctx, form, fs.MEMENTO, char.memento);
    setTextField(ctx, form, fs.ARMOR, char.armor);
    setTextField(ctx, form, fs.HELMET, char.helmet);
    setTextField(ctx, form, fs.WEAPON_SHIELD, char.weapons);
    setTextField(ctx, form, fs.GOLD, char.gold || '');
    setTextField(ctx, form, fs.SILVER, char.silver || '');
    setTextField(ctx, form, fs.COPPER, char.copper || '');
}

function createFilename(char, ctx) {
    const kinText = translate(char.kin, ctx.lang, char.gender);
    const professionText = translate(char.profession, ctx.lang, char.gender);
    const nameText = translate(char.firstname, ctx.lang, char.gender);
    return `${kinText}_${professionText}_${nameText}.pdf`;
}

function joinTranslated(vals, ctx) {
    let joined = '';
    for (const v of vals) {
        if (joined) {
            joined += ' ';
        }
        joined += translate(v, ctx.lang, ctx.gender);
    }
    return joined;
}

function setTextField(ctx, form, field, val, ...moreVals) {
    if (typeof val === 'string' && val.length > 0) {
        let textField;
        if (typeof field === 'function') {
            textField = form.getTextField(field(0));
        } else {
            textField = form.getTextField(field);
        }
        textField.setText(joinTranslated([val, ...moreVals], ctx));
    } else if (Array.isArray(val)) {
        if (typeof field === 'function') {
            for (let i = 0; i < val.length; i++) {
                const v = val[i];
                form.getTextField(field(i)).setText(translate(v, ctx.lang, ctx.gender));
            }
        } else {
            form.getTextField(field).setText(joinTranslated(val, ctx));
        }
    } else if (typeof val === 'number' || val === '') {
        form.getTextField(field).setText(`${val}`);
    } else {
        throw Error('Bad value: ' + val);
    }
}
