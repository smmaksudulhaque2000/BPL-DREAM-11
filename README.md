<div align="center">
  <img src="https://i.ibb.co.com/Q3SjNBww/Screenshot-7.png" height="500" alt="BPL-DREAM 11"/>
</div>

# BPL-DREAM 11

## Project Overview

BPL-DREAM 11 is an advanced React-based fantasy cricket team management application. The platform allows users to select and manage their fantasy cricket teams within a set virtual coin budget. Built based on a Figma design, the app offers features like increasing coins, player selection within budget limits, team management, and more. It also includes a newsletter subscription feature with email storage functionality.

Live Demo: [BPL-DREAM 11](https://inspiring-tartufo-ddb990.netlify.app/)

---

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [Project Structure](#project-structure)
- [Challenges and Optional Features](#challenges-and-optional-features)
- [Future Enhancements](#future-enhancements)
- [License](#license)
- [Author](#author)

---

## Features

- **Player Management**: View, select, and manage cricket players for your team, adhering to the available coins limit.
- **Coin System**: Users can accumulate coins by clicking a banner, while managing selections within their budget.
- **Player Selection Validation**: Prevents duplicate selections of players, and restricts teams to a maximum of 6 players.
- **Player Removal**: Easily remove selected players from the team roster.
- **Responsive UI**: Player information displayed in a dynamic card layout, including name, country, role, and price.
- **Toast Notifications**: Real-time, non-intrusive notifications provided by React-Toastify, improving user experience.
- **Newsletter Subscription**: Allows users to subscribe with email and store it in LocalStorage for future visits.

---

## Technologies Used

- **React**: Library for building the user interface.
- **React-Toastify**: For enhanced user notifications.
- **JavaScript (ES6+)**: Application logic and interaction.
- **CSS**: Custom CSS for styling and responsiveness.
- **LocalStorage**: Storing user-submitted email for future visits.

---

## Setup Instructions

To run the project locally, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/smmaksudulhaque2000/BPL-DREAM-11
   ```

2. **Navigate to the project directory**:

   ```bash
   cd BPL-DREAM-11
   ```

3. **Install dependencies**:

   ```bash
   npm install
   ```

4. **Run the development server**:

   ```bash
   npm run dev
   ```

5. **Open the application**:  
   Visit [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Structure

The project is organized in a standard React structure, making it easy to maintain and scale. Below is an overview:

```
├── public/
├── src/
│   ├── assets/            # Images and icons used in the app
│   ├── components/        # Reusable UI components (e.g., Navbar, PlayerCard)
│   ├── data/              # Contains playerData.json for all available players
│   ├── App.js             # Main component
│   ├── index.js           # Entry point of the app
│   ├── styles/            # Global and component-specific styles
│   └── utils/             # Utility functions and constants
├── package.json           # Project metadata and dependencies
└── README.md              # Documentation for the project
```

---

## Challenges and Optional Features

### Challenges

- **Player Selection Validation**:
  - Users are unable to select the same player multiple times.
  - Restrictions are in place to limit team selection to a maximum of 6 players.
- **Toast Notifications**:
  - React-Toastify replaces the traditional alert system, providing a smooth, non-intrusive user experience.

### Optional Features

- **LocalStorage for Newsletter Subscription**:
  - Store and retrieve the user's email for personalized experience across sessions.

---

## Future Enhancements

1. **User Authentication**: Add user login and authentication to personalize player selection and team management.
2. **Leaderboard**: Implement a leaderboard to track and display the top fantasy teams based on performance.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Author

Developed by **Maksudul Haque**.  
Connect with me on [GitHub](https://github.com/smmaksudulhaque2000) or [LinkedIn](https://www.linkedin.com/in/maksudulhaque2000/).
