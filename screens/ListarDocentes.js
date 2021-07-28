import { HeaderHeightContext } from "@react-navigation/stack";
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
import { TextInput } from "react-native-gesture-handler";

export default class ListarDocentes extends Component {
  state = {
    docentes: [],
  };

  async componentDidMount() {
    try {
      const docente = await fetch(
        "http://194.210.110.169/projeto/web/rest/docente"
      ).then((response) => response.json());
      this.setState({
        isLoading: false,
        docentes: docente,
      });
    } catch (err) {
      console.log("Error fetching data---------", err);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={image} style={styles.imageFundo}>
          <OwnHeader></OwnHeader>
          <View
            style={{ flexDirection: "row", marginBottom: 80, marginLeft: 80 }}
          ></View>
          <View style={{ flexDirection: "row", marginLeft: 80 }}>
            <Text style={styles.TextDocente}>Docentes</Text>
            <View style={{ marginLeft: 70 }}>
              <Button
                color="#870B5A"
                height={40}
                title="+"
                onPress={() => this.props.navigation.navigate("Docente")}
              >
                {" "}
              </Button>
            </View>
          </View>
          <View
            style={{
              alignSelf: "flex-end",
              marginRight: 20,
              marginTop: 20,
              width: 90,
              borderWidth: 5,
              borderRadius: 2,
              borderColor: "white",
            }}
          ></View>

          <FlatList
            style={{ marginBottom: 150 }}
            data={this.state.docentes}
            keyExtractor={(item) => item.nome}
            renderItem={({ item }) => (
              <View style={{ flexDirection: "row", alignSelf: "flex-end" }}>
                <View
                  style={styles.Button}
                  style={{ flexDirection: "row", height: 30, padding: 20 }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      marginRight: 100,
                      height: 30,
                    }}
                  >
                    <Text style={styles.textoItem}>{item.nome}</Text>
                  </View>
                  <View
                    style={{ marginLeft: 40, flexDirection: "row", height: 30 }}
                  >
                  </View>
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
  TextDocente: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#870B5A",
    alignSelf: "center",
    marginLeft: 30,
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
    fontSize: 25,
    color: "#870B5A",
    borderBottomWidth: 1,
    borderBottomColor: "#870B5A",
  },
  Button: {
    justifyContent: "flex-end",
    width: 100,
    borderWidth: 1,
    borderColor: "#870B5A",
    borderRadius: 4,
    backgroundColor: "#870B5A",
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
  },
});
