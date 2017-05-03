var CharacterService = function () {
    var characters = [
        { name: "Master Chef", faction: "UNSC" },
        { name: "Cortana", faction: "UNSC" },
        { name: "Arbiter", faction: "Covenant" }
    ];

    this.getAllCharacters = function () {
        return characters;
    };

    this.getCharacterByName = function (name) {
        return characters.find(function (character) {
            return character.name === name;
        });
    };

    this.getCharacterByFaction = function (faction) {
        return characters.filter(function (character) {
            return character.faction === faction;
        });
    };
};
