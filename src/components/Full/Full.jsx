import Header from "../Header/Header";
import Searchbar from "../Body/SearchBar/Searchbar";
import Houselist from "../Body/HouseList/Houselist";
import { useContext, useEffect } from "react";
import { ScroolContext } from "../../../utils/ScroolContext";

export default function Full() {
  const scrool = useContext(ScroolContext);

  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    const handleScroll = event => {
      scrool.togglescrool(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <div>
        <div>
          <Header></Header>
          <Searchbar></Searchbar>
          <Houselist></Houselist>
        </div>
      </div>
    </>
  );
}
