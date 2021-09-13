/* eslint-disable linebreak-style */
import Proptypes from 'prop-types';
import { FaArrowUp } from 'react-icons/fa';
import { Card, TopTitle } from './styles';

const LargeCard = (props) => {
  const { popularStock } = props;
  const { name, price } = popularStock;
  return (
    <Card>
      <FaArrowUp fontSize="80" fillOpacity={0.5} />
      <TopTitle>
        <p>
          {name}
        </p>
        <span>
          price:
          {' '}
          {price}
        </span>
      </TopTitle>
    </Card>
  );
};

export default LargeCard;

LargeCard.propTypes = {
  popularStock: Proptypes.shape({
    name: Proptypes.string,
    price: Proptypes.number,
  }).isRequired,
};
