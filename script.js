var img_pies = document.querySelector("#img_pies");
var div_rasa = document.querySelector("#div_rasa");
var button_generuj = document.querySelector("#button_generuj");
button_generuj.addEventListener("click",function(){
fetch('https://dog.ceo/api/breeds/image/random')
.then(res => res.json())
.then((data) => {
	var zmienna = data.message;
	var zmienna2 = zmienna.substring(
    zmienna.indexOf("s/") + 2, 
    zmienna.lastIndexOf("/")
);
	img_pies.src = data.message;
	zmienna2 = zmienna2.replace(/-/g," ");
	div_rasa.innerHTML = zmienna2;
	})
})