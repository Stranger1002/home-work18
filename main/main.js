// const a = +'15151';

// console.log(isNaN(a));


// const a = Number('a2');

// console.log(a);


// const a = parseFloat('1231.56')

// console.log(a);


// const a = parseInt('1231.56')

// console.log(a);


// Премитивные и Непремитивные

// string, number, boolean, undefined, object, BigInt, Symbol, null

// const a = {
//     name: 'Ozodbek',
//     age: 18,
//     data_student_1: {
//         name: 'Amir'
//     }
// };

// console.log(a.name);
// console.log(a.age);
// console.log(a.data_student_1);
// console.log(a['data_student_1']);


// const array = [1, 'string', true, { key: 'value' }, undefined, null, Symbol, BigInt, [67, 234, 23, 4, 23, 42, 3, 4, 23, 42]];
// array.push(56);
// console.log(array);




const arr = []

const name = prompt('Name: ');

let probel = name.trimRight();

if (probel.includes(' ')) {
    alert('Access denied');
}
if (name.length > 7) {
    const age = prompt('Age:');
    if (age > 18) {
        arr.push({
            name: name,
            age: age
        });
    }
    else (alert('Access denied'));
}
else (alert('Access denied'));

