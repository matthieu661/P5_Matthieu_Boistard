window.onload = function () {

    let request2 = new XMLHttpRequest();
    request2.onreadystatechange = function() {
        if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
            let response = JSON.parse(this.responseText);
            console.log(response);
            let dataProduit = response;

            let H1produit = document.createTextNode(dataProduit[0].name); // A modifier avec le numero object de l'id
            document.getElementById("TitreProduit").appendChild(H1produit); // ont ajoute l'obect crée aprés avoir selectionné son Node parent.
            TitreProduit.classList.add("NomProduit"); // ajout de classe au node parent de H1produit

            let imgProduit = document.createElement("img");
            imgProduit.src = dataProduit[0].imageUrl; 
            document.getElementById("ImageProduit").appendChild(imgProduit);
            imgProduit.classList.add("ImgProduit");
            ImageProduit.classList.add("containerJsProduit");

            let Description = document.createElement("p");
            let Textdescription = dataProduit[0].description;
            Description.classList.add("containerJsProduit");
            Description.textContent = Textdescription;
            document.getElementById("DescriptionProduit").appendChild(Description);

            
            
            for (let i = 0; i < dataProduit[0].lenses.length; i++) {
                let optionsJS = document.createElement("option");
                let optionsName = dataProduit[0].lenses[i];
                console.log(optionsName);
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
            let Valeur = dataProduit[0].price
            prixProduit.classList.add("PrixduProduitJs")
            prixProduit.textContent = Valeur + " ¥";
            document.getElementById("PrixProduit").appendChild(prixProduit);
            

        }
    }
    request2.open("GET", "http://localhost:3000/api/cameras");
    request2.send();
    
}