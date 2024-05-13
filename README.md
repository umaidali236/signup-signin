
**A signup and signin page for a travel agency using html ,css and javascript.**
 
<!DOCTYPE html> <!-- Defines the document type and version of HTML -->
<html lang="en"> <!-- Specifies the language of the document -->

<head>
    <meta charset="UTF-8"> <!-- Defines the character encoding for the document -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge" /> <!-- Sets the rendering mode for Internet Explorer -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> <!-- Sets the viewport for responsive design -->
    <title>Landing Page</title> <!-- Title of the webpage -->
    <link rel="icon" href="favicon.ico" type="image/x-icon"> <!-- Adds a favicon -->
    <link rel="stylesheet" href="styles.css" /> <!-- Links an external stylesheet -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
        integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A=="
        crossorigin="anonymous" referrerpolicy="no-referrer" /> <!-- Links Font Awesome for icons -->
    <link rel="preconnect" href="https://fonts.googleapis.com" /> <!-- Preconnects to Google Fonts -->
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin /> <!-- Preconnects to Google Fonts -->

</head>

<body>
    <div class="container"> <!-- Container for the entire content -->
        <div class="landing"> <!-- Main landing section -->

            <!-- Navigation section -->
            <nav class="navbar">
                <div class="navigation">
                    <a href="#" class="logo"> <!-- Logo with text -->
                        <span class="circle"></span> <!-- Circular shape -->
                        <span class="logo-text">Travel With Us!</span> <!-- Text -->
                    </a>
                    <a href="#" class="nav-item">Home</a> <!-- Navigation item -->
                    <a href="#" class="nav-item">Join</a> <!-- Navigation item -->
                </div>
            </nav>

            <!-- Banner section -->
            <div class="banner">
                <h1>Explore New Tours by <span>Travel With Us!</span></h1> <!-- Heading with span -->
            </div>

            <!-- Contact section -->
            <div class="contact">
                <h3>Start for free</h3> <!-- Heading -->
                <h1>Create New Account</h1> <!-- Heading -->
                <p><span>Already have an account?</span> <a href="#">Log In</a></p> <!-- Text with link -->
                <form class="contact-form"> <!-- Form for creating a new account -->
                    <div class="input-group"> <!-- Input group for first name -->
                        <input type="text" placeholder="First Name" /> <!-- Input field -->
                        <i class="fa-solid fa-user"></i> <!-- Icon -->
                    </div>
                    <!-- Similar input groups for last name, email, and password -->
                    <div class="input-group">
                        <input type="text" placeholder="Last Name" />
                        <i class="fa-solid fa-user"></i>
                    </div>
                    <div class="input-group">
                        <input type="email" placeholder="Email Address" />
                        <i class="fa-solid fa-envelope"></i>
                    </div>
                    <div class="input-group">
                        <input type="text" placeholder="Password" />
                        <i class="fa-solid fa-lock"></i>
                    </div>
                    <div class="btn-group"> <!-- Button group -->
                        <button class="contact-btn" type="button">Change Method</button> <!-- Button to change method -->
                        <button class="contact-btn" type="button">Create Account</button> <!-- Button to create account -->
                    </div>
                </form>
            </div>

            <div class="logo-bottom"></div> <!-- Placeholder for bottom logo -->
        </div>
    </div>

    <script src="script.js"></script> <!-- Links an external JavaScript file -->
</body>

</html>
