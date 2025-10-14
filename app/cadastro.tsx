import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  Alert,
  Pressable,
} from "react-native";
import { Link, router } from "expo-router";
import { supabase } from "../src/supabase/supabase";

export default function Cadastro() {
  const [nomeCompleto, setNomeCompleto] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [verificaSenha, setVerificaSenha] = useState("");
  const [nomeError, setNomeError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [senhaError, setSenhaError] = useState("");
  const [verificaSenhaError, setVerificaSenhaError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false); // Estado para evitar múltiplos cliques

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validateFields = () => {
    let isValid = true;

    // 1. Validar Nome Completo
    if (nomeCompleto.trim() === "") {
      setNomeError("O nome completo é obrigatório.");
      isValid = false;
    } else {
      setNomeError("");
    }

    // 2. Validar E-mail
    if (email.trim() === "") {
      setEmailError("O e-mail é obrigatório.");
      isValid = false;
    } else if (!emailRegex.test(email)) {
      setEmailError("Por favor, insira um e-mail válido.");
      isValid = false;
    } else {
      setEmailError("");
    }

    // 3. Validar Senha
    if (senha.length < 6) {
      setSenhaError("A senha deve ter no mínimo 6 caracteres.");
      isValid = false;
    } else {
      setSenhaError("");
    }

    // 4. Validar Verificação de Senha
    if (verificaSenha !== senha) {
      setVerificaSenhaError("As senhas não coincidem.");
      isValid = false;
    } else {
      setVerificaSenhaError("");
    }

    return isValid;
  };

  const handleCadastro = async () => {
    // Evita múltiplos cliques
    if (isSubmitting) return;

    if (!validateFields()) {
      return;
    }

    setIsSubmitting(true);
    Alert.alert("Aguarde", "Criando sua conta...");

    try {
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: email,
        password: senha,
      });

      if (authError) {
        throw authError;
      }

      const { data: userData, error: userError } = await supabase
        .from("cadastro") // Substitua 'users' pelo nome da sua tabela
        .insert([
          {
            id: authData.user?.id,
            nome_completo: nomeCompleto,
            email: email,
          },
        ]);

      if (userError) {
        throw userError;
      }

      Alert.alert("Sucesso", "Conta criada com sucesso! Verifique seu e-mail.");
      router.replace("/login"); // Volta para a tela de login
    } catch (error) {
      console.error("Erro no cadastro:", error);
      Alert.alert(
        "Erro",
        (error as any).message || "Ocorreu um erro ao cadastrar."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <View style={[styles.container, { justifyContent: "flex-start" }]}>
      <Image
        source={require("../assets/logo.png")}
        style={styles.logo}
        resizeMode="contain"
      />
      <View>
        <TextInput
          style={styles.input}
          placeholder="Nome Completo"
          value={nomeCompleto}
          onChangeText={setNomeCompleto}
          onBlur={validateFields}
        />
        {nomeError ? <Text style={styles.errorText}>{nomeError}</Text> : null}

        <TextInput
          style={styles.input}
          placeholder="E-mail"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
          onBlur={validateFields}
        />
        {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}

        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry
          value={senha}
          onChangeText={setSenha}
          onBlur={validateFields}
        />
        {senhaError ? <Text style={styles.errorText}>{senhaError}</Text> : null}

        <TextInput
          style={styles.input}
          placeholder="Verificar Senha"
          secureTextEntry
          value={verificaSenha}
          onChangeText={setVerificaSenha}
          onBlur={validateFields}
        />
        {verificaSenhaError ? (
          <Text style={styles.errorText}>{verificaSenhaError}</Text>
        ) : null}

        <View>
          <Pressable style={[styles.button]}>
            <Text style={styles.buttonText}>Cadastrar</Text>
          </Pressable>

          <View style={styles.separador_cont}>
            <View style={styles.line} />
            <Text style={styles.text}>ou</Text>
            <View style={styles.line} />
          </View>

          <Pressable style={[styles.button2]}>
            <Link href="/" style={styles.buttonText2}>
              Fazer login
            </Link>
          </Pressable>
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
