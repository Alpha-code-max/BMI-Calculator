const submit = document.querySelector('.submit');
const height = document.querySelector('.height')
const weight = document.querySelector('.weight')
const error = document.querySelector('.error')
const bmiValue = document.querySelector('.bmiValue')
const clear = document.querySelector('.clear')
const bmiStatus = document.querySelector('.bmiStatus')
const section = document.querySelector('.section')


submit.addEventListener('click', ()=>{
    if (height.value === '' || weight.value === '') {
        error.innerHTML = '<p class="error-text">Please fill in all fields</p>'
        setTimeout(function(){
            error.innerHTML= ''
        },2000)
}else if(!Number(height.value) || !Number(weight.value)){
    error.innerHTML = '<p class="error-text">Please put in the correct data types</p>'
    setTimeout(function(){
        error.innerHTML= ''
    },2000) 
}else{
    const result = Number(weight.value)/(((Number(height.value))*30.4/100)**2)
    bmiValue.innerText = result.toFixed(2);
    bmiValue.innerHTML = `<p class="BMI-span">${result.toFixed(2)}</p>`
    

    if (result < 18.5) {
        bmiStatus.textContent = 'Underweight'
        bmiStatus.innerHTML = `<p class="BMI-yellow">${bmiStatus.textContent}</p>`
    } else if (result > 18.5 && result < 24.9){
        bmiStatus.textContent = 'Healthy'
        bmiStatus.innerHTML = `<p class="BMI-green">${bmiStatus.textContent}</p>`
    } else if (result > 24.9 && result < 29.9){
        bmiStatus.textContent = 'Overweight'
        bmiStatus.innerHTML = `<p class="BMI-red">${bmiStatus.textContent}</p>`
    } else{
        bmiStatus.textContent = 'Obesity'
        bmiStatus.innerHTML = `<p class="BMI-obesity">${bmiStatus.textContent}</p>`
    }

}
})

clear.addEventListener('click', ()=>{
    height.value = ""
    weight.value = ""
    bmiStatus.textContent = ""
    bmiValue.textContent = ""
})