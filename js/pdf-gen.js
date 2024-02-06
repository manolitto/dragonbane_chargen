const { PDFDocument } = PDFLib

async function createPdf(char, ctx) {
    // Fetch the PDF with form fields
    const pdfFileName = TEMPLATE_PDF[ctx.template];
    if (!pdfFileName) {
        throw Error('PDF file not found: ' + pdfFileName);
    }
    const formUrl = `./sheet-templates/${pdfFileName}`;
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
    //const pdfBytes = await pdfDoc.save()
    return pdfDoc.save();
}

function fillOutForm(form, char, ctx) {
    const fs = FIELD[ctx.template];
    setTextField(ctx, form, fs.KIN, char.kin);
    setTextField(ctx, form, fs.AGE, char.age);
    setTextField(ctx, form, fs.PROFESSION, char.profession);
    setTextField(ctx, form, fs.NAME, char.firstname, char.nickname);

    setTextField(ctx, form, fs.APPEARANCE, char.appearance);

    setTextField(ctx, form, fs.STR, char.str);
    setTextField(ctx, form, fs.CON, char.con);
    setTextField(ctx, form, fs.AGL, char.agl);
    setTextField(ctx, form, fs.INT, char.int);
    setTextField(ctx, form, fs.WIL, char.wil);
    setTextField(ctx, form, fs.CHA, char.cha);

    setTextField(ctx, form, fs.DAMAGE_BONUS_STR, char.damageBonStr);
    setTextField(ctx, form, fs.DAMAGE_BONUS_AGL, char.damageBonAgl);
    setTextField(ctx, form, fs.MOVEMENT, char.movement);

    setTextField(ctx, form, fs.ABILITY, [...char.abilities, ...char.heroicAbilities]);

    setTextField(ctx, form, fs.GOLD, char.gold || '');
    setTextField(ctx, form, fs.SILVER, char.silver || '');
    setTextField(ctx, form, fs.COPPER, char.copper || '');

    for (const s of Object.keys(fs.SKILL_CHECK)) {
        setCheckBox(ctx, form, fs.SKILL_CHECK[s], char.trainedSkills.indexOf(s) >= 0);
    }
    for (const s of Object.keys(fs.SKILL_VALUE)) {
        setTextField(ctx, form, fs.SKILL_VALUE[s], char.basicSkillChances[s]);
    }
    for (const s of Object.keys(fs.WEAPON_SKILL_CHECK)) {
        setCheckBox(ctx, form, fs.WEAPON_SKILL_CHECK[s], char.trainedSkills.indexOf(s) >= 0);
    }
    for (const s of Object.keys(fs.WEAPON_SKILL_VALUE)) {
        setTextField(ctx, form, fs.WEAPON_SKILL_VALUE[s], char.weaponSkillChances[s]);
    }

    setTextField(ctx, form, fs.ENCUMBRANCE, char.encumbrance);
    setTextField(ctx, form, fs.INVENTORY, calcInventoryLines(char.inventory));
    setTextField(ctx, form, fs.MEMENTO, char.memento);
    setTextField(ctx, form, fs.TINY_ITEMS, calcTinyItems(char.inventory));

    setTextField(ctx, form, fs.ARMOR_RATING, ARMOR[char.armor]?.ac);
    setTextField(ctx, form, fs.ARMOR, char.armor);
    setTextField(ctx, form, fs.HELMET_RATING, HELMET[char.helmet]?.ac);
    setTextField(ctx, form, fs.HELMET, char.helmet);

    setTextField(ctx, form, fs.WEAPON_SHIELD, char.weapons.map(w => WEAPON[w]?.name));
    setTextField(ctx, form, fs.GRIP,          char.weapons.map(w => WEAPON[w]?.grip));
    setTextField(ctx, form, fs.RANGE,         char.weapons.map(w => evaluateRange(char, WEAPON[w]?.range)));
    setTextField(ctx, form, fs.DAMAGE,        char.weapons.map(w => '' + WEAPON[w]?.damage));
    setTextField(ctx, form, fs.DURABILITY,    char.weapons.map(w => '' + WEAPON[w]?.durability));
    setTextField(ctx, form, fs.FEATURES,      char.weapons.map(w => WEAPON[w]?.features.join(', ')));

    setTextField(ctx, form, fs.WP, char.wp);
    setTextField(ctx, form, fs.HP, char.hp);
}

function createFilename(char, context) {
    const ctx = {...context, gender: char.gender};
    const kin = translate(char.kin, ctx);
    const profession = translate(char.profession, ctx);
    const firstname = translate(char.firstname, ctx);
    const nickname = translate(char.nickname, ctx);
    return `${kin}_${profession}_${firstname}_${nickname}.pdf`;
}

function joinTranslated(vals, ctx) {
    let joined = '';
    for (const v of vals) {
        if (joined) {
            joined += ' ';
        }
        joined += translate(v, ctx);
    }
    return joined;
}

function setTextField(ctx, form, field, val, ...moreVals) {
    if (typeof val === 'undefined') {
        // noinspection UnnecessaryReturnStatementJS
        return; // ignore
    } else if (typeof val === 'string' && val.length > 0) {
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
                form.getTextField(field(i)).setText(translate(v, ctx));
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

function setCheckBox(ctx, form, field, val) {
    if (typeof val === 'boolean') {
        let checkBox;
        if (typeof field === 'function') {
            checkBox = form.getCheckBox(field(0));
        } else {
            checkBox = form.getCheckBox(field);
        }
        setCheckBoxValue(checkBox, val);
    } else if (Array.isArray(val)) {
        if (typeof field === 'function') {
            for (let i = 0; i < val.length; i++) {
                const v = val[i];
                setCheckBoxValue(form.getCheckBox(field(i)), v);
            }
        } else {
            setCheckBoxValue(form.getCheckBox(field), val);
        }
    } else {
        throw Error('Bad value: ' + val);
    }
}

function setCheckBoxValue(checkBox, b) {
    if (b) {
        checkBox.check();
    } else {
        checkBox.uncheck();
    }
}

function evaluateRange(char, range) {
    if (typeof range == 'number') {
        return '' + range;
    } else {
        return '' + (char[range] || '');
    }
}

function calcInventoryLines(inventory) {
    const lines = [];
    for (let i = 0; i < inventory.length; i++) {
        const item = inventory[i];
        const itemStats = ITEM[item] || {};
        if (itemStats.weight === 0) {
            continue;
        }
        const weight = itemStats.weight || 1;
        for (let j = 0; j < weight; j++) {
            if (j === 0) {
                lines.push(item);
            } else {
                lines.push('   ---');
            }
        }
    }
    return lines.slice(0, 10);
}

function calcTinyItems(inventory) {
    return inventory.filter(i => ITEM[i]?.weight === 0).join(', ');
}
