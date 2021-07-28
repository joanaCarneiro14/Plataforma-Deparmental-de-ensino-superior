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

export default class AdicionarDocentes extends Component {
  state = {
    password: "",
    tipo: "",
    email: "",
    id_utilizador: "",
    nome: "",
    id_departamento: "",
  };
  async inserirdocente() {
    var data = {
      password: this.state.password,
      email: this.state.email,
      tipo: this.state.tipo,
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
        "http://194.210.110.169/projeto/web/rest/utilizadors",
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
        Alert.alert("Utilizador inserida com sucesso!!!");
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
          <Text style={styles.baseText}> Adicionar Docente</Text>
          <View
            style={{
              flexDirection: "column",

              marginLeft: 62,
              justifyContent: "center",
              resizeMode: " center",
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.informacoes}>Nome:</Text>
              <TextInput
                style={styles.input}
                autoCorrect={false}
                onChangeText={(text) => {
                  this.setState({ nome: text });
                }}
              />
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.informacoes}>Email:</Text>
              <TextInput
                style={styles.input}
                autoCorrect={false}
                onChangeText={(text) => {
                  this.setState({ email: text });
                }}
              />
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.informacoes}>Palavra-Passe:</Text>
              <TextInput
                style={styles.input}
                autoCorrect={false}
                onChangeText={(text) => {
                  this.setState({ password: text });
                }}
              />
            </View>
          </View>
          <Text style={styles.baseText}> Função</Text>
          <DropDownPicker
            items={[
              {
                label: "Docente",
                value: "docente",

                hidden: true,
              },
              {
                label: "Diretor",
                value: "diretor",
              },
              {
                label: "Coordenador",
                value: "coordenador",
              },
            ]}
            containerStyle={{ height: 40 }}
            style={{
              backgroundColor: "white",
              borderRadius: 2,
              borderColor: "#870B5A",
              width: 300,
              alignSelf: "center",
            }}
            itemStyle={{
              justifyContent: "flex-start",
            }}
            dropDownStyle={{
              backgroundColor: "#870B5A",
              width: 300,
              alignSelf: "center",
            }}
            onChangeItem={(item) =>
              this.setState({
                tipo: item.value,
              })
            }
          />
          <Text style={styles.baseText}> Departamento</Text>
          <DropDownPicker
            items={[
              {
                label: "Departamento de Informática e Comunicação",
                value: "5",

                hidden: true,
              },
              {
                label: "Departamento de Biologia e Biotecnologia",
                value: "2",
              },
              {
                label: "Departamento de Matemática",
                value: "7",
              },
              {
                label: "Departamento de Ciências Empresariais e Sociais",
                value: "8",
              },
              {
                label: "Departamento de Eletrotecnica",
                value: "9",
              },
              {
                label: "Departamento de Psicologia",
                value: "10",
              },
              {
                label: "Departamento de Ciências Socias",
                value: "11",
              },
            ]}
            containerStyle={{ height: 40 }}
            style={{
              backgroundColor: "white",
              borderRadius: 2,
              borderColor: "#870B5A",
              width: 300,
              alignSelf: "center",
            }}
            itemStyle={{
              justifyContent: "flex-start",
            }}
            dropDownStyle={{
              backgroundColor: "#870B5A",
              width: 300,
              alignSelf: "center",
            }}
            onChangeItem={(item) =>
              this.setState({
                id_departamento: item.value,
              })
            }
          />
          <View style={styles.viewbutton}>
            <Button
              title="Salvar"
              color="#870B5A"
              onPress={() => this.inserirdocente()}
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
    marginBottom: 20,
  },
  user: {
    resizeMode: "center",
    justifyContent: "center",
    width: 100,
    height: 100,
  },
  informacoes: {
    color: "#870B5A",
    fontWeight: "normal",
    textAlign: "center",
    width: 90,
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
    justifyContent: "center",
    alignSelf: "center",
    marginBottom: 25,
  },
  viewbutton: {
    alignSelf: "flex-end",
    width: 100,
    height: 40,
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 4,
    marginTop: 50,
    justifyContent: "center",
    marginRight: 20,
  },
});
