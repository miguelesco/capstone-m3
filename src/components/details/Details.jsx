/* eslint-disable linebreak-style */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchCompanyProfile } from '../../redux/companies/companies.action';
import {
  Container, Line, ListOfDetails, ListOfDetailsItem,
} from './styles';
import Navbar from '../general/navbar/Navbar';
import LargeCard from '../general/largeCard/LargeCard';

const Details = () => {
  const { symbol } = useParams();
  const { CompaniesReducer } = useSelector((state) => state);
  const { companyProfile } = CompaniesReducer;
  const popular = {
    name: companyProfile.companyName,
    price: companyProfile.price,
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCompanyProfile(symbol));
  }, []);

  if (CompaniesReducer.loading) {
    return <h1>LOADING</h1>;
  }

  if (CompaniesReducer.error) {
    return <h1>{CompaniesReducer.error}</h1>;
  }

  return (
    <Container>
      <Navbar back filter={false} title={symbol} />
      <LargeCard popularStock={popular} img={companyProfile.image} />
      <Line>
        Company Details
      </Line>
      <ListOfDetails>
        {
          Object.keys(companyProfile).map((key, i) => (
            <ListOfDetailsItem key={key} index={i + 1}>
              <p>{key}</p>
              <span>{companyProfile[key]}</span>
            </ListOfDetailsItem>
          ))
        }
      </ListOfDetails>
    </Container>
  );
};

export default Details;
