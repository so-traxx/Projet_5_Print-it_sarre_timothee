/*const slides = [
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
]
*/

//ajout des eventsListener sur les flèches du slider

let flecheGauche = document.querySelector(".arrow_left")
console.log()
flecheGauche.addEventListener("click", () => {
	console.log("clique sur la flèche de gauche")
})

let flecheDroite = document.querySelector(".arrow_right")
console.log()
flecheDroite.addEventListener("click", () => {
	console.log("clique sur la flèche de droite")
})
