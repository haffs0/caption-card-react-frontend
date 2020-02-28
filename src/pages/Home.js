import React from 'react';
import Search from '../components/Search'
import CaptionList from '../components/CaptionList';

const Home = () => {
  return (
    <div className="main main-home">
      <Search />
      <CaptionList />
    </div>
  )
};

export default Home;
