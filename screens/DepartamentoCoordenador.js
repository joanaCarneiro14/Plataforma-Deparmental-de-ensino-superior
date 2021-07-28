import React, { Component } from "react";
import {
  View,
  ImageBackground,
  StyleSheet,
  Image,
  Text,
  FlatList,
  Button,
} from "react-native";
import { input } from "react-native-elements";
import image from "./assets/imagemDesign.jpeg";
import logo from "./assets/IPB.jpeg";
import icone from "./assets/icon.jpeg";
import user from "./assets/user.png";
import { OwnHeader } from "./shared/Header.js";

export default class DepartamentoCoordenador extends Component {
  state = {
    departamento: [],
    coordenadornome: [],
    coordenadoremail: [],
    docentes: [],
  };

  async componentDidMount() {
    const departamento = await fetch(
      "http://194.210.110.169/projeto/web/rest/departamento/view?id=9"
    ).then((response) => response.json());
    this.setState({
      departamento: departamento,
    });

    const docente = await fetch(
      "http://194.210.110.169/projeto/web/rest/docente/view?id=8"
    ).then((response) => response.json());
    this.setState({
      coordenadornome: docente,
    });
    const utilizador = await fetch(
      "http://194.210.110.169/projeto/web/rest/utilizador/view?id=16"
    ).then((response) => response.json());
    this.setState({
      coordenadoremail: utilizador,
    });
    const ldocente = await fetch(
      "http://194.210.110.169/projeto/web/rest/docente"
    ).then((response) => response.json());
    this.setState({
      docentes: ldocente,
    });
  }

  render() {
    let nomedp = this.state.departamento.nome;
    let nome = this.state.coordenadornome.nome;
    let email = this.state.coordenadoremail.email;
    return (
      <View style={styles.container}>
        <ImageBackground source={image} style={styles.imageFundo}>
          <OwnHeader></OwnHeader>
          <Text style={styles.TextDepartamento}>{nomedp}</Text>
          <Text style={styles.TextCoordenador}>Coordenador</Text>
          <View
            style={{ flexDirection: "row", marginBottom: 80, marginTop: 30 }}
          >
            <Image source={icone} style={styles.user}></Image>
            <View style={{ flexDirection: "column" }}>
              <Text style={styles.TextNome}>Nome: {nome}</Text>
              <Text style={styles.TextEmail}>Email: {email}</Text>
            </View>
          </View>
          <View
            style={{
              alignSelf: "flex-end",
              marginRight: 20,
              marginBottom: 20,
              width: 90,
              borderWidth: 5,
              borderRadius: 2,
              borderColor: "white",
            }}
          >
            <Button
              title="Editar"
              color="#870B5A"
              onPress={() =>
                this.props.navigation.navigate("Editar", {
                  titulo: this.state.departamento.nome,
                  id: this.state.departamento.id,
                  nomec: this.state.coordenadornome.nome,
                  emailc: this.state.coordenadoremail.email,
                  docentes: this.state.docentes,
                })
              }
            ></Button>
          </View>

          <FlatList
            style={{ marginBottom: 150 }}
            data={this.state.docentes}
            keyExtractor={(item) => item.nome}
            renderItem={({ item }) => (
              <View style={{}}>
                <View
                  style={styles.Button}
                  style={{ flexDirection: "row", marginLeft: 40, height: 30 }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      marginRight: 40,
                      height: 30,
                    }}
                  >
                    <Image
                      style={styles.Imagem}
                      source={require("./assets/user.png")}
                    ></Image>
                    <View
                      style={{
                        flexDirection: "row",
                        marginLeft: 30,
                        height: 30,
                      }}
                    >
                      <Text style={styles.textoItem}>{item.nome}</Text>
                    </View>
                  </View>
                  <View
                    style={{
                      marginRight: 30,
                      flexDirection: "row",
                      height: 30,
                    }}
                  ></View>
                </View>
              </View>
            )}
          />
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
  imageFundo: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  TextDepartamento: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#870B5A",
    marginTop: 10,
    alignSelf: "center",
  },
  TextCoordenador: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#870B5A",
    marginTop: 30,
    alignSelf: "center",
  },
  TextNome: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#870B5A",
    marginLeft: 50,
  },
  TextEmail: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#870B5A",
    marginLeft: 50,
    marginTop: 40,
  },
  logotipo: {
    flex: 1,
    resizeMode: "center",
    justifyContent: "center",
  },
  user: {
    resizeMode: "center",
    width: 80,
    height: 80,
  },
  textoItem: {
    fontSize: 20,
    color: "#870B5A",
    borderBottomWidth: 1,
    borderBottomColor: "#870B5A",
  },
  Button: {
    justifyContent: "flex-end",
    width: 90,
    borderWidth: 1,
    borderColor: "#870B5A",
    borderRadius: 6,
    backgroundColor: "#870B5A",
    marginTop: 20,
  },
  textoItem: {
    fontSize: 20,
    color: "#870B5A",
    borderBottomWidth: 1,
    borderBottomColor: "#870B5A",
  },
  Button: {
    justifyContent: "flex-end",
    width: 90,
    borderWidth: 1,
    borderColor: "#870B5A",
    borderRadius: 6,
    backgroundColor: "#870B5A",
    marginTop: 20,
  },
  Imagem: {
    width: 30,
    height: 30,
    marginRight: 80,
  },
});
