const cache = {}; 

function getItem(key) {
    if(!cache[key]) {
        throw new Error(`${key} is not a valid property of cache`)
    } else {
        return cache[key]
    }
}

function setItem(key, value) {
    cache[key] = value
}

module.exports = {getItem, setItem}