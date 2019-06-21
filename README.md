# Allo
https://allo-web.herokuapp.com/

Allo is an instant translation messaging app. I built Allo with the idea of helping people hurdle over the language barrier. It translates using IBMs Watson Language Translator API. Each user can connect with any other user through conversations. Users recieve messages back to them in the language they choose.

## Technology and Installation

This app was made using MERN stack so very simple to get going if you know node.js, have NPM and a local mongoDb

### Installing

simply fork this Front end... this side of the app makes calls to my Allo back end which you can find here https://github.com/gumballg/Allo-Backend . Once you have both repos cloned you can connect them easily with mongoDb, Nodemon and React

### Dependencies

```
React, 
Socket.io, 
Express, 
IBM-Watson's language translator API
bcryptjs,
cors,
dotenv,
express-session,
mongoose
```

## User Stories

### MVP - API IBM Watson LT

User can register an account<br/>
User can log in with the created account<br/>
User can log out <br/>
User can search for other users to chat with by a username<br/>
User will start a conversation with that found user<br/>
User messages in their native language<br/>
User receives messages in their native language a/o senders language<br/>
User can view other users profile in the conversation<br/>
User can see a list of conversations they are currently involved in<br/>
User can edit their own profile info and settings<br/>
User can delete their own profile with all associated conversations<br/>
User can search through conversations to find a specific conversation<br/>
User can delete conversations<br/>
User can delete messages<br/>


### NTH - API IBM Watson STT

Conversations update in real time<br/>
```
This is where I'm currently at
```
User can upload Picture for their profile<br/>
Users can share media with each other<br/>
User can Speak instead of text, the audio will be converted into text<br/>
If the user uses audio, the audio can be received by the other user<br/>
User can add multiple people to the conversation<br/>


### Stretch - API IBM Watson TTS

User can see when other users are online<br/>
User can see if messages were read by another user<br/>
User can see when another user is typing<br/>
User can create an account a/o login in with different accounts<br/>
Users can send emojis to each other<br/>
User can opt-in for better accessibility giving them access for all received messages to be converted into speech<br/>
