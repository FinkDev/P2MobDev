import React, { useEffect, useState, useRef } from "react";
import {
  View,
  Text,
  Pressable,
  TextInput,
  Image,
  useWindowDimensions,
  ScrollView,
  Animated,
} from "react-native";
import style from "./style";
import { showSimpleAlert } from "../../util/alerts";
import { loginUser, getUser, isLoginActive } from "../../util/db";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { width, height } = useWindowDimensions();

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(40)).current;

  useEffect(() => {
    const checkSession = async () => {
      const active = await isLoginActive();
      const user = await getUser();
      if (active && user) {
        navigation.replace("Home");
      }
    };
    checkSession();

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

  const handleLogin = async () => {
    if (!email.trim() || !password.trim()) {
      showSimpleAlert(
        "Campos incompletos",
        "Preencha todos os campos para entrar em sua conta."
      );
      return;
    }

    const [success, result] = await loginUser(email, password);

    if (!success) {
      showSimpleAlert(
        "Usuário ou senha incorretos",
        "Verifique os dados digitados."
      );
      return;
    }

    navigation.replace("Home");
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
          <Text style={style.title}>Faça login</Text>

          <TextInput
            placeholder="E-mail"
            placeholderTextColor="#999"
            onChangeText={setEmail}
            keyboardType="email-address"
            style={style.input}
          />
          <TextInput
            placeholder="Senha"
            placeholderTextColor="#999"
            onChangeText={setPassword}
            secureTextEntry
            style={style.input}
          />

          <Pressable style={style.btn} onPress={handleLogin}>
            <Text style={style.btnLabel}>Entrar</Text>
          </Pressable>

          <Pressable onPress={() => navigation.navigate("Signin")}>
            <Text style={style.secondaryText}>
              Ainda não tem conta? <Text style={style.link}>Cadastrar</Text>
            </Text>
          </Pressable>
        </Animated.View>
      </View>
    </ScrollView>
  );
}
