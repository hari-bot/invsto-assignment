# Interactive Pricing Component

This project is an interactive pricing component built with React and Redux. It features a custom range input slider, a pricing toggle, and a dark mode toggle.

## Project Overview

The goal of this project is to create a responsive and interactive pricing component based on the design provided by Frontend Mentor. This includes:

- Custom range input slider for adjusting pricing.
- Toggle switch for monthly/yearly billing.
- Dark mode toggle to switch between light and dark themes.

## Installation

1. Clone the repository:

   ```bash
   https://github.com/hari-bot/invsto-assignment.git
   ```

2. Navigate to the project directory:

   ```bash
   cd invsto-assignment 
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

## Usage

1. Start the development server:

   ```bash
   npm run dev
   ```

2. Open your browser and navigate to the URL provided by Vite, usually `http://localhost:5173`.

## Features

- **Custom Range Slider**: Adjust the pricing by dragging the slider.
- **Billing Toggle**: Switch between monthly and yearly billing.
- **Dark Mode Toggle**: Switch between light and dark themes.

## File Structure

- **actions/index.js**: Contains action types and action creators.
- **reducers/uiReducer.js**: Manages the state for dark mode.
- **reducers/index.js**: Combines all reducers.
- **store/store.js**: Configures the Redux store.
- **components/DarkModeToggle.js**: Dark mode toggle switch component.
- **components/Card.js**: Card component for displaying pricing information.
- **components/Heading.js**: Heading component for displaying the title of the page.



## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
```
