//code fournit des base contenant un tableau avec les différentes slides

const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
];

//variables globales

let currentSlide = 0;
const flecheDroite = document.querySelector(".arrow_right");
const flecheGauche = document.querySelector(".arrow_left");
const txtSlide = document.querySelector("#banner p");
const imgSlide = document.querySelector(".banner-img");
const divDots = document.querySelector(".dots");

//appel fonctions 

createDots();
changeDot();

/*
* ajout des eventsListener sur les flèches du slider
* ajout de la structure conditionnelle pour défilement infini
* appel de la fonction de modification du slide au clic sur une flèche
* affichage dans la console de la flèche utilisée (g ou d)
*/

flecheGauche.addEventListener("click", () => {
	if (currentSlide === 0) {
		currentSlide = slides.length -1;
	} else {
		currentSlide--;
	};
	changeSlide();
	console.log("clic sur la flèche de gauche");
});

flecheDroite.addEventListener("click", () => {
	if (currentSlide === slides.length -1) {
		currentSlide = 0;
	} else {
		currentSlide++;
	};
	changeSlide();
	console.log("clic sur la flèche de droite");
});

// ajout des bullet points au slider via une fonction

function createDots () {
	for (let i = 0; i < slides.length; i++) {
		let dot = document.createElement("span");
		dot.classList.add("dot");
		divDots.appendChild(dot);
	}
};

// fonction pour modifier le bullet point en fonction du slide actuel 

function changeDot() {
	let currentDot = document.querySelectorAll(".dot");
		for (let i = 0; i < currentDot.length; i++) {
			let updateDot = currentDot[i];
			if (i === currentSlide) {
				updateDot.classList.add('dot_selected');		
	  		} else {
				updateDot.classList.remove('dot_selected');	 
	  		}
		} 
};

// modifications du texte, de l'image et du bullet point en fonction du slide actuel

function changeSlide () {
	imgSlide.setAttribute("src" , "./assets/images/slideshow/"+ slides[currentSlide].image);
	txtSlide.innerHTML = slides[currentSlide].tagLine;
	changeDot();
};