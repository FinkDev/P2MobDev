import { StyleSheet } from "react-native";

export default StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },

  scrollContainer: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 60,
  },

  topButtons: {
    position: "absolute",
    top: 30,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 25,
    zIndex: 10,
  },

  topIcon: {
    width: 28,
    height: 28,
    tintColor: "#9354af",
  },

  title: {
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 15,
    color: "#9358af",
    textShadowColor: "#c965cc90",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },

  heroImage: {
    height: 160,
    marginBottom: 35,
    tintColor: "#9354af",
  },

  form: {
    width: "85%",
    alignItems: "center",
    marginBottom: 30,
  },

  input: {
    width: "100%",
    backgroundColor: "#ffffffcc",
    paddingVertical: 14,
    paddingHorizontal: 18,
    borderRadius: 14,
    fontSize: 18,
    color: "#222",
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },

  button: {
    backgroundColor: "#fff",
    width: "100%",
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: "center",
    marginTop: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },

  buttonText: {
    color: "#9358af",
    fontSize: 18,
    fontWeight: "600",
  },

  resultBox: {
    marginTop: 20,
    width: "80%",
    backgroundColor: "#ffffffcc",
    paddingVertical: 25,
    borderRadius: 18,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
  },

  resultLabel: {
    fontSize: 16,
    color: "#444",
    fontWeight: "600",
    marginBottom: 8,
  },

  resultValue: {
    fontSize: 30,
    fontWeight: "700",
    color: "#9358af",
    marginBottom: 5,
  },

  resultStatus: {
    fontSize: 18,
    color: "#333",
    fontWeight: "500",
  },
});
