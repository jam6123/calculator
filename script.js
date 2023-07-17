const container = document.querySelector('.container')
const outputContainer = document.querySelector('.output')
const outputText = document.querySelector('.output__text')
const buttonElements = document.querySelectorAll('button')

// adds click event listener to every button element
buttonElements.forEach(button => {
    button.addEventListener('click', function(e) {
        undo(outputText.innerText, button)
        clearInput(button.innerText)
        renderValue(button)
    })
})

// append value or give the output
function renderValue(button) {
    const numberBtn = !Number.isNaN(+button.innerText)

    if(numberBtn) {
        outputText.dataset.isEntered = 'true'
        outputText.innerText == '0' ? outputText.innerText = '' : ''
        outputText.style.color = 'black'

        appendNumber(+button.innerText)
    }else {
        const lastInputIsSign = Number.isNaN(+outputText.innerText.slice(-1))   // get last  the character
        if (lastInputIsSign || outputText.dataset.isEntered == 'false') {
            return

            // bottom codes will be ignored if current last character on input is an arithmethic or user have not entered a number yet.
        }else {
            switch(button.innerText) {
                case '.':
                    outputText.innerText += '.'
                    break
                case '+':
                    outputText.innerText += '+'
                    break
                case '−':
                    outputText.innerText += '−'
                    break
                case '×':
                    outputText.innerText += '×'
                    break
                case '÷':
                    outputText.innerText += '÷'
                    break
                case '=':
                    outputAnswer() 
                    break
            }
        }
    }
    changeFontSize()
}

// output the answer
function outputAnswer() {
    try {
        outputText.innerText = eval(   //  replaces the characters × and ÷ to the arythmetic signs that js can understand 
                                        outputText.innerText
                                        .replace(/×/g, '*')
                                        .replace(/÷/g, '/')
                                        .replace(/−/g, '-')
                                    )
    }catch(error){
        showError()
    }
}

// clear or remove output's value
function clearInput(buttonText) {
    if(buttonText == 'CLEAR') {
        outputText.innerText = '0'
        outputText.dataset.isEntered = 'false'
        outputText.removeAttribute('style')
    }
}

// changes output's font-size if it overflows to its parent 
function changeFontSize() {
    const style = window.getComputedStyle(outputText)
    const outputTextFontSize = parseInt(style.getPropertyValue('font-size'))
    const outputContainerWidth = outputContainer.offsetWidth
    const outputTextWdith = outputText.offsetWidth

    if(outputTextWdith > outputContainerWidth) {
        outputText.style.fontSize = `${outputTextFontSize / 1.5}px`
    }
}

// undo 
function undo(currentInnertext, targetElement) {
    if(targetElement.id == 'undo-btn' && outputText.dataset.isEntered == 'true') {
        outputText.innerText = currentInnertext.slice(0, -1) // remove the last character
    }
    if(outputText.innerText == '') {
        outputText.dataset.isEntered = 'false'
        outputText.innerText = 0
        outputText.removeAttribute('style')
    }
}

// appends any number to the output
function appendNumber(numberValue) {
    switch(numberValue) {
        case 9:
            outputText.innerText += numberValue
            break
        case 8:
            outputText.innerText += numberValue
            break
        case 7:
            outputText.innerText += numberValue
            break
        case 6:
            outputText.innerText += numberValue
            break
        case 5:
            outputText.innerText += numberValue
            break
        case 4:
            outputText.innerText += numberValue
            break
        case 3:
            outputText.innerText += numberValue
            break
        case 2:
            outputText.innerText += numberValue
            break
        case 1:
            outputText.innerText += numberValue
            break
        case 0:
            outputText.innerText += numberValue
            break
        }
}

// show error
function showError() {
    outputContainer.classList.add('error')
    setTimeout(() => {
        outputContainer.classList.remove('error')
    },5000)
}

// USED IN THIS FILE THAT ARE NEW TO ME
// eval()
// element.offsetWidth()
// element.getComputedStyel()
// text.replace(/value here/g, 'replacement here')  regex Object
// text.slice(0, -1 ) remove last character
