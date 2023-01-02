import logo from './logo.svg';

import './App.css';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div className="App">
      <header className="App-header">
        <h1>Popular Products</h1>
        <hr />
      </header>
      <div class="content">
        <div class="row">
          <div class="col">
            <img className="img" src="https://media-be.chewy.com/wp-content/uploads/2021/05/27135654/Shiba-Inu_FeaturedImage-1024x615.jpg" alt="dog"></img>
          </div>
          <div class="col">
            <h2>55</h2>
            <p class="blue">Haught or Naught</p>
            <p>High-minded or absent-minded? You decide.</p>
            <div class="sub">
              <p class="gray">Submitted by: </p>
              <img class="selfie" alt="selfie" src="https://i.pinimg.com/originals/c2/36/97/c23697222d025c2c389da132cf30e1d0.jpg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
