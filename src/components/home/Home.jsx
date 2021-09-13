/* eslint-disable linebreak-style */
import { useState } from 'react';
import { Container, Line } from './styles';
import LargeCard from '../general/largeCard/LargeCard';
import Navbar from '../general/navbar/Navbar';

const Home = () => {
  const [popularStock] = useState({
    name: 'SPDR S&P 500 ETF Trust',
    price: 452,
  });
  return (
    <Container>
      <Navbar title="Higher Price" />
      <LargeCard popularStock={popularStock} />
      <Line />
    </Container>
  );
};

export default Home;
