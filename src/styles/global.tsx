// src/styles/global.
import { StyleSheet } from "react-native";
import { colors } from "./colors";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primaria,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.texto,
  },
  buttonText: {
    fontSize: 16,
    color: colors.white,
    textAlign: "center",
  },
});
