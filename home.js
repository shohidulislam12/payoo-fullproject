let CurrentBalance=document.getElementById('CurrentBalance');
const addButton= document.getElementById('addbutton');
addButton.addEventListener('click',function(event){
    event.preventDefault();
    const addpin=document.getElementById('addpin');
if(addpin.value=='1111'){
    const addbalance=document.getElementById('addbalance');
    const addbalanceValue=addbalance.value
    let newBalance=parseFloat(CurrentBalance.innerText)+parseFloat(addbalance.value);
     CurrentBalance.innerText=newBalance;
    addbalance.value='';
    addpin.value='';
    // transaction history 
    const p=document.createElement('p');
   p.classList.add('bg-green-300');
    p.innerText=`Added: ${addbalanceValue} tk.New balance : ${newBalance} tk`
    console.log(p);
    document.getElementById('history_container').appendChild(p);
}
else{
    alert('wrong pin');
   addpin.value='';
}

})

//cash out 
const Cashoutbutton=document.getElementById('Cashoutbutton');
Cashoutbutton.addEventListener('click',function(event){
    event.preventDefault();
    const outpin=document.getElementById('outpin');
if(outpin.value=='1111'){
 
    const outbalance=document.getElementById('outbalance');
    const outbalancenum=outbalance.value
    let newoutBalance=parseFloat(CurrentBalance.innerText)-parseFloat(outbalance.value);
           if(newoutBalance<0){
            alert("not enought balance");
          outbalance.value='';
        outpin.value='';

            }
           else
           CurrentBalance.innerText=newoutBalance;
           outbalance.value='';
          outpin.value='';
                      // transaction history 
    const div=document.createElement('div');
    div.classList.add('bg-yellow-300');
    div.innerHTML=`<h4 class="text-2xl font-bold">cash out </h4>
    <P> cash OUt: ${outbalancenum} tk.New balance : ${newoutBalance} tk</P>`

    console.log(div);
    document.getElementById('history_container').appendChild(div);
}
else{
    alert('wrong pin');
   outpin.value='';
}

})
//transaction
const transactionbutton=document.getElementById('transactionbutton');
transactionbutton.addEventListener('click',function(event){
    event.preventDefault();
    const tranpin=document.getElementById('tranpin');
if(tranpin.value=='1111'){
 
    const transbalance=document.getElementById('transbalance');
    const transbalancenum=transbalance.value;
    let newtransBalance=parseFloat(CurrentBalance.innerText)-parseFloat(transbalance.value);
           if(newtransBalance<0){
            alert("not enought balance");
            transbalance.value='';
            tranpin.value='';

            }
           else
           CurrentBalance.innerText=newtransBalance;
           transbalance.value='';
          outpin.value='';
                      // transaction history 
    const p=document.createElement('p');
    p.classList.add('bg-red-300');
    p.innerText=`transaction: ${transbalancenum} tk.New balance : ${newtransBalance} tk`
    console.log(p);
    document.getElementById('history_container').appendChild(p);
}
else{
    alert('wrong pin');
   outpin.value='';
}

})
//feature 

// const Add_money_button=document.getElementById('Add_money_button');
// Add_money_button.addEventListener('click',function(event){
// event.preventDefault();
// let AddForm=document.getElementById('AddForm');
// let outForm=document.getElementById('outForm');
// AddForm.classList.remove('hidden');
// outForm.classList.add('hidden');

// })
// const out_money_button=document.getElementById('out_money_button');
// out_money_button.addEventListener('click',function(event){
// event.preventDefault();
// let AddForm=document.getElementById('AddForm');
// let outForm=document.getElementById('outForm');
// AddForm.classList.add('hidden');
// outForm.classList.remove('hidden');

// })

//show section easy way
function showSectionById(id){
    //hide all 
    document.getElementById('transaction').classList.add('hidden');
    document.getElementById('AddForm').classList.add('hidden');
    document.getElementById('outForm').classList.add('hidden');
    document.getElementById('transaction_history').classList.add('hidden');
    
    //show id
    document.getElementById(id).classList.remove('hidden');
}


const out_money_button=document.getElementById('out_money_button');
out_money_button.addEventListener('click',function(event){
event.preventDefault();
showSectionById('outForm')

})
const Add_money_button=document.getElementById('Add_money_button');
Add_money_button.addEventListener('click',function(event){
event.preventDefault();
showSectionById('AddForm');

})
const transaction_money_button=document.getElementById('transaction_money_button');
transaction_money_button.addEventListener('click',function(event){
event.preventDefault();
showSectionById('transaction')

})
const transaction_history_button=document.getElementById('transaction_history_button');
transaction_history_button.addEventListener('click',function(event){
event.preventDefault();
showSectionById('transaction_history')

})