import { Platform, StyleSheet } from 'react-native';
import { theme } from "../../index"
const { padding, color, fontSize, fontFamily, windowWidth, windowHeight, normalize } = theme;


const styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      justifyContent: "flex-end",
      alignItems: "center",

    },
    map: {
      ...StyleSheet.absoluteFillObject
    },
    bubble: {
        flex: 1,
        backgroundColor: "rgba(255,255,255, 0.8)",
        paddingHorizontal: 18,
        paddingVertical: 12,
        borderRadius: 10,
        flexDirection: "row",
        // elevation: 2,
        shadowColor: "black",
        shadowOffset: {width: 2, height: 2},
    },
    latlng: {
      width: 200,
      alignItems: "stretch"
    },
    button: {
      width: windowWidth - 100,
      paddingHorizontal: 12,
    //   alignItems: "center",
      marginHorizontal: 10,
    },
    buttonContainer: {
        flexDirection: "row",
        marginVertical: 20,
        backgroundColor: "transparent",
        height: "20%",
    },
    leftHandBubble:{
        flex: 2,
        // backgroundColor: "yellow",
        alignItems: "center",
        justifyContent: "center",
    },
    rightHandBubble:{
        flex: 4,
        // backgroundColor: "red",
        paddingTop: padding,
        paddingLeft: padding * 2,
    },
    iconAmbulance:{
        height: "80%",
        width: "80%",
    },
    bottomBarContent:{
        fontSize: fontSize.regular + 3,
        color: "#252626",
    },
    emphasisText:{
        fontFamily: fontFamily.bold,
        color: "#ff5b84",
    }
  });
export default styles;