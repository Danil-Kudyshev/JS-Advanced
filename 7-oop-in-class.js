class BaseClass {
    constructor(race, name, language) {
        this.race = race
        this.name = name
        this.language = language
    }
    speak() {
        console.log('Говорить');
    }
}
class ClassOrc extends BaseClass {
    constructor(race, name, language, weapon) {
        super(race, name, language)
        this.weapon = weapon
    }
    speak() {
        console.log('Говорит Орк');
    }
    hit() {
        console.log('Удар');
    }
}
class ClassElf extends BaseClass {
    spells = ['Огонь', 'Ветер', 'Вода']
    constructor(race, name, language) {
        super(race, name, language)
    }
    speak() {
        console.log('Говорит Элф');
    }
    caste(spellId) {
        if (this.spells[spellId-1]) {
            console.log(`Применено заклинание: ${this.spells[spellId-1]}`);
        } else {
            console.log(`Применено заклинание: ${this.spells[Math.floor(Math.random()*3)]}`);
        }
    }
}