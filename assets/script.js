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

//ajout des eventsListener sur les flèches du slider et modification du slide

const flecheGauche = document.querySelector(".arrow_left")
flecheGauche.addEventListener("click", () => {
	console.log("clic sur la flèche de gauche")
});

const flecheDroite = document.querySelector(".arrow_right")
flecheDroite.addEventListener("click", () => {
	console.log("clic sur la flèche de droite")
})

// ajout des bullet points au slider

const divDots = document.querySelector(".dots")
for (let i = 0; i < slides.length; i++) {
	let dot = document.createElement("span")
	dot.classList.add("dot")
	if (i === currentSlide) {
		dot.classList.add("dot_selected")
	};
	divDots.appendChild(dot)
}

