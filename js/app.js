// Access DOM Elements
const confirmBtn = document.getElementById('confirmBtn');
const totalDisplay = document.getElementById('total');
const cartSubtotal = document.getElementById('cartSubtotal');
const menuDiv = document.querySelectorAll('.menu-div');
const receipt = document.getElementById('receipt');

// set subtotal & tax
let subtotal = 0
let tax = 0.07

// grab the menu types
const menuTypes = [
    "appetizers",
    "entrees",
    "drinks",
    "desserts",
    "sides"
]

// create menu items, array of objects
const menuItems = [
    {
        id: 1,
        type: "appetizers", 
        item:  "gyoza",
        desc: "pan fried dumplings",
        imgUrl: 'gyoza.jpg',
        price: 9.99,
        qty: 0
    },
    {
        id: 2, 
        type: "appetizers",
        item: "chicken skewers",
        desc: "grilled chicken coated in a sauce",
        imgUrl: 'chickenyakitori.jpeg',
        price: 7.99,
        qty: 0
    },
    {
        id: 3,
        type: "appetizers",
        item: "cucumber salad",
        desc: "cold cucumber salad with soy sauce",
        imgUrl: 'cucumber-salad.jpg',
        price: 5.99,
        qty: 0
    },
    {
        id: 4, 
        type: "appetizers",
        item: "smoked salmon sushi",
        desc: "pressed with rice with wasabi",
        imgUrl: 'smokedsalmon.jpeg',
        price: 5.99,
        qty: 0
    },
    {
        id: 5,
        type: "entrees",
        item: "ramen",
        desc: "",
        imgUrl: 'misoramen.jpg',
        price: 14.99,
        qty: 0
    },
    {
        id: 6,
        type: "entrees",
        item: "miso soup",
        desc: "fermented soybeans and dashi broth",
        imgUrl: 'misosoup.jpg',
        price: 12.99,
        qty: 0
    },
    {
        id: 7,
        type: "entrees",
        item: "udon",
        desc: "thick noodles served with a healing broth",
        imgUrl: 'udon.jpg',
        price: 15.99,
        qty: 0
    },
    {
        id: 8,
        type: "entrees",
        item: "tempura",
        desc: "fried fish, meat, or vegetables",
        imgUrl: 'tempura.jpg',
        price: 18.99,
        qty: 0
    },
    {
        id: 9,
        type: "desserts",
        item: "custard pudding",
        desc: "cold custard pudding with caramel sauce",
        imgUrl: 'custardpudding.jpg',
        price: 9.99,
        qty: 0
    },
    {
        id: 10,
        type: "desserts",
        item: "manju",
        desc: "sweet dough bun with sweet paste filling",
        imgUrl: 'manju.jpg',
        price: 7.99,
        qty: 0
    },
    {
        id: 11,
        type: "desserts",
        item: "mochi ice cream",
        desc: "mochi with ice cream filling",
        imgUrl: 'mochiice.jpg',
        price: 6.99,
        qty: 0
    },
    {
        id: 12,
        type: "desserts",
        item: "melonpan",
        desc: "soft bread with a thin layer of sweet & crispy cookie dough",
        imgUrl: 'melonpan.jpg',
        price: 5.99,
        qty: 0
    },
    {
        id: 13,
        type: "drinks",
        item: "cola",
        desc: "cola",
        imgUrl: '',
        price: 1.00,
        qty: 0
    },
    {
        id: 14,
        type: "drinks",
        item: "melon soda",
        desc: "melon soda",
        imgUrl: '',
        price: 1.00,
        qty: 0
    },
    {
        id: 15,
        type: "drinks",
        item: "sweet tea",
        desc: "sweet tea",
        imgUrl: '',
        price: 1.00,
        qty: 0
    },
    {
        id: 16,
        type: "drinks",
        item: "sweet tea",
        desc: "sake",
        imgUrl: '',
        price: 1.99,
        qty: 0
    },
    {
        id: 17,
        type: "sides",
        item: "tamagokyaki",
        desc: "rolled omeletted",
        imgUrl: '',
        price: 2.99,
        qty: 0
    },
    {
        id: 18,
        type: "sides",
        item: "broccoli",
        desc: "blanched with sesame oil",
        imgUrl: '',
        price: 1.25,
        qty: 0
    },
    {
        id: 19,
        type: "sides",
        item: "rice",
        desc: "bowl of rice",
        imgUrl: '',
        price: 1.00,
        qty: 0
    },
    {
        id: 20,
        type: "sides",
        item: "kani salad",
        desc: "cooling cucumber, sweet corn, imitation crab, and lettuce in a creamy japanese mayo",
        imgUrl: '',
        price: 3.99,
        qty: 0
    }
]

//confirm button
confirmBtn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('click');
})

//load the menu items
menuDiv.forEach(div => {
    const menuSubheading = document.createElement('h3');
    menuSubheading.classList.add('menu-subheading', 'text-capitalize');

    const row = document.createElement('div');
    row.classList.add('row');

    div.appendChild(menuSubheading);
    div.appendChild(row);
})

for (let i = 0; i < menuTypes.length; i++) {
    menuDiv[i].children[0].innerText = menuTypes[i]
    menuDiv[i].children[1].setAttribute('id', `${menuTypes[i]}Row`)
    console.log(menuDiv[i]);
}

//grab the appRow
const appRow = document.getElementById('apptizersRow');
const entreesRow = document.getElementById('entreesRow');
const drinksRow = document.getElementById('drinksRow');
const dessertsRow = document.getElementById('dessertsRow');
const sidesRow = document.getElementById('sidesRow');

// build cols and cards
menuItems.forEach(item => {
    // do stuff
    const column = document.createElement('div')
    column.classList.add('col-sm-3')

    const card = document.createElement('div')
    card.classList.add('card')

    card.innerHTML = `
        <img src="images/${item.imgUrl}" alt="${item.desc}" class="img-fluid menu-image card-image top" />
        <div class="card-body">
            <h4 class="card-title text-capitalize item-item">${item.item}</h4>
            <p class="card-text text-uppercase item-desc">${item.desc}</p>
        </div>
    `
})