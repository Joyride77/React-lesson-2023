import React from "react";

class Product1 extends React.Component {
    render() {
        return (
        <div class="row mb-4">
            <div class="col">
                <img className="img" src={this.props.productImageUrl} alt="image"></img>
            </div>
            <div class="col-7">
                <h2><i class="bi bi-caret-up-fill"></i> {this.props.votes}</h2>
                <p class="blue">{this.props.title}</p>
                <p>{this.props.description}</p>
                <div class="sub">
                    <p>Subbmitted by: <img className="avatar" src={this.props.submitterAvatarUrl}></img></p>
                </div>
            </div>
        </div>
    )
    }
}

export default Product1;