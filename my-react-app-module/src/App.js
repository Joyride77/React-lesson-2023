import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'

import './App.css';
import Header from './Header';
import Product from './Product';
import Product2 from './Product2';
import Product3 from './Product3';
import Product4 from './Product4';

import ProductFunc from './ProductFunc';
import ProductFunc2 from './ProductFunc2'
import ProductFunc3 from './ProductFunc3';
import ProductFunc4 from './ProductFunc4';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Product />
        <Product />
        <Product2 />
        <Product3 />
        <Product4 />
        <ProductFunc />
        <ProductFunc2 />
        <ProductFunc3 />
        <ProductFunc4 />
      </div>
    </div>
  );
}

export default App;
