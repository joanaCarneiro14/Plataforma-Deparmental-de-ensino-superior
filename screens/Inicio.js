import React, { Component } from "react";
import {
  View,
  Text,
  Button,
  ImageBackground,
  StyleSheet,
  Image,
} from "react-native";
import imagem from "./assets/fundo.png";
import logo1 from "./assets/logo1.png";



export default class Incio extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={imagem} style={styles.imageFundo}>
          <Image source={logo1} style={styles.logotipo}></Image>
          <View style={styles.viewbutton}>
            <Button
              title="Login"
              color="#870B5A"
              onPress={() => this.props.navigation.navigate("Logout")}
            ></Button>
          </View>
          <View style={styles.viewbutton}>
            <Button
              title="Visitante"
              color="#870B5A"
              onPress={() => this.props.navigation.navigate("Home")}
            ></Button>
          </View>
        </ImageBackground>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 3,
    flexDirection: "column",
  },
  imageFundo: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000a0",
    fontFamily: "Nunito",
  },
  logotipo: {
    flex: 5,
    resizeMode:"contain",
    justifyContent: "center",
    marginTop: 100,
    height: 800,
    width: 300,
    marginLeft:20
    },
  viewbutton: {
    alignSelf: "flex-end",
    width: 150,
    height: 40,
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 4,
    marginBottom: 20,
    justifyContent: "center",
    marginRight: 20,
  },
});
