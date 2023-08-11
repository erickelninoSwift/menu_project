import { useState } from "react";
import menuData from "./data";
function App() {
  const [allMenu, setMenu] = useState(menuData);
  console.log(allMenu);
  return (
    <>
      <section className="menu"></section>
    </>
  );
}

export default App;
