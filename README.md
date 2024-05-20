 **A signup and signin page for a travel agency using html ,css and javascript.**

# Elements used in index.html
## Head Section
- `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"...>`: Links Font Awesome stylesheet from CDN.
- `<link rel="preconnect" href="https://fonts.googleapis.com" />`: Preconnects to Google Fonts.
- `<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />`: Preconnects to Google Fonts.

## Body Section
- `<div class="container">`: Main container.
- `<div class="landing">`: Landing section.
- `<nav class="navbar">`: Navigation bar.
- `<div class="navigation">`: Navigation items container.
- `<a href="#" class="logo">`: Logo link.
- `<span class="circle"></span>`: Circle element in the logo.
- `<span class="logo-text">Travel With Us!</span>`: Text in the logo.
- `<a href="#" class="nav-item">Home</a>`: Navigation item.
- `<a href="#" class="nav-item">Join</a>`: Navigation item.
- `<div class="banner">`: Banner section.
- `<h1>Explore New Tours by <span>Travel With Us!</span></h1>`: Banner heading with span for emphasis.
- `<div class="contact">`: Contact section.
- `<p><span>Already have an account?</span> <a href="#">Log In</a></p>`: Paragraph with link.
- `<form class="contact-form">`: Contact form.
- `<div class="input-group">`: Input field group.
- `<input type="text" placeholder="First Name" />`: Input field for first name.
- `<i class="fa-solid fa-user"></i>`: Icon for user.
- `<div class="input-group">`: Input field group.
- `<input type="text" placeholder="Last Name" />`: Input field for last name.
- `<i class="fa-solid fa-user"></i>`: Icon for user.
- `<div class="input-group">`: Input field group.
- `<input type="email" placeholder="Email Address" />`: Input field for email.
- `<i class="fa-solid fa-envelope"></i>`: Icon for email.
- `<div class="input-group">`: Input field group.
- `<input type="text" placeholder="Password" />`: Input field for password.
- `<i class="fa-solid fa-lock"></i>`: Icon for password.
- `<div class="btn-group">`: Button group.
- `<button class="contact-btn" type="button">Change Method</button>`: Button for changing method.
- `<button class="contact-btn" type="button">Create Account</button>`: Button for creating account.
- `<div class="logo-bottom"></div>`: Empty div.
- `<script src="script.js"></script>`: Links to external JavaScript file.
  
# Styles used in styles.css

## Universal Selector
- `*`: Applies to all elements.
    - `margin`, `padding`, `box-sizing`, `text-decoration`, `outline`: Resetting default styles.
    - `font-family: "Cabin", sans-serif;`: Sets the font family for all elements.

## HTML Element Specific Styles
- `html`: Styles specific to the `<html>` element.
    - `font-size: 62.5%;`: Sets the base font size to 10px (62.5% of 16px).

## Class Selector Styles
- `.container`: Styles for the container class.
    - `width`, `height`, `background-color`, `display`, `justify-content`, `align-items`: Layout properties.

- `.landing`: Styles for the landing class.
    - `width`, `height`, `background`, `border-radius`, `box-shadow`, `position`: Layout and appearance properties.

- `.navbar`: Styles for the navbar class.
    - `position`, `top`, `left`, `width`, `height`: Positioning and size properties.

- `.navigation`: Styles for the navigation class.
    - `width`, `height`, `display`, `justify-content`, `align-items`, `padding`: Layout properties.

- `.logo`: Styles for the logo class.
    - `display`, `align-items`: Display and alignment properties.

- `.circle`: Styles for the circle class.
    - `width`, `height`, `background-color`, `border-radius`, `margin-right`: Appearance and spacing properties.

- `.logo-text`: Styles for the logo-text class.
    - `font-size`, `font-weight`, `letter-spacing`, `color`: Typography properties.

- `.nav-item`: Styles for the nav-item class.
    - `font-size`, `font-weight`, `color`, `transition`: Typography and transition properties.

- `.banner`: Styles for the banner class.
    - `position`, `top`, `left`, `transition`: Positioning and transition properties.

- `.contact`: Styles for the contact class.
    - `position`, `top`, `left`, `opacity`, `visibility`, `transition`: Positioning and transition properties.

- `.input-group`: Styles for the input-group class.
    - `width`, `height`, `margin`, `position`: Layout and positioning properties.

- `.input-group input`: Styles for the input inside the input-group class.
    - `width`, `height`, `background-color`, `border`, `border-radius`, `padding`, `color`, `font-size`: Input field properties.

- `.input-group i`: Styles for the icon inside the input-group class.
    - `position`, `right`, `top`, `transform`, `font-size`, `color`: Positioning and appearance properties.

- `.btn-group`: Styles for the btn-group class.
    - `width`, `height`, `display`, `justify-content`, `margin-top`: Layout properties.

- `.contact-btn`: Styles for the contact-btn class.
    - `width`, `height`, `border-radius`, `color`, `border`, `font-size`, `font-weight`, `cursor`, `background-color`: Button properties.

- `.logo-bottom`: Styles for the logo-bottom class.
    - `position`, `bottom`, `right`, `width`, `height`, `border-radius`, `background-color`, `box-shadow`: Positioning and appearance properties.

## Pseudo-class Selector Styles
- `.nav-item:hover`: Styles applied when hovering over a nav-item.
    - `color`: Change color on hover.

- `.hide .input-group:nth-child(1)`, `.hide .input-group:nth-child(2)`: Styles for hiding input-groups when a certain condition is met.

- `.change .banner`, `.change .contact`: Styles for transitioning elements when a certain condition is met.
    - `opacity`, `visibility`, `transition`: Transition properties.

# JavaScript document

## Variables
- `container`: Stores the reference to the element with class "container".
- `joinBtn`: Stores the reference to the third anchor element inside ".navigation".
- `homeBtn`: Stores the reference to the second anchor element inside ".navigation".
- `loginBtn`: Stores the reference to the anchor element inside ".contact p".
- `loginMsg`: Stores the reference to the span element inside ".contact p".
- `loginHeader`: Stores the reference to the first h1 element inside ".contact".
- `contactBtn`: Stores the reference to the second button with class "contact-btn".
- `contactForm`: Stores the reference to the form element with class "contact-form".

## Event Listeners
- `joinBtn`: Listens for a click event on the "Join" button and adds the class "change" to the container element.
- `homeBtn`: Listens for a click event on the "Home" button and removes the class "change" from the container element.
- `loginBtn`: Listens for a click event on the "Log In" button and toggles the class "hide" on the container element.
    - If the class is added, it updates text content and messages accordingly for login and signup scenarios.
    - If the class is removed, it reverts the text content and messages to their original state.
      

