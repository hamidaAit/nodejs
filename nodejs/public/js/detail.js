/*let btndiscript1=document.getElementById('btn-discript1'),
  	btndiscript2=document.getElementById('btn-discript2'),
  	btndiscript3=document.getElementById('btn-discript3'),
	btndiscript4=document.getElementById('btn-discript4'),

	btndiscript=document.getElementsByClassName('btn-discript'),
	divdiscript=document.getElementsByClassName('div-discript');


function showdetail(e){

e.preventDefault();

	for (var i = 0;i<divdiscript.length;i++) {
		divdiscript[i].classList.remove('modal-active')
	}
 	div_detail=document.getElementById(e.target.getAttribute('href'))
	div_detail.classList.add('modal-active')
}

/*btndiscript1.addEventListener('click',showdetail)
btndiscript2.addEventListener('click',showdetail)
btndiscript3.addEventListener('click',showdetail)
btndiscript4.addEventListener('click',showdetail)*/

/*for (var i =0; i<btndiscript.length ; i ++) {
	btndiscript[i].addEventListener('click',showdetail);
}
*/
 

let btndiscript1=document.getElementById('btn-discript1'),
	btndiscript2=document.getElementById('btn-discript2'),
	btndiscript3=document.getElementById('btn-discript3'),
	btndiscript4=document.getElementById('btn-discript4'),
	divdiscript=document.getElementsByClassName('div-discript'),
	btndiscript=document.getElementsByClassName('btn-discript');


function showdetail(e){
	e.preventDefault();
	for (var i = 0;i<divdiscript.length;i++) {
		divdiscript[i].classList.remove('modal-active');
	}

	divdetail=document.getElementById(e.target.getAttribute('href'));
	divdetail.classList.add('modal-active')
}	

for (var i =0; i<btndiscript.length; i++) {
	btndiscript[i].addEventListener('click',showdetail)
}























