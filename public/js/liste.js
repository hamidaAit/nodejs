let btnfiltre=document.getElementById('btnfiltre');
let sliderfiltre=document.getElementById('sliderfiltre');

/*console.log(btnfiltre)
*/if(btnfiltre != null){ // si le bouton existe pour enlever l'erreur 

	btnfiltre.addEventListener('click',function(){
	 	if (sliderfiltre.classList.contains('modal-active-h')) {
	 			sliderfiltre.classList.remove('modal-active-h');


	 	}else
	 
	  	sliderfiltre.classList.add('modal-active-h');


	   })
}


iconmenu.addEventListener('click',function(){
 	if (menu.classList.contains('modal-active')) {
		menu.classList.remove('modal-active');
	}
	else
		menu.classList.add('modal-active');	
})