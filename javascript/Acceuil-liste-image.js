


window.onload = function () {
    // ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Lien vers Panier 
    let linkPanierAcc = document.createElement('a');
    document.getElementById("header").appendChild(linkPanierAcc);
    linkPanierAcc.href = "../PageHTML/Panier.html"
    // ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
    let panierAcc = document.createElement('div');
    linkPanierAcc.appendChild(panierAcc);
    panierAcc.classList.add("menuAcc");
    // ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
    let imgAcc = document.createElement('img');
    imgAcc.src = "../images/Logo/icopanier.svg"
    panierAcc.appendChild(imgAcc);
    // ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Decoration image carractere japonais
    let imgOrinoco = document.createElement("img");
    imgOrinoco.src = "../images/Logo/Capture.png";
    document.getElementById("h2title").appendChild(imgOrinoco);
    imgOrinoco.classList.add("imgOrinoco");
    console.log(document.getElementById("header").nodeListe.item(7));

    // ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // fonction GET avec promise recupe donnés serveur
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
    // /////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // fonction qui recupere la promise (await pour attendre le retour complet de la fonction getProduits)
    async function allProduits() {

        let data = await getProduits() // charge data du json 



        // ici boucle : pour chaque iteration presente dans "data" création des élements dans le hmtl : ////////////////////
        for (let i = 0; i < data.length; i++) {
            // /////////////////////////////////////////////////////////////////////////////////////////////////////////////
            // structure : 
            //<div Container-listeJS --> <li> --> <a href>  --> <div conteneur image> --> <img>
            //                                              --> <div conteneur info>  --> <div Prix> --> <p> --> <div bulle>
            //                                                                        --> <div nom> --> <p>
            // /////////////////////////////////////////////////////////////////////////////////////////////////////////////
            let li = document.createElement('li'); //  element <li> 
            li.classList.add('Vignette');
            // /////////////////////////////////////////////////////////////////////////////////////////////////////////////
            let aLien = document.createElement('a') // element "<a>" 
            aLien.href = "../PageHTML/Produit.html" + "?id=" + data[i]._id;
            aLien.classList.add("Liens")
            li.appendChild(aLien);
            // /////////////////////////////////////////////////////////////////////////////////////////////////////////////
            let Images = document.createElement('div'); // element <div conteneur image>
            Images.classList.add("ImageJS");
            let img = document.createElement('img'); //element <img>
            aLien.appendChild(Images);
            img.src = data[i].imageUrl;
            img.classList.add("ImgJS")
            Images.appendChild(img);
            // /////////////////////////////////////////////////////////////////////////////////////////////////////////////
            let Infos = document.createElement('div'); // element <div conteneur info>
            Infos.classList.add("InfosJS")
            aLien.appendChild(Infos)
            // /////////////////////////////////////////////////////////////////////////////////////////////////////////////
            let Prix = document.createElement('div'); // element <div Prix> 
            Prix.classList.add("PrixJS");
            Infos.appendChild(Prix);
            // /////////////////////////////////////////////////////////////////////////////////////////////////////////////
            let Price = document.createElement('p'); // element <p Prix> 
            Price.classList.add("PriceNumber");
            let PriceConver = data[i].price;
            Price.textContent = PriceConver + " ¥";
            Prix.appendChild(Price);
            // /////////////////////////////////////////////////////////////////////////////////////////////////////////////
            let Nom = document.createElement('div'); // element <div name> 
            Nom.classList.add("NomJS");
            Infos.appendChild(Nom);
            // /////////////////////////////////////////////////////////////////////////////////////////////////////////////
            let nomAppareil = document.createElement('p'); // element <p name> 
            nomAppareil.classList.add("nomAppareilPhoto");
            let AppareilConver = data[i].name;
            nomAppareil.textContent = AppareilConver + "";
            Nom.appendChild(nomAppareil);
            // bule prix annonce //////////////////////////////////////////////////////////////////////////////////////////
            let bulle = document.createElement('div'); // element <div bulle>
            bulle.classList.add("bullePrix")
            bulle.innerHTML = "A partir </br>\t  de :";
            Prix.appendChild(bulle);
            // /////////////////////////////////////////////////////////////////////////////////////////////////////////////
            document.getElementById("Container-listeJS").appendChild(li);
            // /////////////////////////////////////////////////////////////////////////////////////////////////////////////
            //<div Container-listeJS --> <li> --> <a href>  --> <div conteneur image> --> <img>
            //                                              --> <div conteneur info>  --> <div Prix> --> <p> --> <div bulle>
            //                                                                        --> <div nom> --> <p>
            // /////////////////////////////////////////////////////////////////////////////////////////////////////////////
        };
    };
    allProduits(); // appel de la function 
};



