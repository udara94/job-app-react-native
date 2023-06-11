import React from 'react'
import { TouchableOpacity, Image } from 'react-native'

import styles from './screenheader.style'
import useThemedStyles from '../../../hook/useThemedStyles'

const ScreenHeaderBtn = ({iconUrl, dimension, handlePress}) => {
  const style = useThemedStyles(styles);
  return (
   <TouchableOpacity style={style.btnContainer} onPress={handlePress}>
    <Image
    source={iconUrl}
    resizeMode='cover'
    style={style.btnImg(dimension)}
    />
   </TouchableOpacity>
  )
}

export default ScreenHeaderBtn