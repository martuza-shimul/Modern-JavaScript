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
    location: '53/4, Mehedibag, Dhaka-1207',
    blogs: ['How to be a webDeveloper in 3 months', 'Front-end developer in 6 months', 'Learn React in 45 hours training'], 

    // nested objects. objects in an array
    newBlogs: [
        {
            title: 'How to be a software Developer in 3 months',
            likes: 40
        },
        {
            title: 'Back-end developer in 6 months',
            likes: 50
        }
    ], 
    /*login: function(){
        console.log('User logged in');
    },
    logout: function(){
        console.log('User logged out');
    },
    logBlogs: function(){
        // console.log(this.blogs);
        console.log('This user has written the following blogs:');
        this.blogs.forEach(blog => {
            console.log(blog);
        })
    }
    */

    /*       Shorthand version of above regular function
    *************************************************************** */
    login(){
        console.log('User logged in');
    },
    logout(){
        console.log('User logged out');
    },
    logBlogs(){
        // console.log(this.blogs);
        console.log('This user has written the following blogs:');
        this.blogs.forEach(blog => {
            console.log(blog);
        });
        console.log('This user has written the following new blogs:');
        this.newBlogs.forEach(newBlog => {
            console.log(`Title: ${newBlog.title},  ${newBlog.likes} likes`);
        })
    }
};

console.log(user.name);
console.log(user['name']);

user['name'] = 'Martuza';

console.log(user['name']);
console.log(typeof user);

user.login();
user.logout();
user.logBlogs();



/*                        async / await / fetch
**************************************************************************/
async function fetchUser() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');

    const data = await res.json();

    console.log(data);

    data.forEach(newData => console.log(newData.name));

    
};

fetchUser();
// console.log(fetchData);


/* JavaScript Higher Functions 
==========================================*/

const companies= [
    {name: "Company One", category: "Finance", start: 1981, end: 2004},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];

const ages = [12, 33, 43, 34, 21, 11, 18, 20, 49, 55, 67, 32, 25, 10, 53, 61];

// filter function uses

// const canDrink = ages.filter( age => {
//     if(age >= 21){
//         return true;
//     }
// });


const canDrink = ages.filter( age => age >= 21); // shorthand of above code

console.log(canDrink);


// Filter the retail company

const retailCompany = companies.filter(company => company.category === 'Retail');

console.log(retailCompany);

retailCompany.forEach(newData => console.log(newData.name));

// Filter the 80's company

const firstCompanies = companies.filter(company => company.start >=1980 && company.start < 1990);
console.log(firstCompanies);
firstCompanies.forEach(newData => console.log(`${newData.name} starts from ${newData.start}`));

// Get companies that lasted 10 years or more

const lastedTenYears = companies.filter(company => company.end - company.start >= 10);
console.log(lastedTenYears);
lastedTenYears.forEach(newData => console.log(`${newData.name} lasted 10 years or more`));


/*map function
=========================== */

// Create array of company names

const companyNames = companies.map(company => company.name);
console.log(companyNames);

const agesTimesTwo = ages.map(age => age * 2);
console.log(agesTimesTwo);


/*sort Function
================================ */

// const sortedCompanies = companies.sort(function(c1, c2){
//     if(c1.start > c2.start){
//         return 1;
//     }else {
//         return -1;
//     }
// });

// Shorthand of above code
// const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));

const sortedCompanies = companies.sort((a, b) => (a.start - b.start));//another condition
console.log(sortedCompanies);


/*reduce function
================================================================================================================== */

// using for loop
// let ageSum = 0;
// for(let i = 0; i < ages.length; i++){
//     ageSum += ages[i];
// }

// using reduce
// const ageSum = ages.reduce(function(total, age){
//     return total + age;
// }, 0);

// shorthand
const ageSum = ages.reduce((total, age) => total + age, 0);

console.log(ageSum);