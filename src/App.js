import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./Header";
import Search from "./Search";
import Loader from "./Loader";
import ErrorMsg from "./ErrorMsg";
import FoodList from "./FoodList";
import TotalSum from "./TotalSum";
import Footer from "./Footer";
import Intro from "./Intro";

const App = () => {
  const [searchRes, setSearchRes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");

  const apiKey = "AjfqGiXZDeUiA1CT0g9aOQ==PcEL695LgpTJD2rn";

  //Total sum
  const getTotalCalories = (searchRes) => {
    return searchRes.reduce((total, item) => total + item.calories, 0);
  };

  const getTotalProtein = (searchRes) => {
    return searchRes.reduce((total, item) => total + item.protein_g, 0);
  };

  const getTotalSugar = (searchRes) => {
    return searchRes.reduce((total, item) => total + item.sugar_g, 0);
  };

  const totalCalories = getTotalCalories(searchRes);
  const totalProtein = getTotalProtein(searchRes);
  const totalSugar = getTotalSugar(searchRes);
  //

  useEffect(() => {
    async function fetchFood() {
      try {
        setLoading(true);
        const res = await fetch(
          `https://api.api-ninjas.com/v1/nutrition?query=${query}`,
          {
            headers: {
              "X-Api-Key": apiKey,
              "Content-Type": "application/json",
            },
          }
        );
        if (!res.ok) throw new Error("Something went wrong with fetching data");
        const data = await res.json();
        console.log(data);

        setSearchRes(data);
      } catch (err) {
        console.error(err.message);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchFood();
  }, [query]);

  return (
    <main className="App">
      <div className="header-section">
        <Header />
        <Search setQuery={setQuery} />
        <br />
      </div>
      {/* {loading && query && <Loader />}
      {query && searchRes.length === 0 && !loading && (
        <ErrorMsg message="Food not found." />
      )} */}
      {/* {!loading && !error && ( */}
      {!query ? (
        <Intro />
      ) : (
        <div className="results">
          <TotalSum
            total={totalCalories}
            nutritionName="Calories"
            bgColor="#ff8b22"
          >
            kCal
          </TotalSum>
          <TotalSum
            total={totalProtein}
            nutritionName="Proteins"
            bgColor="#8cc826"
          >
            g
          </TotalSum>
          <TotalSum total={totalSugar} nutritionName="Sugar" bgColor="#fd3d19">
            g
          </TotalSum>
          <FoodList searchRes={searchRes} />
        </div>
      )}
      {/* {error && <ErrorMsg message={error} />} */}
      <Footer />;
    </main>
  );
};
export default App;
