import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

const GifExpertApp = () => {
  let [categories, setCategories] = useState([
    "One Puch",
    "Samurai X",
    "Dragon Ball",
  ]);

  // const handleAdd = () => {
  //   // setCategories(["HunterXHunter", ...categories]);
  //   setCategories((categorias) => [...categorias, "HunterXHunter"]);
  //   // console.log(categories);
  // };

  console.log(categories);

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory></AddCategory>

      <hr />

      <ul>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ul>
    </>
  );
};

export default GifExpertApp;
