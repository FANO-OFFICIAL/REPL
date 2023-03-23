var section = document.querySelector('section');
var editable = document.querySelector('.editable');
var textareaHTML = document.querySelector('.playable-html');
// var textareaCSS = document.querySelector('.playable-css');
var reset = document.getElementById('reset');
var showResult = document.getElementById('show-result');
var codeResult = "<em>Ceci est mon texte</em>";
var htmlCodeInit = "Ceci est mon texte";
// var cssCode = textareaCSS.value;

function fillCode() {
    // editable.innerHTML = textareaCSS.value;
    section.innerHTML = textareaHTML.value;
}

reset.addEventListener('click', function () {
    textareaHTML.value = htmlCodeInit;
    // textareaCSS.value = cssCode;
    fillCode();
});
showResult.addEventListener('click', function () {
    textareaHTML.value = codeResult;
    // textareaCSS.value = cssCode;
    fillCode();
});

textareaHTML.addEventListener('input', fillCode);
// textareaCSS.addEventListener('input', fillCode);
window.addEventListener('load', fillCode);