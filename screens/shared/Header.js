import { HeaderTitle } from "@react-navigation/stack";
import React, { Component } from "react";
import { Alert, Image } from "react-native";
import { Header } from "react-native-elements";
import { imageheader } from "./imageheader.js";
import { Fauser } from "react-icons/fa";

export const OwnHeader = (props) => (
  <Header
    placement="left"
    leftComponent={{
      icon: "menu",
      color: "#fff",
      onPress: () => {
        props.navigation.toggleDrawer();
      },
    }}
    backgroundColor="#870B5A"
    rightComponent={{
      icon: "info",
      color: "#fff",
      onPress: () => this.props.navigation.navigate("Login"),
    }}
  ></Header>
);
