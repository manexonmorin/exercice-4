(function(){

    // let bouton = document.getElementById('bout_nouvelles');
    let nouvelles = document.querySelector('.nouvelles section');
    // console.log(bouton.id);
    
    // bouton.addEventListener('mousedown', monAjax);
    window.addEventListener('load', monAjax);
    function monAjax(){

        let maRequete = new XMLHttpRequest();
        console.log(maRequete);
        maRequete.open('GET', monObjJs.URLDomaine + '/wp-json/wp/v2/posts?per_page=3');
        maRequete.onload = function () {
            console.log(maRequete);
            if (maRequete.status >= 200 && maRequete.status < 400) {
                let data = JSON.parse(maRequete.responseText);
                let chaine = ''
    
                for (const elm of data){
                    chaine += '<h2>' + elm.title.rendered + '</h2>';
                    chaine += elm.content.rendered;
                }
                nouvelles.innerHTML = chaine;
            }
            else {
                console.log('La connexion est faite mais il y a une erreur')
            }
        }
        maRequete.onerror = function () {
            console.log("erreur de connexion");
        }
        maRequete.send()
    }
/*-------------------------------------------------------------
Traitement de l'ajout d'un article de catégorie « Nouvelles » 
---------------------------------------------------------------*/

bouton_ajout = document.getElementById('bout-rapide')
bouton_ajout,addEventListener('mousedown', function(){
    console.log('ajout')
    let = monArticle = {
        "title" : document.querySelector('.admin-rapide [name="title"]').Value,
        "content" : document.querySelector('.admin-rapide [name="content"]').Value,
        "status" : "publish", 
        "categories" : [33]
    }

    console.log(JSON.stringify(monArticle))
    let creerArticle = new XMLHttpRequest()

    creerArticle.open("POST", monObjJs.URLDomaine + 'wp-json/wp/v2/posts')
    creerArticle.setRequestHeader("X-WP-Nonce", monObjJs.nonce)
    creerArticle.setRequestHeader("Content-Type", "application/json;charset=UTF8-8")
    creerArticle.send(JSON.stringify(monArticle)) // transmettre la requete au serveur
    creerArticle.onreadystatechange = function(){

        if(creerArticle.readyState == 4){
            if(creerArticle.status == 201){
                document.querySelector('.admin-rapide [name="title"]').Value = ''
                document.querySelector('.admin-rapide [name="content"]').Value = ''
            }
            else{
                alert('Erreur réessayez')
            }
        }
    }
})

}())