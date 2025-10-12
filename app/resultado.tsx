import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { colors } from "../src/styles/colors";

type ResultadoItem = {
  id: string;
  titulo: string;
  descricao?: string;
};

export default function Resultado() {
  // Lista simulada de resultados
  const [resultados, setResultados] = useState<ResultadoItem[]>([
    { id: "1", titulo: "Música 1", descricao: "Descrição da música 1" },
    { id: "2", titulo: "Música 2", descricao: "Descrição da música 2" },
    { id: "3", titulo: "Música 3", descricao: "Descrição da música 3" },
  ]);

  const renderItem = ({ item }: { item: ResultadoItem }) => (
    <View style={estilos.card}>
      <Text style={estilos.titulo}>{item.titulo}</Text>
      {item.descricao ? (
        <Text style={estilos.descricao}>{item.descricao}</Text>
      ) : null}
    </View>
  );

  return (
    <View style={estilos.container}>
      <Text style={estilos.header}>Resultados da Pesquisa</Text>
      <FlatList
        data={resultados}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 24,
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    color: colors.primaria,
    marginBottom: 16,
    textAlign: "center",
  },
  card: {
    backgroundColor: colors.primariaClara,
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  titulo: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.white,
  },
  descricao: {
    fontSize: 14,
    color: colors.white,
    marginTop: 4,
  },
});
