import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../src/styles/colors";

export default function Inicial() {
  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>Página das Músicas</Text>
      {/* Aqui vai a lista de músicas */}
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
  },
});
