import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Alert, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { ThemedView } from './ThemedView';

interface AddTaskInputProps {
  onAddTask: (title: string) => void;
}

export const AddTaskInput: React.FC<AddTaskInputProps> = ({ onAddTask }) => {
  const [taskTitle, setTaskTitle] = useState('');

  const handleAddTask = () => {
    const trimmedTitle = taskTitle.trim();
    if (trimmedTitle.length === 0) {
      Alert.alert('Error', 'Please enter a task title');
      return;
    }
    
    onAddTask(trimmedTitle);
    setTaskTitle('');
  };

  return (
    <ThemedView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={taskTitle}
          onChangeText={setTaskTitle}
          placeholder="Add a new task..."
          placeholderTextColor="rgba(255, 255, 255, 0.6)"
          onSubmitEditing={handleAddTask}
          returnKeyType="done"
        />
        <TouchableOpacity
          style={styles.addButton}
          onPress={handleAddTask}
          activeOpacity={0.7}
        >
          <Ionicons name="add" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: 12,
  },
  input: {
    flex: 1,
    height: 48,
    color: 'white',
    fontSize: 16,
  },
  addButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#4ECDC4',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8,
  },
}); 