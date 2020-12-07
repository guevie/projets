const character = {
    id: 0,
    firstname: "John",
    lastname : "Snow", 
    lives:{
        city: "Wintefell"
    }
}

const character2 = {
    id: 1,
    firstname: "Guelord",
    lastname : "Ngoma Yombo", 
    lives:{
        city: "Boissy Saint Leger"
    }, 
    isAlive: false
}
// const firstname = character.firstname
// //console.log(firstname)
// const lastname = character.lastname
// //console.log(lastname)
// const id = character.id
// const city = character.lives.city
// console.log(id + " " + firstname + " " + lastname)

// autrement 
//destructuration 
const {id, firstname : prenom, lastname, lives : {city : Ville}, isAlive = true} = character
console.log(id, prenom, lastname, Ville, isAlive )
const {id: id2, firstname : prenom2, lastname : lastname2, lives : {city : Ville2}, isAlive : isAlive2 = true} = character2
console.log(id2, prenom2, lastname2, Ville2, isAlive2 )

//dynamique key 
const dynamicKey = "surname"
const tyrion = {
    id: 2,
    firstname: "Samuel",
    lastname : "NGOMA YOMBO", 
    [dynamicKey]: "Guevie", 
    lives:{
        city: "Boissy Saint Leger"
    }, 
}
const gender = "male" //genre en francais 
const tyrion2 = {
 ...tyrion, 
 lives:{
     city: "Kinshasa", 
 },
 gender,    
}

console.log(tyrion)
console.log(tyrion2)

//fonction parametre par defaut

const sayHello = (name = "NGOMA YOMBO") => {
    console.log(`Hello ${name.toUpperCase()}`)}

    sayHello()
    sayHello("Guelord")

   // Rest Operator 

   const add = (...nombres) => {
       let total = 0
       for(const n of nombres){
           total += n 
       }
       console.log(total)
   }

   add(5 , 6)
   add(1, 4, 3)
   add()