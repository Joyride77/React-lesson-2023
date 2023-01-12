import React from 'react'

const UpdateArrays = () => {

    let a = [2, 3, 4, 5]
    // a.splice(1, 1)
    // const b = a.slice(1, 2)
    // console.log(b);
    // console.log(a.reverse());

    let b = [1, 3, 2, 5, 11, 12, 23, 100]
    b.sort((a, b) => a - b)
    console.log(b);

    let d = [1, 2]
    let e = [4, 5]

    let f = d.concat(e)
    // console.log(f);
    d = [...d]
    console.log(d);
    console.log(b.filter(el => el > 5));

    return (
        <div>
            <p>Arrays</p>
        </div>
    )
}

export default UpdateArrays