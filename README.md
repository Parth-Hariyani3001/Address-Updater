#Description :
The Address Updater Project aims to provide a solution for efficiently updating addresses within a system.

#Software used :
ReactJS, Tailwind CSS

#UI Elements :
UI Elements are referred from www.flowbite.com

#State Management :
The State Management is Carried out using useReducer for global state management
1.address -> stores the address of the user
2.status -> Used to define that current state of UI

#Functionalities :

<li>1.Users can add address</li>
<li>2.Users can edit them and the changes are reflected in real time</li>
<li>3.Users can delete unnecessary addresses</li>

#Strengths :
1.UI is pretty straight forward to understand
2.States are updated in real time with no delay

#Weaknesses :
1.There is no mechanism for storing the addresses
2.System can't handle conflicts during the edit  
3.System can't confirm if the address we are trying to add already exists or not
4.Various components could've been reusable like Form,Buttons,etc

#Improvements :
1.More input Validation could have been done using libraries like Formik
2.Feedback based on the actions of user using a small Modal that stays on screen for 5 seconds using setTimeout
3.Can include a server for managing the conflicts during editing
4.Context API could've been used to avoid prop drilling
5.Before adding address system coudld check if the address already exist
6.Add a feature that could navigate the address on the map
7.Add Backend for managing the data properly and validate the data using zod or other libraries
