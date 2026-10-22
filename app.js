let person = [
  {id:1, age: 16, hasTicket: true, withAdult: true,},
  {id:2, age: 12, hasTicket: true, withAdult: true,},
  {id:3, age: 13, hasTicket: true, withAdult: false,}
]

let age = 14
let hasTicket = true

if (person[2].hasTicket === true) {
  if (person[2].age >=15 || person[2].withAdult == true) {
    console.log("välkommen in i BIO")
  } else {
    console.log('Du är för ung och behöver en vuxen med dig')
  }
} else {
  console.log('köp biljett försst')
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


const trafficLight = 'röd';

switch (trafficLight) {
  case 'grön': 
    console.log('Kör!') 
    break
  case 'gul': 
    console.log('Gör dig redo')
    break
  case'röd':
    console.log('Stanna!')
    break

  default: 
    console.log('Okänd signal')
}