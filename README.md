Psychologists-services: (frontend + backend for 3 pet projects).

Backend (swagger):
https://teachers-rest-api.onrender.com/api/docs/

Layout (figma):
https://www.figma.com/file/I5vjNb0NsJOpQRnRpMloSY/Psychologists.Services?type=design&node-id=0-1&mode=design&t=4zfT2zFANRbp1fCK-0


The application is designed for a company that offers psychological services. It consists of three pages:

• Home page: It features the site's title, the company's slogan, and a link that encourages users to start using the application and redirects them to the Psychologists page.

• Psychologists page: It contains a list of psychologists that users can sort by name - either alphabetically (from A to Z) or in reverse (from Z to A), by price - either from the lowest to the highest or vice versa, and by popularity - either from the lowest rating or the highest.

• A private Favorites page: This page shows psychologists who have been added to the user's "Favorites."

The application includes an authorization feature (registration, login, fetching current user data, and logout). The forms for registration/authorization are implemented using modal windows.

For unauthorized users, the Psychologists page renders cards with pagination. Authorized users have the ability to add a card to the favorites list, which is saved on the server.



Main Technologies Used in the Frontend Application:
React: A JavaScript library for building user interfaces, enabling the development of dynamic and responsive web applications through reusable components.

Redux: A state management library that helps maintain the application's state in a predictable manner, allowing for easier debugging and state sharing across components.

Navigation: Utilized to facilitate smooth transitions between different pages and components within the application, enhancing user experience through libraries like React Router.

Main Technologies Used in the Backend Application:
The HTTP server is implemented using Node.js and Express.js, providing the following functionalities through a RESTful API:
• User registration.
• User login.
• User logout.
• Updating user information.

Route Protection: Route protection is implemented through a token system (JWT - JSON Web Tokens), ensuring secure access to the API. Only authorized users have access to protected routes and can work with their data.
• Get a list of psychologists.
• Add, delete, and get favorite psychologists.
• Choose psychologists and send requests.