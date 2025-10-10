// src/screens/LoginScreen.js
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { colors } from "../styles/colors";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function handleLogin() {
    // Coloque aqui sua lógica de autenticação
    alert(`E-mail: ${email}\nSenha: ${senha}`);
  }

  return (
    <View style={styles.container}>
      // lembre-se de adicionar Image nas imports: import{" "}
      <Image
        source={require("../../assets/logo.png")} // ou: { uri: 'https://exemplo.com/logo.png' }
        style={{
          width: 160,
          height: 160,
          alignSelf: "center",
          marginBottom: 140,
          borderRadius: 90,
        }}
        resizeMode="contain"
      />
      <View>
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry
          value={senha}
          onChangeText={setSenha}
        />

        <Text style={styles.link}>Esqueceu a senha?</Text>
        <View />
        <View>
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>

          <Text style={styles.link}>Cadastre-se?</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 24,
    backgroundColor: "#Fafafa",
  },
  input: {
    backgroundColor: "#fafafa",
    color: "#404040",
    borderRadius: 20,
    padding: 12,
    fontSize: 16,
    marginBottom: 10,
    borderWidth: 1.3,
    borderColor: "#36173D",
  },
  button: {
    backgroundColor: "#FFC55A",
    padding: 14,
    borderRadius: 20,
    alignItems: "center",
    marginBottom: 8,
    elevation: 2,
  },
  buttonText: {
    color: "#262626",
    fontSize: 18,
    fontWeight: "bold",
  },
  link: {
    color: "#FFC107",
    textAlign: "right",
    marginBottom: 18,
  },
});
