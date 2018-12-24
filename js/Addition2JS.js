


while (true) {
	const nombre = Number(prompt("combien font 3 + 2 ?"));
	if (nombre === 5) {
  	alert("bravo vous avez juste !");
	} else {
		alert("erreur, continuez")
	}
	if (confirm("Voulez Vous quitter ?")) {
			alert("Au revoir !")
			break;
	} else{
		alert("vous avez raison, vous êtes nul en math, continuez")
	}
}




/*const nombre = Number(prompt("Entrez un nombre :"));
if (nombre > 0) {
  console.log(nombre + " est positif");
} else if (nombre < 0) {
  console.log(nombre + " est négatif");
} else {
  console.log(nombre + " est nul");
}*/
