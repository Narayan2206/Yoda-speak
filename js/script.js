
var input = document.querySelector("#input");
var translateBtn = document.querySelector("#btn-translate");
var output = document.querySelector("#output");

translateBtn.addEventListener("click", showOutput);

function showOutput(){

    var inputText = input.value;
    var finalURL = constructURL(inputText);

    fetch(finalURL).then(response => response.json()).then(json => {
        output.innerText =  json.contents.translated;
    }).catch(()=> alert("Some error occured. Try again later."));

}

var url = "https://api.funtranslations.com/translate/yoda.json";

function constructURL(text)
{
    var encodedURI = encodeURI(text);
    return `${url}?text=${encodedURI}`;
}