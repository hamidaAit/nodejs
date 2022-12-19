let btncnx=document.getElementById('btncnx');/*recuperer le bouton*/
let modalcnx=document.getElementById('modalcnx');/*recuperer le modal a afficher*/
let close = document.getElementsByClassName("close");
let btninsc  =document.getElementById('btninsc');
let modalinsc=document.getElementById('modalinsc');
let cart=document.getElementById('cart');
let btnshop=document.getElementById('btnshop');
let articles=document.getElementById('articles');
let cartetat=0;
let menu=document.getElementById('menu');
let iconmenu=document.getElementById('iconmenu');



/*recuperer le span a fermer ,le 0 veut dire le premier element a recuperer*/
/*il existe deux methode pour declencher un event le 'onclick ' et le addEventListener*/

btncnx.addEventListener('click', function(e){
	e.preventDefault();/*on l'utilise pour les lien pour eviter le passage au lien suivant et aussi pour le button submit */
	modalcnx.classList.add('modal-active');
})
close[0].addEventListener('click', function(){
	modalcnx.classList.remove('modal-active');
})

btninsc.addEventListener('click', function(e){
	e.preventDefault()
	modalcnx.classList.remove('modal-active')
	modalinsc.classList.add('modal-active')
})
close[1].addEventListener('click', function(){
	modalinsc.classList.remove('modal-active')
})
 

btnshop.addEventListener('click',function(e){
	e.preventDefault()
	cart.classList.add('modal-active-r')
	  cartetat=1;
	  console.log('ouverture')
})
close[2].addEventListener('click',function(e){
	cart.classList.remove('modal-active-r')
})

document.body.addEventListener('click',function(e){
	if(e.target==modalcnx){
	modalcnx.classList.remove('modal-active')

	}
	if(e.target==modalinsc){
	modalinsc.classList.remove('modal-active')
	}
	if(e.target!=btnshop.firstChild){ 
	cart.classList.remove('modal-active-r')
 	}
 	console.log('fermeture')
	console.log(e.target)
	console.log(btnshop.firstChild)

})



console.log(btnshop.children)