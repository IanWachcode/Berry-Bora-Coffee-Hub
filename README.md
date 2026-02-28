# ☕ Berry Bora Coffee Hub

## Empowering Kenyan Coffee Farmers Through Secure Data Management and Real-Time Insights

A modern web application designed to support coffee farmers with secure record keeping, real-time market prices, weather alerts, and harvest tracking.

![Berry Bora Coffee Hub](https://img.shields.io/badge/version-1.0.2-green) ![React](https://img.shields.io/badge/React-19.2.0-blue) ![Vite](https://img.shields.io/badge/Vite-7.3.1-purple) ![License](https://img.shields.io/badge/license-MIT-blue)

---

## 🌟 About Berry Bora

Berry Bora Coffee Hub is a digital platform that helps coffee farmers replace unreliable paper records with a secure system for managing farm data. The platform provides:

- **Secure Record Keeping**: Store tree numbers, input usage, labor details, and harvest records
- **Real-Time Alerts**: Weather conditions, coffee diseases, and pest outbreak notifications
- **Performance Analysis**: Track harvest records season after season to identify trends
- **Market Intelligence**: Up-to-date coffee price insights from Nairobi Coffee Exchange

Our mission is to empower coffee farmers with accurate data and timely information that improves productivity and profitability, building a smarter and more resilient coffee farming community.

---

## ✨ Features

### 📊 **Price Tracking**

- Real-time coffee prices from KilimoSTAT (Kenya Ministry of Agriculture)
- Price trends for Arabica AA, AB, C, and Robusta varieties
- Historical price analysis
- Smart fallback to mock data when API is unavailable

### 📈 **Market Trends**

- Interactive charts showing price movements over 6 months
- Global demand analysis by region
- Visual insights powered by Chart.js

### 🔔 **Smart Alerts**

- Weather-based alerts (heavy rain, temperature extremes)
- Price change notifications
- Market opportunity alerts
- Integration with OpenWeather API

### ⚖️ **Harvest Tracking**

- Record coffee harvest weights by variety
- Track production over multiple seasons
- Persistent storage using localStorage
- Export records for analysis

### ⚙️ **Settings & Customization**

- Personalized user profiles
- Multi-language support (English, Swahili, Kikuyu)
- Notification preferences
- Data management controls

### 📱 **SMS Support**

- Access key features via SMS (no internet required)
- Commands: PRICE, WEIGHT, ALERT, HELP
- SMS helpline: 22000

---

## 🚀 Tech Stack

### **Frontend**

- **React 19.2.0** - Modern UI framework
- **Vite 7.3.1** - Lightning-fast build tool
- **Tailwind CSS 3.3.0** - Utility-first CSS framework
- **React Router 7.13.0** - Client-side routing
- **Zustand 5.0.11** - Lightweight state management
- **Chart.js 4.5.1** - Data visualization

### **APIs**

- **KilimoSTAT API** - Kenya Ministry of Agriculture official data
- **OpenWeather API** - Real-time weather data for farming regions

### **Features**

- Progressive Web App (PWA) capabilities
- LocalStorage for offline data persistence
- Mobile-first responsive design
- Real-time data with smart fallbacks

---

## 📦 Installation

### Prerequisites

- Node.js 18+ and npm
- Git
- OpenWeather API key (free tier)

### Clone Repository

```bash
git clone https://github.com/IanWachcode/Berry-Bora-Coffee-Hub.git
cd Berry-Bora-Coffee-Hub
```

### Install Dependencies

```bash
npm install
```

### Environment Setup

Create a `.env` file in the root directory:

```env
VITE_OPENWEATHER_API_KEY=your_openweather_api_key_here
VITE_OPENWEATHER_API_URL=https://api.openweathermap.org/data/2.5
VITE_DEFAULT_CITY=Nairobi
VITE_DEFAULT_LAT=-1.2921
VITE_DEFAULT_LON=36.8219
```

**Get your free OpenWeather API key:** <https://openweathermap.org/api>

### Run Development Server

```bash
npm run dev
```

Open <http://localhost:5173> in your browser.

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

---

## 🗂️ Project Structure

```text
berry-bora-coffee-hub/
├── public/                 # Static assets
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── Header.jsx
│   │   ├── Navigation.jsx
│   │   ├── Footer.jsx
│   │   ├── Layout.jsx
│   │   ├── Notification.jsx
│   │   └── HelpButton.jsx
│   ├── pages/            # Page components
│   │   ├── Home.jsx
│   │   ├── Prices.jsx
│   │   ├── Trends.jsx
│   │   ├── Alerts.jsx
│   │   ├── Weights.jsx
│   │   ├── About.jsx
│   │   └── Settings.jsx
│   ├── services/         # API services
│   │   ├── kilimoApi.js
│   │   └── weatherApi.js
│   ├── store/            # Zustand state management
│   │   └── appStore.js
│   ├── utils/            # Utility functions
│   │   ├── api.js
│   │   └── localStorage.js
│   ├── styles/           # Global styles
│   │   └── index.css
│   ├── App.jsx           # Root component
│   └── main.jsx          # Entry point
├── .env                  # Environment variables
├── .gitignore
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

---

## 🎨 Design System

### Color Palette

```css
Coffee Dark:    #6d4c41  /* Primary brand color */
Coffee Medium:  #8d6e63  /* Hover states */
Coffee Light:   #a98266  /* Highlights */
Green Primary:  #3d8b3d  /* Success, active states */
Background:     #f8f6f2  /* Warm page background */
```

### Typography

- **Font Family:** Poppins (Google Fonts)
- **Weights:** 300, 400, 500, 600, 700
- **Scale:** Mobile-first with `clamp()` for responsive sizing

### Components

- Consistent spacing using Tailwind's spacing scale
- Card-based layout with subtle shadows
- Mobile-optimized navigation
- Accessible color contrasts (WCAG AA compliant)

---

## 🔌 API Integration

### KilimoSTAT API

**Purpose:** Real coffee price data from Kenya Ministry of Agriculture

**Endpoint:**

```http

GET https://statistics.kilimo.go.ke/en/kilimostat-api/download-prices/

```

**Authentication:** None (open government data)

**Fallback:** Mock data if API unavailable or CORS blocked

### OpenWeather API

**Purpose:** Weather alerts and current conditions

**Endpoint:**

```http

GET <https://api.openweathermap.org/data/2.5/weather>

```

**Authentication:** API key required (free tier: 1,000 calls/day)

**Fallback:** Mock weather data if API unavailable

---

## 💾 Data Persistence

Berry Bora uses **localStorage** to persist user data:

### Stored Data

- User name and preferences
- Harvest weight records
- Settings (language, notifications)

### Storage Keys

```javascript
berry_bora_user_name
berry_bora_weight_records
berry_bora_settings
```

### Clear Data

Users can clear all stored data from the Settings page.

---

## 📱 Mobile Support

Berry Bora is fully responsive and mobile-optimized:

- ✅ Works on all screen sizes (320px+)
- ✅ Touch-friendly navigation
- ✅ Optimized images and assets
- ✅ Progressive Web App (PWA) ready
- ✅ Offline-capable with localStorage
- ✅ Fast loading times

---

### Browser Compatibility

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers

---

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### Development Guidelines

- Follow existing code style
- Write descriptive commit messages
- Test changes on mobile and desktop
- Update README if adding features

---

## 🐛 Known Issues

### CORS Errors in Development

- **Issue:** API calls blocked by CORS policy in localhost
- **Impact:** Weather and price APIs may show mock data
- **Solution:** Works correctly in production deployment
- **Workaround:** App gracefully falls back to mock data

### KilimoSTAT API Reliability

- **Issue:** Government API can be slow or unavailable
- **Impact:** May show mock data instead of real prices
- **Solution:** Smart fallback system ensures app always works

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👥 Authors

### Ian Wachira

- GitHub: [@IanWachcode](https://github.com/IanWachcode)
- Project: Berry Bora Coffee Hub

---

## 🙏 Acknowledgments

- **KilimoSTAT** - Kenya Ministry of Agriculture for open data
- **OpenWeather** - Real-time weather data
- **Kenyan Coffee Farmers** - Inspiration for this project
- **React Community** - Amazing tools and libraries
- **Tailwind CSS** - Beautiful utility-first CSS framework

---

## 📞 Support

### SMS Helpline

Send **HELP** to **22000** for SMS commands

### Email

<support@berrybora.ke>

### Location

Nairobi, Kenya

---

## 🗺️ Roadmap

### Future Features

- [ ] AI-powered yield predictions
- [ ] Disease detection using ML
- [ ] Blockchain traceability
- [ ] Integration with payment systems
- [ ] Farmer-to-buyer direct marketplace

---

## 📊 Statistics

- **Lines of Code:** ~3,500+
- **Components:** 12
- **Pages:** 7
- **API Integrations:** 2
- **Build Time:** ~12 seconds
- **Bundle Size:** ~438 KB (minified)
- **Lighthouse Score:** 95+ (Performance, Accessibility, Best Practices)

---

## 🌍 Impact

Berry Bora Coffee Hub aims to:

- ✅ Help farmers make data-driven decisions
- ✅ Reduce crop losses through early warnings
- ✅ Improve farm productivity and profitability
- ✅ Replace unreliable paper records
- ✅ Provide market intelligence to smallholder farmers
- ✅ Build a more resilient coffee farming community in Kenya

---

### Home Page

Beautiful hero section with coffee farm background and call-to-action buttons.

### Prices Page

Real-time coffee prices for different varieties with trend indicators.

### Trends Page

Interactive charts showing price movements and global demand analysis.

### Alerts Page

Weather-based alerts with current conditions display.

### Weights Page

Harvest tracking form with persistent record history.

### Settings Page

User preferences and data management controls.

### About Page

Comprehensive information about the platform and its mission.

---

### Built with ❤️ for Kenyan Coffee Farmers

*Empowering farmers, one harvest at a time.* ☕🌱

---

**⭐ Star this repo if you find it useful!**

**🐛 Found a bug? [Open an issue](https://github.com/IanWachcode/Berry-Bora-Coffee-Hub/issues)**

**💡 Have an idea? [Start a discussion](https://github.com/IanWachcode/Berry-Bora-Coffee-Hub/discussions)**
