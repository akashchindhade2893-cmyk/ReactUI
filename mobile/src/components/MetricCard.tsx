import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../theme';
import { Ionicons } from '@expo/vector-icons';

export function MetricCard({ icon, label, value, color }: { icon: keyof typeof Ionicons.glyphMap; label: string; value: string; color: string }) {
  return (
    <View style={[styles.root, { borderColor: color }]}>      
      <View style={[styles.header, { backgroundColor: color }]}>        
        <Ionicons name={icon} color="#fff" size={18} />
        <Text style={styles.headerText}>{label}</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.value}>{value}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: colors.surface,
    borderRadius: 12,
    overflow: 'hidden',
    borderWidth: StyleSheet.hairlineWidth,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  headerText: { color: '#fff', fontWeight: '600' },
  body: { paddingHorizontal: 16, paddingVertical: 14 },
  value: { fontSize: 22, fontWeight: '700', color: colors.text },
});
