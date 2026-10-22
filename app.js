let person = [
  {id:1, age: 16, hasTicket: true, withAdult: true,},
  {id:2, age:12, hasTicket: true, withAdult: false,},
]

let age = 14
let hasTicket = true


if (person[1].age >=15 && hasTicket === true) {
  console.log("välkommen in i BIO")
} else {
  console.log('gå och köp ticket')
}


const isLoggedIn = true;
const userRole = 'admin';

if (isLoggedIn === true) {
  if (userRole === 'admin') {
    console.log('välkommen admin')
  } else {
    console.log('välkommen vanlig användare')
  }
} else {
  console.log('Du måste logga in först')
}