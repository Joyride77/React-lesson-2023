import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import "./App.css";
import Header from "./Header";
import ProductFunc from "./ProductFunc";
import products from "./seed";

function App() {
  const productList = products.map((product) => {
    return (
      <ProductFunc
        id={product.id}
        title={product.title}
        productImageUrl={product.productImageUrl}
        description={product.description}
        submitterAvatarUrl={product.submitterAvatarUrl}
        votes={product.votes}
        stars={product.stars}
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
