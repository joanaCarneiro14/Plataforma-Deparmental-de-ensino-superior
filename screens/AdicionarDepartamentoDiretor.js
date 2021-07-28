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
import Icon from "react-native-vector-icons/Feather";
import { OwnHeader } from "./shared/Header.js";
import { TextInput } from "react-native-gesture-handler";
export default class AdicionarDepartamentoDiretor extends Component {
  state = {
    nome: "",
    id_escola: null,
  };
  async insertDepartamentos() {
    var data = {
      nome: this.state.nome,
      id_escola: 2,
    };
    console.log(data);
    var formBody = [];
    for (var property in data) {
      var encodedKey = encodeURIComponent(property);
      var encodedValue = encodeURIComponent(data[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");
    console.log("------------");
    console.log(formBody);
    try {
      let response = await fetch(
        "http://194.210.110.169/projeto/web/rest/departamentos",
        {
          method: "POST",
          headers: {
            //Accept: "application/json",
            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
          },
          body: formBody,
        }
      );
      if (response.status >= 200 && response.status < 300) {
        Alert.alert("Departamento inserido com sucesso!!!");
      }
    } catch (errors) {
      Alert.alert(errors);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={imagem} style={styles.imageFundo}>
          <OwnHeader></OwnHeader>
          <Text style={styles.baseText}> Nome do departamento</Text>
          <TextInput
            style={styles.input}
            autoCorrect={false}
            onChangeText={(text) => {
              this.setState({ nome: text });
            }}
          />
          <Text style={styles.baseText}> Nome do Diretor</Text>
          <TextInput
            style={styles.input}
            autoCorrect={false}
            onChangeText={() => {}}
          />
          <Text style={styles.baseText}> Email do Diretor</Text>
          <TextInput
            style={styles.input}
            autoCorrect={false}
            onChangeText={() => {}}
          />
          <View style={styles.viewbutton}>
            <Button
              title="Salvar"
              color="#870B5A"
              onPress={() => this.insertDepartamentos()}
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
    marginTop: 50,
    marginBottom: 20,
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
    width: 50,
    height: 50,
    marginLeft: 20,
    marginBottom: 15,
  },
  input: {
    width: 300,
    height: 30,
    fontSize: 20,
    borderRadius: 10,
    borderColor: "#870B5A",
    borderStyle: "solid",
    borderWidth: 2,
    marginTop: 15,
    justifyContent: "center",
    alignSelf: "center",
    marginBottom: 50,
  },
  viewbutton: {
    alignSelf: "flex-end",
    width: 100,
    height: 40,
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 4,
    marginTop: 80,
    justifyContent: "center",
    marginRight: 20,
  },
});
