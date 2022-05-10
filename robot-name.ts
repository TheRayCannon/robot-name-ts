interface Irobot {
    name: string
    resetName: () => void;
}

export class Robot implements Irobot {
    name: string;
    static usedNames = new Set<string>()
    static releaseNames() {
        return this.usedNames.clear()
    }
    constructor() {
        this.name = this.uniuqueRandomName

    }

    resetName() {
        this.name = this.uniuqueRandomName
    }

    private get uniuqueRandomName() {
        let newName;
        do {
            newName = this.randomName
        } while (Robot.usedNames.has(newName))
        Robot.usedNames.add(newName)
        return newName
    }

    private get randomName() {
        return `${this.twoLetters}${this.randomDigits}`
    }
    private get twoLetters() {
        const letter1 = this.letter
        const letter2 = this.letter
        return `${letter1}${letter2}`
    }

    private get letter() {
        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXXYZ"
        const randomNumber = Math.floor(Math.random() * 26)
        return letters[randomNumber]
    }

    private get randomDigits() {
        return `${this.randomNumber0to999}${this.randomNumber0to999}${this.randomNumber0to999}`
    }

    private get randomNumber0to999() {
        return Math.floor(Math.random() * 10);
    }
}
