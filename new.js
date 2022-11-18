// const mySet = new Set()
// mySet.add(1)
// mySet.add(1)
// mySet.add('a')
// mySet.add('a')
// mySet.add(undefined)
// mySet.add(undefined)
// mySet.add({prop: true})
// mySet.add({prop: true})

// console.log('Size', mySet.size)


// function myfun(y1,y2, ...y3){
//     const [x1, ...[result]]] = y3

//     console.log(result)
// }

// const myArray = [ 'rock', ' paper', 'sci', 'liz', 'spo']

// myfun(...myArray)

// function* gen1(){
//     console.log(yield 1)
//     console.log(yield 2)
//     console.log(yield 3)

// }

// const iterator = gen1()

// console.log(iterator.next('a').value)
// console.log(iterator.next('b').value)
// console.log(iterator.next('c').value)


// const arr = [];

// try{
//     arr.push('try');
//     throw new Error();
// }
// catch(e){
//     arr.push('catch');
// }
// finally{
//     arr.push('finally')
// };

// console.log(arr)

// async function Queue(){
//     return new Promise(resolve => {
//         setTimeout(() => {resolve('b')}, 50);
//     });    
// };

// async function  logger() {
//     setTimeout(()=> console.log('a'),10);
//     console.log(await Queue());
//     console.log('c');
// };

// logger();

// const myQ = Queue()
// myQ.enqueue(1)
// myQ.enqueue(1)

// const r1 = myQ.dequeue() === 1
// const r2 = myQ.dequeue() === 2

// console.log(r1&&r2)


const obj = {
    prop: 1
}
console.log(obj.prop)
Object.defineProperty(obj, 'prop', {
    writable: false,
    value: 2
})
console.log(obj.prop)

obj.prop = 3
console.log(obj.prop)