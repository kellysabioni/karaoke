import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  Image,
  Alert,
} from "react-native";
import { colors } from "../src/styles/colors";
import { router } from "expo-router";

export default function Perfil() {
  const [modoEdicao, setModoEdicao] = useState(false);
  const [nome, setNome] = useState("Fulano"); // nome simulado
  const [email, setEmail] = useState("fulano@gmail.com"); // email simulado
  const [senha, setSenha] = useState("");

  const handleSalvar = () => {
    Alert.alert("Sucesso", "Perfil atualizado com sucesso!");
    setModoEdicao(false);
  };

  const handleLogout = () => {
    router.replace("/"); // volta para tela de login
  };

  return (
    <View style={estilos.container}>
      {/* Aqui pode colocar para carregar a foto de perfil do usuario */}

      {modoEdicao ? (
        <>
          <TextInput
            style={estilos.input}
            value={nome}
            onChangeText={setNome}
            placeholder="Nome completo"
          />
          <TextInput
            style={estilos.input}
            value={email}
            onChangeText={setEmail}
            placeholder="E-mail"
            keyboardType="email-address"
          />
          <TextInput
            style={estilos.input}
            value={senha}
            onChangeText={setSenha}
            placeholder="Senha"
            secureTextEntry
          />
        </>
      ) : (
        <>
          <Text style={estilos.nome}>{nome}</Text>
          <Text style={estilos.email}>{email}</Text>
        </>
      )}

      <View style={estilos.botoes}>
        {modoEdicao ? (
          <Pressable
            style={[estilos.botao, { backgroundColor: colors.secundaria }]}
            onPress={handleSalvar}
          >
            <Text style={estilos.textoBotao}>Salvar</Text>
          </Pressable>
        ) : (
          <Pressable
            style={[estilos.botao, { backgroundColor: colors.secundaria }]}
            onPress={() => setModoEdicao(true)}
          >
            <Text style={estilos.textoBotao}>Editar Perfil</Text>
          </Pressable>
        )}

        <Pressable
          style={[estilos.botao, { backgroundColor: colors.alerta2 }]}
          onPress={handleLogout}
        >
          <Text style={estilos.textoBotao}>Sair</Text>
        </Pressable>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
    borderWidth: 3,
    borderColor: colors.secundaria,
  },
  nome: {
    fontSize: 22,
    fontWeight: "bold",
    color: colors.primaria,
    marginBottom: 6,
  },
  email: {
    fontSize: 16,
    color: colors.textoIntermediario,
    marginBottom: 24,
  },
  input: {
    width: "100%",
    backgroundColor: "#f2f2f2",
    borderRadius: 12,
    padding: 12,
    fontSize: 16,
    marginBottom: 10,
    borderWidth: 1.2,
    borderColor: colors.primaria,
  },
  botoes: {
    width: "100%",
    gap: 12,
    marginTop: 20,
  },
  botao: {
    paddingVertical: 12,
    borderRadius: 20,
    alignItems: "center",
  },
  textoBotao: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
