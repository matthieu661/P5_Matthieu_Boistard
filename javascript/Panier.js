window.onload = function () {
    // ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
    document.getElementById("TitrePagePanier").textContent = "Votre Panier"; 
    document.getElementById("TitrePagePanier").classList.add("h1PagePanier"); 
 
    // ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // recuperation du localStorage   
    recupValeur = localStorage.getItem("Article");
    let valueurJSON = JSON.parse(recupValeur);
    // ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // TEST SUPPRESSION ITEM 
    document.getElementById("clear").addEventListener("click", function () {
        localStorage.clear();
        document.location.reload();
    })
    // ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // pour chaque itération object dans le tableau
    for (let i = 0; i < valueurJSON.length; i++) { 
        // ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // structure :
        // main --> <div CTitrePagePanier> --> <h1> --> <div articlesDuPanier (ajout js)> --> <div imgArtPanier (ajout js)> --> <img (ajout js)>
        //                                                                                --> <div optionArtPanier (ajout js) --> <p (ajout js)>
        //                                                                                --> <div prixArtPanier (ajout js) --> <p (jaout js)>
        //
        // ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        let articlesDuPanier = document.createElement("div"); 
        document.getElementById("TitrePagePanier").appendChild(articlesDuPanier);  
        articlesDuPanier.classList.add("ArticlesPanierContainer"); 
        // ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
        let imgArtPanier = document.createElement("div"); 
        articlesDuPanier.appendChild(imgArtPanier); 
        imgArtPanier.classList.add("ImageArtPanier"); 
        // ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // recupere l'image et  l'insere 
        let imgRecupere = document.createElement("img"); 
        imgRecupere.src = valueurJSON[i].image;  
        imgArtPanier.appendChild(imgRecupere); 
        imgRecupere.classList.add("imgRecp") 
        // ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
        let optionArticlePanier = document.createElement("div"); 
        articlesDuPanier.appendChild(optionArticlePanier);
        optionArticlePanier.classList.add("OptionArtPanier");
        // ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
        //recupere l'option choisit
        let optionChoisie = document.createElement("p")
        textOptionChoisie = valueurJSON[i].option;
        let nameModele = valueurJSON[i].name;
        optionChoisie.innerHTML = nameModele + "</br> avec optique de :</br> " + textOptionChoisie;
        optionArticlePanier.appendChild(optionChoisie);
        optionChoisie.classList.add("OptionX");
        // ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
        let prixArtPanier = document.createElement("div"); 
        articlesDuPanier.appendChild(prixArtPanier);
        prixArtPanier.classList.add("PrixArtPanier");
        // ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // ont recup le prix
        let prixChoisi = document.createElement("p")
        let TextePrix = valueurJSON[i].prix;
        prixChoisi.textContent = TextePrix + "¥";
        prixArtPanier.appendChild(prixChoisi)
        prixChoisi.classList.add("PrixChoix");
    }
    // ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // ici div du prix + calcul + ajout à la structure html
    // 
    // structure :
    // main --> <div CTitrePagePanier> --> <h1> --> ..
    //                                 --> <div PrixTotalPanier (ajout js)> --> <p (jout js)>
    //                                                                      --> <div calculPTT (ajout js)>
    // 
    // ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
    let prixTotalPanier = document.createElement("div"); 
    document.getElementById("CTitrePagePanier").appendChild(prixTotalPanier); 
    prixTotalPanier.classList.add("PrixTTPanier"); 
    // //////////////////////////////////////////////////////////////////////////////////////
    let textePTT = document.createElement("p"); 
    prixTotalPanier.appendChild(textePTT); 
    textePTT.classList.add("TextePTT"); 
    textePTT.textContent = "Total de votre Panier"; 
    // //////////////////////////////////////////////////////////////////////////////////////
    // div calcul du prixTT                                            
    let calculPTT = document.createElement("div"); 
    prixTotalPanier.appendChild(calculPTT); 
    let TT = 0;
    for (let i = 0; i < valueurJSON.length; i++) {
        let calculduTotal = valueurJSON[i].prix;
        TT += calculduTotal;
        calculPTT.textContent = TT + "¥";    
    }
    calculPTT.classList.add("calculPTotal");
    // ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // PARTIE Formulaire : formulaire ecris en html (display = hidden)
    // ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // button ( affiche le formulaire )
    document.getElementById("btnFormulaire").addEventListener("click", afficher, false);
    function afficher() {
        let affichage = document.getElementById("formeHiden").style.display;
        //console.log(affichage)
        if (affichage == "none") { document.getElementById("formeHiden").style.display = "block"; }
        else { document.getElementById("formeHiden").style.display = "none" }
    }
    // ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // formulaire affiché  : 
    // 
    // //////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
    let envoyerData = document.getElementById("Envoie");
    envoyerData.addEventListener("click", recupETenvoie);

    // //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // button event : au click appel recupeETenvoie()
    //          recupeETenvoie() --> (1) creer des variables qui recuperer la .value des champs du formulaire 
    //                           --> (2) créer un tableau product vide ( qui acceuillera les ID)
    //                           --> (3) execute une boucle qui recupere L id de chaque object present dans le local storage et le push dans le tableau ("Product")  
    //                           --> (4) créer un objet data contenant un tableau ( conforme a la strucure demandé)
    //                           --> (5) créer les regex pour valider les données du formulaire (https://www.regextester.com/106533)
    //                           --> (6) definit la fonction postProduits() :
    //                               ////////////////////////////////// postProduit() //////////////////////////////////////////////
    //                                          (r) demande de retourner une promise ( creer en meme temps) 
    //                                                 (r1) creer une requete xml
    //                                                 (r2) l'appel de la requete est mis sur ecoute avec ".onreadystatechange"
    //                                                 (r3) Si ok et code statut 201 ( code retourné par le serveur quand accepté) alors return la reponse
    //                                                 (r4) parse la reponse
    //                                                 (r5) ont créer une variable pour exploiter cette reponse
    //                                                 //////////////////////////// validation des données du formulaire ////////////////////////////////////////////////////////////////
    //                                                              Si Nom passe la regexNom --> ok 
    //                                                                  Si prenom passe la regexPrenom --> ok 
    //                                                                      ... 
    //                                                                      Alors : - creer une variable IdClient qui recupere la reponse.Id  (idClient = recIdclient.orderId)
    //                                                                              - creer une variable pour recuperer le prix total et l'envoie dans le localStorage
    //                                                                              - change la window.location vers la page confirmation en ajoutant le nom et l'id recuperer dans l'url
    //                                                              si faux  : message d'erreur pour chaque etapes de if
    //                                                 /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //                                                 (r6) definit la methode de la requete XML et l'urlencoded (.open ..)
    //                                                 (r7) definit les headers de la requete (.setrequestheader ...)
    //                                                 (r8) envoie le requete avec le JSON "stringifié" a envoyer (.send ..) 
    //                            --> (7) creer une fonction  async sending() qui me sert de "porte function" pour appeler la fonction postProduit avec await
    //                            --> (8) appel la function sending()
    //                              
    // /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // au click recup les donnée fu form, les envoie dans une variable et les envoie au serveur
    function recupETenvoie() {   
        let prenom = document.getElementById("VotrePrenom").value;
        let nom = document.getElementById("VotreNom").value;
        let email = document.getElementById("email").value;
        let adresseNum = document.getElementById("adresseNum").value;
        let city = document.getElementById("city").value;
        let CB = document.getElementById("CB").value;
        let dateExp = document.getElementById("DateExp").value;
        // //////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // declare le Tableau demandé " products"
        const products = []   
        // //////////////////////////////////////////////////////////////////////////////////////////////////////////////
        for (let i = 0; i < valueurJSON.length; i++) { // pour chaque Objets dans le tableau du localstorage                                                
            let _id = "";                            //  recupe l'id ET le push dans le tableau Product
            _id = valueurJSON[i].id;
            products.push(_id)
        }
        // //////////////////////////////////////////////////////////////////////////////////////////////////////////////
        const data = {
            contact: {
                firstName: prenom,  
                lastName: nom,
                address: adresseNum,
                city: city,
                email: email
            },
            products
        }
        // //////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // constantes pour les regex 
        const regexPrenom = /^([a-zA-Z\'\ \u00C0-\u00FF]{2,101})+$/;   // minetMAJ--longueur:2-101--nom composé ( - ) ou "espace" , maj ou min pour les accents voir 
        const regexNom = /^([a-zA-Z\'\ \u00C0-\u00FF]{2,101})+$/;
        const regexEmail = /^([a-zA-Z0-9\-\_\.])+@+([a-zA-Z0-9]{3,15})+.+([a-zA-Z]{2,3})$/;
        const regexAdresse = /^([1-9]*)+([\ ]?)+([a-zA-Z\ ]{1,10})+([\ ]?)+([a-zA-Z\'\ \u00C0-\u00FF]{2,60})$/;
        const regexVille = /^([a-zA-Z]{2,59})$/;
        // //////////////////////////////////////////////////////////////////////////////////////////////////////////////
        postProduits = () => {
            return new Promise((ABC) => {
                let request = new XMLHttpRequest();
                request.onreadystatechange = function () {
                    if (this.readyState == XMLHttpRequest.DONE && this.status == 201) {
                        ABC(JSON.parse(this.responseText));
                        let reponse = this.responseText
                        // //////////////////////////////////////////////////////////////
                        let testNom = document.getElementById("VotreNom").value;
                        let resNom = regexPrenom.test(testNom)
                        if (resNom == true) {
                            document.getElementById("VotreNom").style.backgroundColor = "#00ff0080";
                            let testPrenom = document.getElementById("VotrePrenom").value;
                            let resPrenom = regexNom.test(testPrenom);
                            // //////////////////////////////////////////////////////////////
                            if (resPrenom == true) {
                                document.getElementById("VotrePrenom").style.backgroundColor = "#00ff0080";
                                let testEmail = document.getElementById("email").value;
                                let resEmail = regexEmail.test(testEmail);
                                // //////////////////////////////////////////////////////////////
                                if (resEmail == true) {
                                    document.getElementById("email").style.backgroundColor = "#00ff0080";
                                    let testAddresse = document.getElementById("adresseNum").value
                                    let resAddresse = regexAdresse.test(testAddresse);
                                    // //////////////////////////////////////////////////////////////
                                    if (resAddresse == true) {
                                        document.getElementById("adresseNum").style.backgroundColor = "#00ff0080";
                                        let testVille = document.getElementById("city").value;
                                        let resVille = regexVille.test(testVille);
                                        // //////////////////////////////////////////////////////////////
                                        if (resVille == true) {
                                            document.getElementById("city").style.backgroundColor = "#00ff0080";
                                            // //////////////////////////////////////////////////////////////
                                            // //////////////////////////////////////////////////////////////
                                            let recIdclient = (JSON.parse(reponse));
                                            idClient = recIdclient.orderId
                                            setTimeout(function () { document.location.href = "../PageHTML/confirmation.html" + "?id=" + idClient + "?name=" + testPrenom + "_" + testNom }, 3000);
                                            let retourTT = JSON.stringify(TT);
                                            localStorage.Prix = retourTT
                                            // //////////////////////////////////////////////////////////////
                                            // //////////////////////////////////////////////////////////////
                                        } else {
                                            let refuser = document.createElement("p");
                                            document.getElementById("formulaire").appendChild(refuser);
                                            refuser.textContent = " veuillez saisir votre Ville ( ex : Dublin ) "
                                            console.log("dont work")
                                        }
                                    } else {
                                        let refuser = document.createElement("p");
                                        document.getElementById("formulaire").appendChild(refuser);
                                        refuser.textContent = " veuillez saisir votre adresse ( ex : 13 rue du moulin chinois) "
                                        console.log("dont work")
                                    }
                                } else {
                                    let refuser = document.createElement("p");
                                    document.getElementById("formulaire").appendChild(refuser);
                                    refuser.textContent = " veuillez saisir votre Email ( ex : xxxx@aaa.dd) "
                                    console.log("dont work")
                                }
                            } else {
                                let refuser = document.createElement("p");
                                document.getElementById("formulaire").appendChild(refuser);
                                refuser.textContent = " veuillez saisir votre Prenom "
                                console.log("dont work")
                            }                          
                        }
                        else {
                            let refuser = document.createElement("p");
                            document.getElementById("formulaire").appendChild(refuser);
                            refuser.textContent = " veuillez saisir votre Nom"
                            console.log("dont work")
                        }
                        // //////////////////////////////////////////////////////////////
                    } if (this.readyState == XMLHttpRequest.DONE && this.status == 400) {
                        let refuser = document.createElement("p");
                        document.getElementById("formulaire").appendChild(refuser);
                        refuser.textContent = " Veuillez remplir tous les champs du formulaire"
                    }
                }
                request.open("POST", "http://localhost:3000/api/cameras/order");
                request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
                request.send(JSON.stringify(data));
            });
        };
        async function sending() {
            await postProduits();
        }
        sending();
    }
}
