function addition() {
    const nombre1 = parseFloat(document.getElementById("nombre1").value);
    const nombre2 = parseFloat(document.getElementById("nombre2").value);
    const resultat = nombre1 + nombre2;
    document.getElementById("resultat").textContent = "Résultat : " + resultat;
}
