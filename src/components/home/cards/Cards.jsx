/* eslint-disable linebreak-style */
import PropTypes from 'prop-types';
import chart from '../../../assets/images/analytics.svg';
import {
  CardContainer, Card, CardImage, Description,
} from './styles';

const Cards = ({ stocks }) => (
  <CardContainer>
    {
        stocks.map((stock) => (
          <Card key={stock.symbol}>
            <CardImage>
              <img src={chart} alt="chart" />
            </CardImage>
            <Description>
              <p>{stock.name}</p>
              <span>{stock.price}</span>
            </Description>
          </Card>
        ))
      }
  </CardContainer>
);

export default Cards;

Cards.propTypes = {
  stocks: PropTypes.arrayOf(PropTypes.shape({
    exchange: PropTypes.string,
    name: PropTypes.string,
    symbol: PropTypes.string,
    price: PropTypes.number,
  })).isRequired,
};
