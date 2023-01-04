import "./App.css";

function Profile({ img, name = "Nergui", age, profession, heigth }) {
  // const { img, name, age, profession, heigth } = props; //Destructuring
  return (
    <div className="profile">
      <img src={img} alt="people" />
      <p>name: {name}</p>
      <p>age: {age}</p>
      <p>height: {heigth}m</p>
      <p>profession: {profession}</p>
    </div>
  );
}

function App() {
  //Spread syntax
  // const user = {
  //   img: "logo192.png",
  //   name: "John Smith",
  //   age: 20,
  //   profession: "Frontend",
  // };
  return (
    <div className="App">
      <Profile
        img="logo512.png"
        name="John Smith"
        age={20}
        heigth={180}
        profession="Frontend Developer"

        // {...user} //Spread syntax
      />
      <Profile
        img="logo512.png"
        name="Bill Smith"
        age={22}
        heigth={190}
        profession="Backend Developer"
      />
    </div>
  );
}

export default App;
