import { ActionButton } from "@/components/ActionButton";
import { BalanceCard } from "@/components/BalanceCard";
import { ServiceCard } from "@/components/ServiceCard";
import { ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView style={styles.safeArea} edges={["top", "left", "right"]}>
      <ScrollView style={styles.container}>
        <BalanceCard />
        <View style={styles.actionRow}>
          <ActionButton icon="send" label="Send" color="#0CCE6B" />
          <View style={styles.separator} />
          <ActionButton
            icon="download-outline"
            label="Request"
            color="#007BFF"
          />
          <View style={styles.separator} />
          <ActionButton icon="card-outline" label="Card" color="#FF7A00" />
        </View>

        <View style={styles.grid}>
          <ServiceCard
            icon="credit-card"
            label="Account and Card"
            color="#555"
          />

          <ServiceCard
            icon="swap-horizontal"
            label="Transfer"
            color="#E74C3C"
          />

          <ServiceCard
            icon="bank-transfer-out"
            label="Withdraw"
            color="#16A085"
          />

          <ServiceCard
            icon="credit-card-multiple"
            label="Card"
            color="#FF7A00"
          />

          <ServiceCard icon="account" label="Beneficiary" color="#C0392B" />
          <ServiceCard
            icon="file-document-outline"
            label="Transaction report"
            color="#1E8449"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F7F8FA",
  },
  container: {
    flex: 1,
    backgroundColor: "#F7F8FA",
  },
  actionRow: {
    flexDirection: "row",
    backgroundColor: "#fff",
    marginHorizontal: 20,
    borderRadius: 16,
    marginTop: -20,
    padding: 16,
    justifyContent: "space-around",
    elevation: 2,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginHorizontal: 20,
    marginTop: 16,
    justifyContent: "flex-start",
    // gap: 12,
  },
  // gridItem: {
  //   flexBasis: "30%",
  // },
  separator: {
    width: 1,
    backgroundColor: "rgba(154, 150, 150, 0.3)",
    marginVertical: 8,
  },
});
