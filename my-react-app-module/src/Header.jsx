import React from "react";

class Header extends React.Component {
    render() {
        return (
            <header className="App-header m-4">
                <h1 className="text-primary shadow p-3 bg-body-tertiary rounded">Joyride</h1>
                <hr className="mb-1" />
            </header>
        )
    }
}

export default Header