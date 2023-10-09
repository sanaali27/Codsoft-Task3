let inputBox = document.getElementById('inputBox')
let buttons = document.querySelectorAll('button')

let string = ''
buttons.forEach(element => {
    // not equal
    element.addEventListener('click', (b) => {
        if (b.target.innerText == '=') {
            string = String(eval(string))
            inputBox.value = string;
        }
        // all clear
        else if (b.target.innerText == 'AC') {
            string = ''
            inputBox.value = string;
        }
        // delete
        else if (b.target.innerText == 'DEL') {
            string = string.substring(0, string.length - 1)
            inputBox.value = string;
        }
        // number inputs
        else {
            string += b.target.innerText
            inputBox.value = string
        }
    })
})