function multiplier() {
      // Récupération des valeurs des champs input
      var a = parseFloat(document.getElementById("valeur1").value);
      var b = parseFloat(document.getElementById("valeur2").value);

      // Vérification si les valeurs sont bien des nombres
      if (isNaN(a) || isNaN(b)) {
        alert("Veuillez entrer deux nombres valides.");
        return;
      }

      // Calcul de la multiplication
      var resultat = a * b;

      // Affichage du résultat dans la page
      document.getElementById("resultat").innerText = "Résultat : " + resultat;
    }


function divide() {
    // Récupération des valeurs des champs input
    var a = parseFloat(document.getElementById("valeur1").value);
    var b = parseFloat(document.getElementById("valeur2").value);

    // Vérification si les valeurs sont bien des nombres
    if (isNaN(a) || isNaN(b)) {
      alert("Veuillez entrer deux nombres valides.");
      return;
    }

    if (b === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return a / b;
}

function substract() {
    var a = parseFloat(document.getElementById("valeur1").value);
    var b = parseFloat(document.getElementById("valeur2").value);

    // Vérification si les valeurs sont bien des nombres
    if (isNaN(a) || isNaN(b)) {
        alert("Veuillez entrer deux nombres valides.");
        return;
    }

    // Calcul de la multiplication
    var resultat = a - b;

    // Affichage du résultat dans la page
    document.getElementById("resultat").innerText = "Résultat : " + resultat;
}
