import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, FlatList } from "react-native";
import { colors } from "../src/styles/colors";

type Musica = {
  id: string;
  titulo: string;
  artista?: string;
};

export default function Inicial() {
  const [busca, setBusca] = useState("");
  const [musicas, setMusicas] = useState<Musica[]>([
    { id: "1", titulo: "Música 1", artista: "Artista A" },
    { id: "2", titulo: "Música 2", artista: "Artista B" },
    { id: "3", titulo: "Música 3", artista: "Artista C" },
  ]);

  // Filtra músicas de acordo com o texto digitado
  const musicasFiltradas = musicas.filter((m) =>
    m.titulo.toLowerCase().includes(busca.toLowerCase())
  );

  const renderItem = ({ item }: { item: Musica }) => (
    <View style={estilos.card}>
      <Text style={estilos.titulo}>{item.titulo}</Text>
      {item.artista ? (
        <Text style={estilos.artista}>{item.artista}</Text>
      ) : null}
    </View>
  );

  return (
    <View style={estilos.container}>
      <Text style={estilos.header}>Página das Músicas</Text>

      {/* aqui vai a lista das músicas */}

      <TextInput
        style={estilos.input}
        placeholder="Pesquisar músicas..."
        value={busca}
        onChangeText={setBusca}
      />

      <FlatList
        data={musicasFiltradas}
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
  artista: {
    fontSize: 14,
    color: colors.white,
    marginTop: 4,
  },
});
