# Moneta

## Introduction

Welceome to Moneta, a web application to incentivize responsible investing, as a part of a [General Assembly](http://www.ga.co) Labs collaboration between the [Product Management Immersive](https://generalassemb.ly/education/product-management-immersive), the [Web Development Immersive](https://generalassemb.ly/education/web-development-immersive), and [User Experience Design Immersive](https://generalassemb.ly/education/user-experience-design-immersive) programs.  

## Architecture

These sections roughly describe the technologies used in the development of this application for others who might continue working on it. While list is extensive, it is comprehensive enough to give a sense of how the app works.

## Languages/Frameworks

A MEAN stck app, this project is built primarily with Javascript, specifically Node.js with Express on the back-end, Angular on the back-end, and MongoDB to handle data. For design, HTML5/CSS3 will be used, as well as a Bootstrap.

<!-- ## Testing

The app can benefit from a lot of testing! Currently, Rspec and Capybara are used to test that only authorized users can access their profiles.  -->

## Security

(Oauth2 or Passport) is currently being used for authentication, with integration with Facebook, Google, and Twitter. The app also utilizes XXXXX to allow keys to be initialized locally and avoid having them in the codebase.

## APIs

* [Twilio](https://www.twilio.com) (for text notifications)
* Google Calendar integration?
* Possible visualizations with Chartkick or D3.js?

## Business Logic

**index.js:** Creates the server, connects the app to the relevant Mongo database, and serves static files.

**./public/scripts/app.js:** Handles application routing using Angular UI router.

**./models/user.js** and **./models/todo.js:** Define the user and todo model, respectively.
<!-- Include relevant API information here. -->

## User Stories

### Home page (index.html)

*As a VISITOR I can...*
* view the page/read app description
* create an account
* sign in to existing account

### Profile page (user/index.html):

*As a USER I can...*
* Update and Delete profile —> Link to Edit profile view
* View checklist
* Click items to display articles
* Check completed checklist items
* Logout

### Edit profile page (user/edit.html):

*As a USER I can...*
* Edit email, location, age, income, password , phone #
* Delete profile
* Logout

### User show (user/*/show.html):

*As a USER I can...*
* Click checklist item to dynamically display article/resources with links (that open in a separate tab target="_blank". Once clicked, display modal "Great-- you've done blah."
* Check off checklist item
* Hover over key terms to display definitions
* Logout

*As an ADMIN-USER I can...*
* CRUD (create-read-update-destroy) checklist items (item_name)
* CRUD (create-read-update-destroy) article title/content
* Logout

## Contributors

### Developers
* [Vikash Parekh](https://github.com/vikashiscool/)
* [Matt Seegan](https://github.com/mseegan)

### Product Managers
* Reed Eisenhauer
* David Rudolph
* Ryan Wallace

### User Experience and Design
* [Huining Liu](http://liuhuining.com/)



## Contact and contributions

Please contact us via [Twitter](https://twitter.com/MonetaInvesting) if you have any questions or want to contribute to this project!
