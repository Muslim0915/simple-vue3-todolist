# 📝 Todo List App

This is a simple and clean Todo List application built with **Vue 3**, **TypeScript**, and **SCSS**.  
It allows users to add, delete, and reset tasks with a smooth and responsive UI.

## 🚀 Features

- Add new todos
- Delete individual todos
- Reset (clear) all todos
- Responsive layout
- Built using Composition API and TypeScript
- Styled with SCSS

## 🛠️ Tech Stack

- [Vue 3](https://vuejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [SCSS](https://sass-lang.com/)

## 📦 Project Setup

To run this project locally, follow the steps below:

**Install dependencies**

```bash
npm install
```

**Start the development server**

```bash
npm run dev
```

## Project Structure

The project is structured as follows:

```bash

src/
├── assets/                     # Static assets
│   ├── images/
│   │   └── png/
│   │       └── checked.png     # Check icon for completed todos
│   └── scss/                   # Global styles
│       ├── global.scss         # App-wide base styles
│       └── variables.scss      # SCSS variables (colors, sizes, etc.)

├── components/                 # Vue components
│   └── ui/                     # UI-specific reusable components
│       ├── AppButton.vue       # Reusable button component
│       ├── AppInput.vue        # Input field component
│       ├── AppFooter.vue       # App footer layout
│       ├── AppHeader.vue       # App header layout
│       ├── AppMain.vue         # Main layout wrapper
│       ├── SocialIcons.vue     # Social links/icons
│       └── TodoItem.vue        # Single todo item display

├── composables/                # Reusable logic with Composition API
│   └── useLocalStorage.ts      # LocalStorage composable for persisting todos

├── services/                   # Business logic or API-related code
│   └── typing/                 
│       └── interfaces/         
│           └── ITodoItem.ts    # Interface for Todo item type definition

├── stores/                     # Pinia stores (state management)
│   └── todolistStore.ts        # Main store for managing todos

├── App.vue                     # Root component
└── main.ts                     # Application entry point
```
## 📸 Screenshots
![image](https://github.com/user-attachments/assets/8d061237-506b-4b11-9644-d55ec3733807)
