const textBox = document.querySelector("#in")
const button = document.querySelector("#Btn")
const defText = document.querySelector("#def")

let url = "https://api.dictionaryapi.dev/api/v2/entries/en/"

button.addEventListener("click", () => {
    let userWord = textBox.value
    url  += userWord
    console.log(url)
    fetch(url).then((response) => response.json()).then((data) => {
        const { word } = data[0]
        console.log(word)
        const { meanings } = data[0]
        meanings.forEach((element) => {
            console.log(element.definitions[0].definition)
        })
        //console.log(meanings)

        
    })
    //console.log(url)
})