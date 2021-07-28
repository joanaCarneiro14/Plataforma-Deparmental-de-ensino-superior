import React, { Component } from "react";
import {
  View,
  ImageBackground,
  StyleSheet,
  Image,
  Text,
  FlatList,
  Button,
  Alert,
} from "react-native";
import { input } from "react-native-elements";
import image from "./assets/imagemDesign.jpeg";
import logo from "./assets/IPB.jpeg";
import icone from "./assets/icon.jpeg";
import { OwnHeader } from "./shared/Header.js";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default class ListaDepartamentosDiretor extends Component {
  state = {
    activeSections: [],
    collapsed: true,
    multipleSelect: false,
    departamento: [],
    escola_id: 2,
    user_id: null,
  };

  async deletedepartamento(item) {
    console.log("item", item.id);
    const url =
      "http://194.210.110.169/projeto/web/rest/departamento/delete?id=";
    console.log(url + item.id);
    try {
      let response = await fetch(url + item.id, {
        method: "DELETE",
        headers: {
          //Accept: 'application/json',
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
      });
      if (response.status >= 200 && response.status < 300) {
        Alert.alert("Apagado com sucesso!!!");
      }
    } catch (errors) {
      Alert.alert(errors);
    }
  }
  async componentDidMount() {
    const departamentos = await fetch(
      "http://194.210.110.169/projeto/web/rest/departamento"
    ).then((response) => response.json());

    const departamento = await fetch(
      "http://194.210.110.169/projeto/web/rest/departamento"
    ).then((response) => response.json());
    console.log("departamento", departamento);
    const escoladepartamento = departamento
      .filter((dp) => {
        if (dp.id_escola == this.state.escola_id) {
          return dp;
        }
      })
      .map((item) => item.id_escola);
    console.log("dept", escoladepartamento);

    const departamentofiltrados = departamentos.filter((departamento) => {
      if (escoladepartamento.includes(departamento.id_escola)) {
        return departamento;
      }
    });
    this.setState({
      departamento: departamentofiltrados,
    });
    console.log("result", departamentofiltrados);
  }

  toggleExpanded = () => {
    this.setState({ collapsed: !this.state.collapsed });
  };

  setSections = (sections) => {
    this.setState({
      activeSections: sections.includes(undefined) ? [] : sections,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={image} style={styles.imageFundo}>
          <OwnHeader></OwnHeader>
          <View
            style={{ flexDirection: "row", marginBottom: 80, marginLeft: 80 }}
          >
            <Text style={styles.TextDepartamento}>Departamentos</Text>
            <View style={{ marginLeft: 50, marginTop: 40 }}>
              <Button
                color="#870B5A"
                height={40}
                title="+"
                onPress={() =>
                  this.props.navigation.navigate("adiconardepartamento")
                }
              ></Button>
            </View>
          </View>
          <View></View>
          <FlatList
            style={{ marginBottom: 150 }}
            data={this.state.departamento}
            keyExtractor={(item) => item.nome}
            renderItem={({ item }) => (
              <View style={styles.item}>
                <View
                  style={styles.Button}
                  style={{ flexDirection: "row", height: 30 }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      height: 30,
                    }}
                  >
                    <Text style={styles.textoItem}>{item.nome}</Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    height: 30,
                  }}
                >
                  <View>
                    <Button
                      color="#870B5A"
                      title="Editar"
                      onPress={() =>
                        this.props.navigation.navigate("Editar", {
                          titulo: item.nome,
                          id: item.id,
                        })
                      }
                    />
                  </View>
                  <View style={{ marginLeft: 30 }}>
                    <Button
                      color="#870B5A"
                      title="Excluir"
                      onPress={() => this.deletedepartamento(item)}
                    />
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

{
  /* <FlatList
            style={{ marginBottom: 150 }}
            data={this.state.departamento}
            keyExtractor={(item) => item.nome}
            renderItem={({ item }) => (
              <View style={styles.item}>
                <View
                  style={styles.Button}
                  style={{ flexDirection: "row", height: 30 }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      marginRight: 20,
                      height: 30,
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        marginLeft: 20,
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
                  >
                    <Button
                      color="#870B5A"
                      title="Editar"
                      onPress={() =>
                        this.props.navigation.navigate("Editar", {
                          titulo: item.nome,
                          id: item.id,
                        })
                      }
                    />
                  </View>
                  <Button
                    color="#870B5A"
                    title="Excluir"
                    onPress={() => this.deletedepartamento(item)}
                  />
                </View>
              </View>
            )}
          />
        </ImageBackground>
      </View>
    );
  }
} */
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
    alignSelf: "center",
    marginTop: 40,
  },
  TextNome: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#870B5A",
    marginLeft: 50,
  },
  logotipo: {
    flex: 1,
    resizeMode: "center",
    justifyContent: "center",
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
  item: {
    padding: 30,
    fontSize: 16,
    height: 44,
  },
});
