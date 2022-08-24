import React from "react";
import Navbar from "../../component/Navbar";
import Maincomp from "../../component/Main";
import requests from "../../Requests";
import Row from "../../component/Row";

const Main = () => {
  return (
    <div>
      <Navbar />
      <Maincomp />
      <Row title="Up UpComing" fetchURL={requests.requestUpcoming} />
      <Row title="Popular" fetchURL={requests.requestPopular} />
      <Row title="TopRated" fetchURL={requests.requestTopRated} />
      <Row title="Trending" fetchURL={requests.requestTrending} />
      <Row title="Horror" fetchURL={requests.requestHorror} />
    </div>
  );
};

export default Main;
