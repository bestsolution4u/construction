import styles from './style';
import React, { memo } from 'react';
import {  View, Image} from 'react-native';


const ImageComponent  = memo(({ imgSource}) => {
        return (
              <View style={styles.image}>
                <Image source={imgSource}
                 style={{
                    width: '100%',
                    height: '100%',
                    borderRadius:5,
                }}  />
              </View>
        );
})
export default ImageComponent;