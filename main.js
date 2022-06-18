// function someFunc(UserObjects) {
//     UserObjects.forEach(user => {
//         if (user.age > 18) {
//             console.log('hello');
//         }
    
//     });
// }
// someFunc([{name:'asi',age:20}]);

// let clement = document.getElementsByClassName("firstclass");
//     for (const i of clement){
//         console.log(i);
//     }


// function btnColors() {
//  let changingCol = document.getElementsByClassName("chanching");
// for(let item of changingCol){
//     item.style.color = "blue";
//     item.innerText = "hello";
// }
// }
// Btn.addEventListener("click",changingCol)


// let person ={
//     name:'avi',
//     lastName:'cohen',
//     age:50,
//     height:170,
// }

// for(let item in person){
//     console.log(person);
//     console.log (person[item])
// }

let dateUser = document.getElementsByClassName('nameFromUser').value;    
//  document.getElementsByClassName("FromUser").value;
// let ageUser = getElementsByClassName('FromUser').value;
let person = {
   firsname:"",
   lastName:"",
   age:""
};
function submitBtn() {
    for (let i = 0; i < 3; i++) {
        for(let item in dateUser )
        console.log(dateUser[item]);
    }

}





