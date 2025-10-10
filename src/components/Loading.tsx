import { View, Text, ActivityIndicator, StyleSheet } from "react-native";

export default function Loading() {
  return (
    <View style={estilos.container}>
      <ActivityIndicator size="large" color="#e94560" />
      <Text style={estilos.texto}>Carregando...</Text>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#36173D",
  },
  texto: {
    marginTop: 16,
    fontSize: 16,
    color: "#fff",
    fontWeight: "500",
  },
});
