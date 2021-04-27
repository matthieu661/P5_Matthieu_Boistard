
window.onload = function () {




    // ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
    getProduits = () => {
        return new Promise((ABC) => {
            let request = new XMLHttpRequest();
            request.onreadystatechange = function () {
                if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
                    ABC(JSON.parse(this.responseText));
                }
            }
            request.open("GET", "http://localhost:3000/api/cameras");
            request.send();
        });
    };
    // ///////////////////////////////////////////////////////////////////////////////////////////////////////////////


    async function allProduits() {

        let dataProduit = await getProduits()



        // ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
        //recuperer l'id du produit 
        let IDrecup = window.location.search.substr(4);// enleve le "?id="
        let IDs = []; // Creer un tableau pour acceuillir (lister) tout les "_id" de "dataProduit"
        for (let i = 0; i < dataProduit.length; i++) { // pour chaque objet dans "dataProduit" il va crée une entré dans le Tableau "IDs"
            IDs.push(dataProduit[i]._id); // il push l'entrée en crée un INDICE et une valeur.
        }
        let x = IDs.indexOf(IDrecup); // crée une variable qui va, grace à "indexOF" comparé l'Id recupéré via IDrecup a ceux présent dans le tableau Ids

        // ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // ajout element aux balises fixe Html / STRUCTURE : 
        // <main> --> <h1> (ajout texte)
        //        --> <div container Produit>     --> <div image produit>            --> <img (ajout img)>
        //                                        --> <div container description>    --> <p (ajout <p>)>
        //                                        --> <div container Form >          --> <select>            --> <option (ajout des options)>
        //                                        --> <div Prix et button>           --> <div prix>          --> <p (ajout <p>)
        //                                                                           --> <div button>        --> <btn (ajout button)>   
        //        --> <div panier>                --> <div rapide (ajout div)>       --> <h2 (ajout h2)>
        //                                        --> <div flex (ajout div)>         --> <div (ajout div)>   --> <p (ajout p)>
        //                                        --> <div lien (ajout div)>         --> <a href (ajout a)>
        //
        // ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        let H1produit = document.createTextNode(dataProduit[x].name);
        document.getElementById("TitreProduit").appendChild(H1produit);
        TitreProduit.classList.add("NomProduit");
        // ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
        let imgProduit = document.createElement("img");
        imgProduit.src = dataProduit[x].imageUrl;
        document.getElementById("ImageProduit").appendChild(imgProduit);
        imgProduit.classList.add("ImgProduit");
        ImageProduit.classList.add("containerJsProduit");
        // ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
        let Description = document.createElement("p");
        let Textdescription = dataProduit[x].description;
        Description.classList.add("containerJsProduit");
        Description.textContent = Textdescription;
        document.getElementById("DescriptionProduit").appendChild(Description);
        // ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // boucle pour creer un element "option" pour chaque valeurs de "options" presentes dans le tableau dataproduit
        for (let i = 0; i < dataProduit[x].lenses.length; i++) {
            let optionsJS = document.createElement("option");
            let optionsName = dataProduit[x].lenses[i];
            optionsJS.textContent = optionsName;
            document.getElementById("Options").appendChild(optionsJS);
        }
        // ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
        FormSelectProduit.classList.add("containerJsProduit");
        PrixBtnProduit.classList.add("containerJsProduit");
        FormSelectProduit.classList.add("selectJS");
        PrixBtnProduit.classList.add("BtnJS");
        // ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
        let BtnJs = document.createElement('button');
        document.getElementById("BtnProduit").appendChild(BtnJs);
        let BtnTexteJs = "Ajouter au panier";
        BtnJs.textContent = BtnTexteJs;
        // ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
        let prixProduit = document.createElement("p");
        let Valeur = dataProduit[x].price
        prixProduit.classList.add("PrixduProduitJs")
        prixProduit.textContent = Valeur + " ¥";
        document.getElementById("PrixProduit").appendChild(prixProduit);
        // ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
        let PanierRapide = document.createElement('div');
        let TitrePanierRapide = document.createElement('h2');
        let TexteH2 = "Votre panier";
        TitrePanierRapide.textContent = TexteH2;
        document.getElementById("Panier").appendChild(PanierRapide);
        PanierRapide.appendChild(TitrePanierRapide);
        // ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // Partie panier :
        let ContainerPanier = document.createElement("div");
        let countAchat = document.createElement("div");
        let textCountAchat = document.createElement("p")
        countAchat.appendChild(textCountAchat);
        ContainerPanier.appendChild(countAchat);
        let LienPanier = document.createElement("div");
        ContainerPanier.appendChild(LienPanier);
        // Link vers Panier Avec une Image
        let LinkPaniersJS = document.createElement("a");
        LienPanier.appendChild(LinkPaniersJS);
        LinkPaniersJS.href = "../PageHTML/Panier.html";                 // LIEN VERS PAGE PANIER                                   
        document.getElementById("Panier").appendChild(ContainerPanier);
        let ImagePanier = document.createElement("img");
        ImagePanier.src = "../images/Logo/PanierOrinoco.png";
        LinkPaniersJS.appendChild(ImagePanier);
        LinkPaniersJS.classList.add("FlexPanier");
        ContainerPanier.classList.add("FlexPanier");

        // //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        //
        // event button : au click appel recupChoix()
        //      recupChoix() --> (1) appel TEST() --> créer un tableau (vide ou nom) "dataStorage" 
        //                     --> (2) créer les variables qui recupérent le nom, prix, option...du produit aprés le click
        //                     --> (3) créer un objet recuperant chacunes de ces variables ("ArticlePourLeLocalStorage")
        //                 (optionel) --> (4) appel recupZE() --> créer la variable ZE ( = number 1-x) 
        //                            --> (5) apell ZEchange() --> retourn une valeur number (en fonction de recupeZE() ) et l'affiche en textContent
        //                     --> (6) recupere l'objet créer ("ArticlePourLeLocalStorage") et le "push" dans le tableau ("dataStorage")
        //                     --> (7) créer l'objet Tableau qui recupere les valeaur du tableau ("dataStorage") (JSON.stringify)
        //                     --> (8) push l'objet Tableau sur le localStorage avec la clée Article( defini en meme temps)
        //
        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////                
        // fonction pour retourner la valeur du panier, si localstorage vide return [], si pas vide elle recupere le tableau "Article" et le transforme en JSON return le JSON.
        function recupChoix() {  
            function TEST() {
                let Varii = localStorage.Article
                if (Varii === undefined) {
                    return [];
                }
                else {
                    return JSON.parse(localStorage.Article);
                }
            }
            // ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
            // ont definis les variable pour exploiter plus facilement le JSON
            let DataStorage = TEST(); // definit le tableau qui reçoit les Artilces ajoutés au panier grace a la function TEST dessus
            let idChoix = IDrecup // crée la variable idchoix via l'id recuperé plus haut (pas indispensable ont peut use direct IDrecup) 
            let nameChoix = dataProduit[x].name; // ont recupére le nom via le tableau crée plus haut 
            let PrixDuChoix = dataProduit[x].price; // recup price
            let ImgChoix = dataProduit[x].imageUrl; // recup lien img
            let optionChoix = document.getElementById("Options"); // vaiable optionChoix permet de se "locker" sur le form select
            let valeurOption = optionChoix.options[optionChoix.selectedIndex].text; // ont crée une variable pour recupérer l'option via la fonction   "elementLOCKER".selectindex+ .text (pour retourner l'interieur des balises option du select)
            // ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
            // ont crée un Objet qui va stocker les variable récup.
            let ArticlePourLeLocalStorage = {
                id: idChoix,
                name: nameChoix,
                option: valeurOption,
                prix: PrixDuChoix,
                image: ImgChoix
            };
            // ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
            // pareil que TEST, utile pour le count du nombre d'article dans le panier .
            function recupZE() {  
                let Varii2 = localStorage.Article
                if (Varii2 === undefined) {
                    return 1;
                }
                else {
                    let Varii3 = JSON.parse(Varii2)
                    for (let i = 0; i < Varii3.length; i++);
                    console.log(Varii3.length)
                    let number = Varii3.length;
                    number++;
                    return number
                }
            }
            let ZE = recupZE();
            textCountAchat.textContent = "Vide"
            function ZEchange() {  // la fonction increment un compteur lors du click
                if (ZE == 1) {
                    textCountAchat.textContent = 1 + " Article dans votre panier"
                }
                else
                    textCountAchat.textContent = ZE + " Articles dans votre panier"
            }
            ZEchange()
            // ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
            DataStorage.push(ArticlePourLeLocalStorage);
            let Tableau = JSON.stringify(DataStorage);
            localStorage.Article = Tableau;

        }
        BtnJs.addEventListener("click", recupChoix);




    }
    allProduits()

}

