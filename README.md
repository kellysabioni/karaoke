# Karaoke

## Projeto Integrador Senac

Projeto utilizando react native

## Instalações

> Criando o projeto com template blank

- `npx create-expo-app --template blank-typescript`

> Instalação expo-router

- `npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar`

Em caso de incompatibilidade com react-dom:

1. **_Limpe o cache do npm:_** Isso garante que você está começando de um estado limpo, sem resquícios de instalações anteriores.

- `npm cache clean --force`

2. **_Exclua a pasta `node_modules` e o arquivo `package-lock`.json:_** Estes arquivos guardam a estrutura de dependências da sua instalação anterior e podem estar corrompidos.

3. **_Execute o `npm install` novamente com o comando recomendado pelo próprio Expo:_** O Expo possui um comando específico para lidar com dependências de forma mais inteligente.

Se o erro persistir, você pode usar uma flag de força, mas saiba que isso pode causar problemas no futuro se as bibliotecas não forem realmente compatíveis. **_Use com cautela._**

- `npm install --legacy-peer-deps`
