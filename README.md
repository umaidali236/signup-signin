**A signup and signin page for a travel agency using html ,css and javascript.**

# HTML Landing Page Notes

## Document Declaration and Language Specification
- `<!DOCTYPE html>`: Defines the document type and version of HTML.
- `<html lang="en">`: Specifies the language of the document as English.

## Head Section
- `<head>`: Contains meta-information and external resources for the document.
  - `<meta charset="UTF-8">`: Defines the character encoding for the document as UTF-8.
  - `<meta http-equiv="X-UA-Compatible" content="IE=edge" />`: Sets the rendering mode for Internet Explorer.
  - `<meta name="viewport" content="width=device-width, initial-scale=1.0">`: Sets the viewport for responsive design.
  - `<title>Landing Page</title>`: Title of the webpage.
  - `<link rel="icon" href="favicon.ico" type="image/x-icon">`: Adds a favicon.
  - `<link rel="stylesheet" href="styles.css" />`: Links an external stylesheet.
  - `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
        integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />`: Links Font Awesome for icons.
  - `<link rel="preconnect" href="https://fonts.googleapis.com" />`: Preconnects to Google Fonts.
  - `<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />`: Preconnects to Google Fonts.

## Body Section
- `<body>`: Contains the visible content of the document.
  - `<div class="container">`: Container for the entire content.
    - `<div class="landing">`: Main landing section.
      - `<nav class="navbar">`: Navigation section.
        - `<div class="navigation">`: Navigation links.
          - `<a href="#" class="logo">`: Logo with text.
            - `<span class="circle"></span>`: Circular shape.
            - `<span class="logo-text">Travel With Us!</span>`: Text.
          - `<a href="#" class="nav-item">Home</a>`: Navigation item.
          - `<a href="#" class="nav-item">Join</a>`: Navigation item.
      - `<div class="banner">`: Banner section.
        - `<h1>Explore New Tours by <span>Travel With Us!</span></h1>`: Heading with span.
      - `<div class="contact">`: Contact section.
        - `<h3>Start for free</h3>`: Heading.
        - `<h1>Create New Account</h1>`: Heading.
        - `<p><span>Already have an account?</span> <a href="#">Log In</a></p>`: Text with link.
        - `<form class="contact-form">`: Form for creating a new account.
          - Input fields for first name, last name, email, and password.
          - Buttons to change method and create an account.
      - `<div class="logo-bottom"></div>`: Placeholder for bottom logo.

## Script
- `<script src="script.js"></script>`: Links an external JavaScript file.
