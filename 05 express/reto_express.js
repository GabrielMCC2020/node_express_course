const express = require('express');
const app = express();
const port = 3000;

let users = [
{
id: 1,
name: 'John Doe',
age: 22,
email: 'john@example.com'
},
{
id: 2,
name: 'Jane Doe',
age: 25,
email: 'jane@example.com',
},
{
id: 3,
name: 'Mary Smith',
age: 32,
email: 'mary@example.com',
},
]

app.use(express.json())

app.get('/', (req,res) => {
res.send('Hola a mi app!')
})

app.get('/users', (req, res) => {
res.json(users)
})

app.get('/users/:id', (req, res) => {
const {id} =req.params
const user = users[id]

if(user){
res.json(user)
}
else{
res.status(404).json({error: 'User not found'})
}
})

app.post('/users', (req, res) => {
const newUser = req.body
users.push(newUser)
res.json(newUser)
})

app.put('/users/:id', (req, res) => {
const {id} = req.params
const newUser = req.body
users[id - 1] = newUser
res.json(newUser)
})

app.delete('/users/:id', (req, res) => {
const {id} = req.params
users = users.filter((user) => user.id != id)
res.json(users)
})

app.listen(port, () => {
console.log(`Listening on http://localhost:${port}`)
})

