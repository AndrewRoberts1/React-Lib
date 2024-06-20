//Run with - node server

const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

let users = [
    {
        id: 1,
        name: 'Thomas',
        age: 15,
        hairColour: 'black & white',
        hobbies: ['napping', 'guading house', 'dreamies']
    },
    {
        id: 2,
        name: 'Giz',
        age: 15,
        hairColour: 'grey & white',
        hobbies: ['napping', 'eating', 'shedding']
    },
    {
        id: 3,
        name: 'Rosie',
        age: 5,
        hairColour: 'everything',
        hobbies: ['fighting', 'mischeif', 'war']
    }
];

let currentUser = {
    name: 'Thomas',
    age: 15,
    hairColour: 'black & white',
    hobbies: ['napping', 'guading house', 'dreamies']
}

const products = [
    {
        id: 1,
        name: 'TV',
        price: 540,
        desc: 'Big oled',
        rating: 4.6
    },
    {
        id: 2,
        name: 'Ball',
        price: 5,
        desc: 'Big ball',
        rating: 3.2
    },
    {
        id: 3,
        name: 'Shoe',
        price: 120,
        desc: 'Big shoes',
        rating: 5
    },
];


app.get('/current-user', (req, res) => {
    res.json(currentUser);
});

app.get('/user/:id', (req, res)=> {
    const {id} = req.params;

    res.json(users.find(user => user.id == id));
});

app.post('/user/:id', (req, res)=> {
    const {id} = req.params;
    const { user: updatedUser } = req.body;

    //users = users.map(user => user.id == id ? updatedUser)

    res.json(users.find(user => user.id == id));
});

app.get('/products', (req, res) => {
    res.json(products);
})

app.listen(8080, () => {
    console.log('Server listening on port 8080')
})