import { HeaderHeightContext } from "@react-navigation/stack";
import React, { Component } from "react";
import {
  View,
  Text,
  Button,
  ImageBackground,
  StyleSheet,
  Image,
} from "react-native";
import { color } from "react-native-reanimated";
import imagem from "./assets/fundoescolas.png";
import imagemestig from "./assets/estig.jpg";
import logo from "./assets/IPB-Branco.png";
import user from "./assets/user.png";
import Icon from "react-native-vector-icons/FontAwesome";
import { OwnHeader } from "./shared/Header.js";

export default class Escolha extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={imagem} style={styles.imageFundo}>
          <OwnHeader></OwnHeader>
          <Text style={styles.baseText}>
            Escolha o tipo de utilizador que deseja exprimentar
          </Text>
          <View style={styles.viewbutton}>
            <Button
              title="Docente"
              color="#870B5A"
              onPress={() => this.props.navigation.navigate("Docente")}
            ></Button>
          </View>
          <View style={styles.viewbutton}>
            <Button
              title="Admin"
              color="#870B5A"
              onPress={() => this.props.navigation.navigate("Admin")}
            ></Button>
          </View>
          <View style={styles.viewbutton}>
            <Button
              title="Diretor"
              color="#870B5A"
              onPress={() => this.props.navigation.navigate("Diretor")}
            ></Button>
          </View>
          <View style={styles.viewbutton}>
            <Button
              title="Coordenador"
              color="#870B5A"
              onPress={() => this.props.navigation.navigate("Coordenador")}
            ></Button>
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
  textestig: {
    color: "black",
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "justify",
    backgroundColor: "transparent",
    marginBottom: 150,
    marginRight: 10,
    marginLeft: 10,
  },
  logotipo: {
    flex: 1,
    resizeMode: "center",
  },
  user: {
    resizeMode: "center",
    justifyContent: "flex-start",
    width: 80,
    height: 80,
  },
  informacoes: {
    color: "#870B5A",
    fontWeight: "normal",
    textAlign: "center",
    width: 50,
    height: 50,
    marginLeft: 50,
  },
  viewbutton: {
    borderRadius: 2,
    borderWidth: 3,
    width: 150,
    backgroundColor: "#870B5A",
    marginTop: 20,
    borderColor: "#870B5A",
    alignSelf: "center",
  },
});
