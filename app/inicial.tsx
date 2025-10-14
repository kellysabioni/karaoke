import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { colors } from "../src/styles/colors";
import { Link, useRouter } from "expo-router";

type Musica = {
  id: string;
  titulo: string;
  artista: string;
  estilo: string;
};

export default function Inicial() {
  const [busca, setBusca] = useState("");
  const [favoritos, setFavoritos] = useState<string[]>([]);
  const router = useRouter();

  // Lista de músicas de exemplo
  const [musicas] = useState<Musica[]>([
    {
      id: "1",
      titulo: "Die With A Smile",
      artista: "Lady Gaga & Bruno Mars",
      estilo: "Pop",
    },
    {
      id: "2",
      titulo: "BIRDS OF A FEATHER",
      artista: "Billie Eilish",
      estilo: "New wave",
    },
    { id: "3", titulo: "Who", artista: "Jimin", estilo: "Pop" },
    { id: "4", titulo: "Taste", artista: "Sabrina Carpenter", estilo: "Pop" },
    {
      id: "5",
      titulo: "Zé da Recaída",
      artista: "Gusttavo Lima",
      estilo: "Sertanejo",
    },
    {
      id: "6",
      titulo: "Nothing Else Matters",
      artista: "Metallica",
      estilo: "Rock",
    },
    {
      id: "7",
      titulo: "Please Please Please",
      artista: "Sabrina Carpenter",
      estilo: "Pop",
    },
  ]);

  // Função para favoritar/desfavoritar
  const alternarFavorito = (id: string) => {
    setFavoritos((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  // Função para navegar para a página de resultados
  const pesquisarMusica = () => {
    if (busca.trim() !== "") {
      router.push({
        pathname: "/resultado",
        params: { q: busca },
      });
    }
  };

  const renderItem = ({ item }: { item: Musica }) => (
    <View style={estilos.card}>
      <View style={estilos.infoMusica}>
        <Text style={estilos.titulo}>{item.titulo}</Text>
        <Text style={estilos.artista}>{item.artista}</Text>
        <Text style={estilos.estilo}>{item.estilo}</Text>
      </View>

      <TouchableOpacity onPress={() => alternarFavorito(item.id)}>
        <Text style={estilos.emoji}>
          {favoritos.includes(item.id) ? "❤️" : "🤍"}
        </Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={estilos.container}>
      {/* Topo com título e botão de editar perfil */}
      <View style={estilos.topo}>
        <Text style={estilos.header}>Escolha sua Música</Text>
        <Pressable style={estilos.botaoPerfil}>
          <Link href="/perfil" style={estilos.linkPerfil}>
            Editar Perfil
          </Link>
        </Pressable>
      </View>

      {/* Campo de pesquisa */}
      <TextInput
        style={estilos.input}
        placeholder="Pesquisar músicas..."
        value={busca}
        onChangeText={setBusca}
        onSubmitEditing={pesquisarMusica} // Navega ao apertar Enter
        returnKeyType="search"
      />

      {/* Lista de músicas mais ouvidas */}
      <Text style={estilos.subtitulo}>Músicas mais ouvidas</Text>
      <FlatList
        data={musicas}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

// Estilos
const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 24,
  },
  topo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    color: colors.primaria,
  },
  botaoPerfil: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: "#FFC55A",
    borderRadius: 8,
  },
  linkPerfil: {
    color: "#36173D",
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    backgroundColor: "#f2f2f2",
    borderRadius: 12,
    padding: 12,
    fontSize: 16,
    marginBottom: 12,
    borderWidth: 1.2,
    borderColor: colors.primaria,
  },
  subtitulo: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.primaria,
    marginBottom: 8,
  },
  card: {
    backgroundColor: colors.primariaClara,
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  infoMusica: {
    flex: 1,
    marginRight: 12,
  },
  titulo: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.white,
  },
  artista: {
    fontSize: 14,
    color: colors.white,
  },
  estilo: {
    fontSize: 12,
    color: "#ddd",
  },
  emoji: {
    fontSize: 26,
  },
});
