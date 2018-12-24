let desserts = new Array("1 Gâteau au chocolat","2 Salade de fruits","3 Sorbet coco","4 Tarte tatin") ;
while (true) {
	const nombre = Number(prompt(("Faites votre choix : ") + (desserts.join(' - ')) + " : (numéro du dessert)"));
	if (nombre === 1) {
  	alert(("Vous avez choisi : ") + (desserts[0]) );
		if (confirm("Ce choix voux convient-il ?")) {
				alert("merci de votre commande, cela fera 178$!")
				break;
		} else{
			alert("oui, vous avez bien fait...")
		}
	} else if (nombre === 2){
		alert(("Vous avez choisi : ") + (desserts[1]) );
		if (confirm("Ce choix voux convient-il ?")) {
				alert("merci de votre commande !")
				break;
		} else{
			alert("oui, vous avez bien fait...")
		}
	} else if (nombre === 3){
		alert(("Vous avez choisi : ") + (desserts[2]) );
		if (confirm("Ce choix voux convient-il ?")) {
				alert("merci de votre commande !")
				break;
		} else{
			alert("oui, vous avez bien fait...")
		}
	} else if (nombre === 4){
		alert(("Vous avez choisi : ") + (desserts[3]) );
		if (confirm("Ce choix voux convient-il ?")) {
				alert("merci de votre commande !")
				break;
		} else{
			alert("oui, vous avez bien fait...")
		}
	} else {
		alert("Vous n'avez pas fait votre choix !");
	}
}
