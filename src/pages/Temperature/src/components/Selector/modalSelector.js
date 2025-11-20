import { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  Pressable,
  StyleSheet,
} from "react-native";

export default function ModalSelector({ label, value, onChange, options }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setOpen(true)}
      >
        <Text style={styles.buttonText}>
          {value ? options.find((o) => o.value === value)?.label : label}
        </Text>
      </TouchableOpacity>

      <Modal
        animationType="fade"
        transparent
        visible={open}
        onRequestClose={() => setOpen(false)}
      >
        {/* fundo escuro */}
        <Pressable style={styles.backdrop} onPress={() => setOpen(false)} />

        <View style={styles.modal}>
          <Text style={styles.title}>{label}</Text>

          {options.map((item) => (
            <TouchableOpacity
              key={item.value}
              style={styles.option}
              onPress={() => {
                onChange(item.value);
                setOpen(false);
              }}
            >
              <Text style={styles.optionText}>{item.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 14,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: "#ccc",
    backgroundColor: "#fff",
    marginBottom: 12,
  },
  buttonText: {
    fontSize: 16,
    color: "#333",
  },
  backdrop: {
    backgroundColor: "rgba(0,0,0,0.4)",
    position: "absolute",
    top: 0, bottom: 0, left: 0, right: 0,
  },
  modal: {
    position: "absolute",
    top: "35%",
    alignSelf: "center",
    width: "80%",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 20,
    elevation: 10,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 12,
    textAlign: "center",
  },
  option: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  optionText: {
    fontSize: 16,
    textAlign: "center",
  },
});
