window.onload = function () {
    // ////////////////////////////////////////////////////////////////////////
    // recupere l'url et extrait ID
    let nomClient = window.location.search.substr(46);
    nomClient = nomClient.replace('_', ' ')
    // ////////////////////////////////////////////////////////////////////////
    // recupere l'url et extrait le name
    let numeroDeCommande = window.location.search.substr(4, 36);// 
    // ////////////////////////////////////////////////////////////////////////
    // recupere le prix TT dans le local storage
    let commandPTT = JSON.parse(localStorage.Prix)
    console.log(commandPTT)
    // ///////////////////////////////////////////////////////////////////////////////////////
    // structure  : 
    //  main --> <h1> --> <p (ajout ici nom + ID + PTT)>
    //                --> <div conteneur remerciement (ajout)> --> <p (ajout)> 
    //                --> <a href (ajout)> --> <div conteneur lien (ajout)> --> <p (ajout)> 
    // ////////////////////////////////////////////////////////////////////////////////////////            
    let numeroCommande = document.createElement("p");
    document.getElementById("TexteConfirmation").appendChild(numeroCommande);
    numeroCommande.innerHTML = nomClient + "<br> " + " votre bon de commande est le :" + "<br> " + numeroDeCommande + "" + "<br> le montant Total de votre commande est de : " + " " + commandPTT + " ¥ "; // = "nomClient"... = variable pas encore defini
    numeroCommande.classList.add("BOX2"); // ajout class pour scss
// ////////////////////////////////////////////////////////////////////////
    // Création d'un conteneur de recapitulation - enfant du <h1>
    let containerConfirmation = document.createElement("div");
    document.getElementById("TexteConfirmation").appendChild(containerConfirmation);
    containerConfirmation.classList.add("BIGbox2");
    // ////////////////////////////////////////////////////////////////////////
    // remerciment
    let containerRemerciment = document.createElement("p");
    containerConfirmation.appendChild(containerRemerciment)
    containerRemerciment.textContent = " Nous vous remercions pour avoir commandé sur Orinoco.com"
    // ////////////////////////////////////////////////////////////////////////
    // création d'un lien de retour vers page d'acceuil
    let retourPageAcceuil = document.createElement("a");
    retourPageAcceuil.href = "../index.html"
    document.getElementById("TexteConfirmation").appendChild(retourPageAcceuil);
    let containerRetour = document.createElement("div");
    retourPageAcceuil.appendChild(containerRetour);
    containerRetour.classList.add("lienRetour");
    let lienAcceuil = document.createElement("p");
    containerRetour.appendChild(lienAcceuil);
    lienAcceuil.textContent = "Retourner a la page d'acceuil";
}



