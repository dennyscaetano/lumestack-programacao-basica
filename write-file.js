const fs = require('fs')

fs.writeFile('message.txt', "Oi Mãe", (err) => {
    if (err) {
        throw err;
    } else {
        console.log('The file as been saved!')
    }
})