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

    this.state={source : anim }

    this.green = this.green.bind(this)
    this.black = this.black.bind(this)
    this.seteo = this.seteo.bind(this)

  }

  componentDidMount() {
    this.animation.play();
  }

  seteo(){
    this.setState({source: anim})
  }

  green(){
    anim.layers[1].shapes[0].it[1].c.k[0] = '0'
    anim.layers[1].shapes[0].it[1].c.k[1] = '1'
    anim.layers[1].shapes[0].it[1].c.k[2] = '0'
    anim.layers[1].shapes[0].it[1].c.k[3] = '0'

    function resolveAfter200Miliseconds() {
      console.log('calling');
      return new Promise(resolve => {
        setTimeout(() => {
          resolve('resolved');
        }, 200);
      });
    }

    async function asyncCall(seteo , animation) {
      seteo()
      var result = await resolveAfter200Miliseconds(); 
      console.log("async");
      animation.reset()
      animation.play();
      //expected output: "resolved"
    }
    asyncCall(this.seteo, this.animation);    // si no hago primero el set state debo presionar 2 veces el boton
  }

  black(){
    anim.layers[1].shapes[0].it[1].c.k[0] = '0'
    anim.layers[1].shapes[0].it[1].c.k[1] = '0'
    anim.layers[1].shapes[0].it[1].c.k[2] = '0'
    anim.layers[1].shapes[0].it[1].c.k[3] = '0'

    function resolveAfter200Miliseconds() {
      console.log('calling');
      return new Promise(resolve => {
        setTimeout(() => {
          resolve('resolved');
        }, 200);
      });
    }

    async function asyncCall(seteo , animation) {
      seteo()
      var result = await resolveAfter200Miliseconds(); 
      console.log("async");
      animation.reset()
      animation.play();
      //expected output: "resolved"
    }
    asyncCall(this.seteo, this.animation);    // si no hago primero el set state debo presionar 2 veces el boton
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
            loop={true}
            source={this.state.source}
            //source={anim}
          /> 
     
        <TouchableHighlight style={styles.greenButton} onPress={this.green}>
                <Text style={styles.buttonText}>Verde</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.greenButton} onPress={this.black}>
                <Text style={styles.buttonText}>Negro</Text>
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
  buttonText: {
    color: '#000000',
    fontSize: 16,
    justifyContent: "center",
    textAlign: "center"
  },
});

AppRegistry.registerComponent('App', () => App);

// import React, { Component } from 'react';
// import { AppRegistry, StyleSheet, Text, View , TouchableHighlight, Animated} from 'react-native';
// import Animation from 'lottie-react-native';

// import anim from './data1.json';
// import anim2 from './data2.json';

// export default class App extends Component {

// constructor(props) {
//   super(props);
//   this.state = {
//     progress: new Animated.Value(0),
//   };

//   this.resetAnimation = this.resetAnimation.bind(this)
// }

// componentDidMount() {
//   Animated.timing(this.state.progress, {
//     toValue: 1,
//     duration: 2000,
//   }).start()

// }

// resetAnimation(){
//   console.log("pase")
//   Animated.timing(this.state.progress, {
//     toValue: 1,
//     duration: 500,
//     Value:0
//   }).start()
// }

// render() {
//   // The screen's current route is passed in to `props.navigation.state`:

//   {this.state.progress > 0.00 && console.log("puto")}

//   {console.log(this.state.progress._value)}
  
//   return (
//     <View>

      
//       <Animation
//         style={{
//           width: 100,
//           height: 100,
//         }}
//         source={anim2}
//         progress={this.state.progress}
        
       
//       />
//     </View>
//   );
// }
// }
