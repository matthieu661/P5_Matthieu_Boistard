window.onload = function () {

    //création de la structure dans "div id= "TitrePagePanier"  :

    document.getElementById("TitrePagePanier").textContent = "Votre Panier"; // ajout du texte dans <h1>
    document.getElementById("TitrePagePanier").classList.add("h1PagePanier"); // ajoute la classe ".h1PagePanier" pour le Scss

    // création du conteneur de taille dynamique qui recevra les articles du panier :

    let containerPagePanier = document.createElement("div"); // création
    document.getElementById("TitrePagePanier").appendChild(containerPagePanier); // l'ajoute au node <div
    containerPagePanier.classList.add("DivContainerPagePanier"); // ajout de classe pour scss

    // recuperation du localStorage   

    recupValeur = localStorage.getItem("Article"); // NE PAS OUBLIER les "" la clé c'est un string tamereputin azerzq rfvlesd 2h pour asdfqesr
    let valueurJSON = JSON.parse(recupValeur); // retransformation en JSON
    //console.log(recupValeur) // ok renvoi le tableau 
    //console.log(valueurJSON)
    //console.log(typeof(valueurJSON))
    //console.log(recupValeur[0][])
    // variable de teste
    //let VARTESTR = ["1", "2", "3", "4"];
    // création du sous-container qui acceuiles l'article du panier X le nombre dans panier


     // TEST SUPPRESSION ITEM 
        // 1 vider TOUT !
        document.getElementById("clear").addEventListener("click", function(){
            localStorage.clear();
            document.location.reload();
        })


     // /////////////////////
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
        optionChoisie.innerHTML = nameModele + "</br> avec optique de :</br> " + textOptionChoisie;
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
    let TT = 0;
    for (let i = 0; i < valueurJSON.length; i++) {
        let calculduTotal = valueurJSON[i].prix;
        //console.log(typeof (calculduTotal))
        TT += calculduTotal;
        calculPTT.textContent = TT + "¥";    // TT = variable prix total
    }
    calculPTT.classList.add("calculPTotal");

    // PARTIE Formulaire /////////////////////////////////////////////////////////////////////////

    //( affiche le formulaire )

    document.getElementById("btnFormulaire").addEventListener("click", afficher, false);
    function afficher() {
        let affichage = document.getElementById("formeHiden").style.display;
        //console.log(affichage)
        if (affichage == "none") { document.getElementById("formeHiden").style.display = "block"; }
        else { document.getElementById("formeHiden").style.display = "none" }
    }

    // recupére les données et et les envoie dans le localcache

    let envoyerData = document.getElementById("Envoie");
    envoyerData.addEventListener("click", recupETenvoie);
    
    

    

    let client = []     // tableau a incrementer pour le local storage 

    function recupETenvoie() {  // au click recup les donnée fu form, les envoie dans une variable et les envoie au serveur 
        let prenom = document.getElementById("VotrePrenom").value;
        let nom = document.getElementById("VotreNom").value;
        let email = document.getElementById("email").value;
        let adresseNum = document.getElementById("adresseNum").value;
        let city = document.getElementById("city").value;
        let CB = document.getElementById("CB").value;
        let dateExp = document.getElementById("DateExp").value;

        let infosClient = {      // objet recoltant les données du formaulaire ( peut etre réutilisé peut etre pour POST ??? = NONONO)
            prenomData: prenom,  
            nomData: nom,
            emailData: email,
            adressNumData: adresseNum,
            cityData: city,
            CBdata: CB,
            DateExpData: dateExp
        }

        client.push(infosClient); // push de l'objet "infoClient" dans tableau client
        //console.log(client) // OK reçoit les données
        let dataClient = JSON.stringify(client); // transforme le tableau client(typeOBjet) en string pour le balancer au localstorage
        localStorage.clientel = dataClient; // j'ajoute un KEY "clientel" au data storage et je lui met dataclient( version string de client)! 

        // ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        //  PARTIE serveur 

        const products = []   // declare le Tableau demandé " products"

        for (let i = 0; i < valueurJSON.length; i++) { // pour chaque Objets dans le tableau du localstorage  (valeurJSON est definie tout en haut)                                                
            let _id = "";                            //  recupe l'id ET le push dans le tableau Product
            _id = valueurJSON[i].id; 
            // console.log(typeof (_id))  // string OK
            products.push(_id)
        }
        
        const data = {
            contact: {
                firstName: prenom,  // ont peut réutiliser les variable defini dans la function recupETenvoie
                lastName: nom,
                address: adresseNum,
                city: "paris",
                email: email
            },
            products
        }

    // constante pour les regex 
    const regexPrenom = /^([a-zA-Z\'\ \u00C0-\u00FF]{2,101})+$/ ;   // minetMAJ--longueur:2-101--nom composé ( - ) ou "espace" , maj ou min pour les accents voir (https://www.regextester.com/106533)
    const regexNom = /^([a-zA-Z\'\ \u00C0-\u00FF]{2,101})+$/;
    const regexEmail = /^([a-zA-Z0-9\-\_\.])+@+([a-zA-Z0-9]{3,15})+.+([a-zA-Z]{2,3})$/ ;
    const regexAdresse = /^([1-9]*)+([\ ]?)+([a-zA-Z\ ]{1,10})+([\ ]?)+([a-zA-Z\'\ \u00C0-\u00FF]{2,60})$/ ; 
    const regexVille = /^([a-zA-Z]{2,59})$/ ;


         postProduits = () => {
            return new Promise((ABC) => {
                let request = new XMLHttpRequest();
                request.onreadystatechange = function () {
                    if (this.readyState == XMLHttpRequest.DONE && this.status == 201) {
                        ABC(JSON.parse(this.responseText));
                        let reponse = this.responseText  
                        console.log(reponse); 
                        // ici un if formualire OK
                        
                            let testPrenom = document.getElementById("VotrePrenom").value;
                            console.log(testPrenom)
                            console.log(typeof(testPrenom))
                            let resPrenom = regexPrenom.test(testPrenom)
                            console.log(resPrenom)
                            
                            if ( resPrenom == true) {
                                document.getElementById("VotrePrenom").style.backgroundColor = "#00ff0080"; 
                                let testNom = document.getElementById("VotreNom").value;
                                let resNom = regexNom.test(testNom);
                                //console.log(resNom)
                                
                                if ( resNom == true ) {
                                    document.getElementById("VotreNom").style.backgroundColor = "#00ff0080";
                                    let testEmail = document.getElementById("email").value;
                                    let resEmail = regexEmail.test(testEmail);
                                    console.log(resEmail)
                                    if ( resEmail == true){
                                        document.getElementById("email").style.backgroundColor = "#00ff0080";
                                        let testAddresse = document.getElementById("adresseNum").value
                                        let resAddresse = regexAdresse.test(testAddresse);
                                        console.log(resAddresse)
                                        if ( resAddresse == true){
                                            document.getElementById("adresseNum").style.backgroundColor = "#00ff0080";
                                            let testVille = document.getElementById("city").value ;
                                            let resVille = regexVille.test(testVille);
                                            if ( resVille == true){
                                                document.getElementById("city").style.backgroundColor = "#00ff0080";
                                                //let Loader = document.createElement("div");
                                                //document.getElementById("formeHiden").appendChild(Loader);
                                                //Loader.classList.add("loader");
                                                //console.log(Loader.classList)
                                                //loader.textContent = " test"
                                                //setTimeout(function(){document.location.href= "../PageHTML/confirmation.html"},3000);
                                                let recIdclient = (JSON.parse(reponse));
                                                idClient = recIdclient.orderId
                                                console.log(idClient)
                                                console.log(testPrenom)
                                                setTimeout(function(){document.location.href= "../PageHTML/confirmation.html"+"?id="+idClient+"?name="+testPrenom+"_"+testNom},3000);
                                                console.log(TT)
                                                let retourTT = JSON.stringify(TT);
                                                localStorage.Prix = retourTT
                                                console.log(localStorage.Prix)

                                            }else {
                                                let refuser = document.createElement("p");
                                                document.getElementById("formulaire").appendChild(refuser);
                                                refuser.textContent = " veuillez saisir votre Ville ( ex : Dublin ) " 
                                                console.log("dont work")}
                                        }else {
                                            let refuser = document.createElement("p");
                                            document.getElementById("formulaire").appendChild(refuser);
                                            refuser.textContent = " veuillez saisir votre adresse ( ex : 13 rue du moulin chinois) " 
                                            console.log("dont work")}
    
                                    }else {
                                        let refuser = document.createElement("p");
                                        document.getElementById("formulaire").appendChild(refuser);
                                        refuser.textContent = " veuillez saisir votre Email ( ex : xxxx@aaa.dd) " 
                                        console.log("dont work")}

                                }else {
                                    let refuser = document.createElement("p");
                                    document.getElementById("formulaire").appendChild(refuser);
                                    refuser.textContent = " veuillez saisir votre Nom " 
                                    console.log("dont work")}
                                
                                //document.location.href= "../PageHTML/confirmation.html";
                            }
                            else {
                                let refuser = document.createElement("p");
                                document.getElementById("formulaire").appendChild(refuser);
                                refuser.textContent = " veuillez saisir votre prenom"
                                console.log("dont work")}
                    }if (this.readyState == XMLHttpRequest.DONE && this.status == 400) {
                        let refuser = document.createElement("p");
                        document.getElementById("formulaire").appendChild(refuser);
                        refuser.textContent = " veuillez remplir tout les champs du formulaire"
                    }
                    /*else { 
                        let refuser = document.createElement("p");
                        document.getElementById("formulaire").appendChild(refuser);
                        refuser.textContent = " veuillez remplir tout les champs du formulaire"

                         
                    }*/
                        
                    
                }
                request.open("POST", "http://localhost:3000/api/cameras/order");
                request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
                request.send(JSON.stringify(data));
                
               // setTimeout(function(){document.location.href= "../PageHTML/confirmation.html"});
            });
            
        };
        async function sending() {
            await postProduits();
        }

        sending();
    }
    
    
     
     
    
}
