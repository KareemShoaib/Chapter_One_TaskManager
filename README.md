# Task Manager App

A simple task management app built with React Native and Expo. You can add tasks, mark them as complete, and delete them when you're done. The app works on both light and dark themes.

## What it does

### Main features

- Add new tasks by typing in the input field
- Tap any task to mark it as complete (or incomplete)
- Delete tasks using the delete button
- See how many tasks you have and how many are done
- View all your tasks in a clean list

### App design

- Clean, simple interface
- Works with your phone's light or dark theme
- Looks good on different screen sizes
- Shows helpful messages when you have no tasks
- You can press "Done" on your keyboard to add tasks

## How to set it up

### What you need

- Node.js (version 16 or higher)
- npm or yarn
- Expo CLI (run `npm install -g @expo/cli` to install it)
- Expo Go app on your phone (for testing)

### Getting started

1. **Get the code**

   ```bash
   git clone <repository-url>
   cd assessment-app
   ```

2. **Install the packages**

   ```bash
   npm install
   ```

3. **Start the app**

   ```bash
   npm start
   ```

4. **Run it on your device**
   - **iPhone/iPad**: `npm run ios`
   - **Android**: `npm run android`
   - **Web browser**: `npm run web`
   - **Your phone**: Scan the QR code with the Expo Go app

### Other useful commands

```bash
# Start the development server
npm start

# Run on different devices
npm run ios
npm run android
npm run web

# Check for code issues
npm run lint

# Reset the project (moves current app to app-example)
npm run reset-project
```

## How the code is organized

```
assessment-app/
├── app/
│   ├── (tabs)/
│   │   ├── _layout.tsx          # Tab navigation setup
│   │   └── index.tsx            # Main task screen
│   └── _layout.tsx              # Root layout
├── components/
│   ├── TaskItem.tsx             # Individual task display
│   ├── AddTaskInput.tsx         # Input for new tasks
│   ├── TaskStats.tsx            # Shows task statistics
│   ├── ThemedText.tsx           # Text component
│   ├── ThemedView.tsx           # View component
│   └── ui/                      # Other UI parts
├── constants/
│   └── Colors.ts                # Color definitions
├── hooks/
│   └── useColorScheme.ts        # Theme handling
└── assets/                      # Images and fonts
```

## Libraries used

### Main libraries

- **React Native** (0.79.5) - The mobile app framework
- **Expo** (~53.0.20) - Development platform
- **React** (19.0.0) - UI library
- **TypeScript** (~5.8.3) - Adds type checking

### Navigation and UI

- **@react-navigation/native** (^7.1.6) - Handles navigation
- **@react-navigation/bottom-tabs** (^7.3.10) - Bottom tab navigation
- **expo-router** (~5.1.4) - File-based routing
- **react-native-safe-area-context** (5.4.0) - Safe area handling

### Icons and visuals

- **@expo/vector-icons** (^14.1.0) - Icons (using Ionicons)
- **expo-image** (~2.4.0) - Better image component
- **expo-blur** (~14.1.5) - Blur effects

### User experience

- **expo-haptics** (~14.1.4) - Vibration feedback
- **react-native-gesture-handler** (~2.24.0) - Touch gestures
- **react-native-reanimated** (~3.17.4) - Smooth animations

### Development tools

- **eslint** (^9.25.0) - Finds code issues
- **eslint-config-expo** (~9.2.0) - Expo-specific rules

## How to use the app

### Adding tasks

1. Type your task in the input field
2. Press the add button (plus icon) or hit "Done" on your keyboard
3. Your task will appear at the top of the list

### Managing tasks

- **Complete a task**: Tap anywhere on the task to mark it done
- **Delete a task**: Tap the red "DELETE" button on the task
- **Check progress**: Look at the statistics bar for completion percentage

### Navigation

- Use the bottom tabs to switch between screens
- The main "Tasks" tab has all the task management features

## Making changes

### Adding new features

The app is built with separate components, so it's easy to add new things:

- Add new task properties in the `Task` interface
- Create new components in the `components/` folder
- Change the main screen in `app/(tabs)/index.tsx`

### Styling

- Colors are in `constants/Colors.ts`
- Theme handling is in `hooks/useColorScheme.ts`
- Components use themed styling for consistency

## If something goes wrong

### Common problems

1. **Metro bundler issues**: Try `npm start --reset-cache`
2. **iOS build errors**: Make sure Xcode is installed properly
3. **Android build errors**: Check Android Studio and SDK setup
4. **Expo Go connection**: Make sure your phone and computer are on the same WiFi

### Development tips

- Use Expo DevTools for debugging
- Turn on hot reloading for faster development
- Check the console for error messages
- Use React Native Debugger for more advanced debugging

## License

This is an assessment project, so it follows the original project's license terms.

## Contributing

This is an assessment project, but the code structure follows React Native best practices and could be used as a starting point for other projects.

---

Built with React Native and Expo
