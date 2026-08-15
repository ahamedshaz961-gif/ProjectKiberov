const projdata = [];

const dom = {
    navhome: null,
    navproj: null,
    navcontact: null,
    homeview: null
};

function queryrefs()
{
    dom.navhome = document.querySelector(".navhome");
    dom.navproj = document.querySelector(".navproj");
    dom.navcontact = document.querySelector(".navcontact");
    dom.homeview = document.getElementById("homeview");
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
        showview("homeview");
    }
    else if (cls.contains("navcontact"))
    {
        showview("homeview");
    }
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
}

document.addEventListener("DOMContentLoaded", function()
{
    init();
}, false);