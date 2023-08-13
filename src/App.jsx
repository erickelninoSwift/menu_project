import { useState, useEffect } from "react";
import menuData from "./data";
import Title from "./title";
import { Menu } from "./menu";
import { Categories } from "./Categories";

import "./index.css";
function App() {
  const [allMenu, setMenu] = useState(menuData);
  const [category, setCategory] = useState([]);
  const [filteredData, setFilteredData] = useState(null);

  useEffect(() => {
    function setAllmyCategory() {
      setCategory([
        "All",
        ...new Set(
          allMenu.map((data) => {
            return data.category;
          })
        ),
      ]);
    }
    setAllmyCategory();
  }, []);

  const filteredItem = (selectedCategory) => {
    setMenu(
      menuData.filter((data) => {
        return data.category === selectedCategory;
      })
    );
    if (selectedCategory === "All") setMenu(menuData);
  };
  return (
    <>
      <main>
        <section className="menu">
          <Title titleText={"Our Menu"} />
          <Categories
            allCategories={category}
            filteredCategory={filteredItem}
          />
          <Menu items={allMenu} />
        </section>
      </main>
    </>
  );
}

export default App;
