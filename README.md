# Qubika
Challenge 04

## Introduction
The purpose of this repository is to fulfill the objective of challenge 04 by creating a test to check that 'Get in touch' popup is working properly and that the form error border works as expected.

## Nightwatch Js
To achieve this objective, the Nightwatch Js automation framework was used.
Nightwatch Js is easy to use, as it provides a simple and intuitive syntax that allows even beginners to write tests quickly. It supports both CSS and XPath selectors, providing flexibility in element identification. Nightwatch.js is built on Node.js, which allows it to leverage the power of JavaScript and its vast ecosystem of libraries and frameworks. It offers excellent browser compatibility, supporting popular browsers like Chrome, Firefox, and Safari. Nightwatch.js also provides powerful built-in assertions and supports custom assertions, enabling robust test validations.

## Steps to run the test
1. First you gonna need to clone the repository:

> git clone https://github.com/rodrisibrins/challenge-04.git

2. Then, you'll need to install the dependencies:

> npm install

3. After that, you will be ready to run the test:

>npm run test

## Solution
Setting up the framework was fast, easy, and intuitive. Despite being new to it, I was able to get started quickly. The next step involved examining the folder structure of the framework. Nightwatch offers many options, but due to time constraints, I decided to focus on an essential feature: page objects. Following the documentation, I constructed the page object with the necessary selectors and created methods to facilitate code reuse.

When working on the test file (getInTouchForm.js), the main challenge I encountered was switching between XPath and CSS selectors. This required delving deeper into the documentation and understanding the need to add the locateStrategy attribute to the XPath selectors in my page object. Once I grasped this concept, I completed the flow without major issues.

## Suggestion
I believe that the input validations should be improved, as mentioned in the test cases and the exploratory testing report. For instance, the Name input allows any type of character, as well as the Company input. The Message textarea could benefit from having a minimum and maximum character requirement. Another improvement could be to add an error message below each input. While testing with Nightwatch and inspecting the code, it appears that there is an inline attribute, but the message is not being displayed to the user.

## QA
**Rodrigo Gonzalez Sibrins**

**Email:** rodrigosib2017@gmail.com