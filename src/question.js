class Question {
    constructor(text, choices, answer, difficulty) {
        this.text = text
        this.choices = choices
        this.answer = answer
        this.difficulty = difficulty
    }

    shuffleChoices() {

        for (let i = this.choices.length - 1; i > 0; i--) {
            // Generar índice aleatorio entre 0 e i
            const j = Math.floor(Math.random() * (i + 1));
            // Intercambio de elementos (destructuring assignment)
            [this.choices[i], this.choices[j]] = [this.choices[j], this.choices[i]];
        }

        return this.choices;
    }

}

const preguntas = new Question("hla", [1, 2, 3, 4, 5])
preguntas.shuffleChoices()

