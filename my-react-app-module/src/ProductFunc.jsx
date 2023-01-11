import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'
function ProductFunc(props) {

    // const [votes, setVotes] = useState(props.votes)
    const [stars, setStars] = useState(props.stars)

    function handleUpVode(props) {
        // setVotes(votes + 1)

        if (stars >= 5) {
            setStars(5)
        } else {
            setStars(stars + 1)
        }
        // const foundProduct = products.map(product => {
        //     console.log(typeof product.votes);
        //     if (product.id == props.id) {
        //         product.votes = product.votes + 1;
        //     }
        //     return product
        // })
        // console.log(foundProduct);
    }
    function handleDownVode() {
        // setVotes(votes - 1)
        if (stars <= 1) {
            setStars(0)
        } else {
            setStars(stars - 1)
        }
    }

    return (
        <div class="row mb-4">
            <div class="col">
                <img className="img" src={props.productImageUrl} alt="image"></img>
            </div>
            <div class="col-7">
                <h2><a onClick={() => { props.onVote(props.id) }}><i class="bi bi-caret-up-fill"></i></a> {props.votes}</h2>
                <h2><a onClick={() => { handleDownVode(props) }}><i class="bi bi-caret-down-fill"></i></a></h2>
                <p class="blue">{props.title}</p>
                <p>{props.description}</p>
                <div class="sub">
                    <p>Subbmitted by: <img className="avatar" src={props.submitterAvatarUrl}></img></p>
                    <Rating
                        initialValue={stars}
                    />
                </div>
            </div>
        </div>
    )
}

export default ProductFunc