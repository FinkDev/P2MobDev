import { View, TextInput, Text, useWindowDimensions } from "react-native";
import style from "./style";

import ModalSelector from "./modalSelector";

export default function Selector({ valor, setValor, entrada, setEntrada, saida, setSaida }) {
  return (
    <View style={{ width: "85%", alignSelf: "center" }}>

      <TextInput
        placeholder="Digite o valor..."
        placeholderTextColor="#666"
        style={style.input}
        keyboardType="numeric"
        value={valor}
        onChangeText={setValor}
      />

      <ModalSelector
        label="De:"
        value={entrada}
        onChange={setEntrada}
        options={[
          { label: "Celsius", value: "c" },
          { label: "Fahrenheit", value: "f" },
          { label: "Kelvin", value: "k" },
        ]}
      />

      <ModalSelector
        label="Para:"
        value={saida}
        onChange={setSaida}
        options={[
          ...(entrada !== "c" ? [{ label: "Celsius", value: "c" }] : []),
          ...(entrada !== "f" ? [{ label: "Fahrenheit", value: "f" }] : []),
          ...(entrada !== "k" ? [{ label: "Kelvin", value: "k" }] : []),
        ]}
      />
    </View>
  );
}