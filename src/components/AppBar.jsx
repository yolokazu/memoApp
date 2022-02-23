import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const AppBar = (props) => {
  const { showLogoutBtn } = props;
  return (
    <View style={styles.appBar}>
      <View style={styles.appBarInner}>
        <Text style={styles.appBarTitle}>Memo App</Text>
        {showLogoutBtn && <Text style={styles.appBarRight}>Log out</Text>}
      </View>
    </View>
  );
}

AppBar.propTypes = {
  showLogoutBtn: PropTypes.bool,
};

AppBar.defaultProps = {
  showLogoutBtn: false,
};

const styles = StyleSheet.create({
  appBar: {
    width: '100%',
    height: 104,
    backgroundColor: '#467FD3',
    justifyContent: 'flex-end',
  },

  appBarInner: {
    alignItems: 'center',
  },

  appBarRight: {
    position: 'absolute',
    right: 19,
    bottom: 16,
    color: 'rgba(255, 255, 255, 0.8)',
  },

  appBarTitle: {
    marginBottom: 9,
    fontSize: 22,
    lineHeight: 32,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default AppBar;
