/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

//LINEA 546 JSON,  PRIMER VECTOR DE CAPA 1 
/*"k":[
                           0.204,
                           0.38,
                           1,
                           1
                        ],
*/


console.disableYellowBox = true;

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View , TouchableHighlight} from 'react-native';
import Animation from 'lottie-react-native';

import anim from './data1.json';

export default class App extends Component {

  constructor(props){
    super(props)

    this.state={source : anim}

    this.green = this.green.bind(this)
    this.greenPlay = this.greenPlay.bind(this)

  }


  componentDidMount() {
    this.animation.play();
  }

  green(){
    //this.animation.stop();
    //this.state.source.layers[1].shapes[0].it[1].c.k[0] = '0'
    //this.state.source.layers[1].shapes[0].it[1].c.k[1] = '1'
    //this.state.source.layers[1].shapes[0].it[1].c.k[2] = '0'
    //this.state.source.layers[1].shapes[0].it[1].c.k[3] = '0'

     anim.layers[1].shapes[0].it[1].c.k[0] = '0'
     anim.layers[1].shapes[0].it[1].c.k[1] = '1'
     anim.layers[1].shapes[0].it[1].c.k[2] = '0'
     anim.layers[1].shapes[0].it[1].c.k[3] = '0'
 
    //console.log(this.state.source.layers[1])
    this.animation.reset();
    //console.log(this.animation.props.source.layers[1].shapes[0].it[1].c.k)
    this.greenPlay();
  }
  greenPlay(){
      console.log("pase por play")
      //console.log(this.state.source.layers[1].shapes[0].it[1].c.k)
      this.animation.play();
  }


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to Lottie Animations :-)</Text>
        <View>
           <Animation
            ref={animation => {
              this.animation = animation;
            }}
            style={{
              width: 100,
              height: 100,
              //backgroundColor: 'blue' //el fondo te deja editarlo desde aca
            }}
            loop={false}
            //source={this.state.source}
            source={anim}
          /> 

        <TouchableHighlight style={styles.greenButton} onPress={this.green}>
                <Text style={styles.buttonText}>Hacete Verde</Text>
        </TouchableHighlight>
       
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#A6207E'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff'
  },
  greenButton: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 15,
    width: 90,
    //marginRight: 4,
    borderRadius: 5,
    elevation: 2, // Android
    //alignItems:'flex-end'
  },
});

AppRegistry.registerComponent('App', () => App);
