# Todo Application - 

## Setting up the project

Follow the following steps to setup this project.

*Note* - Make sure you have node and npm installed in your system. If not, follow the steps given [here](https://nodejs.org/en/download/) to install it.

### Fork this repository
First of all, click on the top-right corner of this repository to fork it.

### Create a local clone of your fork
Then, clone your forked repository using this command:
```
git clone https://github.com/ankur12-1610/Todo-list.git
```

Change your current directory to the repo's root.
```
cd Todo-list
```

### Run the server

Install the dependencies using
```
npm i
```

Then you can finally run the server using this command.
```
npm run dev
```

Then you can go to `localhost:3000` in your browser.

### Deploying App

You can use netlify or vercel for deploying your app. The build command is
```
npm run build
```

This will create a `dist` folder which can be served now
