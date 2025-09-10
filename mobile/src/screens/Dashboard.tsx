import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { colors, spacing } from '../theme';
import { MetricCard } from '../components/MetricCard';
import { Card } from '../components/Card';
import { MedicationItem } from '../components/MedicationItem';

export default function Dashboard() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <ScrollView contentContainerStyle={{ padding: spacing(2), gap: spacing(2) }}>
        <Text style={styles.title}>Dashboard Overview</Text>

        {/* Metrics grid */}
        <View style={styles.metricGrid}>
          <View style={styles.metricCol}><MetricCard icon="heart" label="Heart Rate" value="72 BPM" color={colors.metric.heart} /></View>
          <View style={styles.metricCol}><MetricCard icon="pulse" label="Blood Pressure" value="120/80" color={colors.metric.bp} /></View>
          <View style={styles.metricCol}><MetricCard icon="fitness" label="Weight" value="165 lbs" color={colors.metric.weight} /></View>
          <View style={styles.metricCol}><MetricCard icon="water" label="Blood Sugar" value="95 mg/dL" color={colors.metric.sugar} /></View>
        </View>

        {/* Two columns responsive */}
        <View style={styles.twoColWrap}>
          <View style={styles.col}>
            <Card style={styles.cardPad}>
              <Text style={styles.cardTitle}>Today's Medications</Text>
              <View style={styles.progressBarBg}>
                <View style={[styles.progressBar, { width: '33%' }]} />
              </View>
              <View style={{ gap: 10 }}>
                <MedicationItem name="Lisinopril" dose="10mg" time="8:00 AM" status="Taken" />
                <MedicationItem name="Blood Pressure" time="12:00 PM" status="Pending" />
                <MedicationItem name="Omega-3" time="6:00 PM" status="Pending" />
              </View>
            </Card>
          </View>
          <View style={styles.col}>
            <Card style={styles.cardPad}>
              <Text style={styles.cardTitle}>Upcoming Appointments</Text>
              <View style={{ gap: 10 }}>
                <View style={styles.listRow}>
                  <View>
                    <Text style={styles.itemTitle}>Dr. Johnson</Text>
                    <Text style={styles.itemSub}>Cardiology</Text>
                  </View>
                  <View>
                    <Text style={styles.itemRight}>2025-07-28</Text>
                    <Text style={styles.itemRightSub}>10:00 AM</Text>
                  </View>
                </View>
                <View style={styles.listRow}>
                  <View>
                    <Text style={styles.itemTitle}>Dr. Smith</Text>
                    <Text style={styles.itemSub}>General</Text>
                  </View>
                  <View>
                    <Text style={styles.itemRight}>2025-08-02</Text>
                    <Text style={styles.itemRightSub}>2:30 PM</Text>
                  </View>
                </View>
              </View>
            </Card>
          </View>
        </View>

        <Card style={styles.cardPad}>
          <Text style={styles.cardTitle}>Recent Health Records</Text>
          <View style={styles.divider} />
          <View style={styles.listRow}>
            <View>
              <Text style={styles.itemTitle}>Lab Results</Text>
              <Text style={styles.itemSub}>Added by Dr. Smith</Text>
            </View>
            <View>
              <Text style={styles.itemRight}>2025-07-28</Text>
              <Text style={styles.itemRightSub}>10:00 AM</Text>
            </View>
          </View>
          <View style={styles.separator} />
          <View style={styles.listRow}>
            <View>
              <Text style={styles.itemTitle}>Prescription</Text>
              <Text style={styles.itemSub}>Added by Dr. Johnson</Text>
            </View>
            <View>
              <Text style={styles.itemRight}>2025-08-02</Text>
              <Text style={styles.itemRightSub}>2:30 PM</Text>
            </View>
          </View>
          <View style={styles.separator} />
          <View style={styles.listRow}>
            <View>
              <Text style={styles.itemTitle}>Visit Summary</Text>
              <Text style={styles.itemSub}>Added by Dr. Williams</Text>
            </View>
            <View>
              <Text style={styles.itemRight}>2025-08-09</Text>
              <Text style={styles.itemRightSub}>9:00 AM</Text>
            </View>
          </View>
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: { fontSize: 18, fontWeight: '600', color: colors.text, marginBottom: 6 },
  metricGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 12 },
  metricCol: { flexBasis: '48%', flexGrow: 1, minWidth: 160 },
  twoColWrap: { flexDirection: 'row', flexWrap: 'wrap', gap: 12 },
  col: { flexBasis: '48%', flexGrow: 1, minWidth: 280 },
  cardPad: { padding: 16 },
  cardTitle: { fontSize: 14, fontWeight: '600', color: '#334155', marginBottom: 12 },
  progressBarBg: { height: 6, backgroundColor: '#E2E8F0', borderRadius: 999, marginBottom: 12 },
  progressBar: { height: 6, backgroundColor: colors.brand, borderRadius: 999 },
  listRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingVertical: 10 },
  itemTitle: { fontWeight: '600', color: colors.text },
  itemSub: { color: colors.muted, fontSize: 12, marginTop: 2 },
  itemRight: { color: '#475569', textAlign: 'right' },
  itemRightSub: { color: '#64748B', fontSize: 12, textAlign: 'right' },
  divider: { height: 1, backgroundColor: colors.border, marginTop: 8, marginBottom: 4 },
  separator: { height: 1, backgroundColor: colors.border },
});
