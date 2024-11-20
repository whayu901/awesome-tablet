import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

const data = [
  {
    id: 'DF000008',
    desc: 'Noise',
    createdDate: '09/10/2024',
    malfunctionStart: '09/10/2024',
    priority: 2,
    reportedBy: 'EMP001',
  },
  {
    id: 'DF000007',
    desc: 'Noise',
    createdDate: '17/08/2024',
    malfunctionStart: '16/08/2024',
    priority: 3,
    reportedBy: 'EMP053',
  },
  {
    id: 'DF000006',
    desc: 'Stopped',
    createdDate: '03/07/2024',
    malfunctionStart: '02/07/2024',
    priority: 1,
    reportedBy: 'EMP053',
  },
  {
    id: 'DF000005',
    desc: 'Noise',
    createdDate: '28/05/2024',
    malfunctionStart: '28/05/2024',
    priority: 3,
    reportedBy: 'EMP013',
  },
  {
    id: 'DF000004',
    desc: 'Strong Vibrate',
    createdDate: '16/05/2024',
    malfunctionStart: '16/05/2024',
    priority: 3,
    reportedBy: 'EMP001',
  },
];

export default function DefectFindingsTable() {
  return (
    <ScrollView horizontal={true} style={styles.container}>
      <View>
        {/* Header */}
        <View style={styles.headerRow}>
          <Text style={styles.headerCell}>D/F No.</Text>
          <Text style={styles.headerCell}>Desc.</Text>
          <Text style={styles.headerCell}>Created Date</Text>
          <Text style={styles.headerCell}>Malfunction Start</Text>
          <Text style={styles.headerCell}>Priority</Text>
          <Text style={styles.headerCell}>Reported By</Text>
        </View>
        {/* Rows */}
        {data.map((item, index) => (
          <View
            key={index}
            style={[
              styles.row,
              index % 2 === 0 ? styles.evenRow : styles.oddRow,
            ]}>
            <Text style={styles.cell}>{item.id}</Text>
            <Text style={styles.cell}>{item.desc}</Text>
            <Text style={styles.cell}>{item.createdDate}</Text>
            <Text style={styles.cell}>{item.malfunctionStart}</Text>
            <Text style={styles.cell}>{item.priority}</Text>
            <Text style={styles.cell}>{item.reportedBy}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    padding: 10,
    // backgroundColor: '#f8f9fa',
  },
  headerRow: {
    flexDirection: 'row',
    backgroundColor: '#343a40',
    paddingVertical: 10,
  },
  headerCell: {
    flex: 1,
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
    paddingHorizontal: 5,
  },
  row: {
    flexDirection: 'row',
    paddingVertical: 8,
  },
  evenRow: {
    backgroundColor: '#e9ecef',
  },
  oddRow: {
    backgroundColor: '#ffffff',
  },
  cell: {
    flex: 1,
    fontSize: 14,
    textAlign: 'center',
    paddingHorizontal: 5,
  },
});
