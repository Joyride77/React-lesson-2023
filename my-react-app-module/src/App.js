import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import "./App.css";
import Header from "./Header";
import ProductFunc from "./ProductFunc";
import products from "./seed";
import { useState } from "react";

function App() {
  const [productLists, setProductList] = useState(products);
  function handleProductUpVote(productId) {
    // Lifting state up
    // const foundProduct = products.filter((product) => {
    //   if (product.id == productId) {
    //     return product;
    //   }
    // });
    // console.log("current", foundProduct[0].votes);
    // foundProduct[0].votes = foundProduct[0].votes + 1;

    /// Change votes in product array
    console.log("ID", productId);
    console.log("product", products[0].votes);
    const newProducts = productLists.map((product) => {
      if (product.id == productId) {
        return Object.assign({}, product, {
          votes: product.votes + 1,
        });
      } else {
        return product;
      }
    });
    console.log("after", newProducts[0].votes);
    setProductList(newProducts);
  }

  const productList = productLists.map((product) => {
    return (
      <ProductFunc
        id={product.id}
        title={product.title}
        productImageUrl={product.productImageUrl}
        description={product.description}
        submitterAvatarUrl={product.submitterAvatarUrl}
        votes={product.votes}
        stars={product.stars}
        onVote={handleProductUpVote}
      />
    );
  });
  // const productList2 = products.map((product) => {
  //   return (
  //     <ProductFunc
  //       id={product.id}
  //       title={product.title}
  //       productImageUrl={product.productImageUrl}
  //       description={product.description}
  //       submitterAvatarUrl={product.submitterAvatarUrl}
  //       votes={product.votes}
  //     />
  //   );
  // });
  return (
    <div className="App">
      <Header />

      <div className="content">
        <h3 className="text-info shadow p-3 bg-body-tertiary rounded w-50 text-center m-auto my-5">
          Function components
        </h3>
        {productList}
        {/* <h3 className="text-info shadow p-3 bg-body-tertiary rounded w-50 text-center m-auto my-5">
          Class components
        </h3>
        {productList2} */}
      </div>
    </div>
  );
}

export default App;
