import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text } from 'react-native';
import { colors } from '../theme';

export default function Appointments() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 24 }}>
        <Text style={{ fontSize: 18, fontWeight: '600', color: colors.text }}>Appointments</Text>
        <Text style={{ marginTop: 8, color: '#64748B', textAlign: 'center' }}>
          This page will show your upcoming and past appointments.
        </Text>
      </View>
    </SafeAreaView>
  );
}
