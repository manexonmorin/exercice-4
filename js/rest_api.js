(function(){

    // let bouton = document.getElementById('bout_nouvelles');
    let nouvelles = document.querySelector('.nouvelles section');
    // console.log(bouton.id);
    
    // bouton.addEventListener('mousedown', monAjax);
    window.addEventListener('load', monAjax);
    function monAjax(){

        let maRequete = new XMLHttpRequest();
        console.log(maRequete);
        maRequete.open('GET', 'http://localhost/4w4-1/wp-json/wp/v2/posts');
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
}())