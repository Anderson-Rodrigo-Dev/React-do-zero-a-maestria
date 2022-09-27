const arr = [1, 2, 3, 4, 5, 6]

const highNumbers = arr.filter((number) => number > 3)

console.log(highNumbers)

const users = [
    {name: 'Matheus', available: true},
    {name: 'Fatima', available: false},
    {name: 'Anderson', available: false},
    {name: 'João', available: true},
    {name: 'Jose', available: true}
]

const availableUsers = users.filter((user) => !user.available)

console.log(availableUsers)