

window.onload = function () {

    let request2 = new XMLHttpRequest();
    request2.onreadystatechange = function() {
        if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
            let response = JSON.parse(this.responseText);
            let dataProduit = response;


            //recuperer l'id du produit 
            let IDrecup = window.location.search.substr(1);// on lui enleve le "?"
            console.log(IDrecup); // OK

            let IDs = []; // Creer un tableau pour acceuillir (lister) tout les "_id" de "dataProduit"
            for (let i = 0; i <dataProduit.length; i++) { // pour chaque objet dans "dataProduit" il va crée une entré dans le Tableau "IDs"
                IDs.push(dataProduit[i]._id); // il push l'entrée en crée un INDICE et une valeur.
            }
            let x = IDs.indexOf(IDrecup); // crée une variable qui va, grace à "indexOF" comparé l'Id recupéré via IDrecup a ceux présent dans le tableau Ids
                                        // et renvoyer l'INDICE si il est présent dans X. 
            console.log(x); // OK
            console.log(typeof(x)) // OK
            console.log(IDs);

           
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
            // operation avec le btn
            var count = 0;
            //BtnJs.addEventListener("click", function(){
            //    count++;
            //     console.log(count)
            //});
            

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
            let ZE = 0;
            textCountAchat.textContent = "Vide" // ici commence l'ecoute du bouton
            function ZEchange(){  // la fonction qui increment un compteur lors du click
                ZE++;
                if (ZE == 1 ){ 
                    textCountAchat.textContent = 1 + " Article dans votre panier"}
                    else 
                    textCountAchat.textContent = ZE + " Articles dans votre panier"   
            }
            BtnJs.addEventListener("click", ZEchange);  // La fonction d'ecoute qui execute la fonction "ZE"
            countAchat.appendChild(textCountAchat);
            ContainerPanier.appendChild(countAchat);

            let LienPanier = document.createElement("div");
            ContainerPanier.appendChild(LienPanier);

            // Link vers Panier Avec une Image
            let LinkPaniersJS = document.createElement("a");
            LienPanier.appendChild(LinkPaniersJS);
            LinkPaniersJS.href = "#";                                                       // <----- A modifier
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