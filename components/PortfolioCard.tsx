import { usePathname, useRouter } from "expo-router";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { ActionButton } from "./ActionButton";
import { CryptoActionButton } from "./CryptoActionButton";

type PortfolioCardProps = {
  mode: "fiat" | "crypto";
  onToggle: (mode: "fiat" | "crypto") => void;
};

export const PortfolioCard: React.FC<PortfolioCardProps> = ({mode, onToggle}) => {
 
  const isCryptoPage = mode === "crypto";
  const handleToggle = (newMode: "fiat" | "crypto") => {
    onToggle(newMode)
  };

  return (
    <View style={styles.cardContainer}>
      <View style={styles.toggleContainer}>
        <TouchableOpacity
          style={[styles.toggleButton, !isCryptoPage && styles.activeToggle]}
          onPress={() => handleToggle("fiat")}
        >
          <Text
            style={!isCryptoPage ? styles.toggleTextActive : styles.toggleText}
          >
            Fiat
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.toggleButton, isCryptoPage && styles.activeToggle]}
          onPress={() => handleToggle("crypto")}
        >
          <Text
            style={isCryptoPage ? styles.toggleTextActive : styles.toggleText}
          >
            Crypto
          </Text>
        </TouchableOpacity>
      </View>
      <ImageBackground
        source={require("../assets/images/wavy-bg.png")}
        resizeMode="cover"
        style={styles.card}
      >
        <View>
          <Text style={styles.label}>Total Portfolio</Text>
          <Text style={styles.amount}>$56.98</Text>
        </View>
        <View style={styles.changeContainer}>
          <Text style={styles.changeText}>15.3%</Text>
        </View>
      </ImageBackground>
      <View style={styles.actionsRow}>
        <CryptoActionButton icon="paper-plane-outline" label="Send" />
        <CryptoActionButton icon="add" label="Add" />
        <CryptoActionButton icon="card-outline" label="Top Up" />
        <CryptoActionButton icon="swap-horizontal" label="Swap" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    paddingVertical: 30,
    paddingHorizontal: 20,
    alignItems: "center",
    backgroundColor: "#0DAD66",
  },
  toggleContainer: {
    flexDirection: "row",
    backgroundColor: "#00FF8B",
    borderRadius: 30,
    marginBottom: 15,
  },
  toggleButton: {
    paddingVertical: 6,
    paddingHorizontal: 20,
    borderRadius: 30,
  },
  toggleText: {
    color: "#13342B",
    fontSize: 14,
    fontWeight: "600",
  },
  activeToggle: {
    backgroundColor: "#13342B",
  },
  toggleTextActive: {
    color: "#FFFFFF",
    fontWeight: "600",
  },
  card: {
    width: "95%",
    alignSelf: "center",
    borderRadius: 16,
    padding: 20,
    overflow: "hidden",
    marginVertical: 20,
    justifyContent: "space-between",
    backgroundColor: "#0C3A2D",
    // marginBottom: 20,
  },
  label: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
  amount: {
    color: "#FFFFFF",
    fontSize: 36,
    fontWeight: "700",
    marginTop: 8,
  },
  changeContainer: {
    position: "absolute",
    top: 20,
    right: 20,
    backgroundColor: "white",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
  },
  changeText: {
    color: "#00FF9D",
    fontWeight: "600",
  },
  actionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // paddingTop: 20,
    // paddingBottom: 10,
    paddingVertical: 10,
    gap: 20,
  },
});
