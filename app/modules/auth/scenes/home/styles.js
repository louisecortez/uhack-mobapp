import { Platform, StyleSheet } from 'react-native';
import { theme } from "../../index"
const { padding, color, fontSize, fontFamily, windowWidth, windowHeight, normalize } = theme;

const resizeMode = 'contain';

const styles = StyleSheet.create({
    
    container:{
        flex:1, // child must have defined sizes
        paddingTop: (Platform.OS) === 'ios' ? 0 : 24,
        backgroundColor: "#efefef",
    },

    contentContainer:{
        // alignItems: 'center',
        // justifyContent: 'center',
    },

    titleContainer:{
        alignItems: 'center',
        justifyContent: 'center',
        // fontFamily: fontFamily.regular,
        // fontSize: fontSize.regular,
        // // marginTop: padding * 4,
        // backgroundColor: 'red',
        width: "100%",
        height: windowHeight * 3 / 5,
    },

    bodyContainer:{
        // flex: 5,
        // backgroundColor: "yellow",
        // marginHorizontal: padding * 2,
        paddingBottom: padding * 4,
    },

    imageLogo:{
        height: "60%",
        width: "60%",
    },

    kav:{
        height: "100%",
        width: "100%",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },

    

    slogan:{
        fontFamily: fontFamily.regular,
        fontSize: fontSize.regular + 5,
        // backgroundColor: "yellow",
    }

});

export default styles;