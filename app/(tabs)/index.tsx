import { BalanceCard } from "@/components/BalanceCard";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={true}>
        <BalanceCard />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F8FA',
  },
  actionRow: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginHorizontal: 20,
    borderRadius: 16,
    marginTop: -25,
    padding: 16,
    justifyContent: 'space-around',
    elevation: 2,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: 20,
    marginTop: 16,
  },
});