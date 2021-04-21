
window.onload = function () {
    
    let request2 = new XMLHttpRequest();
    request2.onreadystatechange = function() {
        if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
            let response = JSON.parse(this.responseText);
            let dataProduit = response;

            

            //recuperer l'id du produit 
            let IDrecup = window.location.search.substr(1);// on lui enleve le "?"
            // console.log(IDrecup); // OK

            let IDs = []; // Creer un tableau pour acceuillir (lister) tout les "_id" de "dataProduit"
            for (let i = 0; i <dataProduit.length; i++) { // pour chaque objet dans "dataProduit" il va crée une entré dans le Tableau "IDs"
                IDs.push(dataProduit[i]._id); // il push l'entrée en crée un INDICE et une valeur.
            }
            let x = IDs.indexOf(IDrecup); // crée une variable qui va, grace à "indexOF" comparé l'Id recupéré via IDrecup a ceux présent dans le tableau Ids
                                        // et renvoyer l'INDICE si il est présent dans X. 
            //console.log(x); // OK
            //console.log(typeof(x)) // OK
            //console.log(dataProduit);

           
           // l'id sera transmis via la variable X 
        


            let H1produit = document.createTextNode(dataProduit[x].name); // A modifier avec le numero object de l'id
            document.getElementById("TitreProduit").appendChild(H1produit); // ont ajoute l'obect crée aprés avoir selectionné son Node parent.
            TitreProduit.classList.add("NomProduit"); // ajout de classe au node parent de H1produit

            let imgProduit = document.createElement("img");
            imgProduit.src = dataProduit[x].imageUrl; 
            document.getElementById("ImageProduit").appendChild(imgProduit);
            imgProduit.classList.add("ImgProduit");
            ImageProduit.classList.add("containerJsProduit");

            let Description = document.createElement("p");
            let Textdescription = dataProduit[x].description;
            Description.classList.add("containerJsProduit");
            Description.textContent = Textdescription;
            document.getElementById("DescriptionProduit").appendChild(Description);

            
            
            for (let i = 0; i < dataProduit[x].lenses.length; i++) { // bouvle pour creer un element "option" pour chaque valeurs de "options" presentes dans le tableau dataproduit
                let optionsJS = document.createElement("option");
                let optionsName = dataProduit[x].lenses[i];
                optionsJS.textContent = optionsName;
                document.getElementById("Options").appendChild(optionsJS);
            }

            FormSelectProduit.classList.add("containerJsProduit");
            PrixBtnProduit.classList.add("containerJsProduit");
            FormSelectProduit.classList.add("selectJS");
            PrixBtnProduit.classList.add("BtnJS");

            let BtnJs = document.createElement('button');
            document.getElementById("BtnProduit").appendChild(BtnJs);
            let BtnTexteJs = "Ajouter au panier";
            BtnJs.textContent = BtnTexteJs;
            
            let prixProduit = document.createElement("p");
            let Valeur = dataProduit[x].price
            prixProduit.classList.add("PrixduProduitJs")
            prixProduit.textContent = Valeur + " ¥";
            document.getElementById("PrixProduit").appendChild(prixProduit);

            let PanierRapide = document.createElement('div');
            let TitrePanierRapide = document.createElement('h2');
            let TexteH2 = "Votre panier";
            TitrePanierRapide.textContent = TexteH2 ;
            document.getElementById("Panier").appendChild(PanierRapide);
            PanierRapide.appendChild(TitrePanierRapide);

            let ContainerPanier = document.createElement("div");
            let countAchat = document.createElement("div");
            let textCountAchat = document.createElement("p")


                                                                // partie action button -_-' !
            let ZE = 0;
            textCountAchat.textContent = "Vide" // ici commence l'ecoute du bouton
            function ZEchange(){  // la fonction qui increment un compteur lors du click
                ZE++;
                if (ZE == 1 ){ 
                    textCountAchat.textContent = 1 + " Article dans votre panier"}
                    else 
                    textCountAchat.textContent = ZE + " Articles dans votre panier"   
            }
            
            
            // function pour recuperer les données a transferer au localstorage
        
            //let DataStorage = JSON.parse(localStorage.Article) ; // variable a incrémenter avec les Articles au click ( ???? fonctionne ....  comprend pas comment ...  )
            //function TEST() {
                //let Varii = localStorage.Article
                  //  console.log(Varii)
                    //if ( Varii === undefined ) {
                      //  return [];
                    //}
                    //else {
                      //  return JSON.parse(localStorage.Article) ;
                    //}
            //}

            //localStorage.clear()
            
            
            function recupChoix(){ // putin de fonction pour retourner une valeur, si vide [], si pas vide elle recuperer le tableau "Article" et le transforme en JSON . 
                function TEST() {
                    let Varii = localStorage.Article
                        console.log(Varii)
                        if ( Varii === undefined ) {
                            return [];
                        }
                        else {
                            return JSON.parse(localStorage.Article) ;
                        }
                }
    
                let DataStorage = TEST(); // definit le tableau qui reçoit les Artilces ajoutés au panier grace a la function TEST dessus
                
                let idChoix = IDrecup // crée la variable idchoix via l'id recuperé plus haut (pas indispensable ont peut use direct IDrecup) 
                //console.log(idChoix) // OK
                let nameChoix = dataProduit[x].name; // ont recupére le nom via le tableau crée plus haut 
                //console.log(nameChoix); // OK
                let PrixDuChoix = dataProduit[x].price; // recup price
                let ImgChoix = dataProduit[x].imageUrl; // recup lien img
                let optionChoix = document.getElementById("Options"); // vaiable optionChoix permet de se "locker" sur le form select
                let valeurOption = optionChoix.options[optionChoix.selectedIndex].text; // ont crée une variable pour recupérer l'option via la fonction   "elementLOCKER".selectindex+ .text (pour retourner l'interieur des balises option du select)
                //console.log(valeurOption) // OK
                 
                

                let ArticlePourLeLocalStorage = {  // ont crée un Objet qui va stocker les variable récup.
                    id : idChoix,
                    name : nameChoix,
                    option : valeurOption, 
                    prix : PrixDuChoix,
                    image : ImgChoix
                };
                //console.log(ArticlePourLeLocalStorage) // OK (Array type)
                DataStorage.push(ArticlePourLeLocalStorage) ; // Ont push l'objet remplis des valeurs qui vient d'etre créer dans un tableau vide ( definit hors fonction )
                // console.log(DataStorage) // ok , ont obtient bien un tableau qui, à chaque click se voit push un objet
                let Tableau = JSON.stringify(DataStorage); // ont "stringify" le le tableau2 contenant tout les objets au dessus.
               // console.log(Tableau) // ont obtient bien des valeurs
                //  console.log(typeof(Tableau)) // = string
                localStorage.Article = Tableau;
                // console.log(localStorage.length); // 1 seul Object 
                 console.log(localStorage.Article) // la "key" Article renvoie l'objet transferé au localstorage contenant les object ajouter 

                                                                                                                                         // a utiliser plus tard pour recup ces données !!!!
                //let test63 = localStorage.getItem("Article"); // NE PAS OUBLIER les "" la clé c'est un string tamereputin azerzq rfvlesd 2h pour asdfqesr
                //let valueurAttendu = JSON.parse(test63) // retransformation en JSON
                //console.log(valueurAttendu) // ok renvoi le tableau 
                
                
                

            } 
            //localStorage.clear()
            BtnJs.addEventListener("click", ZEchange);  // La fonction d'ecoute qui execute la fonction "ZE"
            BtnJs.addEventListener("click", recupChoix);

            

            countAchat.appendChild(textCountAchat);
            ContainerPanier.appendChild(countAchat);

            let LienPanier = document.createElement("div");
            ContainerPanier.appendChild(LienPanier);

            // Link vers Panier Avec une Image
            let LinkPaniersJS = document.createElement("a");
            LienPanier.appendChild(LinkPaniersJS);
            LinkPaniersJS.href = "Panier.html";                                                       // <----- A modifier
            document.getElementById("Panier").appendChild(ContainerPanier);
    
            let ImagePanier = document.createElement("img");
            ImagePanier.src ="/images/Logo/PanierOrinoco.png";
            LinkPaniersJS.appendChild(ImagePanier);

            LinkPaniersJS.classList.add("FlexPanier");
            ContainerPanier.classList.add("FlexPanier");
            

    
            
           
            
            
            
            
            
        }
    }
    request2.open("GET", "http://localhost:3000/api/cameras");
    request2.send();
   
} 
