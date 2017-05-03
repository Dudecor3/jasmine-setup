describe('Given the character service', () => {
    var characterService;
    beforeEach(() => {
        characterService = new CharacterService();
    });

    describe('When getAllCharacters is called', () => {
        it('Then a list of all Halo characters are returned', () => {
            var characters = characterService.getAllCharacters();
            expect(characters).toBeDefined();
        });
    });

    describe('When getCharacterByName is called with "Master Chef"', () => {
        it('Then Master Chef object is returned', () => {
            var masterChef = characterService.getCharacterByName("Master Chef");
            expect(masterChef.name).toBe("Master Chef");
        });
    });

    describe('When getCharacterByName is called with "Cortana"', () => {
        it('Then Cortana object is returned', () => {
            var cortana = characterService.getCharacterByName("Cortana");
            expect(cortana.name).toBe("Cortana");
        });
    });

    describe('When getCharacterByFaction is called with UNSC', () => {
        it('Then all of the UNSC characters are returned', () => {
            var unsc = characterService.getCharacterByFaction("UNSC");
            expect(unsc).toBeDefined();
        });
    });
});