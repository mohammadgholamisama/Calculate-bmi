let $ = document
const bmiResultContainer = $.querySelector('.bmi-result')
const bmiResultElem = $.querySelector('.bmi-result-num')
const bmiConditionElem = $.querySelector('.Condition')
const inputHeight = $.querySelector('#height')
const inputWeight = $.querySelector('#Weight')
const spanHeightElem = $.querySelector('.height-span')
const spanWeightElem = $.querySelector('.weight-span')
const calculateBtn = $.querySelector('button')


function ChangeInput(){
    spanHeightElem.innerHTML = inputHeight.value
    spanWeightElem.innerHTML = inputWeight.value

    
}

function calculateBmi(){
    let heightResult = Math.pow(inputHeight.value /100 , 2)
    let userValue = inputWeight.value / heightResult
    
    bmiResultElem.innerHTML = userValue.toFixed(2)
    
    
   

    if(userValue < 18.5){
        bmiResultContainer.style.background = 'linear-gradient(to right bottom, rgb(39, 147, 157), rgb(7, 101, 143))'
        bmiConditionElem.innerHTML = 'UNDERWEIGHT'
        
    }
      else if(18.5 < userValue && userValue < 24.9){
        bmiResultContainer.style.background = 'linear-gradient(264deg, rgba(95,175,3,1) 53%, rgba(81,161,5,1) 100%)'
        bmiConditionElem.innerHTML = 'NORMAL'

    }
      else if(25 < userValue && userValue < 30){
        bmiResultContainer.style.background = 'linear-gradient(264deg, rgba(199,94,94,1) 53%, rgba(215,0,0,1) 100%)'
        bmiConditionElem.innerHTML = 'OVERWAIGHT'
    }
     else{
        bmiResultContainer.style.background = 'linear-gradient(264deg, rgba(158,0,0,1) 53%, rgba(215,0,0,1) 100%)'
        bmiConditionElem.innerHTML = 'OBESITY (types 1 to 3)'

    }

    document.body.style.background = bmiResultContainer.style.background
}




calculateBtn.addEventListener('click', calculateBmi)
inputHeight.addEventListener('input', ChangeInput)
inputWeight.addEventListener('input', ChangeInput)