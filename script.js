const projdata = [];

const dom = {
    navhome: null,
    navproj: null,
    navcontact: null,
    homeview: null,
    projicon: null,
    contacticon: null
};

function queryrefs()
{
    dom.navhome = document.querySelector(".navhome");
    dom.navproj = document.querySelector(".navproj");
    dom.navcontact = document.querySelector(".navcontact");
    dom.homeview = document.getElementById("homeview");
    dom.projicon = document.querySelector(".projicon");
    dom.contacticon = document.querySelector(".contacticon");
}

function onnavclick(ev)
{
    const t = ev.currentTarget;
    const cls = t.classList;
    if (cls.contains("navhome"))
    {
        showview("homeview");
    }
    else if (cls.contains("navproj"))
    {
        showview("projectsview");
    }
    else if (cls.contains("navcontact"))
    {
        showview("contactview");
    }
}

function oniconclick(ev)
{
    const t = ev.currentTarget;
    t.classList.add("selected");
    if (t.classList.contains("projicon"))
    {
        showview("projectsview");
    }
    else if (t.classList.contains("contacticon"))
    {
        showview("contactview");
    }
    setTimeout(function()
    {
        t.classList.remove("selected");
    }, 200);
}

function showview(id)
{
    const views = document.querySelectorAll(".view");
    views.forEach(function(v)
    {
        v.classList.remove("active");
    });
    const target = document.getElementById(id);
    if (target)
    {
        target.classList.add("active");
    }
}

function init()
{
    queryrefs();
    if (dom.navhome) dom.navhome.addEventListener("click", onnavclick, false);
    if (dom.navproj) dom.navproj.addEventListener("click", onnavclick, false);
    if (dom.navcontact) dom.navcontact.addEventListener("click", onnavclick, false);
    if (dom.projicon) dom.projicon.addEventListener("click", oniconclick, false);
    if (dom.contacticon) dom.contacticon.addEventListener("click", oniconclick, false);
}

document.addEventListener("DOMContentLoaded", function()
{
    init();
}, false);