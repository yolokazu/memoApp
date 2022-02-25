import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const Button = (props) => {
  const { label } = props;
  return (
    <View style={styles.buttonContainer}>
      <Text style={styles.buttonLabel}>{label}</Text>
    </View>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
}

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
