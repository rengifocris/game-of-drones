#GAME OF DRONES
This project is created with the aim of showing the knowledge obtained in frontend technologies like react.js, redux.js and backend with nodej.js and socket.io, as a part of the techical test for UruIt  it is a game called Game Of Drones based on the famous game rock, paper or scissors, which includes two game modes "player vs computer" and "player vs player" this game is responsive and multiplayer.
#######################################################

##Libraries used
These are the libraries that were used.

react                   #JavaScript library to create robust interfaces.
redux                   #Predictible container of javascript application status.
react-redux             #React connection with redux.
react-router            #Router for applications with react.
connected-react-router  #A Redux link for React Router v4
reselect Efficient      #redux state selector.
glamor                  #css in your javascript.
redux-thunk             #Thunk middleware for Redux.
prop-types              #Check the passed props to the react components.
immutability-helper     #Help library with the immutability of the reducer.
pg                      # Library to manage the postgreSQL database
socket.io               #Socket to interact in real time with the players.
########################################################

#Get start to coding
git clone ''

cd game-of-drones
npm install
npm run dev
########################################################

#Structure Folder
The methodology called "Structure By Features" is used for the organization of folders in projects to be scalable and maintainable.

├── src               # Main code.
│ ├── common          # Reusable code.
│ ├── components      # Reusable reagent components.
├── pages             # Each module of the application. It is commonly defined by the react / router address.
│ ├── game            # Main page. It is defined by the url for example "http://mysite.com/game".
│ ├── actions         # Reducx actions. List of the different actions that may occur in the application.
│ ├── index.js        # Entry point to expose all actions.
│ ├── api             # Actions that call some service api.
│ ├── index.js        # Entry point to expose all the actions api.
│ ├── components      # Components of the module.
│ ├── index.js        # Entry point to expose all the components.
│ ├── actionTypes.js  # Constants that identify the actions to be performed.
│ ├── constants.js    # General constants of the module.
│ ├── Container.js    # Intelligent component that interacts with redux.
│ ├── index.js        # Entry point to expose the content of the page (actions, reduce, Container, etc).
│ ├── reducer.js      # Reducer de redux. The state is altered here depending on the actions.
│ ├── selectors.js    # Getters for the state of redux.
│ ├── configureStore  # Configuration of the redux store.
│ ├── index.js        # Entry point for the application.
###########################################################