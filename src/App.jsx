import { useState, useEffect } from "react";
import menuData from "./data";
import Title from "./title";
import "./index.css";
function App() {
  const [allMenu, setMenu] = useState(menuData);
  const [category, setCategory] = useState([]);
  useEffect(() => {
    function setAllmyCategory() {
      setCategory(
        allMenu.map((data) => {
          return data.category;
        })
      );
    }
    setAllmyCategory();
  }, []);

  console.log(category);
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
