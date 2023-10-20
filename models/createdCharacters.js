export default class createdCharacters{
    constructor() {
        this.characters = [];
    }

    addCharacter(name, power, avatar, id) {
        const character = new personagem(name, power, avatar, id);
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
    constructor(name, power, avatar, id) {
        this.name = name;
        this.power = power;
        this.avatar = avatar;
        this.id = id;
    }
}