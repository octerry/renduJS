let titleElement = document.getElementById('title')
let imageElement = document.getElementById('image')

titleElement.innerHTML = "Paul qui envoie un beau meme de Squeezie"
imageElement.src = "https://media1.tenor.com/m/3mWy2uW1DeMAAAAd/wtf-weird.gif"

function changeImage () {
    if (imageElement.src == "https://media1.tenor.com/m/3mWy2uW1DeMAAAAd/wtf-weird.gif") {
        imageElement.src = "https://media1.tenor.com/m/zs6ypEf8BNwAAAAd/old-man-spray-paint-bug-eye-man.gif"
    } else {
        imageElement.src = "https://media1.tenor.com/m/3mWy2uW1DeMAAAAd/wtf-weird.gif"
    }
}