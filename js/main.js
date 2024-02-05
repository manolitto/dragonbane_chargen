async function createCharacterSheetPdf() {

    const template = TEMPLATE["DB_DE_Charakterbogen_ausfuellbar_v0.8"];

    const character = createRandomCharacter();

    console.info(character);

    character.profession = PROFESSION.Artisan;
    console.info(character);

    const context = {
        lang: 'de',
        template: template
    }
    const pdfBytes = await createPdf(character, context);

    download(
        pdfBytes,
        createFilename(character, context),
        "application/pdf"
    );
}

