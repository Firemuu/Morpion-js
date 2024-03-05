
function relance(){
    location.reload();
}

tour = 1; //varie entre 0 et 1
vide = -1;
casevide = 9;
jeuFini=false;
plateau=[[vide,vide,vide],[vide,vide,vide],[vide,vide,vide]]
images=["Transparent_X.png","O-Jolle_insigna.png"];

function gagne(ligne,colonne){
    if(plateau[ligne][0]==plateau[ligne][1] && plateau[ligne][0]==plateau[ligne][2]){
        jeuFini = true;
        alert("bien joué");
        return true;
    }
    if(plateau[0][colonne] == plateau[1][colonne] && plateau[0][colonne] == plateau[2][colonne]){
        jeuFini = true;
        alert("bien joué");
        return true;
    }
    if(plateau[0][0]!= vide && plateau[0][0] == plateau[1][1] && plateau[0][0] == plateau[2][2]){
        jeuFini = true;
        alert("bien joué");
        return true;
    }
    if(plateau[0][2]!= vide && plateau[0][2] == plateau[1][1] && plateau[0][2] == plateau[2][0]){
        jeuFini = true;
        alert("bien joué");
        return true;

    }
    if(casevide == 0){
        jeuFini = true;
        alert("match nul");
        return true;
    }

}

function jouer(image,ligne,colonne){
    if(jeuFini){
        return;
    }
    if(plateau[ligne][colonne]!=vide){
        alert("Case déjà occupée !!");
        return;
    }
    //clique validé
    plateau[ligne][colonne]=tour;
    image.src=images[tour%2];
    casevide = casevide -1;

    gagne(ligne,colonne);

    tour = (tour+1)%2;

}

