import React from "react";

class Product2 extends React.Component {
    render() {
        return (
            <div class="row mb-4">
                <div class="col">
                    <img className="img" src="image/image-rose.png" alt="dog"></img>
                </div>
                <div class="col-7">
                    <h2><i class="bi bi-caret-up-fill"></i> 55</h2>
                    <p class="blue">Haught or Naught</p>
                    <p>High-minded or absent-minded? You decide.</p>
                    <div class="sub">
                        <p class="gray">Submitted by: </p>
                        <img class="selfie" alt="selfie" src="image/avatars/elyse.png" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Product2