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

export default class EditarPublicacao_Docente extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      titulo: "",
      data_finalizacao: "",
      local_realizacao: "",
      tipo: "",
    };
  }
  componentDidMount() {
    const { item } = this.props.route.params;
    this.setState({
      id: item.id,
      titulo: item.titulo,
      data_finalizacao: item.data_finalizacao,
      local_realizacao: item.local_realizacao,
      tipo: item.tipo,
    });
  }

  async text() {
    var data = {
      titulo: this.state.titulo,
      data_finalizacao: this.state.data_finalizacao,
      local_realizacao: this.state.local_realizacao,
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
    console.log("---------");
    console.log(formBody);
    try {
      let url = "http://194.210.110.169/projeto/web/rest/publicacao/update?id=";
      let response = await fetch(url + this.state.id, {
        method: "PATCH",
        headers: {
          //Accept: 'application/json',
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
        body: formBody,
      });
      if (response.status >= 200 && response.status < 300) {
        Alert.alert("Editado com sucesso!!!");
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
          <Text style={styles.baseText}> Editar Publicação</Text>

          <View
            style={{
              flexDirection: "column",
              justifyContent: "center",
              resizeMode: "center",
              marginBottom: 100,
              marginTop: 100,
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.informacoes}>Título:</Text>
              <TextInput
                style={styles.input}
                autoCorrect={false}
                onChangeText={(text) => this.setState({ titulo: text })}
              >
                {this.state.titulo}
              </TextInput>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.informacoes}>Data de Finalização:</Text>
              <TextInput
                style={styles.input}
                autoCorrect={false}
                onChangeText={(text) =>
                  this.setState({ data_finalizacao: text })
                }
              >
                {this.state.data_finalizacao}
              </TextInput>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.informacoes}>Local de Realização:</Text>
              <TextInput
                style={styles.input}
                autoCorrect={false}
                onChangeText={(text) =>
                  this.setState({ local_realizacao: text })
                }
              >
                {this.state.local_realizacao}
              </TextInput>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.informacoes}>Tipo:</Text>
              <TextInput
                style={styles.input}
                autoCorrect={false}
                onChangeText={(text) => this.setState({ tipo: text })}
              >
                {this.state.tipo}
              </TextInput>
            </View>
          </View>
          <View style={styles.viewbutton}>
            <Button
              title="Salvar"
              color="#870B5A"
              onPress={() => this.text()}
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
    fontSize: 25,
    marginTop: 70,
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
    width: 150,
    height: 50,
    marginBottom: 15,
    fontSize: 18,
  },
  input: {
    width: 250,
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
