/* eslint-disable linebreak-style */
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import useSort from '../../hooks/useSort';
import { fetchCompanies } from '../../redux/companies/companies.action';
import { Container, Line } from './styles';
import LargeCard from '../general/largeCard/LargeCard';
import Navbar from '../general/navbar/Navbar';
import Cards from './cards/Cards';

const Home = () => {
  const [filter] = useState(true);
  const dispatch = useDispatch();
  const { CompaniesReducer } = useSelector((state) => state);
  const [stocks, setStocks, refresh] = useSort(CompaniesReducer, false);

  const handdleFilter = (typeOfFilter = '') => {
    refresh(typeOfFilter === 'Lower Price');
  };

  useEffect(() => {
    if (stocks.length === 0) {
      dispatch(fetchCompanies());
    }
  }, []);

  useEffect(() => {
    if (CompaniesReducer.length > 0) {
      setStocks(CompaniesReducer);
    }
  }, [CompaniesReducer]);

  return (
    <Container>
      <Navbar title="Higher Price" handdleFilter={handdleFilter} filter={filter} />
      <LargeCard popularStock={stocks[0]} />
      <Line />
      <Cards stocks={stocks} />
    </Container>
  );
};

export default Home;
