# Sci-Fi Text Adventure

 - Sci-Fi Text Adventure is a multiple choice text based game that pays tribute to the classic choose your own adventure books such as "Space Patrol", "The Deadly Shadow" and "The Cave of Time", as well as some slight reference to older more complex text adventure games such as "Zork".  

 - The user will either be of the age group familiar with these books and may find some nostalgia in the reference present or completely new to the convention and find some novelty within it. They should expect to find a story with multiple choices for both direction and action, as per the orignal inspiration. Certain choices will have consequences at the end of the game.

![Responsive Mockup](https://github.com/tadhgnolan/Sci-Fi-Text-Adventure/blob/main/assets/documentation/mockups_and_captures/mockup.png)

## Features 

### Existing Features

- __Favicon__

  - Using a free atribution image from [Pixabay](https://pixabay.com) and processing it through [favicon.io](https://favicon.io/favicon-converter/) I created an appropiate favicon for the site/game.
  
![Favicon](https://github.com/tadhgnolan/Sci-Fi-Text-Adventure/blob/main/assets/images/favicon/favicon.ico)

- __Navigation Bar__

  - Featured on all three pages, the responsive navigation bar includes links to the Home page and game page and is identical in each page to allow for easy navigation.
  - This section will allow the user to easily navigate from page to page across all devices without having to revert back to the previous page via the ‘back’ button. 

![Nav Bar](https://github.com/tadhgnolan/Sci-Fi-Text-Adventure/blob/main/assets/documentation/website_structure/navbar.png)

- __The landing page image__
  
  - The landing includes a sci-fi related image and introduces the user to the setting of the game with a text overlay.
  - An eye catching animation draws the users attention to the site.
  
![Landing Page](https://github.com/tadhgnolan/Sci-Fi-Text-Adventure/blob/main/assets/documentation/website_structure/landing_page.png)

- __About Section__

  - A brief description of the game and why it was made as well as creator and media credits. The user is then invited to click on the play button and try it for themselves.

![About](https://github.com/tadhgnolan/Sci-Fi-Text-Adventure/blob/main/assets/documentation/website_structure/about_section.png)



- __The Footer__ 

  - The footer section includes links to the relevant social media sites for Sci-Fi Text Adventure. The links will open to a new tab to allow easy navigation for the user. 
  - The footer is valuable to the user as it encourages them to keep connected via social media.

![Footer](https://github.com/tadhgnolan/Sci-Fi-Text-Adventure/blob/main/assets/documentation/website_structure/footer.png)

- __Try-Catch__
  
  - Added in order order to catch a possible exception when the startGame function calls the first page ID. I added this feature to future proof in relation to external dependencies such as a JSON file being used to list page IDs. Page will redirect the user to an image with an apology and ask them to press a button to retry. [Successful restart after being redirected by Try-Catch](https://github.com/tadhgnolan/Sci-Fi-Text-Adventure/blob/main/assets/documentation/testing/trycatch_restart.png) 

### Features Left to Implement

- Inventory.
- Additional story branches and decisions.

## Testing 

### Manual and debugger testing

- __Try-Catch__
  - Tested using debugger in Chrome Dev Tools (breakpoint and console)(https://github.com/tadhgnolan/Sci-Fi-Text-Adventure/blob/main/assets/documentation/testing/trycatch_1.png).
  - Called showTextnode() with the following values:
  													 [(0)](https://github.com/tadhgnolan/Sci-Fi-Text-Adventure/blob/main/assets/documentation/testing/trycatch_0.png), [(null)](https://github.com/tadhgnolan/Sci-Fi-Text-Adventure/blob/main/assets/documentation/testing/trycatch_null.png), [(True)](https://github.com/tadhgnolan/Sci-Fi-Text-Adventure/blob/main/assets/documentation/testing/trycatch_boolean_1.png), [(False)](https://github.com/tadhgnolan/Sci-Fi-Text-Adventure/blob/main/assets/documentation/testing/trycatch_boolean_0.png), [("a")](https://github.com/tadhgnolan/Sci-Fi-Text-Adventure/blob/main/assets/documentation/testing/trycatch_string.png), [(Large Number)](https://github.com/tadhgnolan/Sci-Fi-Text-Adventure/blob/main/assets/documentation/testing/trycatch_large_number.png).

### Validator Testing 

- HTML
  - No errors apart from a purposely empty source attribute were found when passing through the official [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Ftadhgnolan.github.io%2FSci-Fi-Text-Adventure%2Ftext-adventure.html)  
  
- CSS
  - No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Ftadhgnolan.github.io%2FSci-Fi-Text-Adventure%2Ftext-adventure.html&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)
- JS
  - No errors were found when passing through the official [JSHint validator]()	

### Unfixed Bugs

 - Major overflow issues on several different mobile devices, despite testing well on mockups in Chrome Dev Tools	

 - unable to get media query functioning properly for landscape mode. Tried several different solutions as well as trying to imlpliment a grid with the game elements, but was unable to succeed.

## Deployment

This section should describe the process you went through to deploy the project to a hosting platform (e.g. GitHub) 

- The site was deployed to GitHub pages. The steps to deploy are as follows: 
  - In the GitHub repository, navigate to the Settings tab 
  - From the source section drop-down menu, select the Master Branch
  - Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment. 
  
- To clone to a local machine follow these steps:
  
  - On GitHub, navigate to the main page of the repository.
  - Above the list of files, click download Code.
  - To clone the repository using HTTPS, under "Clone with HTTPS", click the clipboard icon.
  - Open Git Bash.
  - Change the current working directory to the location where you want the cloned directory.
  - Type git clone, and then paste the URL you copied earlier.
    `$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY`
  - Press Enter to create your local clone. 
  	`$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY`
    ``> Cloning into `Spoon-Knife`...``
    `> remote: Counting objects: 10, done.`
    `> remote: Compressing objects: 100% (8/8), done.`
    `> remove: Total 10 (delta 1), reused 10 (delta 1)`
    `> Unpacking objects: 100% (10/10), done.`
   
  
 - The live link can be found here - https://tadhgnolan.github.io/Sci-Fi-Text-Adventure/ 

## Credits 

 - A very simple game written and coded by Tadhg Nolan.
 
### Content 

- https://github.com/Code-Institute-Solutions/love-running-2.0-sourcecode/tree/main/08-responsive-elements/04-responsive-meeting-times
- Instructions on how to implement Game Logic  [Specific YouTube Tutorial which I used & modified](https://youtu.be/R1S_NhKkvGA)
- The icons in the footer were taken from [Font Awesome](https://fontawesome.com/)

### Media

- Free / no attribution images were taken from www.pexels.com
- Creative Commons free use images with attribution are listed here:

### Special Thanks

  - To my Brother Cormac Nolan who helped me immensely when my original tutor was no longer available
  - Tim Nelson, whose final review gave me some much needed last minute redirection & further insight. 

   Thank you both very, very much! 
