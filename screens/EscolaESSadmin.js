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
import imagemesa from "./assets/ess.jpeg";
import logo from "./assets/IPB-Branco.png";
import user from "./assets/user.png";
import Icon from "react-native-vector-icons/FontAwesome";
import { OwnHeader } from "./shared/Header.js";

export default class EscolaESSadmin extends Component {
  state = {
    diretornome: [],
    diretoremail: [],
    escola: [],
  };

  async componentDidMount() {
    const docente = await fetch(
      "http://194.210.110.169/projeto/web/rest/docente/view?id=4"
    ).then((response) => response.json());
    this.setState({
      diretornome: docente,
    });
    const utilizador = await fetch(
      "http://194.210.110.169/projeto/web/rest/utilizador/view?id=12"
    ).then((response) => response.json());
    this.setState({
      diretoremail: utilizador,
    });
    const escola = await fetch(
      "http://194.210.110.169/projeto/web/rest/escola/view?id=4"
    ).then((response) => response.json());
    this.setState({
      escola: escola,
    });
    console.log("docente", this.state.diretornome);
    console.log("utilizador", this.state.diretoremail);
  }
  async deleteEscola() {
    try {
      let response = await fetch(
        "http://194.210.110.169/projeto/web/rest/escola/delete?id=4",
        {
          method: "DELETE",
          headers: {
            //Accept: 'application/json',
            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
          },
        }
      );
      if (response.status >= 200 && response.status < 300) {
        Alert.alert("Apagado com sucesso!!!");
      }
    } catch (errors) {
      Alert.alert(errors);
    }
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
          <Image source={imagemesa} style={styles.imagemESS}></Image>
          <View style={{ margin: 20 }}>
            <Text
              style={{
                color: "#870B5A",
                fontWeight: "bold",
                textAlign: "center",
                fontSize: 20,
              }}
            >
              Diretor
            </Text>
            <View
              style={{
                flexDirection: "row",
                marginBottom: 20,
                padding: 10,
              }}
            >
              <Image source={user} style={styles.user}></Image>
              <View style={{ flexDirection: "column" }}>
                <Text style={styles.informacoes}>{`Nome: ${nome}`}</Text>
                <Text style={styles.informacoes}>Email: {email}</Text>
              </View>
            </View>
            <Text style={styles.textesa}>
              A Escola Superior de Sa??de de Bragan??a (ESSa) ?? uma das cinco
              Escolas integradas no Instituto Polit??cnico de Bragan??a. ?? uma
              institui????o p??blica de forma????o de n??vel superior que tem como
              miss??o a forma????o de 1?? e 2?? ciclo, a forma????o p??s-graduada, a
              investiga????o e a presta????o de servi??os ?? comunidade, no dom??nio da
              sa??de. Tem procurado ao longo da sua exist??ncia conciliar uma
              estrat??gia de crescimento com o princ??pio fundamental da procura
              da qualidade formativa, cumprindo a sua fun????o institucional, pelo
              que tem merecido o reconhecimento de outras institui????es do
              ensino, da sa??de e da comunidade em geral. Como institui????o de
              ensino superior ocupa neste momento, um importante espa??o
              formativo na ??rea das ci??ncias da sa??de, constituindo-se como um
              pilar fundamental para o desenvolvimento da regi??o.
            </Text>
          </View>
          <View style={styles.viewbuttoneditar}>
            <Button
              title="Editar"
              color="#870B5A"
              onPress={() =>
                this.props.navigation.navigate("EditarESS", {
                  titulo: this.state.escola.nome,
                })
              }
            ></Button>
          </View>
          <View style={styles.viewbuttonexcluir}>
            <Button
              title="Excluir"
              color="#870B5A"
              onPress={this.deleteEscola()}
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
  imagemESS: {
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
  textesa: {
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
  viewbuttoneditar: {
    alignSelf: "flex-end",
    width: 150,
    height: 40,
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 4,
    marginBottom: 20,
    justifyContent: "center",
    marginRight: 10,
    marginBottom: 10,
  },
  viewbuttonexcluir: {
    alignSelf: "flex-end",
    width: 150,
    height: 40,
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 4,
    marginBottom: 5,
    justifyContent: "center",
    marginRight: 10,
  },
});
