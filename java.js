const prices  = document.querySelectorAll('.price');
const changeBtn = document.querySelector('.change-currency'); 
console.log(prices);
console.log(changeBtn);
changeBtn.addEventListener('click', changeCur);

function changeCur(e){
	const currencyName = document.querySelector('.currency-name').innerText;
    console.log(currencyName);
    changeCurrName('UAN');
	if(e.target.innerText === 'USD' &&  currencyName === 'UAN'){
		prices.forEach(price => {
		 price.innerHTML =  (+price.innerText / 26).toFixed(2);
		});
		changeCurrName('USD');
	   } else if(e.target.innerText === 'UAN' &&  currencyName === 'USD'){
		prices.forEach(price => {
		 price.innerHTML = Math.floor((+price.innerText * 26).toFixed(2));
		});
	
	   } else{ 
		return;
	   }
	  }
   function changeCurrName(currency){
	const currnames = document.querySelectorAll('.currency-name');
	currnames.forEach(name => {
	 name.innerHTML =  currency;
	});
   }


   
   $(document).ready(function() { 
    var overlay = $('#overlay'); 
    var open_modal = $('.open_modal');
    var close = $('.modal_close, #overlay');
    var modal = $('.modal_div'); 

     open_modal.click( function(event){ 
         event.preventDefault();
         var div = $(this).attr('href');
         overlay.fadeIn(400, //показуємо оверлей
             function(){ 
                 $(div) // берем лінію з  селектором і робимо із неї джквері об"єкт
                     .css('display', 'block') 
                     .animate({opacity: 1, top: '50%'}, 200); // 
         });
     });

     close.click( function(){ // клік по хрестику
            modal // всі ці модятьні вікна
             .animate({opacity: 0, top: '45%'}, 200, 
                 function(){ // 
                     $(this).css('display', 'none');
                     overlay.fadeOut(400); // 
                 }
             );
     });
});

// Product snterier// 


var content = document.getElementById("content-i");
var button = document.getElementById("show-more");

button.onclick = function(){
	if(content.className == "open"){
		content.className ="";
		button.innerHTML = "Show More";
	}else{
		content.className = "open";
		button.innerHTML = "Show Less";
	}
};


