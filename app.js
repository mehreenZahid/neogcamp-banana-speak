var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txtarea-input");
var divOutput = document.querySelector("#output")

var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(input){
    return serverURL +"?"+ "text="+ input
}

function errorHandler(error){
    console.log("error occured", error)
    alert("Something went wrong with server! Try again after some time")
}

function clickEventHandler(){
    var inputText = txtInput.value

    fetch(getTranslationURL(inputText))
     .then(response => response.json())
     .then(json => {
        var translatedText = json.contents.translated
        divOutput.innerText = translatedText
     })
     .catch(errorHandler)
    
}

btnTranslate.addEventListener("click", clickEventHandler)