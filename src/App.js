import React from 'react';
import './App.css';
import Row from './row';
import request from './requests';
import Banner from "./Banner";
import Nav from "./Nav";

function App() {
  return (
    <div className="App">
      <Nav/>
      <Banner/>
      <Row title="NETFLIX ORGINALS" fetchURL={request.fetchNetflixOriginals} isLargeRow/>
      <Row title="Trending" fetchURL={request.fetchTrending}/>
      <Row title="Top Rated" fetchURL={request.fetchTopRated}/>
      <Row title="Action Movies" fetchURL={request.fetchActionMovies}/>
      <Row title="Comedy Movies" fetchURL={request.fetchComedyMovies}/>
      <Row title="Documentaries" fetchURL={request.fetchDocumentaries}/>
      <Row title="Horror Movies" fetchURL={request.fetchHorrorMovies}/>
      <Row title="Romance Movies" fetchURL={request.fetchRomanceMovies}/>      
    </div>
  );
}

export default App;
