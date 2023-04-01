<br />
<div align="center">
<h2 align="center">AuthsRoute</h2>

  <p align="center">
   complete form solutions enabling authintication.
    <br />
    <br />
    <!-- to edit -->
    <a href="https://github.com/shivam6862/AuthsRoutes/issues">Report Bug</a>
    ·
    <a href="https://github.com/shivam6862/AuthsRoutes/issues">Request Feature</a>
  </p>
</div>

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li><a href="#usage">Description</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

## About The Project

AuthsRoute is an innovative web application that simplifies the process of authintication.

Team - `shivam6862`

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- [react-url]
- [NodeJs-url]
- [Mongodb-url]
- [VisualStudioCode-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Getting Started

So as to run our project locally, you need to follow the steps below.

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/shivam6862/AuthsRoutes
   ```
2. Install NPM packages on both backend and frontend folders
   ```sh
   npm install
   ```
3. Enter your API in `.env` of frontend directory
   ```sh
   VITE_REACT_BACKEND_URL=http://localhost:8080
   ```
4. Enter your MONGODB DATABASE URL and put it in `.env` file in backend directory
   ```sh
   MONGODB_URL= "your mongodb url"
   ```
5. Make the database in your mongodb server named as `AuthsRoute` and make the following collection
   ```sh
   users
   ```
6. Run the project in frontend using
   ```sh
   npm run dev
   ```
7. Run the project in backend using
   ```sh
   npm start
   ```
8. You can now view the project at `http://localhost:3000`

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Description

AuthsRoute is an innovative web application that simplifies the process of authintication.<br/>

Our project is a web application built using React and Node.js that allows users to authenticate and access protected content. The authentication process involves user registration, login, and session management, which is handled by the Node.js backend using libraries like JSON Web Tokens (JWTs).<br/>

When a user registers, they can enter their email and password, which is securely hashed and stored in a database. The user can then log in using their email and password, and the server will authenticate the user using the stored hashed password. If the authentication is successful, the server will return a JWT to the client, which can be used to authenticate subsequent requests to protected routes in the React frontend.<br/>

In the frontend, users can access protected content by navigating to authenticated routes. If a user attempts to access a protected route without being authenticated, they will be redirected to the sign-in page. Once logged in, the user will have access to the protected content until they sign-out or their session expires.<br/>

Our project implements best practices for security and user authentication to ensure that user data is protected and only accessible to authorized users.<br/>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Contact

AuthsRoute - [@shivam-kumar](https://www.linkedin.com/in/shivam-kumar-14701b249/)

Project Link: [https://github.com/shivam6862/AuthsRoutes](https://github.com/shivam6862/AuthsRoutes)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Acknowledgments

Use this space to list resources you find helpful and would like to give credit to. I've included a few of my favorites to kick things off!

- [GitHub Pages](https://pages.github.com)
- [MongoDb](https://www.mongodb.com/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

[react-url]: https://reactjs.org/
[react.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[nodejs-url]: https://nodejs.org/en
[mongodb-url]: https://www.mongodb.com/
[visualstudiocode-url]: https://code.visualstudio.com/
