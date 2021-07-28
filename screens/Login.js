import React, { Component } from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Button,
  Alert,
} from "react-native";
import { input } from "react-native-elements";
import { TextInput } from "react-native-gesture-handler";
import { set } from "react-native-reanimated";
import image from "./assets/imagemLogin.jpeg";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default class Login extends Component {
  state = {
    email: "",
    password: "",
    users: [],
  };

  async componentDidMount() {
    const result = await fetch(
      "http://194.210.110.169/projeto/web/rest/utilizador"
    ).then((response) => response.json());
    this.setState({
      users: result,
    });
  }
  _storeData = async (user) => {
    try {
      console.log("user", user);
      const jsonValue = JSON.stringify(user);
      await AsyncStorage.setItem("@user", jsonValue);
    } catch (error) {
      // Error saving data
    }
  };

  makelogin = () => {
    const { email, password } = this.state;
    let log = false;
    let userid = null;
    let tipouser = "";
    this.state.users.filter((utilizador) => {
      if (utilizador.email == email && utilizador.password == password) {
        log = true;
        userid = utilizador.id;
        tipouser = utilizador.tipo;
        if (log === true) {
          this._storeData(utilizador);
          this.props.navigation.navigate("Escolha");
        }
      }
    });
    if (log === false) {
      Alert.alert("Login falhado");
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={image} style={styles.imageFundo}>
          <View>
            <Text style={styles.LoginText}>Login</Text>
          </View>
          <View>
            <Text style={styles.Text}>Utilizador</Text>
            <TextInput
              style={styles.input}
              autoCorrect={false}
              onChangeText={(text) => {
                this.setState({ email: text });
              }}
            />
            <Text style={styles.Text}>Palavra-Passe</Text>
            <TextInput
              style={styles.input}
              autoCorrect={false}
              onChangeText={(text) => {
                this.setState({ password: text });
              }}
              secureTextEntry={true}
            />
          </View>
          <View style={styles.ViewButton}>
            <Button
              title="Login"
              color="#870B5A"
              onPress={() => this.makelogin()}
            ></Button>
          </View>
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
  },
  imageFundo: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  input: {
    width: 300,
    marginBottom: 15,
    fontSize: 20,
    borderRadius: 10,
    borderColor: "#870B5A",
    borderStyle: "solid",
    borderWidth: 2,
    padding: 8,
    alignSelf: "center",
  },
  Text: {
    fontSize: 16,
    color: "#870B5A",
    marginLeft: 60,
  },
  LoginText: {
    fontSize: 50,
    fontWeight: "bold",
    color: "#870B5A",
    marginBottom: 20,
    marginTop: 300,
    marginLeft: 20,
  },
  ViewButton: {
    justifyContent: "flex-end",
    width: 100,
    height: 40,
    borderWidth: 2,
    borderColor: "#ffffff",
    borderRadius: 4,
    marginTop: 100,
    marginLeft: 280,
    marginBottom: 20,
  },
});
