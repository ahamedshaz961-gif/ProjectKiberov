# names

## html

app - main application container

main - main content area

homeview - home view container

projectsview - projects view

contactview - contact view

## css

navhm - navigation home element

brand - site branding

nav - navigation container

navbtn - navigation button

navhome - home navigation button

navproj - projects navigation button

navcontact - contact navigation button

title - main title

lead - main text

view - page view

active - active view state

hero - home hero section

iconrow - home icon row

deskico - desktop icon button

icotitle - icon title

selected - selected state

desktop - desktop area

folder - folder button

foldericon - folder icon

folderlabel - folder name

projicon - projects icon

contacticon - contact icon

taskbar - taskbar

startbtn - start button

taskarea - task area

tasksep - taskbar separator

clock - clock

## js

queryrefs - gets dom references

onnavclick - handles navigation clicks

oniconclick - handles icon clicks

updateclock - updates the clock

showview - switches views

init - starts the site

projdata - project data

dom - dom references

t - temporary value

cls - class name

f - folder value

views - available views

v - view value

target - target view

ev - event value

d - date value

h - hour value

m - minute value

pm - am or pm value

mm - minute text

label - clock text

## css variables

--bg - background

--ui - user interface

--text - text color

--pixelfont - pixel font

## new (part6)

renderfolders - js function to generate project folder buttons from projdata

folderactivate - js function that handles folder activation (selection) on click

desktop - css class for the projects desktop area where folders are placed

projdata keys:
- name - project short name
- icon - optional custom folder icon path
- image - optional project image path
- description - optional project description
- github - optional github url
- demo - optional demo url

## new (part7)

openproj - js function to create and show a project window for a project index

closeproj - js function to close the open project window (if any)

projwin - css class for the project window frame (800×550)

wintitle - css class for the window title bar

wintitleicon - css class for the 16×16 shared kiberov icon in the title bar

wintitletext - css class for the project name in the title bar

winclose - css class for the red close button in the title bar

wincontent - css class for the window content area (currently empty)

## new (part8)

projtitle - css class for the large project title inside the window (pixel font)

projimage - css class for the project image block (600×280, object-fit: cover)

projdesc - css class for the project description paragraph

githublink - css class for the text-only github link

demolink - css class for the text-only demo link

fixed start button and loading cursor
Fixed the start button so it returns to the home view from any page. Also fixed the project loading cursor so it appears for 1 second before the project window opens.