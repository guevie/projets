const add = (a,b) => a + b


console.log(add(2 , 2))

/* Créer une fonction getUser qui me renvoie un utilisateur:
	{
		firstname: "John",
		lastname: "Doe",
	}
*/

const getUser = () => {
    let firstname = "John"
    let lastname = "Doe"

   // return `Le prenom est : ${firstname} et le nom est ${lastname}`
   return `{firstname: ${firstname} , lastname: ${lastname}`
} 
console.log(getUser()); 

//autrement 

const getUser2 = () => ({
    firstname: "John",
    lastname: "Doe", 
})
console.log(getUser2())

const getUser3 = () => {
    return{
        firstname: "John",
        lastname: "Doe", 
    }
    
}
console.log(getUser())
