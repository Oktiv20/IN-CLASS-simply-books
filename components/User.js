import React from 'react';
import { PropTypes } from 'prop-types';

function User({
  name, email, image, lastLogin,
}) {
  return (
    <>
      <div>User</div>
      <div>Name: {name}</div>
      <div>Email: {email}</div>
      <div>Image: {image}</div>
      <div>Last Login: {lastLogin} </div>
    </>
  );
}

User.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  image: PropTypes.string,
  lastLogin: PropTypes.string,
};

User.defaultProps = {
  name: 'Default Name',
  email: 'Default Email',
  image: 'Default Image',
  lastLogin: 'Default Time',
};
