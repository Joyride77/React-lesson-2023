import React from "react";

export default function Button(props: any): JSX.Element {
    return (
        <div>
            <button className="button">
                {props.children}
            </button>
            <style jsx>
                {`
                    .button {
                        padding: 1em;
                        border-radius: 1em;
                        border:none;
                        background: green;
                        color: white;
                    }`
                }
            </style>


        </div>
    )
}