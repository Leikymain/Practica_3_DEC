
# 🎬 MovieApp

MovieApp is a modern Angular Single Page Application (SPA) that allows you to browse, search, and explore popular movies using [The Movie Database (TMDb) API](https://www.themoviedb.org/).  
The project demonstrates Angular best practices, including routing, services, and responsive UI.

## ✨ Features

- Browse popular movies in a responsive grid
- Search for movies by title
- View detailed information for each movie
- Modern, Netflix-inspired UI
- Built with Angular standalone components and services
- Data fetched live from TMDb API

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [Angular CLI](https://angular.io/cli)

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/Leikymain/Practica_3_DEC.git
cd movie-app
npm install
```

### TMDb API Key

This app requires a TMDb API key.  
1. Register for a free API key at [TMDb API](https://www.themoviedb.org/settings/api).
2. Replace the placeholder in `src/app/services/movie.service.ts` with your API key.

### Running the App

Start the development server:

```bash
ng serve
```

Visit [http://localhost:4200/](http://localhost:4200/) in your browser.

## 🛠️ Project Structure

```
src/
  app/
    components/
      home/           # Home page (popular movies)
      search/         # Search page
      movie-detail/   # Movie detail page
    services/
      movie.service.ts # Data service for TMDb API
  styles.css           # Global styles
```

## 📦 Build

To build the project for production:

```bash
ng build
```

## 🧪 Testing

Run unit tests:

```bash
ng test
```

## 📄 License

This project is for educational purposes.  
Movie data provided by [TMDb](https://www.themoviedb.org/).

---

Made with ❤️ using Angular.
