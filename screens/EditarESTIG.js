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
import { TextInput } from "react-native-gesture-handler";
import { OwnHeader } from "./shared/Header.js";

export default class EditarESTIG extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titulo: "",
      id: null,
    };
  }
  componentDidMount() {
    const { titulo } = this.props.route.params;
    this.setState({
      titulo: titulo,
      id: 2,
    });
  }
  async update() {
    var data = {
      nome: this.state.titulo,
    };
    var formBody = [];
    for (var property in data) {
      var encodedKey = encodeURIComponent(property);
      var encodedValue = encodeURIComponent(data[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");
    try {
      let url = "http://194.210.110.169/projeto/web/rest/escola/update?id=";
      let response = await fetch(url + this.state.id, {
        method: "PATCH",
        headers: {
          //Accept: 'application/json',
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
        body: formBody,
      });
      if (response.status >= 200 && response.status < 300) {
        Alert.alert("Escola alterada com sucesso!!!");
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
          <TextInput
            style={styles.input}
            autoCorrect={false}
            onChangeText={(text) => this.setState({ titulo: text })}
          />
          <Image source={imagemestig} style={styles.imagemEstig}></Image>
          <View style={{ margin: 20 }}>
            <Text
              style={{
                color: "#870B5A",
                fontWeight: "bold",
                textAlign: "center",
                fontSize: 20,
                marginBottom: 50,
              }}
            >
              Diretor
            </Text>
            <View style={{ flexDirection: "row", marginBottom: 20 }}>
              <Image source={user} style={styles.user}></Image>
              <View style={{ flexDirection: "column" }}>
                <Text style={styles.informacoes}>Nome: Lara Borges</Text>
                <Text style={styles.informacoes}>Email: lborges@ipt.pt</Text>
              </View>
            </View>
            <Text style={styles.textestig}>
              A Escola Superior de Tecnologia e Gestão de Bragança (ESTiG),
              criada em 1990, desenvolve a sua missão de formação e de
              investigação/desenvolvimento nas áreas da engenharia e das
              ciências empresariais.{"\n"}
              Com 101 docentes em tempo integral (dos quais 85 são doutorados),
              79 docentes em tempo parcial (colaboradores externos que mantêm
              uma atividade profissional fora da Escola) e 30 funcionários
              técnicos/administrativos (dos quais 15 detêm formação superior), a
              ESTiG tem vindo a assumir-se como uma das maiores Escolas de
              Tecnologia e Gestão do País.
            </Text>
          </View>

          <View style={styles.viewbutton}>
            <Button
              title="Salvar"
              color="#870B5A"
              onPress={() => this.update()}
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
    marginTop: 20,
    width: 425,
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
    marginBottom: 100,
  },
  logotipo: {
    flex: 1,
    resizeMode: "center",
    justifyContent: "center",
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
    height: 50,
    marginLeft: 100,
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
  input: {
    width: 350,
    height: 40,
    fontSize: 20,
    borderRadius: 10,
    borderColor: "#870B5A",
    borderStyle: "solid",
    borderWidth: 2,
    alignSelf: "center",
    marginTop: 30,
  },
});
