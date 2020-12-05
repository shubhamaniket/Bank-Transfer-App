# Spark Foundation Task - Mobile App Development

## <b>Topic</b> - Basic Banking App

<br>

## `About the app`

This application was made according to the task given in the <b>GRIP Internship of The Sparks Foundation</b>.
This application is basic banking app which facilitates the transfer of money from sender to recipient.
<br>
The App has the following screens : -
- <b>HomeScreen</b> - This is the landing screen of the app and it contains all the necessary routes buttons and tabs to take you to the other screens.
- <b>ViewUsers</b> - This screen displays all the users as a list which contains their name, email & current account balance.
- <b>TransferScreen</b> - This screen facilitates the transfer of money from sender to recipient. It has two pickers from which the user can select from which account to send and to whom & can also enter the amount to be transferred.
- <b>TransactionsScreen</b> - This screen contains all the history of transactions made by the user ever.


### <b>Backend Routes</b>

- <b>/users/</b> - Return all the users.
- <b>/users/add/</b> - Route to add new user.
- <b>/users/:id</b> - Route to return specific user data based on unique id.
- <b>/users/update/:id</b> - Route to update the user details.
- <b>/transfers/</b> - Route to return list of transfers
- <b>/transfers/add/</b> - Route to add a new transfers.
## `Frontend`

Tech Stack Used

- Expo React Native
- React Navigation 5

## `Backend`

Tech Stack Used

- MongoDB
- ExpressJS
- NodeJS

## `How to run the app ?`

```
git clone <link-of-repo>
cd <into-the-repository-cloned>
```
<b>For Backend :- </b>

```
cd backend
npm install
node server.js
```

<b>For Frontend (App) :- </b>

```
cd bank-app
npm install
expo start
```

<u><b>Note</u>: -</b> For running the app one has to download the Expo Client App from Google Play Store or Apple Store. After the 'expo start' command is run it will open a localhost window with q QR Code one has to scan the code from the Expo App to run the application.




