filename: README.md
# Marvel Match
## Project #2: 

My project will be to create a memory game app using marvel characters. The main portion of the app will be trying to flip over matching pairs of character cards. If the user is interested in learning more about a character, they can simply click on the more info button at the top corner of the card, and it will slide out a side window with some information about that character, with links to find out even more. That same window can also pop out with game statistics like score, and elapsed time, etc. 

---
## Primary Files

- **README.md**
- **index.html**
- **styles.css**
- **script.js**
---

## Screenshots
- Wireframe
<p align="center">
<img src='./public/images/wireframe-page1.png' width=200 align='center'>
</p>
- Wireframe
<p align="center">
<img src='./public/images/wireframe-page2.png' width=200 align='center'>
</p>
- Wireframe
<p align="center">
<img src='./public/images/wireframe-page2b.png' width=200 align='center'>
</p>
- Wireframe
<p align="center">
<img src='./public/images/wireframe-page3.png' width=200 align='center'>
</p>
- Wireframe
<p align="center">
<img src='./public/images/wireframe-page4.png' width=200 align='center'>
</p>

<p align="center">
<img src='./public/images/Component-structure.jpg' width=200 align='center'>
</p>

> created using [https://www.canva.com/create-a-design](https://www.canva.com/create-a-design)
---

## Assets Used
<p align="center">
<img src='./images/Marvel-Wallpaper-HD-background-Wonderful.jpeg' width=200 align='center'>
</p>
<p align="center">
<img src='./images/tileback.jpg' width=200 align='center'>
</p>

## User Stories
1. As a user I should be able to click on a card and flip it over
1. As a user I want a way to know how the game is played
1. As a user I want to provide feedback to the app developer
1. As a user I want contact information 
1. As a user I should be able to see a match, or a non-match
1. As a user I should see both cards before they are flipped over for a non match
1. As a user I should not be able to click on cards already matched.

## Bronze Level:
- MVP
    - GameBoard
    - a visilbe aside that allows for API data to populate values
    - Use React Router.
    - Have at least 6 separate components, using a readable file structure.
    - Be built using Create React App.
    - Be styled with CSS.
    - Use Flexbox or CSS Grid for layouts.
    - Use functional components and class components appropriately.
    - Be deployed via Surge
    - Be properly indented.
    - Be written with semantic, camelCase JavaScript variable names.
    - Be written with kebab-case (dashes) CSS class names.
    - Contain no console.log() or commented out code in final version.
    - Use only React for DOM manipulation.
    - No pre-loaded create-react-app files or code.

## Silver Level:
    - User selected difficulty/number of cards
    - User able to click on card and see information about the comic/character
    - athsetically appealing secondary pages
    - setup Crypto-js to create MD5 hash for API calls. 

## Gold Level:
    - pre-populated list of characters/teams to populate card tiles
    - an info link icon on the face of each card that will trigger the aside info page to update the character/comic info.
    - a seperate aside for keeping score, timer, records, etc
    - css formatting so the aside only pops out when clicking on timer pull-tap for the score aside
    - css formatting so the aside pops out when the user clicks on the info button on the front of the card tile.
    - Main page won't resent when navigating to the different routings.
    - using something similar to iframe in js to display the marvel url for the character's stats, as they are not currently provided with the marvel api, at least not that I could find. 

---

### Fonts and formatting
MarvelRegular-Dj83.ttf
StanLee-Regular.otf

---

## Necessary Deliverables
Your submission must include all of the following:

---

## Bugs
currently no known bugs

---
## Technologies Used:
- **Command Line**: used for interacting with the computer, navigating the filesystem.
- **Source Control**: used for interaction, management and upload changes on code to Git repository
- **canva.com**: used for building the wireframe
- **Visual Studio Code**: used for coding with Html, CSS, JQuery and JavaScript
- **Google Chrome Web Browser**: used for launching the website
- **Google Chrome Developer Tools**: used to debug and solve problems in the code
- **React-app**: used to access the words.json file
- **develop.marvel.com API**: to reference for comicbook data
- **Postman**: To test and work with the api communication
- **CryptoJS**: the marvel api requires an md5 encrypted hash that is a combination of the timestamp, publickey, and privatekey. 



## Installation:
All you need is:
surge
react-app
vscode
google chrome
