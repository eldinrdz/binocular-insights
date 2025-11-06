# Binocular - Repository Data Mining Analytics

Modern data mining analytics for Git repositories with real-time performance tracking and language comparison.

## Features

- **Repository Analysis Overview**: Live tracking of commit analysis with real-time statistics
- **Language Performance Comparison**: Compare runtime, memory usage, and CPU utilization across 7 programming languages
- **Interactive Charts**: Visualize performance metrics with responsive Recharts components
- **Dark Mode UI**: Modern, accessible interface with smooth animations
- **Export Functionality**: Download analysis results as JSON or CSV

## Tech Stack

- **React** - UI framework
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first styling
- **shadcn/ui** - High-quality component library
- **Recharts** - Data visualization
- **Framer Motion** - Smooth animations
- **Zustand** - Lightweight state management

## Getting Started

### Prerequisites

- Node.js 16+ and npm installed ([install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating))

### Installation

```sh
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to the project directory
cd binocular

# Install dependencies
npm install

# Start the development server
npm run dev
```

The application will be available at `http://localhost:5173`

## Project Structure

```
src/
├── components/        # Reusable UI components
├── pages/            # Main application pages
├── store/            # State management with Zustand
├── data/             # Demo data and fixtures
├── lib/              # Utility functions
└── types/            # TypeScript type definitions
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## Development

### Using your IDE

Clone the repository and open it in your preferred IDE:
- **Visual Studio Code** - Recommended with TypeScript and React extensions
- **IntelliJ IDEA** - Full support for React and TypeScript
- **WebStorm** - Excellent React development experience

### GitHub Workflow

1. Create feature branches for new development
2. Make changes and commit with descriptive messages
3. Push to GitHub and create pull requests
4. Review and merge to main branch

## Deployment

Build the project for production:

```sh
npm run build
```

The `dist/` folder will contain the production-ready files that can be deployed to any static hosting service.

## License

© 2025 Binocular Data Mining

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.