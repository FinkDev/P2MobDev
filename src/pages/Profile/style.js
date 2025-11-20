import { StyleSheet, Platform } from "react-native";

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
    paddingBottom: 60,
  },

  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 60,
  },

  header: {
    alignItems: "center",
  },
  
  topButtons: {
    position: "absolute",
    top: Platform.OS === "android" ? 60 : 10,
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
    tintColor: "#fff",
  },

  greeting: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "400",
    textShadowColor: "rgba(0,0,0,0.5)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },

  username: {
    fontSize: 28,
    fontWeight: "700",
    color: "#9358af",
    textShadowColor: "#c965cc90",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
    marginTop: 5,
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingVertical: 25,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 18,
    shadowColor: "#65498f",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },

  cardTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
    marginBottom: 10,
  },

  input: {
    backgroundColor: "#f1f1f1",
    borderRadius: 10,
    width: "100%",
    color: "#000",
    marginTop: 5,
  },

  btn: {
    backgroundColor: "#9358af",
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 25,
    alignItems: "center",
    justifyContent: "center",
  },

  btn_label: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
});
