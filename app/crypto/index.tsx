import { BalanceCard } from "@/components/BalanceCard"
import { ServiceCard } from "@/components/ServiceCard"
import { ScrollView, StyleSheet, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";

const CryptoHome = () => {
  return (
    <SafeAreaView style={styles.safeArea} edges={["top", "left", "right"]}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={{ paddingBottom: 24 }}
      >
        <BalanceCard />
        <View style={styles.grid}>
          <ServiceCard icon="bitcoin" label="Buy Crypto" color="#F7931A" />
          <ServiceCard icon="swap-horizontal" label="Swap" color="#007BFF" />
          <ServiceCard icon="chart-line" label="Market" color="#0CCE6B" />
          <ServiceCard icon="wallet" label="Wallet" color="#555" />
          <ServiceCard icon="bank-transfer" label="Withdraw" color="#E74C3C" />
          <ServiceCard
            icon="file-document-outline"
            label="Reports"
            color="#16A085"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F7F8FA",
  },
  container: {
    flex: 1,
    backgroundColor: "#F7F8FA",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginTop: 16,
  },
});

export default CryptoHome;