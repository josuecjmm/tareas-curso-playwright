const cache = {}; 

function getItem(key) {
    if(!cache[key]) {
        console.error(`${key} is not a valid property of cache`)
    } else {
        return cache[key]
    }
}

function setItem(key, value) {
    cache[key] = value
}

module.exports = {getItem, setItem}