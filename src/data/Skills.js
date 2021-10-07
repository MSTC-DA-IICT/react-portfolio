/* 
to add a new skill, add a new array to the end of the "Skills" array and :-
-  put your skill as the first element (String)
-  put your percentage as the second element (String, followed by % symbol)
just like the data entered below.
*/
import html from '../image/html.png'
import css from '../image/css.png'
import firebase from '../image/firebase.png'
import js from '../image/js.png'
import mongodb from '../image/mongodb.png'
import react   from   '../image/react.png'
import express from '../image/express.png'


const Skills = [
    [
        "HTML" , "90%", html
    ],
    [
        "CSS" , "70%",css
    ],
    [
        "JavaScript" , "75%",js
    ],
    [
        "ReactJs" , "60%",react
    ],
    [
        "Express.Js" , "80%",express
    ],
    [
        "MongoDB" , "80%",mongodb
    ],
    [
        "Firebase" , "60%",firebase
    ],
]



export default Skills