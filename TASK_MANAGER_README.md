# Task Manager App

A simple and elegant task management application built with React Native and Expo.

## Features

### ✅ Core Functionality

- **Add Tasks**: Create new tasks with a simple input field
- **Mark Complete**: Tap on any task to toggle its completion status
- **Delete Tasks**: Remove tasks with a confirmation dialog
- **Task Statistics**: View total tasks, completed tasks, and progress percentage

### 🎨 User Interface

- **Modern Design**: Clean, minimalist interface with smooth animations
- **Dark/Light Theme Support**: Automatically adapts to system theme
- **Responsive Layout**: Works seamlessly across different screen sizes
- **Visual Feedback**: Haptic feedback and visual indicators for user interactions

### 📱 User Experience

- **Intuitive Navigation**: Simple tab-based navigation
- **Empty State**: Helpful message when no tasks exist
- **Confirmation Dialogs**: Prevents accidental task deletion
- **Keyboard Support**: Submit tasks using the keyboard's "Done" button

## Components

### TaskItem

- Displays individual tasks with completion status
- Interactive checkbox with visual feedback
- Delete button with confirmation
- Strikethrough text for completed tasks

### AddTaskInput

- Text input for new task creation
- Add button with icon
- Input validation (prevents empty tasks)
- Keyboard integration

### TaskStats

- Real-time statistics display
- Total tasks counter
- Completed tasks counter
- Progress percentage calculation

## Usage

1. **Adding Tasks**: Type in the input field and press the add button or hit "Done" on your keyboard
2. **Completing Tasks**: Tap anywhere on a task to mark it as complete/incomplete
3. **Deleting Tasks**: Tap the trash icon and confirm the deletion
4. **Viewing Progress**: Check the statistics bar at the top for your progress

## Technical Details

- Built with React Native and Expo
- Uses TypeScript for type safety
- Implements React hooks for state management
- Follows modern React Native best practices
- Responsive design with proper theming support

## Getting Started

1. Install dependencies: `npm install`
2. Start the development server: `npm start`
3. Run on your preferred platform:
   - iOS: `npm run ios`
   - Android: `npm run android`
   - Web: `npm run web`

## Project Structure

```
app/(tabs)/index.tsx          # Main Task Manager screen
components/
  ├── TaskItem.tsx           # Individual task component
  ├── AddTaskInput.tsx       # Task input component
  ├── TaskStats.tsx          # Statistics display component
  ├── ThemedText.tsx         # Themed text component
  └── ThemedView.tsx         # Themed view component
```

The app is ready to use and can be easily extended with additional features like task categories, due dates, or data persistence.
