import { useState } from "react";
import userList from "../data/data";

export default function User(props) {
    const [index, setIndex] = useState(0);
    // function changeName(params) {
    //     setNames(index + 1)
    // }
    const [memo, setMemo] = useState(userList[index].name)

    let user = userList[index];

    return (
        <div>
            <button
                onClick={() => {
                    {
                        setMemo(userList[index + 1].name)
                        setIndex(index + 1);
                    }
                }}>
                Next
            </button>
            <p>{user.name}</p>
            <input value={memo} />
        </div>
    );
}
