function add (x,y){
    return x + y
}

const me = add 
const you = add 
const someoneElse = add

me(2,3)         // 5 - Press the button, run the machine.
you(2,3)        // 5 - Press the button, run the machine.
someoneElse(2,3)// 5 - Press the button, run the machine.

// origin add and each of the variables we create are pointing to the same spot in memory
//exact same thing under different names


function addFive(x,addReference){
    return addReference(x, 5)
}
console.log(addFive(10,add))


function higherOrderFunction(x,callback){
    return callback(5,x)
}

higherOrderFunction(10,add)


// examples: 

[1,2,3].map((i)=> i + 5)
//map will be a higher order function
//(i)=>i+5 will be a callback function

_.filter([1,2,3,4],(n)=> n % 2 === 0);

$('#btn').on('click',()=>(
    console.log('Callbacks are everywhere')
))


//two usages for callback function:
//1.passing one values return another value