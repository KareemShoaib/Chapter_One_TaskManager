import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ThemedText } from './ThemedText';
import { ThemedView } from './ThemedView';

interface TaskStatsProps {
  totalTasks: number;
  completedTasks: number;
}

export const TaskStats: React.FC<TaskStatsProps> = ({ totalTasks, completedTasks }) => {
  const completionPercentage = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

  return (
    <ThemedView style={styles.container}>
      <View style={styles.statItem}>
        <ThemedText style={styles.statNumber}>{totalTasks}</ThemedText>
        <ThemedText style={styles.statLabel}>Total Tasks</ThemedText>
      </View>
      
      <View style={styles.divider} />
      
      <View style={styles.statItem}>
        <ThemedText style={styles.statNumber}>{completedTasks}</ThemedText>
        <ThemedText style={styles.statLabel}>Completed</ThemedText>
      </View>
      
      <View style={styles.divider} />
      
      <View style={styles.statItem}>
        <ThemedText style={styles.statNumber}>{completionPercentage}%</ThemedText>
        <ThemedText style={styles.statLabel}>Progress</ThemedText>
      </View>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 20,
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  statItem: {
    alignItems: 'center',
    flex: 1,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4ECDC4',
  },
  statLabel: {
    fontSize: 12,
    opacity: 0.8,
    marginTop: 4,
  },
  divider: {
    width: 1,
    height: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
}); 