import React from 'react'
import { useState } from "react";

const FeedbackForm = () => {
    const [text, setText] = useState("");
    const [isSending, setIsSending] = useState(false);
    const [isSent, setIsSent] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();
        setIsSending(true);
        await sendMessage(text);
        setIsSending(false);
        setIsSent(true);
    }
    // if (isSent) {
    //   return <h1>Thanks for feedback!</h1>;
    // }

    function sendMessage(text) {
        return new Promise((resolve) => {
            setTimeout(resolve, 2000);
        });
    }

    return isSent ? (
        <h1>Thanks for feedback!</h1>
    ) : (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Please insert text</h1>
                <textarea
                    value={text}
                    disabled={isSending}
                    onChange={(e) => setText(e.target.value)}
                ></textarea>
                <button>Send</button>
                {isSending && <p>Sending...</p>}
            </form>
        </div>
    );
}

export default FeedbackForm