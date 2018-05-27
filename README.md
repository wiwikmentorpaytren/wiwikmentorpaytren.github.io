
## Simple Landing Page 
A simple and clean mobile friendly landing page with responsive web design by using Bootstrap and JQuery along with a bit of sweetener by using Font Awesome and Simple Line Icons. This page is built on top of the awesome project framework created by [Start Bootstrap](https://github.com/BlackrockDigital/startbootstrap-landing-page), which gives a nice web development infrastructure such as automatic transpiling of SCSS during development with gulp. The basic page provided by Bootstrap has been enhance to add sticky navbar, carousel etc.

## Snapshot 
![Landing Page Snapshot](img/snapshot1.jpg?raw=true)

### Usage
The page is expected to work Out of the Box, just clone the repository and launch the **index.html** in a browser. For the development setup please follow the steps mentioned bellow. 



### Development
Clone the repository to your computer, and install project dependencies. 
```bash
git clone https://github.com/msatyan/MyLandingPage1.git
cd MyLandingPage1

npm install
```

##### Active watch mode
The following command will open up a preview of the template in your default browser, watch for changes to core template files, and live reload the browser when changes are saved. You can view the **gulpfile.js** to see which tasks are included with the dev environment.

```bash
gulp dev
```

#### HTML ID selectors used
The 'index.html' is using following ID selectors.

```bash
# navbar
id="myskickynavbar1"

# navbar menu
id="navbarSupportedContent"
id="navbarProducts"
id="navbarServices"

# carousel
id="carousel-indicators"
```
FYI: The ID's are unique; each element can have only one ID and each page can have only one element with that ID.



#### Production Dependencies
- Bootstrap
- JQuery
- Font Awesome
- Simple Line Icons
