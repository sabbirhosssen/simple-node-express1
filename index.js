
const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json())
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);


    console.log('hitting the post', req.body);
    // res.send(JSON.stringify(newUser));
    res.json(newUser);
});

app.get('/', (req, res) => {
    res.send('hello: hi. hello,hello, I am node expart');

});
const users = [
    { id: 0, name: 'sabana akter', email: 'sabanaakter1234@gmail.com', phone: '01758585858' },
    { id: 1, name: 'sajeda akter', email: 'sajedaakter1234@gmail.com', phone: '0175854585' },
    { id: 2, name: 'sabnoor akter', email: 'sabnoorakter1234@gmail.com', phone: '0175458558' },
    { id: 3, name: 'salma akter', email: 'salmaakter1234@gmail.com', phone: '01758585854' },
    { id: 4, name: 'sokhina akter', email: 'sokhinaakter1234@gmail.com', phone: '0145855858' },
    { id: 5, name: 'soniya akter', email: 'soniyaakter1234@gmail.com', phone: '01758585458' }
]


app.get('/users', (req, res) => {

    const search = req.query.search;
    if (search) {
        const searchResults = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResults)
    }
    else {
        res.send(users)
    }


})
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id]
    res.send(user);
})

app.get('/fruits/mangoes/fojli', (req, res) => {
    res.send('this is fojli')
})
app.listen(port, () => {
    console.log('listen the port', port);
});

