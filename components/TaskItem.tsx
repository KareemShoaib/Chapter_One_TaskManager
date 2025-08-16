import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { ThemedText } from './ThemedText';
import { ThemedView } from './ThemedView';

interface Task {
  id: string;
  title: string;
  completed: boolean;
}

interface TaskItemProps {
  task: Task;
  onToggleComplete: (id: string) => void;
  onDelete: (id: string) => void;
}

export const TaskItem: React.FC<TaskItemProps> = ({ task, onToggleComplete, onDelete }) => {
  return (
    <ThemedView style={styles.taskItem}>
      <TouchableOpacity
        style={styles.taskContent}
        onPress={() => onToggleComplete(task.id)}
        onLongPress={() => onDelete(task.id)}
        activeOpacity={0.7}
      >
        <View style={styles.checkboxContainer}>
          <View style={[styles.checkbox, task.completed && styles.checkboxCompleted]}>
            {task.completed && (
              <Ionicons name="checkmark" size={16} color="white" />
            )}
          </View>
        </View>
        <ThemedText 
          style={[
            styles.taskTitle,
            task.completed && styles.taskTitleCompleted
          ]}
        >
          {task.title}
        </ThemedText>
      </TouchableOpacity>
      
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => {
          console.log('Delete button pressed for task:', task.id);
          onDelete(task.id);
        }}
        activeOpacity={0.7}
      >
        <ThemedText style={styles.deleteText}>DELETE</ThemedText>
      </TouchableOpacity>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  taskItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginVertical: 4,
    borderRadius: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  taskContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxContainer: {
    marginRight: 12,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#4ECDC4',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  checkboxCompleted: {
    backgroundColor: '#4ECDC4',
    borderColor: '#4ECDC4',
  },
  taskTitle: {
    fontSize: 16,
    flex: 1,
  },
  taskTitleCompleted: {
    textDecorationLine: 'line-through',
    opacity: 0.6,
  },
  deleteButton: {
    padding: 12,
    backgroundColor: '#FF6B6B',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#FF6B6B',
    minWidth: 60,
    alignItems: 'center',
  },
  deleteText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
}); 