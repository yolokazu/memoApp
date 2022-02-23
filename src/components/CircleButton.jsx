import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const CircleButton = (props) => {
  const { text, style } = props;
  return (
    <View style={[styles.circleButton, style]}>
      <Text style={styles.circleButtonText}>{text}</Text>
    </View>
  );
};

CircleButton.propTypes = {
  text: PropTypes.string.isRequired,
  style: PropTypes.shape(),
};

CircleButton.deffaultProps = {
  style: null,
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
