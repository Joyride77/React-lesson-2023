
function ProductFunc() {
    function handleUpVode(props) {
        console.log(props.id)
    }
    return (
        <div class="row mb-4">
            <div class="col">
                <img className="img" src="image/image-aqua.png" alt="dog"></img>
            </div>
            <div class="col-7">
                <h2><a onClick={() => { handleUpVode(props) }}><i class="bi bi-caret-up-fill"></i></a> 55</h2>
                <p class="blue">Haught or Naught</p>
                <p>High-minded or absent-minded? You decide.</p>
                <div class="sub">
                    <p class="gray">Submitted by: </p>
                    <img class="selfie" alt="selfie" src="image/avatars/elliot.jpg" />
                </div>
            </div>
        </div>
    )
}

export default ProductFunc