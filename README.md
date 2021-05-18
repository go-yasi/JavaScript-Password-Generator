# Coolest Password Generator Ever
## Description
The goal of this assignment was to use JavaScript to create an application to generate random passwords based on a specific set of criteria. 

- What was your motivation?
- Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
- What problem does it solve?
- What did you learn?

## Table of Contents (Optional)
If your README is long, add a table of contents to make it easy for users to find what they need.
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation
Below are the steps I took when developing this application: 
1. Review the provided HTML file to identify the elements on the page and how they will affect (or be affected by) the code I will be writing. 
2. Review the starter code in the script.js file to indetify what has already been written and what still needs to be added. 
3. Think about the end goal of this assignment and come up with a list of what needs to be created: 
<!-- - When the user clicks on the generate password button, they are prompted for password criteria -->
- The user needs to select from four groups of characters: lowercase, uppercase, numeric, and/or special characters (user must select at least one type). I need to create a series of prompts for the user to choose which type of characters they want to include (and ensure it meets the parameters). I need to create arrays for each type of character groups.
- Users need to pick a length for their password that is between 8 and 128 characters. I need to create a prompt for the user to input their desired password length (and ensure it meets the parameters).
- After each prompt is answered, the user's input should be recorded and validated. I need to create 
- Users need to be notified if they input does not meet the parameters. I need to create an alert that lets the user know they did not meet the parameters and ensure that the function does not run.
- When the user answers all prompts, a random password needs to be generated that matches the user's selected criteria (password characters and length). 
- The generated password needs to be written to the page or displayed in an alert. 
4. Next, I began defining the values of each type of characters users can choose from by creating an array of strings.

What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.

## Usage
Provide instructions and examples for use. Include screenshots as needed.
To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:
    ```md
    ![alt text](assets/images/screenshot.png)
    ```

## Credits
List your collaborators, if any, with links to their GitHub profiles.
If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.
If you followed tutorials, include links to those here as well.

## License
The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).
---
🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.

## Badges
![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)
Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.

## Features
If your project has a lot of features, list them here.

## How to Contribute
If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.

## Tests
Go the extra mile and write tests for your application. Then provide examples on how to run them here.