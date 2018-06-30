
import { StyleSheet } from 'react-native';

import { theme } from "../../index"
const { windowWidth, fontSize, fontFamily, normalize, color } = theme;

const styles = StyleSheet.create({
    container:{
        marginBottom: 15
    },

    inputContainer:{
        width: windowWidth - 80,
        height: normalize(45),
        fontSize: fontSize.regular,
        fontFamily: fontFamily.regular,
        paddingLeft: 20,
        borderRadius: 6,
        // borderWidth: 2,
        // borderColor: color.white,
        color: "#000000",
        backgroundColor: "#bcbcbc26",
    },

    // inputContainer:{
    //     width: windowWidth - 40,
    //     height: normalize(65),
    //     fontSize: fontSize.regular + 2,
    //     fontFamily: fontFamily.bold,
    //     borderBottomColor: "#A5A7A9"
    // }
});

export default styles;