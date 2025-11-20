import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  Pressable,
  TextInput,
  Animated,
  ScrollView,
  ImageBackground,
  useWindowDimensions,
  Image,
} from "react-native";
import style from "./style";
import {
  getUser,
  updateUserName,
  logoutUser,
  removeUserAccount,
} from "../../util/db";
import { showSimpleAlert } from "../../util/alerts";

export default function Profile({ navigation }) {
  const [name, setName] = useState("Usuário");
  const [newName, setNewName] = useState("");
  const [userId, setUserId] = useState(null);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(40)).current;
  const { width } = useWindowDimensions();

  useEffect(() => {
    const loadUser = async () => {
      const user = await getUser();
      if (!user?.id) {
        navigation.replace("Signin");
        return;
      }
      setUserId(user.id);
      setName(user.name || "Usuário");
    };
    loadUser();

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

  const handleChangeName = async () => {
    if (!newName.trim()) {
      showSimpleAlert(
        'Preencha o campo "Nome".',
        "Insira um nome para atualizar."
      );
      return;
    }
    const success = await updateUserName(userId, newName);
    if (success !== false) {
      setName(newName);
      setNewName("");
      showSimpleAlert("Sucesso", "Nome alterado com sucesso!");
    } else {
      showSimpleAlert("Erro", "Não foi possível atualizar o nome.");
    }
  };

  const handleRemoveUser = async () => {
    const success = await removeUserAccount();
    if (success) {
      await logoutUser();
      navigation.replace("Signin");
    } else {
      showSimpleAlert("Erro", "Não foi possível excluir sua conta.");
    }
  };

  return (
    <ImageBackground
      source={require("../../../assets/images/homeBG.png")}
      style={style.background}
      resizeMode="cover"
    >
      
      <View style={style.topButtons}>
        <Pressable onPress={() => navigation.goBack()}>
          <Image
            source={require("../../../assets/images/back.png")}
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
          <View style={[style.header, { marginBottom: 30 }]}>
            <Text style={style.greeting}>Olá,</Text>
            <Text style={style.username}>{name}</Text>
          </View>

          <View style={[style.card, { width: width * 0.9 }]}>
            <Text style={style.cardTitle}>Alterar nome</Text>
            <Text style={{ marginBottom: 10 }}>Nome atual: {name}</Text>
            <TextInput
              style={[style.input, { fontSize: 18, padding: 10 }]}
              placeholder="Digite seu novo nome..."
              placeholderTextColor="#333"
              onChangeText={setNewName}
              value={newName}
            />
            <Pressable
              style={[style.btn, { marginTop: 15 }]}
              onPress={handleChangeName}
            >
              <Text style={style.btn_label}>Alterar</Text>
            </Pressable>
          </View>

          <View style={[style.card, { width: width * 0.9 }]}>
            <Text style={style.cardTitle}>Excluir conta</Text>
            <Text style={{ marginBottom: 10 }}>Nome atual: {name}</Text>
            <Pressable style={style.btn} onPress={handleRemoveUser}>
              <Text style={style.btn_label}>Excluir</Text>
            </Pressable>
          </View>
        </Animated.View>
      </ScrollView>
    </ImageBackground>
  );
}
