# KIBEROV

a small windows xp inspired personal website made with html, css and javascript.

it is designed to feel like an old desktop interface, with a home screen, projects section, contact section, taskbar, folders and project windows.

## what is this

KIBEROV is my personal space for showing the things i build and work on.

the website has:

* a xp style home screen
* projects section with folder-like project icons
* project windows with images, descriptions and links
* contact section with clickable contact options
* windows xp style taskbar
* live clock
* loading cursor when opening projects
* responsive layout for smaller screens
* keyboard support
* xp style buttons, borders and window bezels

the home screen uses `assets/home/home.jpg` as its background.

## projects

projects are stored inside the `projdata` array in `script.js`.

each project can have:

* name
* icon
* image
* description
* github
* demo

example:

```js
{
    name: "project name",
    icon: "",
    image: "assets/projects/project.png",
    description: "short description of the project",
    github: "https://github.com/...",
    demo: "https://..."
}
```

if the icon is left empty, the default folder icon is used.

project images are stored in:

`assets/projects/`

## contacts

contacts are stored inside the `contactdata` array in `script.js`.

each contact has:

* name
* image
* link

example:

```js
{
    name: "github",
    image: "assets/contact/github.png",
    link: "https://github.com/..."
}
```

contact icons are stored in:

`assets/contact/`

clicking a contact opens its link in a new tab.

## files

```text
d/
│
├── index.html
├── style.css
├── script.js
├── README.md
│
└── assets/
    ├── home/
    │   └── home.jpg
    │
    ├── projects/
    │   ├── proj1.png
    │   ├── proj2.png
    │   ├── proj3.png
    │   ├── proj4.png
    │   └── proj5.png
    │
    ├── contact/
    │   ├── contact1.png
    │   ├── contact2.png
    │   ├── contact3.png
    │   ├── contact4.png
    │   └── contact5.png
    │
    └── ui/
        ├── folder.svg
        └── kiberov.svg
```

some of the images are placeholders and can be replaced with my own assets later.

## running locally

you dont need any framework or package installation to run this project.

### method 1 — open directly

open `index.html` in a browser.

this works for the basic website, but using a local server is better for testing.

### method 2 — vscode live server

open the project folder in VS Code.

then install the **Live Server** extension if you dont already have it.

right click `index.html` and select:

`Open with Live Server`

the website should open in the browser.

### method 3 — python server

if python is installed, open a terminal inside the project folder and run:

```bash
python -m http.server 8000
```

then open:

```text
http://localhost:8000
```

to stop the server press `Ctrl + C`.

## editing the website

most of the content can be changed directly from `script.js`.

to add a project, add another object to `projdata`.

to change contacts, edit `contactdata`.

images can be replaced inside the `assets` folders without changing the main layout as long as the file paths stay the same.

the home wallpaper can be replaced with:

`assets/home/home.jpg`

the main KIBEROV icon can be replaced with:

`assets/ui/kiberov.svg`

## navigation

the top navigation can switch between:

* home
* projects
* contact

the home screen also has project and contact options.

the start button always returns to the home screen and closes an opened project window.

## project windows

clicking a project folder starts a short loading state before the project window opens.

the project window contains:

* project name
* project image
* description
* github link when available
* demo link when available
* close button

the window content can scroll if there is too much content to fit.

pressing `Esc` also closes an opened project window.

## keyboard support

the website supports normal keyboard navigation.

`Tab` can move between interactive elements.

`Enter` and `Space` can activate buttons.

`Esc` closes an opened project window.

focus is also moved to the first usable element when changing views.

## responsive design

the layout is mainly designed around the desktop style, but it also scales down for smaller browser sizes.

project windows resize according to the available screen width.

project images scale down instead of forcing the page wider.

folders and desktop icons also become smaller on narrow screens.

## accessibility

the website uses normal html buttons and links where possible.

interactive elements have visible focus outlines.

decorative icons are hidden from screen readers where appropriate.

project images have alt text.

project windows use dialog semantics and are marked as modal.

## technologies

* html
* css
* javascript
* svg
* jpg / png images

no javascript framework is required.

## credits

made by **shaz**.

the design is inspired by the look and feel of Windows XP and old desktop interfaces, while the website itself is my own project.

## status

the website is still being worked on.

i'll keep replacing the placeholder projects, contact icons and other assets with the actual ones as i finish them.


demo url : https://ahamedshaz961-gif.github.io/ProjectKiberov/
