const nameInput = document.querySelector('.name_input');
const numberInput = document.querySelector('.number_input');
const mmInput = document.querySelector('.mm_input');
const yyInput = document.querySelector('.yy_input');

nameInput.addEventListener('change',() =>{
    const nameValue = nameInput.value;
    document.querySelector('.insert_name').innerHTML = nameValue;

})

numberInput.addEventListener('change', () =>{
    const numberValue = numberInput.value;
    document.querySelector('.insert_number').innerHTML = `${numberValue.slice(0,4)} ${numberValue.slice(4,8)} ${numberValue.slice(8,12)} ${numberValue.slice(12,16)}`
})
nameInput.addEventListener('change',() =>{
    const nameValue = nameInput.value;
    document.querySelector('.insert_name').innerHTML = nameValue;

})

nameInput.addEventListener('change',() =>{
    const nameValue = nameInput.value;
    document.querySelector('.insert_name').innerHTML = nameValue;

})
cvcInput.addEventListener('input', () =>{
    const cvcValue = cvcInput.value;
    let cvcRegex1 = new RegExp(/^[0-9]{3}$/);    
    let cvcRegex2 = new RegExp(/^[0-9]{4}$/);
    
    if(cvcValue.match(cvcRegex2) || cvcValue.match(cvcRegex1)){
    document.querySelector('.insert_cvc').innerHTML = cvcValue;
}else{
    
}
})  