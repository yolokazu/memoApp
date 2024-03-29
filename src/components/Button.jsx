import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const Button = (props) => {
  const { label, onPress, style } = props;
  return (
    <TouchableOpacity
      style={[ styles.buttonContainer, style]}
      onPress={onPress}
    >
      <Text style={styles.buttonLabel}>{label}</Text>
    </TouchableOpacity>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onPress: PropTypes.func,
  style: PropTypes.shape(),
};

Button.defaultProps = {
  onPress: null,
  sylte: null,
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#467FD3',
    borderRadius: 4,
    alignSelf: 'flex-start',
    marginBottom: 24,
  },

  buttonLabel: {
    color: '#FFFFFF',
    fontSize: 16,
    lineHeight: 32,
    paddingHorizontal: 32,
    paddingVertical: 8,
  },
});

export default Button;
