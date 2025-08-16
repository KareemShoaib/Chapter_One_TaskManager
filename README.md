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
