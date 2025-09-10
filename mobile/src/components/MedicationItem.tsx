import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../theme";
import { Ionicons } from "@expo/vector-icons";

export function MedicationItem({
  name,
  dose,
  time,
  status,
}: {
  name: string;
  dose?: string;
  time: string;
  status: "Taken" | "Pending";
}) {
  const taken = status === "Taken";
  const badgeColor = taken ? colors.success : colors.warning;
  const badgeBg = taken ? "#ECFDF5" : "#FEF3C7";
  const badgeText = taken ? "Taken" : "Pending";
  const badgeIcon = taken ? "checkmark" : "time-outline";

  return (
    <View style={styles.root}>
      <View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.sub}>
          {[dose, time].filter(Boolean).join(" • ")}
        </Text>
      </View>
      <View style={[styles.badge, { backgroundColor: badgeBg }]}>
        <Ionicons name={badgeIcon as any} color={badgeColor} size={14} />
        <Text style={[styles.badgeText, { color: badgeColor }]}>
          {badgeText}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    borderRadius: 10,
    borderColor: colors.border,
    borderWidth: StyleSheet.hairlineWidth,
    paddingHorizontal: 14,
    paddingVertical: 12,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  name: { fontWeight: "600", color: colors.text },
  sub: { fontSize: 12, color: colors.muted, marginTop: 2 },
  badge: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 8,
    paddingVertical: 4,
    gap: 6,
    borderRadius: 8,
  },
  badgeText: { fontSize: 12, fontWeight: "600" },
});
