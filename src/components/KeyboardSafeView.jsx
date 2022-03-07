import React, { useRef, useState, useEffect } from 'react';
import {
  Keyboard, Dimensions, Animated, ViewPropTypes,
} from 'react-native';
import PropTypes from 'prop-types';

const KeyboardSafeView = (props) => {
  const { children, style } = props;
  const initialViewHeight = useRef(null);
  const animatedViewHeight = useRef(null);
  const [viewHeight, setViewHeight] = useState(null);

  // On mount, add keyboard show and hide listeners
  // On unmount, remove them
  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', handleShow);
    Keyboard.addListener('keyboardDidHide', handleHide);
    return () => {
      Keyboard.removeAllListeners('keyboardDidShow');
      Keyboard.removeAllListeners('keyboardDidHide');
    };
  }, []);

  useEffect(() => {
    if ([initialViewHeight, animatedViewHeight, viewHeight].some((val) => val === null)) { return; }
    // height is not supported with useNativeDriver: true
    // https://github.com/react-native-community/react-native-modal/issues/163
    if (viewHeight === initialViewHeight.current) {
      Animated.timing(animatedViewHeight.current,
        { toValue: initialViewHeight.current, duration: 200, useNativeDriver: false }).start();
    } else {
      Animated.timing(animatedViewHeight.current,
        { toValue: viewHeight, duration: 200, useNativeDriver: false }).start();
    }
  }, [viewHeight]);

  const handleShow = ({ endCoordinates }) => {
    if (endCoordinates.height && initialViewHeight.current) {
      const keyboardHeight = Dimensions.get('window').height - endCoordinates.screenY;
      setViewHeight(initialViewHeight.current - keyboardHeight);
    }
  };

  const handleHide = () => {
    setViewHeight(initialViewHeight.current);
  };

  const handleLayout = ({ nativeEvent }) => {
    if (!initialViewHeight.current) {
      const { height } = nativeEvent.layout;
      // keep viewHeight as null not to trigger useEffect on mounting.
      // Don't do this: setViewHeight(height);
      initialViewHeight.current = height;
      animatedViewHeight.current = new Animated.Value(height);
    }
  };

  const animatedStyle = viewHeight ? {
    height: animatedViewHeight.current,
    flex: 0,
  } : {};
  return (
    <Animated.View style={[style, animatedStyle]} onLayout={handleLayout}>
      {children}
    </Animated.View>
  );
}

KeyboardSafeView.propTypes = {
  children: PropTypes.node.isRequired,
  style: ViewPropTypes.style,
};

KeyboardSafeView.defaultProps = {
  style: null,
};

export default KeyboardSafeView;
