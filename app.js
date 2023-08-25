var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txtarea-input");
var divOutput = document.querySelector("#output")


function clickEventHandler(){
    divOutput.innerText = "hjkbbnhujhjbhj" + txtInput.value
}

btnTranslate.addEventListener("click", clickEventHandler)