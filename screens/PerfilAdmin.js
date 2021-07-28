import { HeaderHeightContext } from "@react-navigation/stack";
import React, { Component } from "react";
import {
  View,
  Text,
  Button,
  ImageBackground,
  StyleSheet,
  Image,
  Alert,
} from "react-native";
import { color } from "react-native-reanimated";
import imagem from "./assets/fundoescolas.png";
import imagemestig from "./assets/estig.jpg";
import logo from "./assets/IPB-Branco.png";
import user from "./assets/user.png";
import Icon from "react-native-vector-icons/FontAwesome";
import { OwnHeader } from "./shared/Header.js";
import { TextInput } from "react-native-gesture-handler";

export default class PerfilAdmin extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={imagem} style={styles.imageFundo}>
          <OwnHeader></OwnHeader>
          <Text style={styles.baseText}> Perfil</Text>
          <View
            style={{
              flexDirection: "row",
              marginBottom: 20,
              resizeMode: "cover",
              justifyContent: "center",
              marginTop: 100,
            }}
          >
            <Image source={user} style={styles.user}></Image>
          </View>
          <View
            style={{
              flexDirection: "column",
              backgroundColor: "#870B5A",
              width: 300,
              height: 300,
              marginLeft: 62,
              justifyContent: "center",
              resizeMode: " center",
              marginBottom: 100,
              borderRadius: 24,
              borderColor: "#870B5A",
              borderWidth: 7,
            }}
          >
            <View style={{ flexDirection: "row" }}></View>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.informacoes}>Email: mike2@gmail.com</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.informacoes}>Função: administrador</Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  imageFundo: {
    flex: 1,
    resizeMode: "cover",
  },
  imagemEstig: {
    flex: 1,
    resizeMode: "center",
    marginTop: 20,
    width: 440,
  },
  baseText: {
    fontWeight: "bold",
    color: "#870B5A",
    textAlign: "center",
    fontSize: 20,
    marginTop: 20,
  },
  user: {
    resizeMode: "center",
    justifyContent: "center",
    width: 100,
    height: 100,
  },
  informacoes: {
    color: "white",
    fontWeight: "normal",
    textAlign: "center",
    height: 50,
    marginLeft: 20,
    marginBottom: 15,
  },
  input: {
    width: 150,
    height: 30,
    fontSize: 20,
    borderRadius: 10,
    borderColor: "#870B5A",
    borderStyle: "solid",
    borderWidth: 2,
    marginBottom: 15,
  },
  viewbutton: {
    alignSelf: "flex-end",
    width: 150,
    height: 40,
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 4,
    marginTop: 50,
    justifyContent: "center",
    marginRight: 20,
  },
});
