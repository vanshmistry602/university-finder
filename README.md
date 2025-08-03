# 🌐 University Finder

A beautiful and modern university search app built using **pure HTML, CSS, and JavaScript**. It allows users to search for universities across the world by country name, leveraging the [Hipolabs Universities API](https://github.com/Hipo/university-domains-list-api).

### ⚠️ Note on API Usage

This project uses the [Hipolabs Universities API](https://github.com/Hipo/university-domains-list-api), which only supports HTTP. To avoid Mixed Content errors in browsers, I used [corsproxy.io](https://corsproxy.io/) as a public HTTPS proxy. This is a temporary workaround suitable for demo/portfolio project use only, and not recommended for production applications.

---

## Table of Contents

- [Live Website](#live-website)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Folder Structure](#folder-structure)
- [How It Works](#how-it-works)
- [Installation & Usage](#installation-&-usage)
- [Contributions](#contributions)
- [License](#license)

---

## 🚀 Live Website

> 🔗 [View Live Project](https://vanshmistry602.github.io/university-finder)

---

## 📦 Features

- 🔎 Search universities by country
- 🌐 Displays name, website, and state/province
- 💡 Responsive layout for all screen sizes
- 🎨 Modern UI with transitions
- 📱 Mobile-friendly and touch-optimized
- 🧭 Auto hides result panel when empty
- 💫 Smooth animations for better UX

---

## 🛠️ Technologies Used

- **HTML5**
- **CSS3**
- **Vanilla JavaScript (ES6)**
- **Axios** for API requests
- **[Hipolabs Universities API](https://github.com/Hipo/university-domains-list-api)**

---

## 📁 Folder Structure

```
university-finder/
├── index.html # Main HTML file
├── style.css # All modern styles
├── app.js # JavaScript logic
└── README.md # Project info & setup
```

---

## 🧪 How It Works

1. User enters a country name.
2. On clicking “Search,” the app fetches data from the Hipolabs API.
3. Displays:
   - 🎓 University Name
   - 🔗 Website (clickable)
   - 📍 State/Province (if available)
4. If no result is found, the results panel hides smoothly.

---

## 📥 Installation & Usage

1. **Clone the repository**
   ```bash
   git clone https://github.com/vanshmistry602/university-finder.git
   cd university-finder
   ```

---

## 🤝 Contributions

Contributions are welcome!

Feel free to fork the repository and submit a pull request with your improvements — whether it's UI tweaks, code optimizations, bug fixes, or new features.

---

## 📄 License

This project is open source and available under the MIT License.

---

### Author

**Vansh Mistry**

For any questions or feedback, feel free to contact me at:

- **Email**: [officialvanshmistry@gmail.com](mailto:officialvanshmistry@gmail.com)
- **LinkedIn**: [linkedin.com/in/vanshmistry/](https://www.linkedin.com/in/vanshmistry/)
- **GitHub**: [github.com/vanshmistry602](https://github.com/vanshmistry602)
