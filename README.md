# ``DUMPER 📸!!!``

This is an app made to manage your pictures and dump them into an amazing community!

Here, you'll be able to see others' pics as well as them can see yours, so let's make a common photo dump.

In this app you'll be able to upload, update, delete and see your pictures.
## ``Tools``
1. To upload the images we use a cloud service called backblaze b2
2. To store data we've used MongoDB Atlas
3. To build the frontend we've used React and Vite
4. To build the backend we've used Node and express.js
## ``Prerequisites``

- Node.js: Make sure you have Node.js installed. You can download it from [nodejs.org](https://nodejs.org/).
## ``Installation``

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/AlexandraZambrano/Dumper_photoApp.git

## ``Backend``
- To start the app you need to first run a 
   ```bash
      npm install
- Then you need to run a 
   ```bash
      nodemon
And it should start running right away, make sure that it is connected to the data base.
## ``Frontend``
- To start the app you need to first run a 
   ```bash
      npm install
- Then you need to run a 
   ```bash
      npm run dev
And it should start running right away.
## ``Project Development``
To develop this project, I chose technologies that would provide comfort while still presenting a challenge. For the frontend, I opted to use React as the library in conjunction with the Vite compiler, aiming to strike a balance between familiarity and a learning opportunity. Express, being a new challenge for me, was my choice for the backend. Additionally, when considering how to handle image uploads, I decided to use Multer for image uploading and integrate a cloud storage service to avoid saving images directly in a backend folder, thus improving performance.

In the backend, I have adopted a Model-View-Controller (MVC) architecture and utilized a MongoDB Atlas database, making it accessible when the application starts without the need to launch MongoDB Compass. For the frontend, I aimed to follow an architecture based on Atomic Design principles, creating an organized environment and making extensive use of React features, including hooks, wherever possible.