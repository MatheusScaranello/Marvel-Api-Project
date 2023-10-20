export default class createdCharacters{
    constructor() {
        this.characters = [];
    }

    addCharacter(name, descri, avatar, id) {
        const character = new personagem(name, descri, avatar, id);
        this.characters.push(character);
    }

    getCharacters() {
        return this.characters;
    }

    getCharacter(id) {
        return this.characters.find(character => character.id === id);
    }

    updateCharacter(id, character) {
        const index = this.characters.findIndex(character => character.id === id);
        this.characters[index] = character;
    }

    deleteCharacter(id) {
        this.characters = this.characters.filter(character => character.id != id);
    }
    atualizarPersonagens(id, personagem) {
        const index = this.personagens.findIndex(personagem => personagem.id === id);
        this.personagens[index] = personagem;
    }
}

class personagem {
    constructor(name, descri, avatar, id) {
        this.name = name;
        this.descri = descri;
        this.avatar = avatar;
        this.id = id;
    }
}