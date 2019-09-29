// console.log("Test completed")

let radias = 10;
const pi = 3.1416;

let result = pi * radias**2; // Area = pi*r^2 

console.log(result);

const title = 'The best Website 2019';
const author = 'Shimul';
let likes = 400;

// Concatenation way in Template String

let results = `The blog called ${title} by ${author} has ${likes} likes`;

console.log(results);

// Concatenation way in HTML Templates

let html = `

    <h2>${title}</h2>
    <p>By ${author}</p>
    <span>The blog has ${likes} likes</span>
`;
console.log(html);



// forEach() - is a method which iterate over an array
let people = ['Shimul', 'Martuza', 'Hasin', 'Samiul', 'Soton'];

const logPerson = (person, number) => {
    console.log(`${number} - Hello ${person}`);
}
people.forEach(logPerson);



// Get a reference to the ul

const ul = document.querySelector('.people')

const peopleNew = ['Shimul', 'Martuza', 'Hasin', 'Samiul', 'Soton'];

let htmlNew = ``;

people.forEach(person => {
    htmlNew += `<li style="color:purple">${person}</li>`
});

console.log(htmlNew);

ul.innerHTML = htmlNew;

// Object literals

let user = {
    name: 'Shimul',
    age: '24',
    email: 'mart.shimul@gmail.com',
    location: '53/4, Mehedibag, Dhaka-1207'
};

console.log(user.name);
console.log(user['name']);

user['name'] = 'Martuza';

console.log(user['name']);
console.log(typeof user);