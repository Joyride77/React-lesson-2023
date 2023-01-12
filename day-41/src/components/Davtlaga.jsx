import React from 'react'

const Davtlaga = () => {
    function findMax(a, b) {
        return Math.max(a, b)
    }

    // console.log(findMax(1, 2));

    function findNumberInArray(arr, num) {
        for (let i = 0; i < arr.length; i++) {
            if (num === arr[i]) {
                return i
            }
        }
        return -1;
    }

    const a = [1, 2, 4, 5]
    const b = ['a', 'b', 'c', 'd']
    // console.log(findNumberInArray(a, 6)); //-1
    // console.log(findNumberInArray(a, 4)); //2
    // console.log(findNumberInArray(b, "a")); //0
    // console.log(findNumberInArray(b, "e")); //-1

    function randomNumber(a, b) {
        let max = Math.max(a, b)
        let min = Math.min(a, b)
        const c = Math.floor(Math.random() * (max - min + 1) + min);
        return c
    }
    console.log('Random', randomNumber(2, 5)); //random number

    function findAverage(arr) {
        let sum = 0
        arr.map(el => {
            sum += el
        })
        return sum / arr.length
    }
    console.log('Dundaj', findAverage(a)); //3 const a = [1, 2, 4, 5]

    function strToUpperCase(arr) {
        for (let i = 0; i < arr.length; i++) {
            arr[i] = arr[i].toUpperCase()
        }
        return arr
    }

    function strToLowerCase(arr) {
        for (let i = 0; i < arr.length; i++) {
            arr[i] = arr[i].toLowerCase()
        }
        return arr
    }
    console.log(strToLowerCase(b));

    function isPrime(num) {
        if (num < 2) {
            return false;
        }

        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    }

    console.log('Prime', isPrime(11)); //true
    console.log('Prime', isPrime(4)); //false

    return (
        <div>Davtlaga</div>
    )
}

export default Davtlaga