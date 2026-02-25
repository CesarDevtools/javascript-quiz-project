class Quiz {
  constructor(questions, timeLimit, timeRemaining) {
    this.questions = questions;
    this.timeLimit = timeLimit;
    this.timeRemaining = timeRemaining;
    this.correctAnswers = 0;
    this.currentQuestionIndex = 0;
  }

  getQuestion() {
    return this.questions[this.currentQuestionIndex]
  }

  moveToNextQuestion () {
    this.currentQuestionIndex++
  }

  shuffleQuestions() {
    for (let i = this.questions.length - 1; i > 0; i--) {
      // Generar índice aleatorio entre 0 e i
      const j = Math.floor(Math.random() * (i + 1));
      // Intercambio de elementos (destructuring assignment)
      [this.questions[i], this.questions[j]] = [
        this.questions[j],
        this.questions[i],
      ];
    }
    return this.questions;
  }

  checkAnswer(answer) {
    const currentQuestion = this.getQuestion()
    if (answer === currentQuestion.answer) {
        this.correctAnswers++
    }
  }

  hasEnded() {
    if (this.currentQuestionIndex < this.questions.length) {
        return false
    } else if (this.currentQuestionIndex === this.questions.length) {
        return true
    }
  }

  filterQuestionsByDifficulty(difficulty) {

    if (difficulty >= 1 && difficulty <= 3 ){
        this.questions = this.questions.filter((questions) => {
        return questions.difficulty === difficulty
    })
    }
  }

  averageDifficulty() {
    
    const totalSum = this.questions.reduce((acc, curr) => {
        return acc + curr.difficulty
    },0);

    return  totalSum / this.questions.length
    
  }
}
