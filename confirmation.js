window.onload = function () {




    // Création du corp html en js pour le RESULTAT CONFIRMATION:

    // créer un <p> pour afficher le numero de commande sous le <h1>  

    let nomClient; // Recuperer donnée SERVEUR A FAIRE
    let numeroDeCommande; // Recuperer donnée SERVEUR A FAIRE
    let commandPTT; // Recuperer donnée SERVEUR A FAIRE



    let numeroCommande = document.createElement("p");
    document.getElementById("TexteConfirmation").appendChild(numeroCommande);  //// A COMPLETER AVEC LES DONNEES DU SERVEUR
    numeroCommande.textContent = "nomClient" + " votre bon de commande est le :" + "numeroDeCommande" + "commandePTT"; // = "nomClient"... = variable pas encore defini
    numeroCommande.classList.add("BOX2"); // ajout class pour scss

    // Création d'un conteneur de recapitulation - enfant du <h1>
    let containerConfirmation = document.createElement("div");
    document.getElementById("TexteConfirmation").appendChild(containerConfirmation);
    containerConfirmation.classList.add("BIGbox2");
    //  création enfant du container

        // remerciment
        let containerRemerciment = document.createElement("p");
        containerConfirmation.appendChild(containerRemerciment)
        containerRemerciment.textContent = " Nous vous remercions pour avoir commandé sur Orinoco.com"

        // ajouter une image 

    // création d'un retour vers page d'acceuil
    let retourPageAcceuil = document.createElement("a");
    retourPageAcceuil.href = "index.html"
    document.getElementById("TexteConfirmation").appendChild(retourPageAcceuil);
    let containerRetour = document.createElement("div");
    retourPageAcceuil.appendChild(containerRetour);
    containerRetour.classList.add("lienRetour");
    let lienAcceuil = document.createElement("p");
    containerRetour.appendChild(lienAcceuil);
    lienAcceuil.textContent = "Retourner a la page d'acceuil";









}



