


window.onload = function () {
    // menu TEST 

    let linkPanierAcc = document.createElement('a');
    document.getElementById("header").appendChild(linkPanierAcc);
    linkPanierAcc.href = "Panier.html"
        let panierAcc = document.createElement('div');
        linkPanierAcc.appendChild(panierAcc);
        panierAcc.classList.add("menuAcc");
            let imgAcc = document.createElement('img');
            imgAcc.src = "/images/Logo/icopanier.svg"
            panierAcc.appendChild(imgAcc);

    // image Orinoco TEST 

    let imgOrinoco = document.createElement("img");
    imgOrinoco.src = "/images/Logo/Capture.png";
    document.getElementById("h2title").appendChild(imgOrinoco);
    imgOrinoco.classList.add("imgOrinoco");

    





    let request = new XMLHttpRequest();
    request.onreadystatechange = function() {
        if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
            let response = JSON.parse(this.responseText);
            let data = response;
            
            // ici boucle : pour chaque iteration presente dans "data"
            for (let i = 0; i < data.length; i++) {
                

                let li = document.createElement('li'); // crée un objet <li> dans le html
                li.classList.add('Vignette'); // ajoute une classe à cette liste

                let aLien = document.createElement('a') // crée un objet "<a></a>" dans le html
                
                console.log("Produit.html"+"?"+data[i]._id);
                aLien.href = "/PageHTML/Produit.html"+"?"+data[i]._id; // ajoute l'attribut "href" a l'objet <a> créé précedemment et le defini.  
                                                            // dessus  Lien vers page Html(Produit.html)+ "id" récuperé dans "data" ("?"" pour passer l'id a l'autre page)
                aLien.classList.add("Liens") // ajoute une classe à l'objet <a>
                li.appendChild(aLien); // le rajoute au node "li" en tant qu'enfant

                let Images = document.createElement('div'); // crée un obet "<div>" dans le html
                Images.classList.add("ImageJS"); // ajoute une classe a la "div" créé
                let img = document.createElement('img'); // créé un objet "<img>" dans le html
                aLien.appendChild(Images); // place l'object en tant qu'enfant de l'objet <a> crée dans le bloc précedent
                img.src = data[i].imageUrl; // definit l'attribut "src" de l'object image crée précedemment
                img.classList.add("ImgJS") // ajoute une classe a l'objet <img> crée précedement
                Images.appendChild(img); // enfin ajoute l'object <img> au node <div classe="ImageJS"> en tant qu'enfant

                let Infos = document.createElement('div'); // crée un objet <div> dans le html
                Infos.classList.add("InfosJS") // ajoute une classe a l'objet <div> dans le html
                aLien.appendChild(Infos); // place la <div> crée ci-dessus en tant qu'enfant du node <a> (comme pour la div Image)

                let Prix = document.createElement('div'); // crée une <div> dans le html
                Prix.classList.add("PrixJS"); //ajoute une classe au cette div
                Infos.appendChild(Prix);  // place cette <div> en tant qu'enfant du node <div "Info"> crée dans le bloc du dessus 

                let Price = document.createElement('p'); // crée un objet <p> dans le html
                Price.classList.add("PriceNumber"); // ajoute une classe a cette objet
                let PriceConver = data[i].price; // definit une variable "tampon" pour recevoir la donné en "typeof = number" venant tableau "data"
                                                 // tableau[iteration de l'objet].clé-de-la-propriété-voulu = valeur de cette propriété (Attention au type)
                Price.textContent = PriceConver + " ¥"; // Triche : la valeur de la propriété renvoyé par " data[i].price" est un number /
                                                        // utiliser textContent permet de l'afficher 
                Prix.appendChild(Price); // ont ajoute l'enfant "Price" au node "prix"

                let Nom = document.createElement('div'); // crée un objet <div> dans le html
                Nom.classList.add("NomJS"); // ajoute une classe a cete objet
                Infos.appendChild(Nom); // place la <div> crée dessus dans le node parent "Infos"

                let nomAppareil = document.createElement('p'); // crée un objet <p> dans le html
                nomAppareil.classList.add("nomAppareilPhoto"); // ajoute une classe a celui-ci
                let AppareilConver = data[i].name; // Pareil que pour "Price" sauf que le "typeof" est string
                nomAppareil.textContent = AppareilConver + "" ;
                Nom.appendChild(nomAppareil); // place "nomAppareil" dans le node "Nom" créé au dessus

                let bulle = document.createElement('div');
                bulle.classList.add("bullePrix")
                bulle.innerHTML = "A partir </br>\t  de :";
                Prix.appendChild(bulle); 


                document.getElementById("Container-listeJS").appendChild(li);
               }
        }
    };
    
    request.open("GET", "http://localhost:3000/api/cameras");
    request.send();
    


    


};



