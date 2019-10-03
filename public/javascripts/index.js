const addButtonCategorie = (categorie) => {
    console.log(categorie);
    const aCategorie = document.createElement('a');
    aCategorie.setAttribute("id", categorie.id);
    aCategorie.setAttribute("href", "#");
    aCategorie.innerText = categorie.nombre;
    const bottomnav = document.getElementsByClassName('bottomnav')[0];
    bottomnav.appendChild(aCategorie);
    console.log(bottomnav);
}

function showCategorie() {
    
    url = 'http://localhost:3000/categories';
    
    fetch(url, {
        method: 'GET'
    })
        .then(response => response.json())
        .then(categ => categ.forEach(categorie => {
            addButtonCategorie(categorie)    
        }))
        .catch(() => console.log(err));
    
    console.log("entro");
}


