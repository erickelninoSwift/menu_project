import { useState, useEffect } from "react";
import menuData from "./data";
import Title from "./title";
import { Menu } from "./menu";
import { Categories } from "./Categories";

import "./index.css";
function App() {
  const [allMenu, setMenu] = useState(menuData);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    function setAllmyCategory() {
      setCategory([
        "all",
        ...new Set(
          allMenu.map((data) => {
            return data.category;
          })
        ),
      ]);
    }
    setAllmyCategory();
  }, []);

  return (
    <>
      <main>
        <section className="menu">
          <Title titleText={"Our Menu"} />
          <Categories allCategories={category} />
          <Menu items={allMenu} />
        </section>
      </main>
    </>
  );
}

export default App;
