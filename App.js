/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

console.disableYellowBox = true;

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View , TouchableHighlight , Modal, NetInfo , Platform , Alert } from 'react-native';
import Animation from 'lottie-react-native';

import anim from './data1.json';
import load from './loading.json';


export default class App extends Component {

  constructor(props){
    super(props)

    this.state={source : anim , load: load , openModal: false , wifi:'' , datos:'' , connected:'' , fetching:'' }

    this.green = this.green.bind(this)
    this.black = this.black.bind(this)
    this.seteo = this.seteo.bind(this)
    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
    this.animateLottie = this.animateLottie.bind(this)
    this.infoNetwork = this.infoNetwork.bind(this)

    this.fetching = this.fetching.bind(this)
    this.handleResponse = this.handleResponse.bind(this)


  }

  handleResponse(response) {
    //console.log("BLABLABLABLA")
    if (!response.ok) {
      this.setState({fetching: "Fallo el Fetch"})
      return Promise.reject("Fallo");
    }
    this.setState({fetching: "Exito en el fetch"})
    return "Exito";
  }


  async fetching() {
   
    return await fetch("https://facebook.github.io/react-native/movies.json").then(this.handleResponse).catch ( function(){
      Alert.alert("NO TENES INTERNET!!!!!")
      return originalCatch.apply(this, arguments);    // evita que entre al catch cuando funciona
  });
  }

  componentDidMount() {
    this.animation.play();     
    this.fetching();
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
      //console.log('calling');
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
      //console.log('calling');
      return new Promise(resolve => {
        setTimeout(() => {
          resolve('resolved');
        }, 200);
      });
    }

    async function asyncCall(seteo , animation) {
      seteo()
      var result = await resolveAfter200Miliseconds(); 
      //console.log("async");
      animation.reset()
      animation.play();
      //expected output: "resolved"
    }
    asyncCall(this.seteo, this.animation);    // si no hago primero el set state debo presionar 2 veces el boton
  }

  async infoNetwork(){

    const getConnectionInfo = async () => {
      
      if (Platform.OS === 'ios') {
        return new Promise((resolve, reject) => {
          const connectionHandler = connectionInfo => {
            NetInfo.removeEventListener('connectionChange', connectionHandler)
    
            resolve(connectionInfo)
          }
    
          NetInfo.addEventListener('connectionChange', connectionHandler)
        })
      } 
      return NetInfo.getConnectionInfo()
    }

    const connectionInfo = await getConnectionInfo()
    //console.log(connectionInfo)
    NetInfo.isConnected.fetch().then(isConnected => {
      
      this.setState({ connected : (isConnected ? 'online' : 'offline') })
      //console.log(this.state.connected)
    });
    this.setState({wifi : connectionInfo.type , datos: connectionInfo.effectiveType})
  }

  openModal(){

           
      this.infoNetwork()

      
      this.setState({openModal:true})
      function resolveAfter4seconds() {
        console.log('calling');
        return new Promise(resolve => {
          setTimeout(() => {
            resolve('resolved');
          }, 4000);
        });
      }

      async function asyncCall(closeModal) {
        
        var result = await resolveAfter4seconds(); 
        console.log("async");
        closeModal()
        
      }
      asyncCall(this.closeModal, this.animation);

  }

  closeModal(){
    console.log("PASE CERRAR")
    this.setState({openModal:false})
  }
  animateLottie(){
      this.animation1.play(); 
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
           
            }}
            loop={true}
            source={this.state.source}
          
          /> 
          <View style={{flexDirection:'row'}}>
            <TouchableHighlight style={styles.greenButton} onPress={this.green}>
                    <Text style={styles.buttonText}>Verde</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.greenButton} onPress={this.black}>
                    <Text style={styles.buttonText}>Negro</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.greenButton} onPress={this.openModal}>
                    <Text style={styles.buttonText}>Loading</Text>
            </TouchableHighlight>
          </View>
        </View>
        <View>
            <Text style={{fontSize:25 , fontWeight:'700' }}>{this.state.fetching} </Text>
        </View>

        <Modal visible={this.state.openModal} animationType='slide' onShow={this.animateLottie} >
            <View style={{alignContent:'center' , justifyContent:'center' , alignItems:'center' , flex:1}} >
              <Animation
              ref={animation1 => {
                this.animation1 = animation1;
              }}
              style={{
                width: 100,
                height: 100,
                //backgroundColor: 'blue' //el fondo te deja editarlo desde aca, pero a lo que toma la animacion
              }}
              loop={true}
              source={this.state.load}
              /> 
            </View>
            <Text>WIFI: {this.state.wifi} /  Datos Moviles: {this.state.datos} /  Estado: {this.state.connected}</Text>

              
                
              
        </Modal>
      </View>
    );
  }
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center' ,
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


