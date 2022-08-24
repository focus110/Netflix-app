import React from "react";
import Navbar from "../component/Navbar";
import Maincomp from "../component/Main";
import requests from "../Requests";
import Row from "../component/Row";

const Main = () => {
  return (
    <div>
      <Navbar />
      <Maincomp />
      <Row rowID="1" title="Up UpComing" fetchURL={requests.requestUpcoming} />
      <Row rowID="2" title="Popular" fetchURL={requests.requestPopular} />
      <Row rowID="3" title="TopRated" fetchURL={requests.requestTopRated} />
      <Row rowID="4" title="Trending" fetchURL={requests.requestTrending} />
      <Row rowID="5" title="Horror" fetchURL={requests.requestHorror} />
    </div>
  );
};

export default Main;
