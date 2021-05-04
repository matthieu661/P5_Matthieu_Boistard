// ////////////////////////////////////////// PAGE INDEX //////////////////////////////////////////////////////////////
    // Lien vers Panier L1-20                               TU-1
    // ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //
    /// 1 - test unitaire (1) : creation du lien vers le Panier ///////////////////////////////////////////////////////////
    //  2 -     tester si le node parent posséde bien un enfant <a> en index[7], si OUI :
    //  3 -         tester si l'Url correspond a l'Url voulu, si OUI :
    //  5 -             tester si le node <a> posséde un enfant <div>, si oui :
    //  6 -                    tester si le node <div> posséde un enfant <img>, si oui :
    //                      VALIDE
    // /////////////////////////////////////////////////////////////////////////////////////////////////////////////////  
// code test unitaire (1) /////////////////////////////////////////////////////////////////////////////////////////////
    let testUni1 = document.getElementById("header").childNodes
    if (testUni1.item(7).tagName === "A") {
        console.log("(1) Balise <a href> presente")
        if (testUni1.item(7).href === "http://127.0.0.1:5500/PageHTML/Panier.html") {
            console.log("(2) Url correspondante")
            let testUni2 = testUni1.item(7).childNodes
            if (testUni2.item(0).tagName === "DIV") {
                console.log("(3) Balise <div> présente")
                let testUni3 = testUni2.item(0).childNodes
                if (testUni3.item(0).tagName === "IMG"){ 
                    console.log("(4) Balise <img> presente")
                    console.log("(OK) création du lien vers Panier : complet ")
                }else {
                    console.log("error : balise <IMG>")
                }
            }else {
                console.log("error : balise <div> ")
            }
        }else {
            console.log("error : lien non correspondant ")
        }
    }else {
        console.log("error :balise <a> non presente ")
    }
// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Création du bon nombre de vignette Produit L37-96     TU-2
    // ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // test unitaire (2) 
    // tester le nombre d'item de la base de donnée et le comparer aux nombres d'items <li> créer par la boucle for 
    //
    // ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// code test unitaire (2) /////////////////////////////////////////////////////////////////////////////////////////////
    let testUnit2_1 = data.length
    if (testUnit2_1 === Container_listeJS.childNodes.length ) {
        console.log("Nombre d'items base de donnée =" + data.length +" Nombre d'items affichés =" + Container_listeJS.childNodes.length )
        return true
    }else {
        console.log("Error : Nombre d'items affichés non correspondant")
        return false
    }
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Création des elements dans vignette Produit L37-96    TU-3
    // ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // test unitaire (3)
    //  1 - tester la presence de l'element <Li>, si oui:
    //  2 -     Pour chaque <li> presents tester la presence de la balise <a>, si OUI :
    //  3 -        tester la presence de la balise <div image>, si oui :
    //  4 -            tester la presence de la balise <img>, si OUI :
    //  5 -        tester la presence de la balise < div infos>, si OUI :
    //  6 -        tester la presence de la balise < div Prix>, si OUI :
    //  7 -            tester la presence de la balise < p Prix>, si OUI :
    //  8 -         tester la presence de la balise < div Name>, si OUI :
    //  9 -            tester la presence de la balise <p Name>, si OUI :
    //                          VALIDE
    // //////////////////////////////////////////////////////////////////////////////////////////////////////////////
// code test unitaire (3) ///////////////////////////////////////////////////////////////////////////////////////////
    let testUni3_1 = Container_listeJS.childNodes
        console.log(testUni3_1)
        for (let i = 0; i < data.length; i++) {
            if (testUni3_1.item(i).tagName === "LI") {
                console.log(i + " -- balise " + i + " <li> OK")
                let testUni3_2 = testUni3_1.item(0).childNodes
                if (testUni3_2.item(0).tagName === "A") {
                    console.log("- Balise <a>  : OK")
                    let testUni3_3 = testUni3_2.item(0).childNodes
                    if (testUni3_3.item(0).tagName === "DIV") {
                        console.log("-- Balise <div image>  : OK ")
                        let testUni3_4 = testUni3_3.item(0).childNodes
                        if (testUni3_4.item(0).tagName === "IMG") {
                            console.log("--- Balise <img>  : OK")
                            if (testUni3_3.item(1).tagName === "DIV") {
                                console.log("-- Balise <div infos> : OK")
                                if (testUni3_3.item(1).childNodes.item(0).tagName === "DIV") {
                                    console.log("--- Balise <div Prix> : OK")
                                    if (testUni3_3.item(1).childNodes.item(0).childNodes.item(0).tagName === "P") {
                                        console.log("---- Balise <p Prix> : OK")
                                    } else { console.log("error : <p Prix>") }

                                } else { console.log("error : <div Prix>") }
                                if (testUni3_3.item(1).childNodes.item(1).tagName === "DIV") {
                                    console.log("--- Balise <div Name> : OK")
                                    if (testUni3_3.item(1).childNodes.item(1).childNodes.item(0).tagName === "P") {
                                        console.log("---- Balise <p Name> : OK")
                                    } else { console.log("error : <p Name>") }
                                } else { console.log("error : <div Name>") }
                            } else {
                                console.log("error : <div infos")
                            }
                        } else {
                            console.log("error : <img>")
                        }
                    } else {
                        console.log("error : <div image>")
                    }
                } else {
                    console.log("error : balise <a href>")
                }
            } else {
                console.log(" ERROR ; index balise " + i)
            }
        }
// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////        
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // XMLHttpRequest, recuperation des données L23-34       TU-4
    // /////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // test unitaire (4)
    // probleme pour tester les fonctions async
    //      le "else" part quoi qu'il arrive . 
    //     
    //      ont attend un .JSON donc :
    //  1 -     ont test la longueur de la response, si non Nul:
    //  2 -        tester le typeof de la response, si string :
    //  3 -            tester la typeof de Parse.response , si Object :
    //                              VALIDE 
    // /////////////////////////////////////////////////////////////////////////////////////////////////////////////
// code test unitaire (4) //////////////////////////////////////////////////////////////////////////////////////////
    // console.log(this.response.length)
    // console.log(typeof(this.response))
    // console.log(typeof(JSON.parse(this.response)))
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////


//  /////////////////////// PAGE PRODUITS /////////////////////////////////////////////////////////////////////////
    //
// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // recupéré ID via Url L29-36                       TU-5
    // ////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // test unitaire (5)
    //  1 -tester la longueur de la chaine recuperé via window.location, si = 24 : 
    //  2 -     tester si IDS a bien recuperer des _id de dataProduit, si OUI : 
    //  3 -         tester si IDs a bien recuperé toutes les Id, si OUI :
    //  4 -             tester si toutes les ID recupérées dans IDs sont les meme que celle de dataProduit, si OUI :
    //  5 -                 tester si L'id recuperé par Url est presente dans le tableau IDs, si OUI :    
    //                                               VALIDE
    // ////////////////////////////////////////////////////////////////////////////////////////////////////////////
// code test unitaire (5) /////////////////////////////////////////////////////////////////////////////////////////
    if (IDrecup.length === 24 ){
            console.log("longueur de la chaine attendu = 24 : OK")
        }else { console.log("error : Id non conforme(length")}
        if (IDs.length > 0){
            console.log("[IDs] a recuperé des _id : OK ")
            if(IDs.length === dataProduit.length) {
                console.log("Nombre d'Id recuperées : OK")
                for(let i = 0; i < IDs.length ; i++){
                    if ( IDs[i] === dataProduit[i]._id){
                        console.log("ID dans [IDs] valide : OK")
                    }else{console.log("error : Tableau IDs")}
                }
                if(IDs.indexOf(IDrecup) > -1 ) {
                    console.log("ID recuperé présente [IDs]")
                }else{console.log("error : ID non valide")}
            }else{console.log("error : Nombres ID dans [IDs]")}
        }else{console.log("error : [IDs] vide ")}
// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // création des élements page Produit  L51-115    TU-6
    // //////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // test unitaire (6)
    //     1 - verifier que le createTextNode est présent :
    //     2 - verifier que le "typeof " :
    //     3 - verifier la longueur de la chaine vs longueur dans dataProduit :
    //        -verifier la concordance de la valeurs de la chaine vs dataProduit :   
    // ////////////////////////////////
    //     4 - verifier la présence de la balise <img> dans le container "ImageProduit" :
    //     5 - verifier la concordance des Ulr antre celle afficher et celle de dataproduit : 
    // ////////////////////////////////
    //     6 - verifier la présence de <p> dans la <div "DescriptionProduit"> : 
    //     7 - verifier la concordance du texte affiché : 
    // ////////////////////////////////
    //     8 - verifier la présence du bon nombre d'option dans le <select> :
    //     9 - verifier la valeur des Options vs dataproduit[x]: 
    // ///////////////////////////////
    //     10 - verifier la presence du btn :
    //     11 - verifier la presence de texte sur le btn :
    // ////////////////////////////////
    //     12 - verififer la presence de la balise <p> :
    //     13 - verifier la valeur de la chaine afficher dans la balise <p> vs dataproduit
    // ////////////////////////////////
    //     14 - verfifier la création de deux div dans le container "panier"
    //     15 - verifier la presence de la balise <h2> :
    //     16 - verifier la presence de 2 <div> dans le container Panier :
    //     17 - verififer la presence d'une <div> dans la premiere <div> de panier :
    //     18 - verififer la presence d'une balise <p> dans cette <div> :
    //     19 - verifier la presence d'une autre <div> dans la deuxieme <div> de panier :
    //     20 - verififer la presence d'une balise <a href> dans cette <div> :
    //     21 - verfifer la concordance du lien Url avec celui voulu : 
    //                              Valide
// code ///////////////////////////////////////////////////////////////////////////////////////////////////
        if (document.getElementsByTagName("main").item(0).childNodes.item(0).nodeName == "#text") {
            console.log("<h1> présence: OK")
            if (typeof (document.getElementsByTagName("main").item(0).childNodes.item(0).textContent) === typeof (dataProduit[x].name)) {
                console.log("type de valeur : OK")
                if (document.getElementsByTagName("main").item(0).childNodes.item(0).textContent.length === dataProduit[x].name.length) {
                    console.log("Nombre de caractere dans la chaine : OK") 
                    if (document.getElementById("TitreProduit").childNodes.item(0).textContent === dataProduit[x.name]){
                        console.log("nom produit : OK")
                        }else{console.log("error : Valeur du titre")}   
                }else { "error : length chaine <H1> "}
            }else { "error : type different "}
        } else (console.log("error : balise <h1>"))
        // ////////////////////////////////
        if (document.getElementById("ImageProduit").childNodes.item(0).tagName === "IMG") {
            console.log("Balise <img> : OK")
            if (document.getElementById("ImageProduit").childNodes.item(0).src === dataProduit[x].imageUrl) {
                console.log("image correspondante : OK")
            } else { console.log("error : image differente") }
        } else { console.log("error : <img>") }
        // ////////////////////////////////
        if (document.getElementById("DescriptionProduit").childNodes.item(0).tagName === "P") {
            console.log("Balise <p> : OK")
            if (document.getElementById("DescriptionProduit").childNodes.item(0).childNodes.item(0).nodeValue === dataProduit[x].description) {
                console.log("text correspondant : OK")
            } else { console.log("error : texte non correspondant") }
        } else { console.log("error : <p>") }
        // ////////////////////////////////
        if (document.getElementById("Options").childNodes.length === dataProduit[x].lenses.length) {
            console.log("Nombre d'options : OK")
            for (let i = 0; i < dataProduit[x].lenses.length; i++) {
                if (dataProduit[x].lenses.indexOf(document.getElementById("Options").childNodes[i].innerTEXT > -1)) {
                    console.log("valeur des options : OK")
                }
            }
        } else { console.log("error : <OPTIONS>") }
        // ////////////////////////////////
        if (document.getElementById("BtnProduit").childNodes.item(0).tagName === "BUTTON") {
            console.log("Presence Btn : OK")
            if (document.getElementById("BtnProduit").childNodes.item(0).childNodes.item(0).length > 2) { console.log("indication btn : OK") } else { "error : indication btn vide" }
        } else { "error btn" }
        // ////////////////////////////////
         if (document.getElementById("PrixProduit").childNodes.item(0).tagName === "P") {
            console.log("Balise <p> : OK")
            if (document.getElementById("PrixProduit").childNodes.item(0).textContent === dataProduit[x].price + " ¥") { console.log("Prix correspondant : OK") } else { console.log("error : Prix faux") }
        } else { console.log("error : balises <p> non presente") }
        // ////////////////////////////////
        if (document.getElementById("Panier").childNodes.length === 2) {
            console.log("2 <div> : OK")
            if (document.getElementById("Panier").childNodes.item(0).childNodes.item(0).tagName === "H2") {
                console.log("balise <h2> : OK")
            } else { console.log("error : <h2> absent") }
            if (document.getElementById("Panier").childNodes.item(1).childNodes.length === 2) {
                console.log(" 2 <div> : OK")
                if (document.getElementById("Panier").childNodes.item(1).childNodes.item(0).tagName === "DIV") {
                    console.log("balise <DIV P> : OK")
                    if (document.getElementById("Panier").childNodes.item(1).childNodes.item(0).childNodes.item(0).tagName === "P") { console.log("balise <p> : OK") } else { console.log("error : balise <p> absente") }
                } else { console.log("balise <DIV P> absente") }
                if (document.getElementById("Panier").childNodes.item(1).childNodes.item(1).tagName === "DIV") {
                    console.log("balise <DIV lien> : OK")
                    if (document.getElementById("Panier").childNodes.item(1).childNodes.item(1).childNodes.item(0).tagName === "A") {
                        console.log("balise <a href> : OK")
                        if (document.getElementById("Panier").childNodes.item(1).childNodes.item(1).childNodes.item(0).href === "http://127.0.0.1:5500/PageHTML/Panier.html") { console.log(" lien Url : OK") }else {console.log("error : lien Url no correspondant")}
                    } else { console.log("error : balise <a href absente") }
                } else { console.log("error : balise <DIV lien> absente") }

            } else { console.log("error : <div> absente dans le second container de panier") }

        } else { console.log("error : <div panier>") }
// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // fonction recupChoix                        L133-143    TU-7
    // //////////////////////////////////////////////////////////////////////////////////////////////////////////////  
    // doit retourner un tableau , vide ou plein dans DataStorage
    //  1 - créer un element du type Objet
    //  2 - comparer le typeof de DataStorage et de l'élement typeof"objet" 
    //  
// code ///////////////////////////////////////////////////////////////////////////////////////////////////
        let testUni7 = []
            if ( typeof(DataStorage) == typeof(testUni7) ){
                console.log("typeof datastorage est "+typeof(DataStorage) +" : OK " )
            }else { console.log("error : typeof(DataStorage")}
// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // fonction recupZE                       L165-179    TU-8
    // ////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
    // Doit retourner un "number" > 0 pour parametrer la variable ZE 
    //  1 - créer un element du type number
    //  2 - comparer le typeof de DataStorage et de l'élement typeof"number" 
    //  3 - comparer le nombre retourner dans ZE et le nombre d'article present sur le localstorage
// code ///////////////////////////////////////////////////////////////////////////////////////////////////
        let testUni8 = 5
            if (typeof (ZE) == typeof (testUni8)) {
                console.log("typeof variable ZE est " + typeof(ZE) + " : OK ")
                if (ZE === JSON.parse(localStorage.Article).length) {
                     console.log("valeur ZE : OK")
                     }
            } else{ console.log("error : typeof(ZE)")}
// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // fonction ZEchange                       L182-190    TU-9
    // ////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
    // Doit afficher la valeur de ZE sur la page Html au click bouton 
    //  1 - verifier qu'un texte est bien affiché dans l'element <p> de la div panier
    //  2 - verififer que le texte afficher affiche le bon nombre d'articles et la phrase voulu 
// code /////////////////////////////////////////////////////////////////////////////////////////////////////////////
            if (document.getElementById("Panier").childNodes.item(1).childNodes.item(0).childNodes.item(0).value = ! null) {
                console.log("text compteur : OK")
                if (document.getElementById("Panier").childNodes.item(1).childNodes.item(0).childNodes.item(0).textContent === ZE + " Articles dans votre panier") { console.log("valeur compteur : OK") }
            } else { console.log("error : text compteur absent") }
 // //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // push dans localStorage                  L192-194    TU-10
    // //////////////////////////////////////////////////////////////////////////////////////////////////////////////   
    // 1 - verifier qu'un objet avec le clée Article a bien été ajouté dans le local storage     
// code /////////////////////////////////////////////////////////////////////////////////////////////////////////////
    if (window.localStorage.article =! null) {console.log(" Article sur localStorage : OK")}else{console.log("error : Article non present sur le localStorage") } 

//  /////////////////////// PAGE PANIER ////////////////////////////////////////////////////////////////////////////
//  
// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// texte dans le <H1> et valeur du texte        L3-4    TU-11
// 1 - verififer si il y'a un node text attaché a <h1> :
// 2 - verififer la valeur du nodetext :
// 3 - verifier que le <h1> a une classe h1PagePanier  
// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// code ///////////////////////////////////////////////////////////////////////////////////////////////////////////
    if (document.getElementById("TitrePagePanier").childNodes.item(0).nodeType === 3){
        if (document.getElementById("TitrePagePanier").childNodes.item(0).nodeValue === "Votre Panier"){
            console.log(" ok")
            if (document.getElementById("TitrePagePanier").classList.contains("h1PagePanier") === true){
                console.log("classe : ok")
                }else{console.log("error : classe <h1>")}
            }else{console.log("error")}
    }else{console.log("error : nodeText non present")}
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  recuperation du localStorage                 L7-9  TU-12
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// verifier que l'on recupere un JSON :
// verififer que le JSON n'est pas vide :
// code   ////////////////////////////////////////////////////////////////////////////////////////////////////////
    if (typeof valueurJSON === "object") {
        console.log("recuperation JSON : OK")
        if (valueurJSON.length > 0) { console.log("JSON.lengt > 0 : OK") } else { console.log("error : JSON vide") }
    } else { console.log("error : recuperation JSON") }
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //  TEST SUPPRESSION localStorage                   L15-19 TU-13
    // ////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // au click doit effacer le localStorage
// code ///////////////////////////////////////////////////////////////////////////////////////////////////////////
 if (localStorage.length === 0){console.log("suppression localStorage : OK")}else{console.log("error : non suppression local")} 
// //////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  création du bon nombre de <div>             L20-63  TU-14
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Pareil que TU-2 et TU-3
    // ///////////////////////////////////////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// création element + calcul du prix TT         L76-94  TU-15
// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Pour la création d'element voir TU anterieur:
// ...
//      - doit retourner le total des sommes des articles selectionnés et l'afficher dans la <div calculPTT>
//      (incremente une variable avec une autre variable pour obtenir le PTT)
//   
// tester si la variable calculduTotal est de type number
//      tester si la valeur de TT + calculduTotal === TT a chaque fin d' iteration
// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// code ///////////////////////////////////////////////////////////////////////////////////////////////////////////
        if (typeof calculduTotal === "number") {
            console.log(" Number : OK")
            if ((TT + calculduTotal) === TT) { console.log("I++ : OK") } else { "error : no incrementation" }
        } else { console.log("error : is not Number") }
// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// afficher le formulaire                       L102-109  TU-16
// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////  
    // doit afficher le formulaire au click sur btn "Poursuivr...."
    //  test visuel + test propriété "display"
// code //////////////////////////////////////////////////////////////////////////////////////////////////////////     
 if(document.getElementById("formeHiden").style.display === "block"){console.log("affichage : OK")}else{console.log("error : display none")}
// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// fonction recupeETenvoie                      L143-275  TU-17 
// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // doit creer 5 variables contant de valeur "string" (regex control)
    // doit créer un tableau product contenant les id de tout les produit dans le panier
    //      tester la le typeof product
    //          tester la product.length et la comparer au localstorage(=panier)
    // 
    //  
// code //////////////////////////////////////////////////////////////////////////////////////////////////////////
if (typeof products === "object") {
            console.log("objet tableau ; OK")
            if (products.length === valueurJSON.length) { console.log(' nombre ID : OK') }
        } else { console.log(" products is not []") }