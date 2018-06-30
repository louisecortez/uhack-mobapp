import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';


import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { Button } from 'react-native';

import Communications from 'react-native-communications';
import { theme } from "../../index"
const { padding, color, fontSize, fontFamily, windowWidth, windowHeight, normalize } = theme;
//import styles from './styles';
import {actions as auth} from "../../index"
const {requestHelp, checkHelp} = auth;

class Help extends React.Component {
  constructor() {
      super();
      this.state = {
          loading: false
      }

      this.onHelp = this.onHelp.bind(this);
  }

    componentDidMount() {
        this.props.checkHelp(()=>{
            this.setState({loading: true})
        }, () => {
            this.setState({loading: false})
            Actions.mapInnerTab();
        }, () => {

        })
    }

  onHelp() {
      console.log("i'm dying");
      this.props.requestHelp(()=>{
        this.setState({loading: true});
        });
      //Communications.phonecall("+639193934289",true);
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          
          <View style={styles.titleContainer}>
              <Image source={require('../../../../assets/images/medicall_black.png')}
                      style={styles.imageLogo}
                      resizeMode='contain'/>
              <Text style={styles.slogan}>A tap can save a life.</Text>
          </View>
          <View style={styles.bodyContainer}>
            <Button
                title="CALL FOR AMBULANCE"
                color="#ff5b84"
                containerViewStyle={styles.containerView}
                buttonStyle={styles.button}
                textStyle={styles.buttonText}
                onPress={this.onHelp}
            />
          </View>
        {this.state.loading ?
            <View
                style = {styles.loadings}>
                <Image
                    style = {styles.imgs}
                    source = {require('../../../../assets/materials/load.gif')}
                />
                
                <Text
                    style = {styles.callertxt}
                >Waiting for Ambulance</Text>
            </View>
            :
            <View></View>
        }
        
          
      </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({


    container:{
      flex:1, // child must have defined sizes
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
      height: windowHeight / 3,
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
  },
  
  containerView:{
    marginVertical: padding * 3,
    width: windowWidth - 40,
  },
  
  button:{
    backgroundColor: "#ff5b84",
    height: normalize(55),
    padding: padding * 2,
    
  },
  
  buttonText:{
    fontSize: fontSize.regular + 2,
    fontFamily: fontFamily.medium
  },
  });
export default connect(null, {requestHelp, checkHelp})(Help);