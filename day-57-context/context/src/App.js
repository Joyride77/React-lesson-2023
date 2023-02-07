import "./App.css";
import Heading from "./components/Heading";
import Layout from "./components/Layout";
import Section from "./components/Section";
import UserInfo from "./components/UserInfo";
import { UserProvider } from "./contexts/UserContext";

function App() {
  return (
    <div className="App">
      <h1>Day 57 - Context</h1>
      <Section level={1}>
        <Heading>Title</Heading>
        <Section level={2}>
          <Heading>Heading</Heading>
          <Heading>Heading</Heading>
          <Heading>Heading</Heading>
          <Section level={3}>
            <Heading>Sub-Heading</Heading>
            <Heading>Sub-Heading</Heading>
            <Heading>Sub-Heading</Heading>
            <Section level={4}>
              <Heading>Sub-Sub-Heading</Heading>
              <Heading>Sub-Sub-Heading</Heading>
              <Heading>Sub-Sub-Heading</Heading>
            </Section>
          </Section>
        </Section>
      </Section>
    </div>
  );
}

export default App;
