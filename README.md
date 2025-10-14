# SHA Development Trust (SDT) Website

The official website for SHA Development Trust - advancing ethical, inclusive, and responsible technology for people and communities around the world.

## About SDT

SHA Development Trust is the impact arm of Sha Intelligence, dedicated to making technology safe, fair, and useful for everyone by supporting education, research, and innovation that put people first.

## 🚀 Tech Stack

- **Framework**: React 19 with Vite 7
- **Styling**: Tailwind CSS v4 with custom theme
- **Animations**: Framer Motion 12
- **Routing**: React Router DOM 7
- **Icons**: Lucide React
- **Performance**: Custom lazy loading with Intersection Observer
- **Typography**: Google Fonts (Google Sans)

## 📁 Project Structure

```
SDT-website/
├── frontend/                 # Main React application
│   ├── src/
│   │   ├── components/      # Reusable components
│   │   │   ├── Button.jsx   # Custom button component
│   │   │   ├── FocusCard.jsx # Focus area cards
│   │   │   ├── Header.jsx   # Navigation header
│   │   │   ├── Footer.jsx   # Site footer
│   │   │   └── LazyImage.jsx # Performance-optimized image component
│   │   ├── pages/           # Page components
│   │   │   ├── HomePage.jsx # Main landing page
│   │   │   ├── AboutPage.jsx # About SDT
│   │   │   ├── FocusPage.jsx # Our focus areas
│   │   │   ├── FundingPage.jsx # Programs & funding
│   │   │   ├── PrivacyPage.jsx # Privacy policy
│   │   │   └── TermsPage.jsx # Terms of service
│   │   ├── globals.css      # Global styles & Tailwind config
│   │   └── main.jsx         # Application entry point
│   └── package.json         # Frontend dependencies
├── package.json             # Root scripts
└── README.md               # This file
```

## 🌟 Features

### Core Functionality
- **Multi-page Application**: Home, About, Focus Areas, Programs, Privacy, Terms
- **Responsive Design**: Fully responsive across all devices
- **Performance Optimized**: 
  - Lazy loading for images
  - Intersection Observer for animations
  - Optimized hero section rendering
- **Accessibility**: Semantic HTML and proper alt texts
- **Modern UI**: Google Material Design inspired interface

### Animation & Interactions
- **Smooth Animations**: Framer Motion powered transitions
- **Scroll Animations**: Elements animate into view as you scroll
- **Hero Carousels**: Interactive image marquees on homepage
- **Hover Effects**: Subtle interactive feedback

### Performance Features
- **Lazy Image Loading**: Images load only when needed
- **Fast Hero Rendering**: Immediate animation without viewport delays
- **Optimized Build**: Vite-powered fast builds and hot reloading
- **Modern JavaScript**: ES modules and latest React features

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/sha-intelligence-admin/SDT-website.git
   cd SDT-website
   ```

2. **Install dependencies**
   ```bash
   # Install all dependencies
   npm install
   
   # Or install frontend dependencies only
   cd frontend
   npm install
   ```

3. **Start development server**
   ```bash
   # From root directory
   npm run start
   
   # Or from frontend directory
   cd frontend
   npm run dev
   ```

4. **Open your browser**
   - Navigate to [http://localhost:5173](http://localhost:5173)
   - The page will auto-reload as you make changes

### Build for Production

```bash
# From root directory
npm run build

# Or from frontend directory
cd frontend
npm run build
```

## � Available Scripts

### Root Directory
- `npm run build` - Build the frontend application
- `npm run start` - Start the development server

### Frontend Directory
- `npm run dev` - Start Vite development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint code linting

## 🎨 Customization

### Tailwind Configuration
The project uses Tailwind CSS v4 with custom theme variables defined in `frontend/src/globals.css`:

```css
@theme {
  --color-primary: #476dd2;
  --color-secondary: #000000;
  --font-sans: "Google Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
}
```

### Adding New Pages
1. Create new component in `frontend/src/pages/`
2. Add route in `frontend/src/App.jsx`
3. Update navigation in `frontend/src/components/Header.jsx`

## 🌍 Organization Focus Areas

The website showcases SDT's four key focus areas:

1. **Education & Skills** - Digital and AI skills training
2. **Research & Ethics** - Safe and fair technology exploration  
3. **Innovation & Support** - Backing technology solutions for communities
4. **Policy & Governance** - Responsible innovation frameworks

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.

## 📧 Contact

**SHA Development Trust**
- Website: [Coming Soon]
- Email: [Contact Information]
- Author: Ibrahim Abdullahi <kaliibro777@gmail.com>

---

*"Technology for Humanity" - Advancing ethical, inclusive, and responsible technology for people and communities around the world.*