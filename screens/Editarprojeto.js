import React, { Component } from "react";
import {
  View,
  Text,
  Button,
  ImageBackground,
  StyleSheet,
  TextInput,
  Image,
  Alert,
} from "react-native";
import { color } from "react-native-reanimated";
import Icon from "react-native-vector-icons/FontAwesome";
import imagem from "./assets/fundoescolas.png";
import { OwnHeader } from "./shared/Header";

export default class Editarprojeto extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      titulo: "",
      data_inicio: "",
      data_fim: "",
      local_realizacao: "",
      valor_financiado: "",
    };
  }
  componentDidMount() {
    const { item } = this.props.route.params;
    this.setState({
      id: item.id,
      titulo: item.titulo,
      data_inicio: item.data_inicio,
      data_fim: item.data_fim,
      local_realizacao: item.local_realizacao,
      valor_financiado: item.valor_financiado,
    });
  }

  async text() {
    var data = {
      titulo: this.state.titulo,
      data_inicio: this.state.data_inicio,
      data_fim: this.state.data_fim,
      local_realizacao: this.state.local_realizacao,
      valor_financiado: this.state.valor_financiado,
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
      let url = "http://194.210.110.169/projeto/web/rest/projeto/update?id=";
      let response = await fetch(url + this.state.id, {
        method: "PATCH",
        headers: {
          //Accept: 'application/json',
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
        body: formBody,
      });
      if (response.status >= 200 && response.status < 300) {
        Alert.alert("Projeto editado com sucesso!!!");
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
          <Text style={styles.baseText}> Editar Projeto</Text>

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
              <Text style={styles.informacoes}>Data de Inicio:</Text>
              <TextInput
                style={styles.input}
                autoCorrect={false}
                onChangeText={(text) => this.setState({ data_inicio: text })}
              >
                {this.state.data_inicio}
              </TextInput>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.informacoes}>Data Fim:</Text>
              <TextInput
                style={styles.input}
                autoCorrect={false}
                onChangeText={(text) => this.setState({ data_fim: text })}
              >
                {this.state.data_fim}
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
              <Text style={styles.informacoes}>Valor Financiado:</Text>
              <TextInput
                style={styles.input}
                autoCorrect={false}
                onChangeText={(text) =>
                  this.setState({ valor_financiado: text })
                }
              >
                {this.state.valor_financiado}
              </TextInput>
            </View>
          </View>
          <View style={styles.viewbutton}>
            <Button
              title="Editar"
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
    marginTop: 30,
    justifyContent: "center",
    marginRight: 20,
  },
});
