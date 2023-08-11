import { useState } from "react";
import menuData from "./data";
import Title from "./title";
import "./index.css";
function App() {
  const [allMenu, setMenu] = useState(menuData);
  console.log(allMenu);
  return (
    <>
      <main>
        <section className="menu">
          <Title titleText={"Our Menu"} />
        </section>
      </main>
    </>
  );
}

export default App;
