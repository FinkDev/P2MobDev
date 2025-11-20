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
    paddingBottom: 100,
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
    height: 150,
    marginBottom: 100,
    tintColor: "#9354af",
  },

  card: {
    backgroundColor: "#ffffffcc",
    width: "80%",
    borderRadius: 18,
    paddingVertical: 30,
    paddingHorizontal: 20,
    marginBottom: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
  },

  cardText: {
    fontSize: 24,
    fontWeight: "700",
    color: "#503060",
    textAlign: "center",
  },

  row: {
    flexDirection: "row",
    width: "75%",
    justifyContent: "space-between",
  },

  button: {
    backgroundColor: "#fff",
    width: "45%",
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },

  buttonText: {
    color: "#9358af",
    fontSize: 16,
    fontWeight: "600",
  },
});
