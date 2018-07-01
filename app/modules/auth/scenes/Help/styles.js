import { StyleSheet } from 'react-native';
import { theme } from "../../index"
const { padding, color, fontSize, fontFamily, windowWidth, windowHeight, normalize } = theme;

const resizeMode = 'contain';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      loadings: {
        left: 0,
        top: 0,
        margin: 0,
        padding: 0,
        position: 'absolute',
        width: windowWidth,
        height: windowHeight,
        backgroundColor: 'rgba(245,230,230,0.9)',
        alignItems: 'center',
      },
      imgs: {
        width: 300,
        height: 300,
      },
      callertxt: {
          color: '#ff5b84',
          
          fontSize: 32,
      }
});

export default styles;