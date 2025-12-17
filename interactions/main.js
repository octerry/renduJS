let textInput = document.getElementById('txtInput')
let para1 = document.getElementById('para1')
let image = document.getElementById('imageToChange')
let para2 = document.getElementById('para2')
let exo4 = document.getElementsByClassName('exo4')
let exo4Button = document.getElementById('exo4Button')
let condition = false

textInput.addEventListener("input", function () {
    para1.textContent = this.value
});

image.addEventListener("click", function () {
    if (this.src == "https://media1.tenor.com/m/MVlkQDbo2I8AAAAd/smiling-cat-happy-cat.gif") {
        this.src = "https://media1.tenor.com/m/SUE6m6RW2jMAAAAd/cow-middle-finger.gif"
    } else {
        this.src = "https://media1.tenor.com/m/MVlkQDbo2I8AAAAd/smiling-cat-happy-cat.gif"
    }
})

para2.addEventListener("mouseover", function () {
    para2.innerHTML = "Belle souris :)"
})

para2.addEventListener("mouseout", function () {
    para2.innerHTML = "Survol moi"
})

exo4Button.addEventListener("click", function () {
    if (condition) {
        for (const element of exo4) {
            console.log(element)
            element.style["background-color"] = "#000"
            element.style["color"] = "#fff"
            element.style["border"] = "3px #fff"
            condition = false
        }
    } else {
        for (const element of exo4) {
            console.log(element)
            element.style["background-color"] = "#fff"
            element.style["color"] = "#000"
            element.style[""] = "3px #000"
            condition = true
        }
    }
})