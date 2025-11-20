import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  Animated,
  useWindowDimensions,
  Pressable,
  Image,
  ScrollView,
  ImageBackground,
} from "react-native";
import style from "./style";
import { getUser, logoutUser } from "../../util/db";
import { showSimpleAlert } from "../../util/alerts";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback } from "react";

const cards = [
  {
    title: "Frases",
    page: "Phrases",
    icon: require("../../../assets/images/phrases.png"),
  },
  {
    title: "IMC",
    page: "IMC",
    icon: require("../../../assets/images/imc.png"),
  },
  {
    title: "Tarefas",
    page: "ToDoList",
    icon: require("../../../assets/images/todolist.png"),
  },
  {
    title: "Conversor",
    page: "Temperature",
    icon: require("../../../assets/images/temperature.png"),
  },
];

export default function Home({ navigation }) {
  const [name, setName] = useState("Usuário");
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(40)).current;
  const { width } = useWindowDimensions();

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

  useFocusEffect(
    useCallback(() => {
      async function loadUser() {
        const user = await getUser();
        if (!user?.id || !user?.name) {
          navigation.replace("Login");
          return;
        }
        setName(user.name.charAt(0).toUpperCase() + user.name.slice(1));
      }

      loadUser();
    }, [])
  );

  async function handleLogout() {
    await logoutUser();
    showSimpleAlert("Logout", "Você foi deslogado com sucesso!");
    navigation.replace("Login");
  }

  return (
    <ImageBackground
      source={require("../../../assets/images/homeBG.png")}
      style={style.background}
      resizeMode="cover"
    >
      <View style={{ flex: 1 }}>
        <View style={style.topButtons}>
          <Pressable onPress={handleLogout}>
            <Image
              source={require("../../../assets/images/logout.png")}
              style={style.topIcon}
            />
          </Pressable>
          <Pressable onPress={() => navigation.navigate("Profile")}>
            <Image
              source={require("../../../assets/images/account.png")}
              style={style.topIcon}
            />
          </Pressable>
        </View>

        <ScrollView contentContainerStyle={style.scrollContainer}>
          <Animated.View
            style={[
              style.container,
              { opacity: fadeAnim, transform: [{ translateY: slideAnim }] },
            ]}
          >
            <View style={style.header}>
              <Text style={style.greeting}>Olá,</Text>
              <Text style={style.username}>{name}</Text>
            </View>

            <View style={[style.grid, { width: width * 0.9 }]}>
              {cards.map((item, index) => (
                <Pressable
                  key={index}
                  onPress={() => navigation.navigate(item.page)}
                  style={({ pressed }) => [
                    style.card,
                    pressed && { transform: [{ scale: 0.96 }] },
                  ]}
                >
                  <View style={style.iconContainer}>
                    <Image source={item.icon} style={style.icon} />
                  </View>
                  <Text style={style.cardTitle}>{item.title}</Text>
                </Pressable>
              ))}
            </View>
            <Text style={style.subtitle}>
              Escolha uma das funções acima pra começar
            </Text>
          </Animated.View>
        </ScrollView>
        <Pressable
          style={({ pressed }) => [
            style.button,
            pressed && { transform: [{ scale: 0.97 }] },
          ]}
          onPress={() => navigation.navigate("About")}
        >
          <Text style={style.buttonText}>Sobre o app</Text>
        </Pressable>
      </View>
    </ImageBackground>
  );
}
