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
import DropDownPicker from "react-native-dropdown-picker";

export default class AdicionarEscola extends Component {
  state = {
    nome: "",
    sigla: "",
  };
  async insertEscolas() {
    var data = {
      nome: this.state.nome,
      sigla: this.state.sigla,
      id_instituição: 1,
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
        "http://194.210.110.169/projeto/web/rest/escolas",
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
        Alert.alert("Escola inserida com sucesso!!!");
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
          <View>
            <Text style={styles.baseText}> Nome da Escola</Text>

            <TextInput
              style={styles.input}
              autoCorrect={false}
              onChangeText={(text) => {
                this.setState({ nome: text });
              }}
            />
          </View>
          <View style={{ marginTop: 50 }}>
            <Text style={styles.baseText}> Sigla da Escola</Text>
            <TextInput
              style={styles.input}
              autoCorrect={false}
              onChangeText={(text) => {
                this.setState({ sigla: text });
              }}
            />
          </View>
          <View style={{ marginTop: 60 }}>
            <Text style={styles.baseText}> Nome diretor</Text>
            <TextInput
              style={styles.input}
              autoCorrect={false}
              onChangeText={() => {}}
            />
          </View>
          <View style={{ marginTop: 60 }}>
            <Text style={styles.baseText}> Email do diretor</Text>
            <TextInput
              style={styles.input}
              autoCorrect={false}
              onChangeText={() => {}}
            />
          </View>

          <View style={styles.viewbutton}>
            <Button
              title="Salvar"
              color="#870B5A"
              onPress={() => this.insertEscolas()}
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
    justifyContent: "center",
    alignSelf: "center",
  },
  viewbutton: {
    alignSelf: "flex-end",
    width: 100,
    height: 40,
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 4,
    marginTop: 250,
    justifyContent: "center",
    marginRight: 20,
  },
});
