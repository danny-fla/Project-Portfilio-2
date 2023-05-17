# Picture This! - Portfolio Project 2 - Javascript

Picture This! is an online quiz for users to test how well they know iconic landmarks from around the world.

Follow this link to check out the [live site](https://danny-fla.github.io/Project-Portfilio-2/)

![Device responsive](assets/images/responsive-screen.png)

# Contents

- [Aims](<#Aims>)
- [User Experience](<#user-experience-ux>)
     - [Site Aims](<#site-aims>)
     - [User Stories](<#user-stories>)
     - [Design Wireframes](<#design-wireframes>)
     - [Design Choices](<#design-choices>)
        - [Colour Scheme](<#colour-scheme>)
        - [Typography](<#typography>)
- [Features](<#features>)
- [Future Features](<#future-features>)
- [Technologies Used](<#technologies-used>)
- [Testing](<#testing>)
    - [Code Validation](<#code-validation>)
    -  [JSHint](<#jshint>)
    - [Lighthouse Testing](<#lighthouse-testing>)
    - [Responsive Testing](<#responsive-testing>)
    - [Manual Testing](<#manual-testing>)
- [Unresolved Bugs](<unresolved-bugs>)
- [Deployment](<#deployment>)
- [Credits](<#credits>)
- [Acknowledgements](<#acknowledgements>)

# Objective

The purpose of this project is to provide the user with a quiz that is visually appealing, fully functional, respsonsive and engaging.


# User Experience (UX)

## Site Aims

- Present the user an engaging quiz to test their knowledge of iconic landmarks from around the world.
- Present the user a quiz that is both responsive and visually appealing on multiple devices.
- Provide the user with an option to save their scores and enter their own unique username.
- Present the user with a consistently interactive quiz that they can easily navigate.



| ID | ROLE | EXPECTATIONS | TARGET |
|-----------------|:-------------|:---------------:|:---------------:|
| 1 | USER | As I user I expect to be able to play Picture This! | To allow me to find out how well I know famous landmarks. |
| 2 | USER | As a user I expect to quickly understand the functionality of the quiz interface. | To allow me to enjoy my experience of playing Picture This!|
| 3 | USER | As a user I expect the site to be fully responsive. | To allow me to be able to play independant of location or device. |
| 4 | USER | As a user I expect the quiz to indicate whether I am correct or incorrect. | To allow me get instant feedback on my answers.  |
| 5 | USER | As a user I expect the quiz to track and save my score and username. | To allow me to improve my score and challenge my friends. |

## Design Wireframes

View wireframes here: 

[WireFrame Home Page](assets/images/wrieframe-home.png)

[WireFrame Quiz Page](assets/images/wireframe-quiz.png)

[WireFrame Responsive Home Page Tablet](assets/images/wireframe-responsive.png)

[WireFrame Responsive Home Page Mobile](assets/images/wireframe-responsive-2.png)

## Design Choices

### Colour Scheme

Picture This! uses a complementary colour harmony. The quiz container contains a lighter shade of blue than the darker blue used in the background image. This is to sublty draw the user's attention to the crux of the game without taking away the background imagery. Yellow on the other hand is directly opposite from blue and its purpose is to pronounce the game's buttons.

![Color palette ](assets/images/palette.png)

### Typography


The font used for Picture This! was Dongle. It was chosen for its rounded frame that projects a playful and rhythmic visual for the user.

# Features

### Home Page

 - The home page will be displayed to the user once they open the website.
 - The user will be shown the Picture This! title a navigation bar, a short description and three buttons.
 - The three buttons provide the user with the options to:
    - Begin the quiz.
    - View the game's leaderboard.
    - Open the quiz rules.

    ![Home Screen](assets/images/home-screen.png)

### Rules Page

- This page contains the rules on how to play the quiz and what is expected of the user.
- A "Home" button is included to take the user back to the "Home Page".

![Rules Page](assets/images/Rules.png)

### High Scores Page

- This page will display the user's name and their top five highest scores if already saved to the site's local storage.
- A "Home" button is included to take the user back to the "Home Page".

![High Scores Page](assets/images/high-scores.png)

### Quiz Page

- The page will display to the user: 
    - Picture This! heading.
    - An image of a famous landmark.
    - Four possible option buttons.
    - Next and restart buttons.
    - A navigation bar that includes a home icon, quiz timer, question counter and a volume icon.


- The home icon will redirect the user back to the "Home Screen".
- The timer will start once the quiz begins. If timer gets to zero before an option is selected it will disable all option buttons.
- The question counter will increment by one as the user progresses through the quiz.
- The volume will either play or mute the quiz music depending on the user's preference.
- The option buttons will turn green if selected correctly and red if selected incorrectly. They will also disable once an option has been selected to prevent multiple options being chosen.
- The next button will progress the user on to the next stage of the quiz.
- The restart button will reset the quiz and revert the score, timer and counter back to its original state.

![Quiz Page](assets/images/quiz-page.png)

### Quiz Completion Page

- The user will be directed to this section once they have navigated their way through ten questions.
- Here the user will be given their final score and an input box.
- They can chose to enter their name into the input to be viewed on the leaderboard.

![Game Over Page](assets/images/quiz-completion.png)

# Future Features

## Quiz Difficulty Level

- This could be achieved by including an extra page before the user begins the quiz, where they would be presented with the opportunity to choose the level of difficluty e.g. easy, medium, hard.
- A way to increase the quiz difficulty is to adjust the length of time the user has to make a decision for each question.

# Technologies Used
- HTML5
- CSS3
- Javascript
- Balsamiq
- Google Chrome DevTools
- GitHub
- GitPod

# Testing

## Code Validation

Picutre This! was validated using W3C HTML validator and W3C CSS validator.

![CSS Validation](assets/images/css-validator.png)

![HTML Validation](assets/images/html-validator.png)

## JSHint

Javascript was validated using JSHint. JSHint declared there was 52 warnings, which I discuss in more detail in Unresolved Bugs.

## Lighthouse Testing

Chrome DevTools' Lightjouse was used to test the site's performance, accessibility, best practices and SEO.

![Lighthouse Test](assets/images/lighthouse.png)

## Responsive Testing

Picture This was tested across different devices and also by using The Responsive Design Checker website.

## Manual Testing


| Action        | Expected           | Actual  |
| ------------- |:-------------:| -----:|
| Clicked on the "Let's Go!" button.      | The quiz starts and the user is taken to the Quiz Page. | The quiz started successfully, and the Quiz Page loaded with the first question displayed |
|Clicked on the "High Scores" button.   | The user is taken to the High Scores Page.      |  The High Scores Page loaded, displaying the user's name and their top five highest scores. |
| Clicked on the "Rules" button. | The user is taken to the Rules Page.      |  The Rules Page loaded, displaying the rules and instructions for playing the quiz. |
| The quiz generated a question at the beginning of the quiz. |  An image of a famous landmark and four possible options are displayed      |  The expected elements were displayed correctly, and the user could select an option. |
| Selected an option | The selected option turns green if correct or red if incorrect. |  The selected option changed color correctly based on its correctness. |
|The timer started its countdown at the beginning of the quiz. | The timer counts down from the set time for each question. |  The timer started correctly and counted down for each question.  |
| The timer reached zero before selecting an option. | The timer stops, and all option buttons are disabled.   |  The timer stopped correctly, and the option buttons became disabled. |
| The question counter incremented by one for each question asked. | The question counter increases with each new question.  |  The question counter incremented correctly for each question. |
| Completed the quiz by answering all the questions. |The Quiz Completion Page is displayed. |  The Quiz Completion Page loaded, showing the user's final score and an input box. |
|Entered a name in the input box.| The "Save" button becomes enabled. |The "Save" button activated correctly after entering a valid input.|
| Accessed the High Scores Page. |The user's name and top five scores are displayed.| The High Scores Page loaded, showing the user's name and their top five highest scores.|
| Clicked on the home button. |The user is redirected to the Home Page.|Clicking on the home button successfully returned the user to the Home Page.|
| Accessed the Rules Page. |The rules of the quiz are displayed.|The Rules Page loaded correctly, displaying the rules and instructions for playing the quiz.|

# Unresolved Bugs

- As previously mentioned when my Javascript was passed through the JSHint Validator it declared there was 52 warning. These warnings are in relation to keywords and their availability in different JavaScript environments. However upon discussion with members of the Slack community and my mentor I was assured these warning can be ignored. In the intrest of full transparency I have included a screenshot.

[JSHint Validator](assets/images/jshint.png)

# Deployment 

Picture This! was deployed to GitHub pages The steps to deploy are: 
    
- In the GitHub repository select Settings.
- Select the source tab, the select the branch titled "Main" and in the dropdown menu select the folder titled "Root".
- Select "Save".
- It can take up to 5 minutes for the website to deploy.
- Once deployed the page will automatically display the link to the site.

## To Fork a GitHub repository, follow these steps:

- Log in to your GitHub account and navigate to the repository you want to copy.
- In the top-right corner of the repository page, you'll find a Fork button next to the repository name.
- Click the Fork button to create a copy of the original repository in your GitHub account.

## To clone a GitHub repository, follow these steps.

- On the GitHub repository page, locate the "Code" button located below the repository name and to the right.
- Click on the "Code" button to reveal the options. In the "Clone with HTTPS" section, you'll find a clipboard icon.
- Click on the clipboard icon to copy the repository's URL to your clipboard.

Now, open your preferred Integrated Development Environment (IDE) or Git Bash terminal and perform the following steps:

- Choose the directory where you want to create the local copy of the repository.
- Open your Git Bash terminal in that directory.
Change the current working directory to the chosen directory using the appropriate command for your operating system.
- Type git clone in the terminal, and then paste the copied URL from GitHub.
- Press Enter to execute the command.

# Credits

- Background image was obtained from [fact.net](https://facts.net/)
- Button styling was inspired from [fdossena.com](https://fdossena.com/?p=html5cool/buttons/i.frag)
- Images used for quiz questions were obtained from various Google images soucres.
- Images were compressed using [tinyPNG](https://tinypng.com/)
- Timer was inspired from [stackoverflow.com](https://stackoverflow.com/questions/4435776/      simple-clock-that-counts-down-from-30-seconds-and-executes-a-function-afterward)
- Idea to store and retrive information from browser cookies came from my friend Conor.
- Timer and Countdown functions were inspired from Code Instuite's Slack community.

# Acknowledgements

I would like to thank my mentor, Code Instuite's Tutor Support, members of the Slack community for all their help and support throughout the creation of the site.
