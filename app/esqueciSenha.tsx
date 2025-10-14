import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  Alert,
} from "react-native";
import { Link } from "expo-router";
import { colors } from "../src/styles/colors";
import { supabase } from "../src/supabase/client";

export default function EsqueciSenha() {
  const [email, setEmail] = useState("");

  const handleRecuperarSenha = async () => {
    if (!email) {
      Alert.alert("Erro", "Por favor, insira seu e-mail.");
      return;
    }

    try {
      const { data, error } = await supabase.auth.resetPasswordForEmail(email);
      if (error) throw error;

      Alert.alert(
        "Sucesso",
        "Se o e-mail estiver cadastrado, você receberá instruções para redefinir sua senha."
      );
      setEmail("");
    } catch (error: any) {
      Alert.alert(
        "Erro",
        error.message || "Não foi possível enviar o e-mail de recuperação."
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Esqueceu a Senha?</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite seu e-mail"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <Pressable style={styles.button} onPress={handleRecuperarSenha}>
        <Text style={styles.buttonText}>Enviar</Text>
      </Pressable>

      <View style={styles.separador_cont}>
        <View style={styles.line} />
        <Text style={styles.text}>ou</Text>
        <View style={styles.line} />
      </View>

      <Pressable style={[styles.button2]}>
        <Link href="/" style={styles.buttonText2}>
          Fechar
        </Link>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    color: colors.primaria,
    marginBottom: 24,
  },

  container: {
    flex: 1,
    justifyContent: "center",
    padding: 24,
    backgroundColor: "#Fafafa",
  },
  logo: {
    width: 180,
    height: 180,
    alignSelf: "center",
    marginTop: 90,
    marginBottom: 90,
    borderRadius: 90,
  },
  input: {
    backgroundColor: "#fafafa",
    color: "#201124",
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
    color: "#36173D",
    fontSize: 18,
    fontWeight: "bold",
  },

  button2: {
    backgroundColor: "#fafafa",
    padding: 14,
    borderRadius: 20,
    alignItems: "center",
    marginBottom: 8,
    elevation: 2,
    borderWidth: 2,
    borderColor: "#FFC55A",
  },
  buttonText2: {
    color: "#FFC55A",
    fontSize: 18,
    fontWeight: "bold",
  },
  link: {
    color: "#FFC107",
    textAlign: "right",
    marginTop: 1,
    marginBottom: 18,
  },
  link2: {
    flexDirection: "row",
    justifyContent: "center",
    color: "#201124",
    marginBottom: 18,
  },
  errorText: {
    color: "red",
    marginBottom: 8,
    alignSelf: "flex-start",
  },
  separador_cont: {
    flexDirection: "row", // Alinha os itens horizontalmente
    alignItems: "center", // Centraliza os itens verticalmente
    marginVertical: 20, // Adiciona um espaço acima e abaixo do componente
  },
  line: {
    flex: 1, // Faz a linha ocupar o espaço disponível
    height: 0.75, // Altura da linha
    backgroundColor: "#4E2A57", // Cor da linha
  },
  text: {
    color: "#4E2A57", // Cor do texto
    marginHorizontal: 10, // Espaço entre o texto e as linhas
  },
});
