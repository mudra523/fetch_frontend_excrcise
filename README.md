# Fetch Frontend Take-Home Exercise

Welcome to my solution for the Fetch Frontend Take-Home Exercise! This project is a responsive web application built for dog lovers to search through a database of shelter dogs, filter by various criteria, select favorites, and generate a match to find a new best friend.

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Screenshots](#screenshots)
- [Live Demo](#live-demo)
- [Installation & Setup](#installation--setup)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [API Reference](#api-reference)
- [Additional Notes](#additional-notes)
- [License](#license)

---

## Overview

This application fulfills the requirements of the Fetch Frontend Take-Home Exercise by implementing:

- A user login screen that authenticates via Fetch's API using user-provided name and email.
- A dog search page where users can filter dogs by breed, sort results, paginate through results, and view comprehensive details for each dog.
- Functionality to favorite dogs and generate an adoption match using provided endpoints.
- A clean and intuitive user experience using Ant Design components and Next.js for server-side rendering and routing.

---

## Features

- **User Authentication**: Simple login screen that accepts name and email, authenticates with the backend, and manages sessions using HTTP-only cookies.
- **Dog Search & Filters**:
  - Filter dogs by breed.
  - Sort results by breed, name, or age (ascending/descending).
  - Paginated results.
  - Display all fields of the Dog object (name, age, breed, image, zip code).
- **Favorites & Matching**:
  - Add dogs to a favorites list.
  - Generate a match by submitting favorited dog IDs to the `/dogs/match` endpoint.
  - Display matched dog information in a user-friendly format.
- **Responsive Design**: Built with Ant Design to ensure a modern and responsive UI across devices.

---

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **UI Library**: [Ant Design](https://ant.design/)
- **HTTP Client**: [Axios](https://axios-http.com/)
- **Language**: TypeScript
- **Hosting**: Deployed and hosted online

---

## Screenshots

Below are some screenshots of the application:

### Welcome Page
![Welcome Page](https://raw.githubusercontent.com/mudra523/fetch_frontend_excrcise/refs/heads/main/public/WelcomePage.png)

### Login Page
![Login Page](https://raw.githubusercontent.com/mudra523/fetch_frontend_excrcise/refs/heads/main/public/LogInPage.png)

### Home/Search Page
![Home Page](https://raw.githubusercontent.com/mudra523/fetch_frontend_excrcise/refs/heads/main/public/HomePage.png)

### Match Dog
![Home Page](https://raw.githubusercontent.com/mudra523/fetch_frontend_excrcise/refs/heads/main/public/MatchDog.png)

*(Replace the placeholder links with actual URLs to your screenshots.)*

---

## Live Demo

Check out the live version of the application here: [Live Site Link](https://your-live-site-url.com)

---

## Installation & Setup

To run this project locally, follow these steps:

### Prerequisites

- Node.js (v14 or later recommended)
- Yarn or npm

### Steps

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/yourusername/your-repo-name.git
   cd your-repo-name
