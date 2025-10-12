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
    <View style={estilos.container}>
      <Text style={estilos.titulo}>Esqueceu a Senha?</Text>

      <TextInput
        style={estilos.input}
        placeholder="Digite seu e-mail"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <Pressable style={estilos.botao} onPress={handleRecuperarSenha}>
        <Text style={estilos.textoBotao}>Enviar</Text>
      </Pressable>

      <Link href="/" style={estilos.link}>
        Voltar para Login
      </Link>
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
  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    color: colors.primaria,
    marginBottom: 24,
  },
  input: {
    width: "100%",
    backgroundColor: "#f2f2f2",
    borderRadius: 12,
    padding: 12,
    fontSize: 16,
    marginBottom: 16,
    borderWidth: 1.2,
    borderColor: colors.primaria,
  },
  botao: {
    backgroundColor: colors.secundaria,
    padding: 14,
    borderRadius: 20,
    alignItems: "center",
    width: "100%",
    marginBottom: 16,
  },
  textoBotao: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  link: {
    color: colors.secundariaEscura,
    fontSize: 16,
    marginTop: 8,
    textAlign: "center",
  },
});
