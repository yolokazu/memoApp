import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import Icon from './Icon';

const CircleButton = (props) => {
  const { name, size, style, onPress } = props;
  return (
    <TouchableOpacity
      style={[styles.circleButton, style]}
      onPress={onPress}
    >
      <Icon name={name} size={size} color='white' />
    </TouchableOpacity>
  );
};

CircleButton.propTypes = {
  name: PropTypes.string.isRequired,
  style: PropTypes.shape(),
  size: PropTypes.number,
  onPress: PropTypes.func,
};

CircleButton.defaultProps = {
  style: null,
  size: 32,
  onPress: null,
};

const styles = StyleSheet.create({
  circleButton: {
    backgroundColor: '#467FD3',
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 40,
    bottom: 40,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
  },

  circleButtonText: {
    color: '#FFFFFF',
    fontSize: 40,
    lineHeight: 40,
  },
});

export default CircleButton;
