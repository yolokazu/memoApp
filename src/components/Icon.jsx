import React from 'react';
import { createIconSetFromIcoMoon } from '@expo/vector-icons';
import { useFonts } from '@use-expo/font';
import PropTypes from 'prop-types';

import icomoon from '../../assets/fonts/icomoon.ttf';
import selection from '../../assets/fonts/selection.json';

const Icon = (props) => {
  const { name, size, color } = props;
  const [ fontLoaded ] = useFonts({ icomoon });
  const CustomIcon = createIconSetFromIcoMoon(selection);

  if (!fontLoaded) {
    return null;
  }
  return (
    <CustomIcon name={name} size={size} color={color} />
  );
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number,
  color: PropTypes.string,
};

Icon.defaultProps = {
  size: 24,
  color: '#000000',
};

export default Icon;
