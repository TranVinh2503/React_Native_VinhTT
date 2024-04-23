import { StatusBar } from "expo-status-bar";
import { View, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { ImageBackground,SafeAreaView  } from "react-native";
import GameStartScreen from "./screens/GameStartScreen";
import GamePlayScreen from "./screens/GamePlayScreen";
import GameOverScreen from "./screens/GameOverScreen";
import { useEffect, useState } from "react";

function App() {
  const [userNumber,setUserNumber] = useState()
  const [noOfGuesses,setNoOfGuesses] = useState(0)

  const confirmNumber = (n)=>{
    setUserNumber(n)
  }
  let screen = <GameStartScreen confirmAction ={confirmNumber}/>
  if (noOfGuesses > 0){
    screen = <GameOverScreen 
      userNumber = {userNumber}
      noOfGuesses = {noOfGuesses}
      restartGame = {()=>{
        setUserNumber();
        setNoOfGuesses(0)
      }}
    />
  }else if(userNumber){
    screen = <GamePlayScreen informGameOver = {setNoOfGuesses} userNumber = {userNumber}/>
  }
  
  

  return (
    <SafeAreaView style={styles.safeView}>
        <LinearGradient colors={["#a2186d", "#ecb52a"]} style={{ flex: 1 }}>
      <ImageBackground
        imageStyle={{ opacity: 0.3 }}
        style={{ flex: 1 }}
        source = {require('./assets/background.png')}
      >
        <View style={styles.viewContainer}>
          <StatusBar barStyle="default" />
          
        </View>
        <View style={styles.gameScreen}>
            {screen}

        </View>
      </ImageBackground>
    </LinearGradient>
    </SafeAreaView>
    
  );
}

export default App;

const styles = StyleSheet.create({
    safeView:{
        flex:1,
        backgroundColor: '#f5d7fa',
        
    },
    viewContainer:{
        justifyContent:'center',
    },
    gameScreen:{
        flex:1,
        padding:20,
    }

});
