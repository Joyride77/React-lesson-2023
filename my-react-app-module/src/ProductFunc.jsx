
function ProductFunc(props) {
    return (
        <div class="row mb-4">
            <div class="col">
                <img className="img" src={props.productImageUrl} alt="image"></img>
            </div>
            <div class="col-7">
                <h2><i class="bi bi-caret-up-fill"></i> {props.votes}</h2>
                <p class="blue">{props.title}</p>
                <p>{props.description}</p>
                <div class="sub">
                    <p>Subbmitted by: <img className="avatar" src={props.submitterAvatarUrl}></img></p>
                </div>
            </div>
        </div>
    )
}

export default ProductFunc