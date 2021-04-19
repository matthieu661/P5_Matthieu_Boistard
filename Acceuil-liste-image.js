


window.onload = function () {

    let request = new XMLHttpRequest();
    request.onreadystatechange = function() {
        if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
            let response = JSON.parse(this.responseText);
            console.log(response);
            let data = response;
            console.log(data.length);

            for (let i = 0; i < data.length; i++) {
                

                let li = document.createElement('li');
                li.classList.add('Vignette');

                let aLien = document.createElement('a')
                aLien.href = "#" // ICI A MODIFIER POUR LINK
                aLien.classList.add("Liens")
                li.appendChild(aLien);

                let Images = document.createElement('div');
                Images.classList.add("ImageJS");
                let img = document.createElement('img'); 
                aLien.appendChild(Images);
                img.src = data[i].imageUrl;
                img.classList.add("ImgJS")
                Images.appendChild(img);

                let Infos = document.createElement('div');
                Infos.classList.add("InfosJS")
                aLien.appendChild(Infos);

                let Prix = document.createElement('div');
                Prix.classList.add("PrixJS");
                Infos.appendChild(Prix); 

                let Price = document.createElement('p');
                Price.classList.add("PriceNumber");
                let PriceConver = data[i].price;
                Price.textContent = PriceConver + " ¥"; // Triche : ça renvoie un "number" et ça passe pas 
                Prix.appendChild(Price);

                let Nom = document.createElement('div');
                Nom.classList.add("NomJS");
                Infos.appendChild(Nom);

                let nomAppareil = document.createElement('p');
                nomAppareil.classList.add("nomAppareilPhoto");
                let AppareilConver = data[i].name;
                nomAppareil.textContent = AppareilConver + "" ;
                Nom.appendChild(nomAppareil);

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



