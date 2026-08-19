const projdata = [];

const dom = {
    navhome: null,
    navproj: null,
    navcontact: null,
    homeview: null,
    projicon: null,
    contacticon: null,
    folders: null,
    startbtn: null,
    clock: null
};

function queryrefs()
{
    dom.navhome = document.querySelector(".navhome");
    dom.navproj = document.querySelector(".navproj");
    dom.navcontact = document.querySelector(".navcontact");
    dom.homeview = document.getElementById("homeview");
    dom.projicon = document.querySelector(".projicon");
    dom.contacticon = document.querySelector(".contacticon");
    dom.folders = document.querySelectorAll(".folder");
    dom.startbtn = document.querySelector(".startbtn");
    dom.clock = document.querySelector(".clock");
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

function updateclock()
{
    if (!dom.clock) return;
    const d = new Date();
    let h = d.getHours();
    const m = d.getMinutes();
    const pm = h >= 12;
    h = h % 12;
    if (h === 0) h = 12;
    const mm = m < 10 ? "0" + m : String(m);
    const label = h + ":" + mm + (pm ? " PM" : " AM");
    dom.clock.textContent = label;
}

function init()
{
    queryrefs();
    if (dom.navhome) dom.navhome.addEventListener("click", onnavclick, false);
    if (dom.navproj) dom.navproj.addEventListener("click", onnavclick, false);
    if (dom.navcontact) dom.navcontact.addEventListener("click", onnavclick, false);
    if (dom.projicon) dom.projicon.addEventListener("click", oniconclick, false);
    if (dom.contacticon) dom.contacticon.addEventListener("click", oniconclick, false);
    if (dom.folders && dom.folders.length)
    {
        dom.folders.forEach(function(f)
        {
            f.addEventListener("click", function()
            {
                f.classList.add("selected");
                setTimeout(function()
                {
                    f.classList.remove("selected");
                }, 200);
            }, false);
        });
    }

    if (dom.startbtn)
    {
        dom.startbtn.addEventListener("click", function()
        {
            dom.startbtn.classList.add("selected");
            setTimeout(function()
            {
                dom.startbtn.classList.remove("selected");
            }, 150);
        }, false);
    }

    updateclock();
    setInterval(updateclock, 1000);
}

document.addEventListener("DOMContentLoaded", function()
{
    init();
}, false);