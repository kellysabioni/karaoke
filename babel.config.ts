import { BabelConfigFunction } from "@expo/babel-preset";

module.exports = function (api: BabelConfigFunction) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      // Este plugin é necessário para o expo-router
      "expo-router/babel",
      // Plugin para carregar variáveis de ambiente
      [
        "module:react-native-dotenv",
        {
          envName: "APP_ENV",
          moduleName: "@env",
          path: ".env", // Geralmente usa .env por padrão, mas você pode usar .env.local
          safe: false,
          allowUndefined: true,
        },
      ],
    ],
  };
};
