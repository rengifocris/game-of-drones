<h1>GAME OF DRONES</h1>
<p>This project is created with the aim of showing the knowledge obtained in frontend technologies like react.js, redux.js and backend with nodej.js and socket.io, as a part of the techical test for UruIt  it is a game called Game Of Drones based on the famous game rock, paper or scissors, which includes two game modes "player vs machine" and "player vs player" this game is responsive and multiplayer.</p>

<h2>Libraries used</h2>
<p>These are the libraries that were used.</p>

react       ---->            #JavaScript library to create robust interfaces.<br/>
redux        ---->            #Predictible container of javascript application status.<br/>
react-redux  ---->            #React connection with redux.<br/>
react-router   ---->          #Router for applications with react.<br/>
connected-react-router  ---->  #A Redux link for React Router v4 <br/>
reselect Efficient  ---->   #redux state selector. <br/>
glamor      ---->       #css in your javascript. <br/>
redux-thunk    ---->       #Thunk middleware for Redux. <br/>
prop-types       ---->        #Check the passed props to the react components. <br/>
immutability-helper   ---->   #Help library with the immutability of the reducer. <br/>
pg     ---->        # Library to manage the postgreSQL database <br/>
socket.io   ---->        #Socket to interact in real time with the players. <br/>

<h2>Put in your local</h2>

<pre>
  cd game-of-drones
  git clone 'https://github.com/rengifocris/game-of-drones.git'
  npm install
  npm run dev
</pre>

<h2>Structure Folder</h2>

<p>The methodology called "Structure By Features" is used for the organization of folders in projects to be scalable and maintainable.</p>

├── src               # Main code.
<br/>
│ ├──── common          # Reusable code.
<br/>
│ ├──── components      # Reusable reagent components.
<br/>
├── pages             # Each module of the application. It is commonly defined by the react / router address.
<br/>
│ ├──── game            # Main page. It is defined by the url for example "http://mysite.com/game".
<br/>
│ ├──── actions         # Reducx actions. List of the different actions that may occur in the application.
<br/>
│ ├──── index.js        # Entry point to expose all actions.
<br/>
│ ├──── api             # Actions that call some service api.
<br/>
│ ├──── index.js        # Entry point to expose all the actions api.
<br/>
│ ├──── components      # Components of the module.
<br/>
│ ├──── index.js        # Entry point to expose all the components.
<br/>
│ ├──── actionTypes.js  # Constants that identify the actions to be performed.
<br/>
│ ├──── constants.js    # General constants of the module.
<br/>
│ ├──── Container.js    # Intelligent component that interacts with redux.
<br/>
│ ├──── index.js        # Entry point to expose the content of the page (actions, reduce, Container, etc).
<br/>
│ ├──── reducer.js      # Reducer de redux. The state is altered here depending on the actions.
<br/>
│ ├──── selectors.js    # Getters for the state of redux.
<br/>
│ ├──── configureStore  # Configuration of the redux store.
<br/>
│ ├──── index.js        # Entry point for the application.
