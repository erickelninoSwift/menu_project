import { useState } from "react";
import menuData from "./data";
function App() {
  const [allMenu, setMenu] = useState(menuData);
  console.log(allMenu);
  return (
    <>
      <h1>Hello world</h1>
    </>
  );
}

export default App;
