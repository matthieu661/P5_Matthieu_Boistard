window.onload = function () {



    //création de la structure dans "div id= "TitrePagePanier"  :

    document.getElementById("TitrePagePanier").textContent = "Votre Panier"; // ajout du texte dans <h1>
    document.getElementById("TitrePagePanier").classList.add("h1PagePanier"); // ajoute la classe ".h1PagePanier" pour le Scss

    // création du conteneur de taille dynamique qui recevra les articles du panier :

    let containerPagePanier = document.createElement("div"); // création
    document.getElementById("TitrePagePanier").appendChild(containerPagePanier); // l'ajoute au node <div
    containerPagePanier.classList.add("DivContainerPagePanier"); // ajout de classe pour scss

  // recuperation du localStorage   

                let recupValeur = localStorage.getItem("Article"); // NE PAS OUBLIER les "" la clé c'est un string tamereputin azerzq rfvlesd 2h pour asdfqesr
                let valueurJSON = JSON.parse(recupValeur) // retransformation en JSON
                console.log(valueurJSON) // ok renvoi le tableau 

                // variable de teste
                //let VARTESTR = ["1", "2", "3", "4"];
 // création du sous-container qui acceuiles l'article du panier X le nombre dans panier



                for (let i = 0; i < valueurJSON.length; i++) { // pour chaque itération object dans le tableau
                    
                    let articlesDuPanier = document.createElement("div"); // création de la div
                    
                    document.getElementById("TitrePagePanier").appendChild(articlesDuPanier); // ajout de la div au node parent <h1 id="TitrePagePanier"> 
                    articlesDuPanier.classList.add("ArticlesPanierContainer"); // ajoute une classe pour scss

                    let imgArtPanier = document.createElement("div"); // création de la div dans la div "articlesDuPanier"
                    articlesDuPanier.appendChild(imgArtPanier); // insertion dans le node parent <div "articlesDuPanier">
                    imgArtPanier.classList.add("ImageArtPanier"); // ajoute une classe pour scss ( container de image du produit)
                    // recupere l'image et  l'insere 
                    let imgRecupere = document.createElement("img"); // création
                    imgRecupere.src = valueurJSON[i].image;  // ajout lien vers image
                    imgArtPanier.appendChild(imgRecupere); // insert dans le node parent <div "imgArtPanier">
                    imgRecupere.classList.add("imgRecp") // ajout classe pour scss

                    let optionArticlePanier = document.createElement("div"); // création de la div
                    articlesDuPanier.appendChild(optionArticlePanier);
                    optionArticlePanier.classList.add("OptionArtPanier");
                    //recupere l'option choisit
                    let optionChoisie = document.createElement("p")
                    textOptionChoisie = valueurJSON[i].option;
                    let nameModele = valueurJSON[i].name;
                    optionChoisie.innerHTML = nameModele + "</br> avec optique de :</br> " + textOptionChoisie 
                    optionArticlePanier.appendChild(optionChoisie);
                    optionChoisie.classList.add("OptionX");


                    let prixArtPanier = document.createElement("div"); // création
                    articlesDuPanier.appendChild(prixArtPanier);
                    prixArtPanier.classList.add("PrixArtPanier");
                    // ont recup le prix
                    let prixChoisi = document.createElement("p")
                    let TextePrix = valueurJSON[i].prix;
                    prixChoisi.textContent = TextePrix + "¥";
                    prixArtPanier.appendChild(prixChoisi)
                    prixChoisi.classList.add("PrixChoix");

                }
    
    // ici div du prix et calcul

    let prixTotalPanier = document.createElement("div"); // création
    document.getElementById("CTitrePagePanier").appendChild(prixTotalPanier);  // ajout au node parent <div id="CTitrePagePanier" (il sera "sibling" <h1>) (rappel : 2eme elements)
    prixTotalPanier.classList.add("PrixTTPanier"); // ajout createElement classe pour scss

    let textePTT = document.createElement("p"); // création
    prixTotalPanier.appendChild(textePTT); // insertion dans node "prixTotalPanier"
    textePTT.classList.add("TextePTT"); // ajoute une classe
    textePTT.textContent = "Total de votre Panier"; // ajout du texte

    // div calcul du prixTT                                                 function a créer !!!!!!!!!
    let calculPTT = document.createElement("div"); // création
    prixTotalPanier.appendChild(calculPTT); // insertion dans node parent "prixTotalPanier"
    let TT = 0 ;
                    for (let i = 0; i < valueurJSON.length; i++){
                         let calculduTotal = valueurJSON[i].prix;
                         console.log(typeof(calculduTotal))

                         TT += calculduTotal;
                         calculPTT.textContent = TT + "¥";
                    }
                
    calculPTT.classList.add("calculPTotal");
    


    // Formulaire 
                    //( affiche le formulaire )
                    document.getElementById("btnFormulaire").addEventListener("click", afficher, false);

                    function afficher() {
                        let  affichage = document.getElementById("formeHiden").style.display;
                        console.log(affichage)

                        if ( affichage == "none" ){document.getElementById("formeHiden").style.display = "block";}
                        else {document.getElementById("formeHiden").style.display = "none"}
                
                    }

                    // recupére les données et et les envoie dans le localcache

                    let envoyerData = document.getElementById("Envoie");
                    envoyerData.addEventListener("click", recupETenvoie);

                    let client = [] 

                    function recupETenvoie(){
                        let prenom = document.getElementById("VotrePrenom").value;
                        let nom = document.getElementById("VotreNom").value;
                        let email = document.getElementById("email").value;
                        let tel = document.getElementById("tel").value;
                        let adresseNum = document.getElementById("adresseNum").value;
                        let typeVoie = document.getElementById("TypeVoie").value;
                        let nomdeVoie = document.getElementById("NomVoie").value;
                        let CB = document.getElementById("CB").value;
                        let dateExp = document.getElementById("DateExp").value;

                        let infosClient = {
                            prenomData : prenom,
                            nomData : nom,
                            emailData : email,
                            telData : tel,
                            adressNumData : adresseNum,
                            typeVoieData : typeVoie,
                            nomDeVoieData : nomdeVoie,
                            CBdata : CB,
                            DateExpData : dateExp
                        }

                        client.push(infosClient);
                        //console.log(client) // OK reçoit les données
                         let dataClient = JSON.stringify(client);
                         localStorage.clientel = dataClient ;

                         

                                            // OK a metttre sur derniere page ! 
                        //let recupValeur2 = localStorage.getItem("clientel"); // NE PAS OUBLIER les "" la clé c'est un string tamereputin azerzq rfvlesd 2h pour asdfqesr
                        //let valueurJSON2 = JSON.parse(recupValeur2) // retransformation en JSON
                        //console.log(valueurJSON2)

                    }



}