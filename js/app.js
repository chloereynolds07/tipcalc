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
        imgUrl: 'cola.jpeg',
        price: 1.00,
        qty: 0
    },
    {
        id: 14,
        type: "drinks",
        item: "melon soda",
        desc: "melon soda",
        imgUrl: 'melonsoda.jpeg',
        price: 1.00,
        qty: 0
    },
    {
        id: 15,
        type: "drinks",
        item: "green tea",
        desc: "green tea",
        imgUrl: 'greentea.jpeg',
        price: 1.00,
        qty: 0
    },
    {
        id: 16,
        type: "drinks",
        item: "sake",
        desc: "sake",
        imgUrl: 'sake.jpeg',
        price: 1.99,
        qty: 0
    },
    {
        id: 17,
        type: "sides",
        item: "tamagoyaki",
        desc: "rolled omeletted",
        imgUrl: 'tamagoyaki.jpeg',
        price: 2.99,
        qty: 0
    },
    {
        id: 18,
        type: "sides",
        item: "broccoli",
        desc: "blanched with sesame oil",
        imgUrl: 'broccoli.jpeg',
        price: 1.25,
        qty: 0
    },
    {
        id: 19,
        type: "sides",
        item: "rice",
        desc: "bowl of rice",
        imgUrl: 'rice.jpeg',
        price: 1.00,
        qty: 0
    },
    {
        id: 20,
        type: "sides",
        item: "kani salad",
        desc: "cooling cucumber, sweet corn, imitation crab, and lettuce in a creamy japanese mayo",
        imgUrl: 'kani.jpeg',
        price: 3.99,
        qty: 0
    }
]

//confirm button
confirmBtn.addEventListener('click', (e) => {
    e.preventDefault();
    // console.log('click');
    getTotal()
})

// getTotal()
const getTotal =()=> {

    const subTotal = parseFloat(cartSubtotal.innerText)
    const tipAmt= parseFloat(document.getElementById('tipAmt').value)
    const otherAmt = parseFloat(document.getElementById('otherAmt').value)
    const yourTip = document.getElementById('yourTip')
    const theSubtotal = document.getElementById('theSubtotal')
    const taxDisplay = document.getElementById('tax')

    let taxTotal = subtotal * tax

    let receiptTip = isNaN(tipAmt) ? otherAmt : (subtotal * tipAmt)

    let total = isNaN(tipAmt) ? subtotal + otherAmt + taxTotal : 
    receiptTip + subtotal + taxTotal

    theSubtotal.innerText = subtotal
    taxDisplay = taxTotal.toFixed(2)
    yourTip.innerText = receiptTip.toFixed(2)
    totalDisplay.innerText = total.toFixed(2)
}

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
const appRow = document.getElementById('appetizersRow');
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
    card.classList.add('card', 'h-100')

    card.innerHTML = `
        <img src="images/${item.imgUrl}" alt="${item.desc}" class="img-fluid menu-image card-image top" />
        <div class="card-body">
            <h4 class="card-title text-capitalize item-item">${item.item}</h4>
            <p class="card-text text-uppercase item-desc">${item.desc}</p>
        </div>
        <footer class="card-footer">
        <p class="card-text item-price">$${item.price}</p>
        <div class="buttons-div d-flex justify-content-around">
            <button class="btn btn-success cart-btn text capitalize" id="Btn${item.id}" data-id="${item.id}" data-price="${item.price}" data-qty="${item.qty}" data-item="${item.item}">add to cart</button>
            <div class="qty-div">
                <button class="btn btn-dark btn-subtract" id="btnSubtract${item.id}" data-id="${item.id}" data-qty="${item.qty}"> - </button>
                <span class="quanity" id="quanity${item.id}">${item.qty}</span>
                <button class="btn btn-dark btn-add" id="btnAdd${item.id}" data-id="${item.id}" data-qty="${item.qty}"> + </button>
            </div>
        </div>
        </footer>
    `

    column.appendChild(card)

    // switch (menuItems.type)
    switch (item.type) {
        case 'appetizers':
            appRow.appendChild(column)
            break
        case 'entrees':
            entreesRow.appendChild(column)
            break
        case 'drinks':
                drinksRow.appendChild(column)
                break
        case 'desserts':
                dessertsRow.appendChild(column)
                break
        case 'sides':
            sidesRow.appendChild(column)
            break
        default:
            console.log('Error: Menu type is not listed')
            break
    }
})

// cart buttons 
const cartButtons = document.querySelectorAll('.cart-btn');
// console.log(cartButtons);

cartButtons.forEach(button => {

    const price = parseFloat(button.getAttribute('data-price'))
    const item = button.getAttribute('data-item')
    const id = parseFloat(button.getAttribute('data-id'))

    button.addEventListener('click', ()=> {
        let qty
        for (let i = 0; i < menuItems.length; i++) {
            menuItems[i].id === id ? qty = menuItems[i].qty : null
        }

        // console.log(button.getAttribute('data-qty'))

        if (button.getAttribute('data-qty') > 0) {
            addItems(price, qty, item, id)
        }
    })
})

// addItems()
let receiptArray = []

const addItems =(price, qty, item, id)=> {

    let itemObj = {
        id: id,
        item: item,
        qty: qty,
        price: price,
        itemTotal: qty = price
    }

    receiptArray = {...receiptArray, itemObj}
    //makeReceipt
    makeReceipt(itemObj, receipt)

    subtotal+= itemObj.itemTotal
    cartSubtotal.innerText = subtotal.toFixed(2)
}

//makeReceipt()
const makeReceipt =(obj, el)=> {
    const tableRow = document.createElement('tr')
    tableRow.classList.add('receipt-item')

    const receiptChoice = document.createElement('td')
    receiptChoice.classList.add('receipt-choice', 'text-center')
    receiptChoice.innerText = obj.item

    const receiptQty = document.createElement('td')
    receiptQty.classList.add('receipt.qty', 'text-center')
    receiptQty.setAttribute('id', `qty-${obj.id}`)
    receiptQty.innerText = obj.qty

    const receiptPrice = document.createElement('td')
    receiptPrice.classList.add('receipt-price', 'text-center')
    receiptPrice.innerText = obj.price

    const itemSubtotal = document.createElement('td')
    itemSubtotal.classList.add('item-subtotal', 'text-center')
    itemSubtotal.setAttribute('id', `subTotal${obj.id}`)
    itemSubtotal.innerText = obj.itemTotal.toFixed(2)

    tableRow.appendChild(receiptChoice)
    tableRow.appendChild(receiptQty)
    tableRow.appendChild(receiptPrice)
    tableRow.appendChild(itemSubtotal)

    el.appendChild(tableRow)
}

const btnSubtract = document.querySelectorAll('.btn-subtract')
const btnAdd = document.querySelectorAll('.btn-add')

btnSubtract.forEach(button => {
    button.addEventListener('click', ()=> {
        const btnId = parseFloat(button.getAttribute('data-id'))
        const spanQty = document.getElementById(`quanity${btnId}`)

        for (let i = 0; i < menuItems.length; i++) {
            if (menuItems[i].id === btnId && menuItems[i], qty > 0) {
                menuItems[i].qty-= 1
                spanQty.innerText = menuItems[i].qty
            }
        }
    })
})

btnAdd.forEach(button => {
    button.addEventListener('click', ()=> {
        const btnId = parseFloat(button.getAttribute('data-id'))
        const spanQty = document.getElementById(`quanity${btnId}`)

        for (let i= 0; i < menuItems.length; i++) {
            if (menuItems[i].id === btnId
                && menuItems[i].qty < 20
                && cartButtons[i].dataset.id == btnId
            ) {
                menuItems[i].qty+=1
                cartButtons[i].setAttribute('data-qty', menuItems[i].qty)
                spanQty.innerText = menuItems[i].qty
            }
        }
    })
})