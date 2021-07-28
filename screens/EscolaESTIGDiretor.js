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

export default class EscolaESTIGDiretor extends Component {
  state = {
    diretornome: [],
    diretoremail: [],
    escola: [],
  };

  async componentDidMount() {
    const docente = await fetch(
      "http://194.210.110.169/projeto/web/rest/docente/view?id=41"
    ).then((response) => response.json());
    this.setState({
      diretornome: docente,
    });
    const utilizador = await fetch(
      "http://194.210.110.169/projeto/web/rest/utilizador/view?id=9"
    ).then((response) => response.json());
    this.setState({
      diretoremail: utilizador,
    });
    const escola = await fetch(
      "http://194.210.110.169/projeto/web/rest/escola/view?id=2"
    ).then((response) => response.json());
    this.setState({
      escola: escola,
    });
    console.log("docente", this.state.diretornome);
    console.log("utilizador", this.state.diretoremail);
  }

  render() {
    let nome = this.state.diretornome.nome;
    let email = this.state.diretoremail.email;
    let escola = this.state.escola.nome;
    console.log("nome", nome);
    console.log("email", email);
    return (
      <View style={styles.container}>
        <ImageBackground source={imagem} style={styles.imageFundo}>
          <OwnHeader></OwnHeader>
          <Text style={styles.baseText}>{escola}</Text>
          <Image source={imagemestig} style={styles.imagemEstig}></Image>
          <View style={{ margin: 20 }}>
            <Text
              style={{
                color: "#870B5A",
                fontWeight: "bold",
                textAlign: "center",
                fontSize: 20,
                marginBottom: 20,
              }}
            >
              Diretor
            </Text>
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <Image source={user} style={styles.user}></Image>
              <View
                style={{
                  flexDirection: "column",
                }}
              >
                <Text style={styles.informacoes}>{`Nome: ${nome}`}</Text>
                <Text style={styles.informacoes}>Email: {email}</Text>
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
              title="Editar"
              color="#870B5A"
              onPress={() =>
                this.props.navigation.navigate("EditarESTIG", {
                  titulo: this.state.escola.nome,
                })
              }
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
    alignSelf: "stretch",
    width: 424,
    height: 800,
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
    marginRight: 10,
    marginLeft: 10,
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
    marginLeft: 30,
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
