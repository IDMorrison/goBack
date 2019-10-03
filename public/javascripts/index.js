const addButtonCategorie = (categorie) => {
    const aCategorie = document.createElement('a');
    aCategorie.setAttribute("id", categorie.id);
    aCategorie.setAttribute("href", "#");
    aCategorie.innerText = categorie.name;
    const bottomnav = document.getElementsByClassName('bottomnav')[0];
    bottomnav.appendChild(aCategorie);
    console.log(bottomnav);
}

showCategorie([
    { id: 1,
    name: "Linux"},
    { id: 2,
    name: "Infra"
    }
])

function showCategorie(categorie) {
    
    categorie.
    forEach(categorie => {
        addButtonCategorie(categorie)    
    });
    
    console.log("entro");
}

function getcategorie () {
    const request = {
        
    }

    fetch(request)
}
