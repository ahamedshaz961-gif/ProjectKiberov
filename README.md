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

![image](https://cdn.hackclub.com/01a011db-438d-7982-b1f6-d88c532d4a2c/image.png)
added taskbar and live clock
Worked on the taskbar and added the start button, task area, separator, and live clock. Added the taskbar styling and connected the clock to update automatically with the current time. Also added basic focus and selected states for the start button.
