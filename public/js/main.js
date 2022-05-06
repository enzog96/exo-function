//exo1

// function reversedNum(){
//    let numero = prompt("Gimme a number !").split("").reverse().join("");
//    alert(numero)
//    return ;
    
// }
// reversedNum()


//exo 2

// function divPar2(){
//     let numero = prompt("Gimme a number !");
//     let divide = numero % 2 ;

//     switch (divide) {
//          case 0 :
//              alert("Le " + numero + " est un multiple de 2.");
//              break;
//          case 1 :
//              alert("Le " + numero + " n est pas un multiple de 2");
//              break ;
//          default :
//              alert("Ceci n est pas un nombre")
//              break;
            
// }
//         return;
// }

// divPar2();

//exo 3

// function logIn(){
//     let question = prompt("Please enter your password")

//     while(question != "mdp"){
//         question = prompt("Please enter your password") 
//         if (question === "mdp"){
//             alert("You in")
//         }else if (question != "mdp")
//             alert("try again")
//     }  
// }
// logIn()

//exo3-1

// function calcul(){
//     let num1 = +prompt("Gimme a number")
//     let num2 = +prompt("And an other one")
//     let result = (num1 + num2)
    
//     console.log(result)
//     return;
// }
// calcul()

//exo3-2

// function calcul(){
//     let num1 = +prompt("Gimme a number")
//     let num2 = +prompt("And an other one")
//     let result = (num1 - num2)

//     console.log(result)
//     return;
// }
// calcul()

//exo3-3

// function calcul(){
//     let num1 = +prompt("Gimme a number")
//     let num2 = +prompt("And an other one")
//     let result = (num1 * num2)

//     console.log(result)
//     return;
// }
// calcul()

//exo3-4

// function calcul(){
//     let num1 = +prompt("Gimme a number")
//     let num2 = +prompt("And an other one")
//     let result = (num1 / num2)

//     console.log(result)
//     return;
// }
// calcul()

//exo3-5

// function calcul(){
//     let num1 = +prompt("Gimme a number")
//     let num2 = +prompt("And an other one")
//     let result = (num1 % num2)

//     console.log(result)
//     return;
// }
// calcul()


//exo3-6

// function calcul(){
//     let num1 = +prompt("Gimme a number")
//     let result = Math.pow(num1,2)
    
//     console.log(result)
//     return;
// }
// calcul()

//exo3-7


// function calcul(){
//     let num1 = +prompt("Gimme a number")
//     let num2 = +prompt("And an other one")
//     let result = Math.sqrt(num1 + num2)

//     console.log(result)
//     return;
// }
// calcul()

//exo3-8

// function capitalize(){
//     let text = prompt("Gimme some content")
    
//     console.log(text.charAt(0).toUpperCase() + text.slice(1).toLowerCase())
// }

// capitalize()

//exo3-9

// function calcul(){
//     let nbr1 = +prompt("gimme a number")
//     let operator = prompt("Gimme an operator between + - * /")
//     let nbr2 = +prompt("And an other number")

//     switch(operator) {
//         case '+':
//             result = nbr1 + nbr2;
//             alert(`${nbr1} + ${nbr2} = ${result}`);
//             break;
//         case '-':
//             result = nbbr2;
//             alert(`${nbr1} - ${nbr2} = ${result}`);
//             break;
//         case '*':
//             result = nbr1 * nbr2;
//             alert(`${nbr1} * ${nbr2} = ${result}`);
//             break;
//         case '/':
//             result = nbr1 / nbr2;
//             alert(`${nbr1} / ${nbr2} = ${result}`);
//             break;
    
//         default:
//             console.log('Invalid operator');
//             break;
//     }
// }



// calcul()

//exo 4

// let coddingSchoolX = [];

// function addppl(){
//     let question = prompt("Gimme a name");
//     coddingSchoolX.push(question)
//     console.log(coddingSchoolX)
//     return
// }

// addppl()
// addppl()
// addppl()


// function removeppl(){
//     let question2 = prompt("Remove a name");
//     for(i = 0; i < coddingSchoolX.length; i++){
//         if (question2 === coddingSchoolX[i]){
//             coddingSchoolX.splice(i,1)
//             console.log(coddingSchoolX)
//         }
//     } 
// }

// removeppl()



