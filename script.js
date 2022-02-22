const questions = document.getElementsByClassName("FAQ__container")
const arrows = document.getElementsByClassName("FAQ__arrow")

for (i = 0; i < questions.length; i++){
    questions[i].addEventListener('click', function () {
        this.classList.toggle("active")
    }) 
}

