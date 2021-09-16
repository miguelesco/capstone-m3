/* eslint-disable linebreak-style */
import Proptypes from 'prop-types';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
import { Card, TopTitle } from './styles';

const LargeCard = ({ popularStock }) => {
  const { name, price, img } = popularStock;
  return (
    <Card>
      {
        img && (
          <div>
            <img src={img} alt={name} />
          </div>
        )
      }
      {
        price > 100 && !img && (
          <FaArrowUp fontSize="80" fillOpacity={0.5} />
        )
      }
      {
        price < 100 && !img && (
          <FaArrowDown fontSize="80" fillOpacity={0.5} />
        )
      }
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
    img: Proptypes.string,
  }),
};

LargeCard.defaultProps = {
  popularStock: {
    name: '',
    price: 0,
    img: '',
  },
};
