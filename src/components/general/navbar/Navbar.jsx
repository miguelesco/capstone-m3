/* eslint-disable linebreak-style */
import { FaRegSun, FaArrowLeft } from 'react-icons/fa';
import { useState } from 'react';
import { MenuItem, Menu } from '@material-ui/core';
import Proptypes from 'prop-types';
import NavbarContainer, { Title, ConfigBtn, BackArrow } from './styles';

const options = [
  'Higher Price',
  'Lower Price',
];

const Navbar = ({
  title, back, filter, handdleFilter,
}) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = (event) => {
    setAnchorEl(null);
    handdleFilter(event.target.innerText);
  };

  return (
    <NavbarContainer>
      {
        back && (
        <BackArrow>
          <FaArrowLeft />
        </BackArrow>
        )
      }
      <Title>{title}</Title>
      {
        filter && (
          <ConfigBtn>
            <FaRegSun onClick={handleClick} />
            <Menu
              id="long-menu"
              anchorEl={anchorEl}
              keepMounted
              open={open}
              onClose={handleClose}
            >
              {options.map((option) => (
                <MenuItem key={option} selected={option === 'Higher Price'} onClick={handleClose}>
                  {option}
                </MenuItem>
              ))}
            </Menu>
          </ConfigBtn>
        )
      }
    </NavbarContainer>
  );
};

export default Navbar;

Navbar.propTypes = {
  title: Proptypes.string.isRequired,
  back: Proptypes.bool,
  filter: Proptypes.bool,
  handdleFilter: Proptypes.func.isRequired,
};

Navbar.defaultProps = {
  back: false,
  filter: true,
};
