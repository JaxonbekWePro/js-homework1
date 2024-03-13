
// for for of while do while

// let arr = [1,2,3,4]
// let evens = 0

// for(let num of arr) {

//     if(num % 2 === 0) evens++

// }


// let n = prompt('number')

// for(let i = 1; i <= 10; i++) {
//     document.write(`${n} * ${i} = ${n * i} </br> `);
// }

// let president = 'democrat'
// let year = 0

// while(president !== 'democrat') {
//     console.log('I will pay taxes');
//     year++

//     if(year === 4) {
//         president = 'democrat'
//     }
// }

// do {
//     console.log('I will pay taxes');
//     year++

//     if(year === 4) {
//         president = 'democrat'
//     }
// } while (president !== 'democrat')


let pwd = 4321

let chance = 4
do {
    let question = prompt(`Jago пиши пароль? попыток: ${chance}`)
    if(question === pwd) {
        alert("Добро пожаловать Jago")
        break;
    } else if(chance === 0){
        alert("Попыток не осталось")
    } else{
        chance--
        alert(`Неправильно, Jago попыток:${chance}`)
    }
    
} while (chance > 0)