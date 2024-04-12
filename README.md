# Blog app

![alt text](image.png)

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![React Query](https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white) ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white) ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white) ![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white) ![GitHub Actions](https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white) ![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)

Developed as part of the Helsinki University Full-stack Open course. Currently there is no feature for creating an account via the frontend, you will have to manually do this via backend posting or i.e MongoDB Atlas. Frontend is pretty rough and was not really the main focus, but hey, I got to learn Tailwind a little bit. :D

Demo of the app is currently deployed live at [Render](https://blog-app-ouxe.onrender.com/).

## Running the app locally

1. **Clone the repository**
2. **Create an .env file in the backend folder**
> [!WARNING]
> Never push the .env file to your GitHub repository
3. **Set up the following values in your .env file**:
    ```
    SECRET=your_secret_string
    PORT=your_chosen_port
    TEST_MONGO_DB_URI=your_test_database_url
    MONGO_DB_URI=your_main_database_url
    ```

    Replace the placeholders with the following:
    - `your_secret_string`: Any string value without special characters for your secret.
    - `your_chosen_port`: The port number you want your backend to run on.
    - `your_test_database_url`: URL for your test MongoDB database.
    - `your_main_database_url`: URL for your main MongoDB database.
4. **Build dev environment with docker: docker compose -f docker-compose.dev.yml build**
5. **Start dev environment with docker: docker compose -f docker-compose.dev.yml up**
6. **docker-compose.yml runs the production app, but it is not ready for deployment yet. If you want to deploy with docker you will have to figure out how to setup the environmental variables.**

## Running tests locally

There are ready made scripts for running the tests locally. The command is the same for both front- and backend.

```
npm run test
```

## Running style checks locally

There are ready made scripts for running the style checks locally. The command is the same for both front- and backend.

```
npm run lint
```
