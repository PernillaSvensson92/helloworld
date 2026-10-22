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



const weather = 'regn';

switch (weather) {
case 'regn':
  console.log('Ta med dig paraply')
  break
case 'sol' :
  console.log('Glöm inte solglasögon')
  break
case 'snö' :
  console.log('Ta på dig en varm jacka')
  break 
default :
  console.log('Kolla väderappen igen')     
}


// for loop (hjälper till med repetition)

/*console.log('1')
console.log('2')
console.log('3')
console.log('4')*/


for (let i = 1; i < 6; i++) {
console.log(i)
}


const fruits = ['Banan', 'Äpple', 'Körsbär']

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i])
}

// while loop

let energi = 3

while (energi > 0) {
  console.log('Sprang ett varv! Energi kvar' + energi)
  energi--
}
console.log('Slut på energi! Måste vila') 

// Array med student-objekt

const elever = [
  { namn: 'Anna', poang: 85},
  { namn: 'Erik', poang: 92},
  { namn: 'Sara', poang: 78}
]

// for loop med i
for (let i = 0; i < elever.length; i++) {
  console.log(elever[i].namn + ' fick ' + elever[i].poang + ' poäng!')
}

// Nya sättet att skriva foor-loop på när det är objekt i en Array. ofta vill man använda
//  med i ändå föR att kunna komma åt en specifik plats i min array och eventuellt 
// köra en if sats
for (const elev of elever) {
  console.log(elev.namn + ' fick ' + elev.poang + ' poäng!')
} 


// Raketnedräkning

for ( let i = 5; i >= 1 ; i--) {
  if (i === 3) {
    console.log(i + '- Halvvägs kvar!')
  } else {
    console.log('Sekunder kvar:' + i)
  }
}
console.log('LIFTOFF!')

// Inköpskollan med Array

const cart = ['Mjölk', 'Godis', 'Bröd', 'Godis', 'Äpple']

for (vara of cart) {
  if (vara === 'Godis') {
    console.log('⚠️ Varning: Onödig vara!')
  } else {
    console.log('köp: ' + vara)
  }
}