import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import { AddTaskInput } from '@/components/AddTaskInput';
import { TaskItem } from '@/components/TaskItem';
import { TaskStats } from '@/components/TaskStats';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

interface Task {
  id: string;
  title: string;
  completed: boolean;
}

const STORAGE_KEY = 'taskManager_tasks';

export default function TaskManagerScreen() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Load tasks from AsyncStorage on component mount
  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    try {
      const storedTasks = await AsyncStorage.getItem(STORAGE_KEY);
      if (storedTasks) {
        setTasks(JSON.parse(storedTasks));
      }
    } catch (error) {
      console.error('Error loading tasks:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const saveTasks = async (newTasks: Task[]) => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(newTasks));
    } catch (error) {
      console.error('Error saving tasks:', error);
    }
  };

  const addTask = (title: string) => {
    const newTask: Task = {
      id: Date.now().toString(),
      title,
      completed: false,
    };
    const updatedTasks = [newTask, ...tasks];
    setTasks(updatedTasks);
    saveTasks(updatedTasks);
  };

  const toggleTaskComplete = (id: string) => {
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
    saveTasks(updatedTasks);
  };

  const deleteTask = (id: string) => {
    console.log('deleteTask called with id:', id);
    
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
    saveTasks(updatedTasks);
    console.log('Tasks after deletion:', updatedTasks.length);
  };

  const completedTasks = tasks.filter(task => task.completed).length;

  // Show loading state while tasks are being loaded
  if (isLoading) {
    return (
      <ThemedView style={styles.container}>
        <ThemedView style={styles.loadingContainer}>
          <Ionicons name="refresh" size={32} color="#4ECDC4" />
          <ThemedText style={styles.loadingText}>Loading tasks...</ThemedText>
        </ThemedView>
      </ThemedView>
    );
  }

  return (
    <ThemedView style={styles.container}>
      {/* Header */}
      <ThemedView style={styles.header}>
        <ThemedView style={styles.headerContent}>
          <Ionicons name="checkmark-circle" size={32} color="#4ECDC4" />
          <ThemedText type="title" style={styles.headerTitle}>
            Task Manager
          </ThemedText>
        </ThemedView>
        <ThemedText style={styles.headerSubtitle}>
          Stay organized and productive
        </ThemedText>
      </ThemedView>

      {/* Stats */}
      <TaskStats totalTasks={tasks.length} completedTasks={completedTasks} />

      {/* Add Task Input */}
      <AddTaskInput onAddTask={addTask} />

      {/* Task List */}
      <ScrollView style={styles.taskList} showsVerticalScrollIndicator={false}>
        {tasks.length === 0 ? (
          <ThemedView style={styles.emptyState}>
            <Ionicons name="list-outline" size={64} color="rgba(255, 255, 255, 0.3)" />
            <ThemedText style={styles.emptyStateTitle}>No tasks yet</ThemedText>
            <ThemedText style={styles.emptyStateSubtitle}>
              Add your first task to get started!
            </ThemedText>
          </ThemedView>
        ) : (
          tasks.map(task => (
            <TaskItem
              key={task.id}
              task={task}
              onToggleComplete={toggleTaskComplete}
              onDelete={deleteTask}
            />
          ))
        )}
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
  header: {
    paddingHorizontal: 20,
    paddingBottom: 16,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  headerTitle: {
    marginLeft: 12,
  },
  headerSubtitle: {
    fontSize: 16,
    opacity: 0.8,
    marginLeft: 44,
  },
  taskList: {
    flex: 1,
    paddingHorizontal: 16,
  },
  emptyState: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 60,
  },
  emptyStateTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
  },
  emptyStateSubtitle: {
    fontSize: 16,
    opacity: 0.7,
    textAlign: 'center',
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 60,
  },
  loadingText: {
    fontSize: 16,
    marginTop: 16,
    opacity: 0.8,
  },
});
