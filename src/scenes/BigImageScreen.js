import React, {useEffect, useState, useRef} from 'react';
import {ImageBackground, StyleSheet, Animated, Dimensions} from 'react-native';
import {verticalScale} from '../Utils/scaling';

let {height, width} = Dimensions.get('window');

const BigImageScreen = props => {
  const [image, setImage] = useState(null);
  let heightValue = useRef(new Animated.Value(316)).current;
  let imageSource = {source: require('../assets/images/big_image_example.png')};

  useEffect(() => {
    let src = props.navigation.state.params.source;
    setImage(src ? src : imageSource.source);
  });

  useEffect(() => {
    Animated.timing(heightValue, {
      toValue: height,
      duration: 500,
    }).start();
  }, [image]);

  return (
    <Animated.View
      style={{height: heightValue, width: width, alignSelf: 'center'}}>
      <ImageBackground
        source={image ? image : imageSource.source}
        style={style.container}
      />
    </Animated.View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width: '100%',
    height: verticalScale(67),
    flexDirection: 'row',
    opacity: 0.9,
    backgroundColor: '#FFFFFF',
    shadowColor: '#00000029',
    shadowOpacity: 1,
  },
});

export default BigImageScreen;
