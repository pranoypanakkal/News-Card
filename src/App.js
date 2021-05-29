import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";

import Categories from "./components/Categories/Categories";
import CardList from "./components/CardList/CardList";

import "./App.css";

function App() {
  const [articles, setArticles] = useState();
  const [category, setCategory] = useState("everything");
  const categoryList = [
    "International",
    "Politics",
    "Health",
    "Sports",
    "Entertainment",
  ];

  axios.interceptors.request.use(
    function (config) {
      document.body.classList.add("loading-indicator");
      return new Promise((resolve, reject) => {
        resolve(config);
      });
    },
    function (error) {
      document.body.classList.remove("loading-indicator");
      document.body.classList.add("error-indicator");
      setTimeout(function () {
        document.body.classList.remove("error-indicator");
      }, 3000);

      return Promise.reject(error);
    }
  );

  axios.interceptors.response.use(
    function (response) {
      document.body.classList.remove("loading-indicator");

      return response;
    },
    function (error) {
      document.body.classList.remove("loading-indicator");
      return Promise.reject(error);
    }
  );

  useEffect(() => {
    getArticles(category);
  }, [category]);

  function getArticles(category) {
    axios
      .get("https://newsapi.org/v2/everything?q=" + category, {
        headers: {
          Authorization: `
    9bbf1ed422554a09ab1c9ea9f174e19c`,
        },
      })
      .then((res) => {
        console.log(res.data.articles);
        setArticles(res.data.articles);
      })
      .catch((error) => {
        console.error(error);
      });
  }
  return (
    <Container fluid>
      <Categories
        categoryList={categoryList}
        setCategory={setCategory}
      ></Categories>
      <CardList articles={articles}></CardList>
    </Container>
  );
}

export default App;
