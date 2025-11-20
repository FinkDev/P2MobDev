import React, { useEffect, useState, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  Image,
  ScrollView,
  Animated,
  useWindowDimensions,
} from "react-native";
import style from "./style";
import { registerUser } from "../../util/db";
import { showSimpleAlert } from "../../util/alerts";

export default function Signin({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { width, height } = useWindowDimensions();
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(40)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.spring(slideAnim, {
        toValue: 0,
        friction: 5,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  const handleRegister = async () => {
    if (!name.trim() || !email.trim() || !password.trim()) {
      showSimpleAlert(
        "Campos obrigatórios",
        "Preencha todos os campos para continuar."
      );
      return;
    }

    const [success, result] = await registerUser({ name, email, password });
    if (success) {
      showSimpleAlert("Conta criada!", `Bem-vindo(a), ${name}!`);
      navigation.replace("Home");
    } else if (result === "email_exists") {
      showSimpleAlert("Erro", "Este e-mail já está cadastrado.");
    } else {
      showSimpleAlert("Erro", `Não foi possível criar sua conta: ${result}`);
    }
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={style.container}>
        <View style={{ width: "100%", alignItems: "center" }}>
          <Image
            source={require("../../../assets/images/PurpleWaves.png")}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: width,
              height: height * 0.7,
              resizeMode: "cover",
            }}
          />
        </View>

        <Animated.View
          style={[
            style.formContainer,
            { opacity: fadeAnim, transform: [{ translateY: slideAnim }] },
          ]}
        >
          <Text style={style.title}>Crie sua conta</Text>

          <TextInput
            placeholder="Seu nome"
            placeholderTextColor="#999"
            value={name}
            onChangeText={setName}
            style={style.input}
          />
          <TextInput
            placeholder="E-mail"
            placeholderTextColor="#999"
            value={email}
            onChangeText={setEmail}
            style={style.input}
            keyboardType="email-address"
          />
          <TextInput
            placeholder="Senha"
            placeholderTextColor="#999"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            style={style.input}
          />

          <Pressable style={style.btn} onPress={handleRegister}>
            <Text style={style.btnLabel}>Registrar</Text>
          </Pressable>

          <Pressable onPress={() => navigation.navigate("Login")}>
            <Text style={style.secondaryText}>
              Já tem uma conta? <Text style={style.link}>Entrar</Text>
            </Text>
          </Pressable>
        </Animated.View>
      </View>
    </ScrollView>
  );
}
