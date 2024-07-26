const map = new Map();
// map has [key,value]
// each key will be unique

map.set('name', "Pravin")

for (let i = 0; i < 5; i++) {
    map.set(i, i * i)
}
map.set(5, 16)
console.log(map)

for (const iterator of map) {
    console.log(iterator)

}

for (const [key, value] of map) { // destructing
    // console.log(key)
    // console.log(value)

    console.log(key + " :- " + value)

}

for (const i in map) {
    console.log(i);
}