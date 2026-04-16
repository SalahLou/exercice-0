// ================================
// 1. Sélection des éléments DOM
// ================================
const input = document.querySelector('.inputChampion');
const btnAjouter = document.querySelector('.btnAjouter');
const message = document.querySelector('.message');
const listeFavoris = document.querySelector('.listeFavoris');

// ================================
// 2. Variables globales / état
// ================================
const favoris = ["Darius", "Ahri", "Thresh"];

// ================================
// 3. Fonctions
// ================================
function afficherChampions() {
    listeFavoris.innerHTML = "";
    
    for (let i = 0; i < favoris.length; i++) {
        const li = document.createElement('li');
        
        const span = document.createElement('span');
        span.textContent = favoris[i];
        
        const numero = document.createElement('span');
        numero.classList.add('numero');
        numero.textContent = "#" + (i + 1);
        
        li.appendChild(span);
        li.appendChild(numero);
        
        listeFavoris.appendChild(li);
    }
    
    message.classList.remove('erreur');
    message.textContent = favoris.length + " champion(s) en favoris";
}

function ajouterChampion() {
    const valeur = input.value.trim();
    
    if (valeur === "") {
        message.classList.add('erreur');
        message.textContent = "Écris un nom de champion !";
        return;
    }
    
    favoris.push(valeur);
    input.value = "";
    afficherChampions();
}

// ================================
// 4. Événements
// ================================
afficherChampions();

btnAjouter.addEventListener('click', ajouterChampion);

input.addEventListener('keydown', function(e) {
    if (e.key === "Enter") {
        ajouterChampion();
    }
});