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
import imageminst from "./assets/inst.png";
import logo from "./assets/IPB-Branco.png";
import user from "./assets/user.png";
import Icon from "react-native-vector-icons/FontAwesome";
import { OwnHeader } from "./shared/Header.js";

export default class Visitante extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={imagem} style={styles.imageFundo}>
          <OwnHeader></OwnHeader>
          <Image source={imageminst} style={styles.imageminst}></Image>
          <View style={{}}>
            <Text style={styles.textinst}>
              O Instituto Politécnico de Bragança é uma instituição pública de
              ensino superior, empenhada na oferta de formação de qualidade e na
              promoção de atividades de investigação e extensão com impacto no
              meio económico, social e cultural.
              {"\n"}
              Promovemos a qualidade através da qualificação do nosso corpo
              docente e da avaliação e acreditação da instituição e dos ciclos
              de estudos a nível nacional e internacional.{"\n"}
              Assumimos o desafio da reforma do ensino superior e acreditamos na
              democratização do acesso, na abertura a novos públicos e no
              projeto de aprendizagem ao longo da vida, contribuindo para a
              aproximação dos índices de frequência e de qualificação da
              população portuguesa à média da União Europeia.
              {"\n"}
              Garantimos a transparência internacional e o reconhecimento
              académico e profissional das nossas qualificações, através da
              adequação ao Processo de Bolonha, da aplicação do sistema de
              créditos do ECTS e da disponibilização bilingue do Guia ECTS,
              diplomas e certificados.
              {"\n"}
              Acreditamos no papel fundamental da investigação aplicada para o
              fortalecimento da missão educativa a nível profissional e
              tecnológico e como fator de relacionamento externo e de
              desenvolvimento económico.
            </Text>
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
  imageminst: {
    flex: 1,
    height:800,
    width:450

  },
  baseText: {
    fontWeight: "bold",
    color: "#870B5A",
    textAlign: "center",
    fontSize: 20,
    marginTop: 20,
  },
  textinst: {
    color: "black",
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "justify",
    backgroundColor: "transparent",
    marginBottom: 167,
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
  container2: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "stretch",
    height: 70,
    backgroundColor: "#870B5A",
  },
});
