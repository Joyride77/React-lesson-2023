import Product from "./Product";
import products from "../data/seed";

export default function ProductList(props) {
  const productComponents = products.map((product, index) => {
    return <Product key={index} product={product} wishList={props.wishList} setWishList={props.setWishList} liked={props.liked} setLiked={props.setLiked} />;
  });

  return <div className="ui unstackable items">{productComponents}</div>;
}
