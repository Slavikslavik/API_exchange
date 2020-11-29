'use strict';

let url = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json';

let form = document.querySelector('.form');
let input = document.querySelector('.input');
let select = document.querySelector('.money');
let paragraph = document.querySelector('.result');
let kurs = document.querySelector('.kurs');

fetch(url)
.then((response)=>{
    return response.json();
})
.then((data)=>{
    let user_result = 0;
    let item_txt = '';
    let item_rate = 0;
    //console.log(data);
    form.addEventListener('submit',function(event){
        event.preventDefault();
        
        data.forEach(function(item,index){
            //console.log(item,index);
            if(select.value == item.cc){
                user_result = (input.value / item.rate).toFixed(1);
                item_txt = item.txt;
                item_rate = item.rate;
            };
        });
        kurs.innerHTML = `Украинская гривна по отношению к "${item_txt}" составляет ${item_rate} uah.`
        paragraph.innerHTML = `За ${input.value} uah вы получите ${user_result} "${item_txt}".`
     });

})
.catch((error)=>{
    console.log('error');
});