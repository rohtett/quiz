# WoW Class Quiz
This is a simple quiz which will allocate you a given class based off your answers to a set of questions. 
## User Experience
### User Stories
- As a an experienced World of Warcraft player, I would take the test out of boredom to see if the result I got would match that which I already know and enjoy in-game.
- As a casual World of Warcraft player, I would take the test to see if there are any potential new classes which I may want to try to see if I enjoy any of the potential ones I could be playing, as well as seeing if any of my compatabilities would match what I do already play. 
- As a new or beginner player, I may decide to take this test prior to playing the game to help me decide which class I may enjoy playing when I decide to make a new character. 

### Question Planning
- question one 
-- [Playstyle](question-planning/Q1-Playstyle.drawio.png)
- question two
-- [Range](question-planning/Q2-Range.drawio.png)
- question three
-- [Role](question-planning/Q3-Role.drawio.png)
- question four
-- [Aesthetic](question-planning/Q4-Aesthetic.drawio.png)

## Features
- [x] Completed features will be labelled as a selected checkbox.
- [] Features that have yet to be implemented will be labelled as an unselected checkbox.

### All Pages
- [x] Fully functional "Back" button which successfully takes you to the previous page without interrupting your progress. 
- [x] Fully functional "Next" button to navigate you through the quiz.
- [x] A reset button which will take you back to the beginning of the quiz and restart your progress.
- [] A modal for when pressing the "Reset" button so that the user would not reset their progress unintentionally. 
- [] A method of accessing the instructional information from any page in the case they forget the purpose of any navigation buttons. 
### index.html
- [x] An instructional page which can inform you as to what all of the buttons on the page will do. 
- [x] An automatic redirect which will take the user to the results page as long as they have already completed the test without resetting their progress. 
### results.html 
- [x] A result display which includes a class banner relevant to the class they got assigned. Each class has the same banner regardless of which Specialisation they were assigned.
- [x] The top five results given to the user based off the quiz answers that will show a progress bar relating to their compatability. Each result will navigate the user to the relevant Class and Specialisation combination page where they would be able to see their result. 
- [] Information about the assigned class, which displays their other roles and other information relevant to the question topics.
## Technologies Used
- [HTML5](https://developer.mozilla.org/en-US/docs/Glossary/HTML5)
-- The structure of the website was developed with HTML5
- [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS)
-- CSS3 was used to style the website
- [NotePad++](https://notepad-plus-plus.org/downloads/)
-- My website was coded using Notepad++ as the development program
- [drawio](https://drawio-app.com/)
-- I used this website to help me create the question-planning png images. I could have used paint but I decided to experiment with a bunch of different websites until I settled with this.
- [gitforwindows](https://gitforwindows.org/)
-- This program allowed me to easily commit and push my work to GitHub my repository
- [GitHub](https://github.com/)
-- GitHub not only is hosted my website, but also was used to track all of my commits and pushes into a remote repository. 
## Testing 

### User Stories
- I had a range of friends with varying World of Warcraft abilities take the test and share their results, as well as their thoughts on the results with me. The majority of them were surprised at the accuracy and wishes to persue some of the other compabatability results listed within the top five results.

### Responsive Testing
- I tested through the results for each answer to ensure that I did infact get a different result each time.
- I tested the "Back" and "Reset" buttons at every stage of the test to see if they worked as intended on every page.
- I tested if all the links to each result worked as intended so that I could cycle through all the different results. 

### HTML and CSS Validation
- I used the W3C HTML Validator tool to validate my HTML code.
- I used the W3C CSS Validator tool to validate my CSS code.
### Bugs and Problems Found
- None found as of yet.

## Deployment
I used GitHub Pages to deploy my website. It was produced as follows:
1. Downloaded gitforwindows to enable the git terminal for Notepad++
2. Intilise git `git init`
3. `git add .` the files to commit them`git commit -m "first commit"` 
4. `git push` would then update the code on the website to the newest version. 
5. Click settings on the GitHub page and navigate to Pages. 
6. Select the master brance /root directory and press save to deploy the website to GitHub Pages. 

### Repository Link
[link](https://rohtett.github.io/quiz/)
### Running Code Locally
How to run the code locally:
1. Follow the link to my [GitHub repository](https://github.com/rohtett/quiz/)
2. Click "Code" and select "Download ZIP"
3. Once downloaded, extrade the ZIP file and launch `index.html` to open the landing page.

## Credits

### Acknowledgements
- Inspiration for the layout gathered from various example quiz websites that I had taken recently.
- World of Warcraft banner icons were taken from the official WoW website on their [classes](https://worldofwarcraft.com/en-gb/game/classes) page.
- Thanks to my mentor, Sunny Hebbar, for the feedback on my project and helping with the creation of my README.md page, by providing information on what to include. 