// src/screens/LoginScreen.js
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function handleLogin() {
    // Coloque aqui sua lógica de autenticação
    alert(`E-mail: ${email}\nSenha: ${senha}`);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Logo</Text>
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
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      <Text style={styles.link}>Esqueceu a senha?</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 24,
    backgroundColor: "#fff",
  },
  logo: {
    fontSize: 28,
    textAlign: "center",
    marginBottom: 40,
    color: "#434343",
  },
  input: {
    backgroundColor: "#fafafa",
    borderRadius: 20,
    padding: 12,
    fontSize: 16,
    marginBottom: 18,
    borderWidth: 1,
    borderColor: "#ddd",
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
    color: "#22223B",
    fontSize: 18,
    fontWeight: "bold",
  },
  link: {
    color: "#9A8C98",
    textAlign: "center",
    marginTop: 10,
  },
});
