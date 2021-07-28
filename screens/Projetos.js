import React, { Component } from "react";
import {
  Switch,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Button,
  Alert,
} from "react-native";
import Constants from "expo-constants";
import * as Animatable from "react-native-animatable";
import Collapsible from "react-native-collapsible";
import Accordion from "react-native-collapsible/Accordion";
import imagem from "./assets/Fundo2.png";
import logo from "./assets/IPB-Branco.png";
import user from "./assets/user.png";
import Icon from "react-native-vector-icons/FontAwesome";
import { OwnHeader } from "./shared/Header.js";
import { TextInput } from "react-native-gesture-handler";
import { color } from "react-native-reanimated";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default class Projetos extends Component {
  state = {
    activeSections: [],
    collapsed: true,
    multipleSelect: false,
    projetos: [],
    user_id: null,
  };
  _retrieveData = async () => {
    console.log("estou aqui !!!!!!");
    try {
      const value = await AsyncStorage.getItem("@user");
      const user = value != null ? JSON.parse(value) : null;
      console.log("value", value);
      if (user !== null) {
        this.setState({
          user_id: user.id,
        });
        console.log("get async", user);
      }
    } catch (error) {
      console.log(error);
    }
  };

  async deleteprojeto(section) {
    const url = "http://194.210.110.169/projeto/web/rest/projeto/delete?id=";
    console.log(url + section.id);
    try {
      let response = await fetch(url + section.id, {
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
    await this._retrieveData();
    const docentes = await fetch(
      "http://194.210.110.169/projeto/web/rest/docente?page=2"
    ).then((response) => response.json());
    console.log("docentes", docentes);
    console.log("teste", this.state.user_id);
    const docente = docentes.find((dc) => {
      if (dc.id_utilizador == this.state.user_id) {
        return dc;
      }
    });
    console.log("docente", docente);

    const autoria = await fetch(
      "http://194.210.110.169/projeto/web/rest/autoria-projeto"
    ).then((response) => response.json());

    const projetosautoria = autoria
      .filter((ap) => {
        if (ap.id_autor == docente.id) {
          return ap;
        }
      })
      .map((item) => item.id_projeto);
    console.log(projetosautoria);

    const projetos = await fetch(
      "http://194.210.110.169/projeto/web/rest/projeto"
    ).then((response) => response.json());

    const projetosfiltrados = projetos.filter((projeto) => {
      if (projetosautoria.includes(projeto.id)) {
        return projeto;
      }
    });

    this.setState({
      projetos: projetosfiltrados,
    });
    console.log("result", projetosfiltrados);
  }

  toggleExpanded = () => {
    this.setState({ collapsed: !this.state.collapsed });
  };

  setSections = (sections) => {
    this.setState({
      activeSections: sections.includes(undefined) ? [] : sections,
    });
  };

  renderHeader = (section, _, isActive) => {
    return (
      <Animatable.View
        duration={400}
        style={[styles.header, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor"
      >
        <Text style={styles.headerText}>{section.titulo}</Text>
      </Animatable.View>
    );
  };

  renderContent(section, _, isActive) {
    return (
      <Animatable.View
        duration={400}
        style={[styles.content, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor"
      >
        <View style={{ flexDirection: "row" }}>
          <Animatable.Text
            style={{ color: "white" }}
            animation={isActive ? "bounceIn" : undefined}
          >
            <Text>
              Data de realização: {section.data_inicio} {"\n"}
            </Text>
            <Text>
              Data de fim: {section.data_fim} {"\n"}
            </Text>
            <Text>
              Local de realização: {section.local_realizacao}
              {"\n"}{" "}
            </Text>
            <Text>
              Valor Financiado: {section.valor_financiado}
              {"\n"}{" "}
            </Text>
            <View
              style={{
                borderWidth: 2,
                borderRadius: 3,
                borderColor: "#ffff",
                backgroundColor: "#870B5A",
                width: 100,
                height: 40,
                marginRight: 80,
                flexDirection: "column",
                marginTop: 80,
              }}
            >
              <Button
                title="Editar"
                color="#870B5A"
                onPress={() =>
                  this.props.navigation.navigate("EditarProjeto", {
                    item: section,
                  })
                }
              ></Button>
            </View>
            <View
              style={{
                borderWidth: 2,
                borderRadius: 3,
                borderColor: "#ffff",
                backgroundColor: "#870B5A",
                width: 100,
                height: 40,
                flexDirection: "column",
              }}
            >
              <Button
                title="Excluir"
                color="#870B5A"
                onPress={() => this.deleteprojeto(section)}
              ></Button>
            </View>
          </Animatable.Text>
        </View>
      </Animatable.View>
    );
  }

  render() {
    const { multipleSelect, activeSections } = this.state;

    return (
      <View style={styles.container}>
        <OwnHeader></OwnHeader>
        <ImageBackground source={imagem} style={styles.imageFundo}>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.baseText}> Projetos </Text>
            <View
              style={{
                marginLeft: 200,
                backgroundColor: "#870B5A",
                height: 40,
                marginTop: 20,
              }}
            >
              <Button
                title="+"
                color="#870B5A"
                onPress={() =>
                  this.props.navigation.navigate("AdicionarProjeto")
                }
              ></Button>
            </View>
          </View>
          <ScrollView contentContainerStyle={{ paddingTop: 30 }}>
            <Accordion
              activeSections={activeSections}
              sections={this.state.projetos}
              touchableComponent={TouchableOpacity}
              expandMultiple={multipleSelect}
              renderHeader={this.renderHeader}
              renderContent={this.renderContent.bind(this)}
              duration={400}
              onChange={this.setSections}
            />
          </ScrollView>
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
  header: {
    padding: 10,
    borderRadius: 10,
    borderColor: "black",
  },
  headerText: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "600",
    color: "white",
  },
  content: {
    padding: 20,
  },
  active: {
    backgroundColor: "#870B5A",
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20,
    borderRadius: 10,
  },
  inactive: {
    backgroundColor: "#870B5A",
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20,
  },

  selectTitle: {
    fontSize: 14,
    fontWeight: "500",
    padding: 10,
  },
  imageFundo: {
    flex: 1,
    resizeMode: "cover",
  },
  baseText: {
    fontWeight: "bold",
    color: "#870B5A",
    marginLeft: 50,
    fontSize: 30,
    marginTop: 20,
  },
});
