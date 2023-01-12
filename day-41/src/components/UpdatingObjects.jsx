import React from 'react'
import { useState } from 'react'

const UpdatingObjects = () => {

    // const user = { age: 18, name: 'Dorj' };
    // user.age = 20;
    // console.log(user);

    const [user, setUser] = useState({ age: 18, name: 'Dorj' });
    const check = () => {
        // user.age += 20;
        // setUser({ age: user.age + 20, name: 'Dorj' });
        const newUser = { ...user }
        newUser.age += 20;
        setUser(newUser);
    }
    return (
        <div>
            <button onClick={check}>User age is {user.age}</button>
        </div>
    )
}

export default UpdatingObjects