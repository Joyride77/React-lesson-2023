import { Rating } from "react-simple-star-rating";
import products from "../data/seed";
import { Link, useParams } from "react-router-dom";

export default function Product(props) {
  const { id } = useParams();
  console.log(id);

  let foundProduct = {};
  if (id) {

    foundProduct = products.filter((product) => {
      if (product.id == id) {
        return product;
      }
    })[0];

  }


  if (props.product) {
    foundProduct = props.product;
  }

  const product = foundProduct;
  console.log(foundProduct);

  const liked = props.wishList.filter(wish => wish.id === product.id)[0];

  return (
    <div className="item">
      <div className="image">
        <Link to={`/product/${foundProduct.id}`}>
          <img src={product.productImageUrl} />
        </Link>
      </div>
      <div className="middle aligned content">
        <div className="header">
          <a onClick={() => product.onVote(product.id)}>
            <i className="large caret up icon" />
          </a>
          {product.votes}
          <a onClick={() => {
            console.log("Heart is clicked");
            // setLiked(!liked);
            if (!liked) {
              const likedProduct = {
                id: product.id,
                name: product.title,
                liked: true,
                img: product.productImageUrl,
                description: product.description,
                votes: product.votes,
                submitterAvatarUrl: product.submitterAvatarUrl,
              }
              props.setWishList([...props.wishList, likedProduct]);
            } else {
              props.setWishList(
                props.wishList.filter(w => w.id !== product.id)
              )
            }
          }}
          >
            {liked ?
              (<i className="heart icon"></i>)
              :
              (<i className="heart outline icon"></i>)}
          </a>
        </div>
        <div className="description">
          <a href={product.url}>{product.title}</a>
          <p>{product.description}</p>
        </div>
        <div className="extra">
          <span>Submitted by:</span>
          <img className="ui avatar image" src={product.submitterAvatarUrl} alt={product.name} />
        </div>
        <Rating initialValue={5} />
      </div>
    </div >
  );
}
