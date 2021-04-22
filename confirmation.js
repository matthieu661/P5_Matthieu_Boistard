window.onload = function () {


    let request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
            let response = JSON.parse(this.responseText);
            let data = response;

            console.log(data);






            // recup les données du formulaire stocké dans le localstorage : ( key = clientel)



            let recupValeur2 = localStorage.getItem("clientel"); // NE PAS OUBLIER les "" la clé c'est un string tamereputin azerzq rfvlesd 2h pour asdfqesr
            let valueurJSON2 = JSON.parse(recupValeur2) // retransformation en JSON
            console.log(valueurJSON2)


            // OBJET TEST    =  valeurJSON2   
            let TESTETE = {
                prenomData: "prenom",
                nomData: "nom",
                emailData: "email",
                telData: "tel",
                adressNumData: "adresseNum",
                typeVoieData: "typeVoie",
                nomDeVoieData: "nomdeVoie",
                CBdata: "CB",
                DateExpData: "dateExp"
            }

            // recupe




            // Création du corp html en js pour le formulaire :

            // créer un <p> pour afficher le numero de commande sous le <h1>  
            let numeroCommande = document.createElement("p");
            document.getElementById("TexteConfirmation").appendChild(numeroCommande);







        }
    }
    request.open("GET", "http://localhost:3000/api/cameras/");
    request.send();
}


