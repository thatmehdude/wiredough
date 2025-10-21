import { ActionButton } from "@/components/ActionButton";
import { BalanceCard } from "@/components/BalanceCard";
import { PortfolioCard } from "@/components/PortfolioCard";
import { ServiceCard } from "@/components/ServiceCard";
import { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const [mode, setMode] = useState<"fiat" | "crypto">("fiat")
  return (
    <SafeAreaView style={styles.safeArea} edges={["top", "left", "right"]}>
      <ScrollView style={styles.container}>
        {mode === "fiat" ? (
          <BalanceCard mode={mode} onToggle={setMode} />
        ) : (
          <PortfolioCard mode={mode} onToggle={setMode} />
        )}

        {mode === "fiat" ? (
          <View style={styles.actionRow}>
            <ActionButton
              label="Send"
              color="#979797"
              iconSource={require("@/assets/images/send-icon.png")}
            />
            <View style={styles.separator} />
            <ActionButton
              label="Request"
              color="#979797"
              iconSource={require("@/assets/images/request-icon.png")}
            />
            <View style={styles.separator} />
            <ActionButton
              label="Card"
              color="#979797"
              iconSource={require("@/assets/images/card-icon.png")}
            />
          </View>
        ) : null}

        <View style={styles.grid}>
          {mode === "fiat" ? (
            <>
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
            </>
          ) : (
            <>
              <ServiceCard icon="bitcoin" label="Buy Crypto" color="#F7931A" />
              <ServiceCard
                icon="swap-horizontal"
                label="Swap"
                color="#007BFF"
              />
              <ServiceCard icon="chart-line" label="Market" color="#0CCE6B" />
              <ServiceCard icon="wallet" label="Wallet" color="#555" />
              <ServiceCard
                icon="bank-transfer"
                label="Withdraw"
                color="#E74C3C"
              />
              <ServiceCard
                icon="file-document-outline"
                label="Reports"
                color="#16A085"
              />
            </>
          )}
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
