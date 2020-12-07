// la dfference entre var et let
// var sa porte ne pas globale et let a une portée globale 
//avec var nous pouvons declarer une variable deux fois dans une 
//même fonction parcontre avec let pas possible 
//la portee de var est la fonction 
//Alors la porte de let est le bloc

//une fonction qui s'appelle elle-même
(function test(){
   var prenom = "Guelord"
   var prenom = "Samuel"
    console.log(prenom);
    
    if(true){
        var job = "dev"
        let prenom2 = "Guelord-Samuel"
        //let doir etre declaré dans le bloc 
        //d'une instruction pour qu'il soit declaré
        console.log(prenom2)
    }
    //parcontre var ne tient pas compte de cette condition
    console.log(job)
    //console.log(prenom2)
})()

//const - la portée est comme pour let, celle du bloc - de plus, je ne peux pas redéfinir le contenu de const

const pi = 3.14159

const animaux =["chien","chat"]
console.log(animaux)
animaux.pop();  //supprimer la derniere entrée 
console.log(animaux) 
animaux.push('cheval') //ajouter une valeur dans le tableau 
console.log(animaux)
