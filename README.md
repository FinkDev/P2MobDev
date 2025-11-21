# P2Apps — Aplicativo Mobile (P2 de Desenvolvimento Mobile)

Um projeto desenvolvido como parte da **2ª Avaliação de Desenvolvimento para Dispositivos Móveis** do curso de **Desenvolvimento de Software Multiplataforma (DSM)** da **Fatec Itaquera**.

O objetivo foi construir um aplicativo mobile completo, funcional e bem estruturado, aplicando na prática os conceitos trabalhados ao longo do semestre.

---

## ✨ Descrição

Este aplicativo foi desenvolvido como parte da 2º Avaliação de Desenvolvimento para Dispositivos Móveis do curso de Desenvolvimento de Software Multiplataforma da Fatec Itaquera.

A proposta principal foi criar uma aplicação mobile completa, funcional e organizada, demonstrando na prática os conhecimentos adquiridos ao longo do semestre.

Construído utilizando o ecossistema **React Native com Expo**, o projeto busca oferecer uma experiência fluida e moderna em dispositivos Android, iOS e também no navegador através do Expo Web.

Durante o desenvolvimento, foram aplicados conceitos como:

- navegação entre telas  
- gerenciamento de login e sessão  
- validação de dados  
- autenticação de usuários  
- interfaces responsivas

Entre as funcionalidades implementadas, o app inclui:

- cálculo de IMC  
- conversão de temperatura  
- lista de tarefas  
- frases motivacionais  

Cada módulo foi construído como um estudo prático de lógica, UI/UX e integração entre componentes, refletindo desafios reais do desenvolvimento mobile.

---

## 🚀 Tecnologias Utilizadas

- **React Native**
- **Expo**
- **JavaScript**
- **React Navigation**
- **Expo SQLite**
- **Async Storage**
- **Expo Linear Gradient**
- **React Native Reanimated**
- **React Native Gesture Handler**
- **React Native Screens**
- **React Native Safe Area Context**
- **SweetAlert2**

---

## ⚙️ Como Executar o Projeto

### 1. Clone o repositório
```bash
git clone https://github.com/seu-usuario/p2apps.git
cd p2apps
```

### 2. Instale as dependências
```bash
npm install
```


### 3. Execute o projeto
```bash
npm start
```

Ou usando os scripts do Expo:

```bash
npm run android
npm run ios
npm run web
```

### 4. Executar no dispositivo físico

Use o app Expo Go e escaneie o QR Code exibido no terminal.

---

## 📁 Estrutura de Pastas

```bash
p2apps/
│
├── .expo/
├── assets/
│ └── images/
│
├── dist/
├── node_modules/
│
├── src/
│ ├── pages/
│ │ ├── About/
│ │ ├── Home/
│ │ ├── IMC/
│ │ ├── Login/
│ │ ├── Phrases/
│ │ ├── Profile/
│ │ ├── Signin/
│ │ ├── Temperature/
│ │ └── ToDoList/
│ │
│ └── util/
│ ├── alert.js
│ ├── db.js
│ └── temp_conversor.js
│
├── App.js
├── app.json
├── eas.json
├── index.js
├── package.json
├── package-lock.json
└── README.md
```

---

## 📌 Funcionalidades

- Login + persistência de sessão  
- Cálculo de IMC  
- Conversor de temperatura  
- Lista de tarefas  
- Frases motivacionais  
- Navegação fluida entre telas  
- Tela sobre com informações de desenvolvimento/desenvolvedor

---