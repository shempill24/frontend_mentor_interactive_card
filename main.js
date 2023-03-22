const nameInput = document.querySelector('.name_input');
const numberInput = document.querySelector('.number_input');
const mmInput = document.querySelector('.mm_input');
const yyInput = document.querySelector('.yy_input');
const cvcInput= document.querySelector('.cvc_input');

nameInput.addEventListener('change',() =>{
    const nameValue = nameInput.value;
    document.querySelector('.insert_name').innerHTML = nameValue;

});
numberInput.addEventListener('change', () =>{
    const numberValue = numberInput.value;
    document.querySelector('.insert_number').innerHTML = `${numberValue.slice(0,4)} ${numberValue.slice(4,8)} ${numberValue.slice(8,12)} ${numberValue.slice(12,16)}`
});
mmInput.addEventListener('change',() =>{
    const mmValue = mmInput.value;
    document.querySelector('.insert_expiration_mm').innerHTML = mmValue;

});

yyInput.addEventListener('change',() =>{
    const yyValue = yyInput.value;
    document.querySelector('.insert_expiration_yy').innerHTML = yyValue;

});

cvcInput.addEventListener('change', () =>{
    const cvcValue = cvcInput.value;
    let cvcRegex1 = new RegExp(/^[0-9]{3}$/);    
    let cvcRegex2 = new RegExp(/^[0-9]{4}$/);
    if(cvcValue.match(cvcRegex2)||cvcValue.match(cvcRegex1)){
    document.querySelector('.insert_cvc').innerHTML = cvcValue;
    document.querySelector('.insert_cvc').innerHTML = cvcValue;
}else{
    console.log("false")
}
})  ;