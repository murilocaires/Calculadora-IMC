import {Modal} from './modal.js'
import { AlertError } from './alertError.js'
import { calculateIMC, notANumber} from './utils.js'


const form = document.querySelector("form")
const inputWeight = document.querySelector("#weight")
const inputHeight = document.querySelector("#height")


inputHeight.oninput = () => AlertError.close()
inputWeight.oninput = () => AlertError.close()
form.onsubmit = event => {
    event.preventDefault()
    
    const weight = inputWeight.value
    const height = inputHeight.value

    const weightOrHeigthIsNoTaNumber = notANumber(height) || notANumber(weight)
    if(weightOrHeigthIsNoTaNumber){
        AlertError.open()
        return;
    }
    
    AlertError.close()
    const result = calculateIMC(weight, height)
    displayResultMessage(result)
}

function displayResultMessage(result){
    const message = `O IMC calculado é: ${result} `
    Modal.message.innerText = message
    Modal.open()  
}
