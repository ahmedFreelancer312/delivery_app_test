# Delivery App

A React-based delivery application built with modern web technologies.

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd delivery_app_test
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

The application will be available at `http://localhost:8080`.

### Build for Production

```bash
npm run build
```

### Run Tests

```bash
# Unit tests
npm run test

# E2E tests
npx playwright test
```

## Technologies Used

- **React** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **shadcn/ui** - UI components
- **React Router** - Routing
- **Zustand** - State management
- **React Hook Form** - Form handling
- **Playwright** - E2E testing
- **Vitest** - Unit testing

## Project Structure

```
src/
├── components/     # Reusable UI components
├── pages/         # Page components
├── hooks/         # Custom React hooks
├── lib/           # Utility functions
├── store/         # State management
├── data/          # Static data
└── test/          # Test files
```

## Features

- Restaurant browsing
- Menu display
- Shopping cart
- Checkout process
- Responsive design

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests
5. Submit a pull request
