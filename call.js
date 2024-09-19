const Add_money_button=document.getElementById('Add_money_button');
Add_money_button.addEventListener('click',function(event){
event.preventDefault();

const addmoney =getInputFieldValueById('addbalance');
const pin =getInputFieldValueById('addpin');
console.log(addmoney, pin);
})