import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DropDownPicker from "react-native-dropdown-picker";
import Inicio from "./screens/Inicio.js";
import Visitante from "./screens/Visitante.js";
import EscolaESTIGDiretor from "./screens/EscolaESTIGDiretor.js";
import EscolaESTIGadmin from "./screens/EscolaESTIGadmin.js";
import EscolaESTIG from "./screens/EscolaESTIG.js";
import EditarESTIG from "./screens/EditarESTIG.js";
import EscolaESEBDiretor from "./screens/EscolaESEBDiretor.js";
import EscolaESEBadmin from "./screens/EscolaESEBadmin.js";
import EscolaESEB from "./screens/EscolaESEB.js";
import EditarESEB from "./screens/EditarESEB.js";
import EscolaESSDiretor from "./screens/EscolaESSDiretor.js";
import EscolaESSadmin from "./screens/EscolaESSadmin.js";
import EscolaESS from "./screens/EscolaESS.js";
import EditarESS from "./screens/EditarESS.js";
import EscolaESADiretor from "./screens/EscolaESADiretor.js";
import EscolaESAadmin from "./screens/EscolaESAadmin.js";
import EscolaESA from "./screens/EscolaESA.js";
import EditarESA from "./screens/EditarESA.js";
import PerfilDocente from "./screens/PerfilDocente.js";
import EditarPerfilDocente from "./screens/EditarPerfilDocente.js";
import AdicionarDepartamentoAdmin from "./screens/AdicionarDepartamentoAdmin.js";
import { color } from "react-native-reanimated";
import EditarPublicacao_Docente from "./screens/EditarPublicacao_Docente.js";
import AdicionarPublicacoesDocentes from "./screens/AdicionarPublicacoesDocentes.js";
import AdicionarEscolas from "./screens/AdicionarEscola.js";
import DocenteVisitante from "./screens/DocenteVisitante.js";
import Escolha from "./screens/Escolha.js";
import Departamento from "./screens/DepartamentoDiretor.js";
import EditarDepartamento from "./screens/EditarDepartamento.js";
import ListaDepartamentosDiretor from "./screens/ListaDepartamentosDiretor.js";
import ListaDepartamentosAdm from "./screens/ListaDepartamentosAdm.js";
import AdicionarProjetos from "./screens/AdicionarProejtos";
import Editarprojeto from "./screens/Editarprojeto.js";
import Login from "./screens/Login.js";
import AdicionarEscola from "./screens/AdicionarEscola.js";
import Teste from "./screens/Teste.js";
import AdicionarDocentes from "./screens/AdicionarDocentes.js";
import AdicionarDepartamentos from "./screens/AdicionarDepartamentos.js";
import PaginaDepartamento from "./screens/PaginaDepartamento.js";
import Projetos from "./screens/Projetos.js";
import Publicacoes from "./screens/Publicacoes.js";
import DepartamentoCoordenador from "./screens/DepartamentoCoordenador";
import AdicionarDepartamentoDiretor from "./screens/AdicionarDepartamentoDiretor.js";
import PerfilAdmin from "./screens/PerfilAdmin.js";
import ListarDocentes from "./screens/ListarDocentes.js";
import ListarDocentesadmin from "./screens/ListarDocentesadmin.js";
import PerfilDocenteadmin from "./screens/PerfilDocenteadmin.js";
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function ESTIGDiretor() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Estig" component={EscolaESTIGDiretor} />
      <Stack.Screen name="EditarESTIG" component={EditarESTIG} />
    </Stack.Navigator>
  );
}
function ESSDiretor() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ESS" component={EscolaESSDiretor} />
      <Stack.Screen name="EditarESS" component={EditarESS} />
    </Stack.Navigator>
  );
}
function ESADiretor() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ESA" component={EscolaESADiretor} />
      <Stack.Screen name="EditarESA" component={EditarESA} />
    </Stack.Navigator>
  );
}
function ESEDiretor() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ESEB" component={EscolaESEBDiretor} />
      <Stack.Screen name="EditarESEB" component={EditarESEB} />
    </Stack.Navigator>
  );
}
function ESTIGAdmin() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Estig" component={EscolaESTIGadmin} />
      <Stack.Screen name="EditarESTIG" component={EditarESTIG} />
    </Stack.Navigator>
  );
}
function ESSAdmin() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ESS" component={EscolaESSadmin} />
      <Stack.Screen name="EditarESS" component={EditarESS} />
    </Stack.Navigator>
  );
}
function ESAAdmin() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ESA" component={EscolaESAadmin} />
      <Stack.Screen name="EditarESA" component={EditarESA} />
    </Stack.Navigator>
  );
}
function ESEAdmin() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ESEB" component={EscolaESEBadmin} />
      <Stack.Screen name="EditarESEB" component={EditarESEB} />
    </Stack.Navigator>
  );
}

function escolha() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Escolha" component={Escolha} />
      <Stack.Screen name="Docente" component={PerfilDocente} />
      <Stack.Screen name="Diretor" component={PerfilDocente} />
      <Stack.Screen name="Coordenador" component={PerfilDocente} />
      <Stack.Screen name="Admin" component={PerfilAdmin} />
      <Stack.Screen
        name="EditarPerfilDocente"
        component={EditarPerfilDocente}
      />
      <Stack.Screen name="EditarDepartamento" component={EditarDepartamento} />
    </Stack.Navigator>
  );
}

function departamentovisitante() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Departamentos" component={PaginaDepartamento} />
      <Stack.Screen name="PaginaDocente" component={DocenteVisitante} />
    </Stack.Navigator>
  );
}

function projetoss() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Projetos" component={Projetos} />
      <Stack.Screen name="AdicionarProjeto" component={AdicionarProjetos} />
      <Stack.Screen name="EditarProjeto" component={Editarprojeto} />
    </Stack.Navigator>
  );
}
function publicacoess() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Publicações" component={Publicacoes} />
      <Stack.Screen
        name="AdicionarPublicacao"
        component={AdicionarPublicacoesDocentes}
      />
      <Stack.Screen
        name="EditarPublicacao"
        component={EditarPublicacao_Docente}
      />
    </Stack.Navigator>
  );
}
function departamento() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Departamentos" component={DepartamentoCoordenador} />
      <Stack.Screen name="Editar" component={EditarDepartamento} />
    </Stack.Navigator>
  );
}

function departamentoDiretor() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="ListarDepartamentos"
        component={ListaDepartamentosDiretor}
      />
      <Stack.Screen name="Editar" component={EditarDepartamento} />
      <Stack.Screen name="PerfilDocente" component={DocenteVisitante} />
      <Stack.Screen
        name="adiconardepartamento"
        component={AdicionarDepartamentoDiretor}
      />
    </Stack.Navigator>
  );
}

function docentes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Docentes" component={ListarDocentesadmin} />
      <Stack.Screen name="Editar" component={PerfilDocenteadmin} />
      <Stack.Screen name="Adicionar" component={AdicionarDocentes} />
    </Stack.Navigator>
  );
}

function App() {
  /*console.log("entrei!!!!!");

  const tipo = "administrador"; // vai ser o objeto do async.tipo e guardar nesta variave

  // fazer um get dop asyn  do login do que fez login
  // primeira vez que entrar vazio
  //

  if (tipo == "administrador") {
    return (
      <Drawer.Navigator
        initialRouteName="Inicio"
        drawerType="slide"
        drawerStyle={{ backgroundColor: "#870B5A" }}
      >
        <Drawer.Screen name="Incio" component={Inicio} />
        <Drawer.Screen name="Logout" component={escolha} />
        <Drawer.Screen name="Departamentos" component={departamentoDiretor} />
        <Drawer.Screen name="ESTIG" component={ESTIGAdmin} />
        <Drawer.Screen name="ESEB" component={ESEAdmin} />
        <Drawer.Screen name="ESS" component={ESSAdmin} />
        <Drawer.Screen name="ESA" component={ESAAdmin} />
        <Drawer.Screen name="AdicionarEscola" component={AdicionarEscola} />
      </Drawer.Navigator>
    );
  }*/

  return (
    <NavigationContainer>
      {/*<Drawer.Navigator
        initialRouteName="Inicio"
        drawerType="slide"
        drawerStyle={{ backgroundColor: "#870B5A" }}
      >
        <Drawer.Screen name="Logout" component={Inicio} />
        <Drawer.Screen name="Home" component={Visitante} />
        <Drawer.Screen name="EscolaESA" component={EscolaESA} />
        <Drawer.Screen name="EscolaESS" component={EscolaESS} />
        <Drawer.Screen name="EscolaESTIG" component={EscolaESTIG} />
        <Drawer.Screen name="EscolaESEB" component={EscolaESEB} />
    </Drawer.Navigator>*/}
      {/*<Drawer.Navigator
        initialRouteName="Inicio"
        drawerType="slide"
        drawerStyle={{ backgroundColor: "#870B5A" }}
      >
        <Drawer.Screen name="Incio" component={Inicio} />
        <Drawer.Screen name="Logout" component={escolha} />
        <Drawer.Screen name="Projetos" component={projetoss} />
        <Drawer.Screen name="Publicações" component={publicacoess} />
      </Drawer.Navigator>*/}
      {/* <Drawer.Navigator
        initialRouteName="Inicio"
        drawerType="slide"
        drawerStyle={{ backgroundColor: "#870B5A" }}
      >
        <Drawer.Screen name="Incio" component={Inicio} />
        <Drawer.Screen name="Logout" component={escolha} />
        <Drawer.Screen name="Projetos" component={projetoss} />
        <Drawer.Screen name="Publicações" component={publicacoess} />
        <Drawer.Screen name="Departamento" component={departamento} />
      </Drawer.Navigator> */}

      <Drawer.Navigator
        initialRouteName="Inicio"
        drawerType="slide"
        drawerStyle={{ backgroundColor: "#870B5A" }}
      >
        <Drawer.Screen name="Incio" component={Inicio} />
        <Drawer.Screen name="Logout" component={escolha} />
        <Drawer.Screen name="Projetos" component={projetoss} />
        <Drawer.Screen name="Publicações" component={publicacoess} />
        <Drawer.Screen name="Departamentos" component={departamentoDiretor} />
        <Drawer.Screen name="ESTIG" component={ESTIGDiretor} />
      </Drawer.Navigator>
      {/* <Drawer.Navigator
        initialRouteName="Inicio"
        drawerType="slide"
        drawerStyle={{ backgroundColor: "#870B5A" }}
      >
        <Drawer.Screen name="Incio" component={Inicio} />
        <Drawer.Screen name="Perfil" component={PerfilAdmin} />
        <Drawer.Screen name="Departamentos" component={departamentoDiretor} />
        <Drawer.Screen name="ESTIG" component={ESTIGAdmin} />
        <Drawer.Screen name="ESEB" component={ESEAdmin} />
        <Drawer.Screen name="ESS" component={ESSAdmin} />
        <Drawer.Screen name="ESA" component={ESAAdmin} />
        <Drawer.Screen name="AdicionarEscola" component={AdicionarEscola} />
        <Drawer.Screen name="Docentes" component={docentes} />
      </Drawer.Navigator> */}
    </NavigationContainer>
  );
}

export default App;
