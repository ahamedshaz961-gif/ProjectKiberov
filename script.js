const projdata = [
    {
        name: "Sputnik",
        icon: "",
        image: "assets/projects/proj1.png",
        description: "kiberov sputnik — experimental site",
        github: "https://github.com/ahamedshaz961-gif/kiberovsputnik",
        demo: "https://ahamedshaz961-gif.github.io/kiberovsputnik/"
    },
    {
        name: "Kiberov Chrome",
        icon: "",
        image: "assets/projects/proj2.png",
        description: "KIBEROVCHROME is my personal website and a place to put some of the things I build, learn, and work on.",
        github: "https://github.com/ahamedshaz961-gif/kiberovchrome",
        demo: "https://ahamedshaz961-gif.github.io/kiberovchrome/"
    },
    {
        name: "KiberovPeek",
        icon: "",
        image: "assets/projects/proj3.png",
        description: "KIBEROVPEEK is a simple image viewer for my personal collection.",
        github: "https://github.com/ahamedshaz961-gif/kiberovpeek",
    }
    
];
const contactdata = [
    { name: "github", image: "assets/contact/github.png", link: "https://github.com/ahamedshaz961-gif" },
    { name: "slack",  image: "assets/contact/slack.png", link: "https://hackclub.enterprise.slack.com/team/U0BNV2ZM5MZ" },
    { name: "gmail", image: "assets/contact/gmail.png", link: "https://mail.google.com/mail/u/0/#inbox?compose=CllgCJfttvXTrGNTDSBhvHrFcMSRbNVCZtCJJGmqqwHbLqdVSrLnqkwNLcwqDgdRNZBlFBLpbF" }
];

function rendercontacts()
{
    const desk = document.getElementById("contactdesk");
    if (!desk) return;
    const area = desk.querySelector(".contactarea");
    if (!area) return;
    area.innerHTML = "";
    contactdata.forEach(function(c, idx)
    {
        const b = document.createElement("div");
        b.className = "contactentry";
        b.setAttribute("data-index", String(idx));
        b.setAttribute("aria-label", c.name + " contact");

        const ic = document.createElement("div");
        ic.className = "contacticon";
        if (c.image && c.image.length)
        {
            ic.style.backgroundImage = "url('" + c.image + "')";
        }
        ic.setAttribute("aria-hidden", "true");

        const lbl = document.createElement("div");
        lbl.className = "contactlabel";
        lbl.textContent = c.name;

        b.appendChild(ic);
        b.appendChild(lbl);

        b.addEventListener("click", function()
        {
            if (c.link && c.link.length)
            {
                window.open(c.link, "_blank");
            }
        }, false);

        area.appendChild(b);
    });
}

const dom = {
    navhome: null,
    navproj: null,
    navcontact: null,
    homeview: null,
    projicon: null,
    contacticon: null,
    desktop: null,
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
    dom.desktop = document.querySelector(".desktop");
    dom.folderarea = document.querySelector(".folderarea");
    dom.contactarea = document.querySelector(".contactarea");
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
        setTimeout(function()
        {
            const focusable = target.querySelector("button, a[href], input, [tabindex]:not([tabindex='-1'])");
            if (focusable)
            {
                focusable.focus();
            }
        }, 0);
    }
}

function renderfolders()
{
    const area = document.querySelector(".folderarea");
    if (!area) return;
    area.innerHTML = "";
    projdata.forEach(function(p, idx)
    {
        const b = document.createElement("button");
        b.className = "folder";
        b.type = "button";
        b.setAttribute("data-index", String(idx));
        b.setAttribute("aria-label", p.name);

        const ic = document.createElement("div");
        ic.className = "foldericon";
        const iconurl = p.icon && p.icon.length ? p.icon : "assets/ui/folder.svg";
        ic.style.backgroundImage = "url('" + iconurl + "')";
        ic.setAttribute("aria-hidden", "true");

        const lbl = document.createElement("div");
        lbl.className = "folderlabel";
        lbl.textContent = p.name;

        b.appendChild(ic);
        b.appendChild(lbl);

        b.addEventListener("click", function()
        {
            folderactivate(idx);
        }, false);

        area.appendChild(b);
    });
    dom.folders = document.querySelectorAll(".folder");
}

let isloading = false;
let loadingTimer = null;

function folderactivate(index)
{
    if (isloading) return;
    const p = projdata[index];
    if (!p) return;
    const el = document.querySelector(".folder[data-index='" + index + "']");
    if (!el) return;

    closeproj();

    el.classList.add("selected");
    isloading = true;
    el.style.cursor = "wait";
    document.documentElement.style.cursor = "wait";
    document.body.style.cursor = "wait";

    loadingTimer = setTimeout(function()
    {
        el.style.cursor = "";
        document.body.style.cursor = "";
        document.documentElement.style.cursor = "";

        el.classList.remove("selected");

        openproj(index);

        isloading = false;
        loadingTimer = null;
    }, 1000);
}

function openproj(index)
{
    const p = projdata[index];
    if (!p) return;
    closeproj(); 

    const w = document.createElement("div");
    w.className = "projwin";
    w.setAttribute("role", "dialog");
    w.setAttribute("aria-modal", "true");
    w.setAttribute("aria-label", p.name);
    w.setAttribute("data-index", String(index));

    const title = document.createElement("div");
    title.className = "wintitle";

    const ico = document.createElement("div");
    ico.className = "wintitleicon";

    const txt = document.createElement("div");
    txt.className = "wintitletext";
    txt.textContent = p.name;

    const close = document.createElement("button");
    close.className = "winclose";
    close.type = "button";
    close.setAttribute("aria-label", "close");
    close.textContent = "X";

    close.addEventListener("click", function()
    {
        closeproj();
    }, false);

    title.appendChild(ico);
    title.appendChild(txt);
    title.appendChild(close);

    const content = document.createElement("div");
    content.className = "wincontent";

    if (p.name && p.name.length)
    {
        const h = document.createElement("h1");
        h.className = "projtitle";
        h.textContent = p.name;
        content.appendChild(h);
    }

    
    if (p.image && p.image.length)
    {
        const img = document.createElement("img");
        img.className = "projimage";
        img.src = p.image;
        img.alt = p.name + " image";
        content.appendChild(img);
    }

    
    if (p.description && p.description.length)
    {
        const pd = document.createElement("p");
        pd.className = "projdesc";
        pd.textContent = p.description;
        content.appendChild(pd);
    }

    if (p.github && p.github.length)
    {
        const a = document.createElement("a");
        a.className = "githublink";
        a.href = p.github;
        a.target = "_blank";
        a.rel = "noopener noreferrer";
        a.textContent = "github";
        content.appendChild(a);
    }
    if (p.demo && p.demo.length)
    {
        const a2 = document.createElement("a");
        a2.className = "demolink";
        a2.href = p.demo;
        a2.target = "_blank";
        a2.rel = "noopener noreferrer";
        a2.textContent = "demo";
        content.appendChild(a2);
    }

    w.appendChild(title);
    w.appendChild(content);

    document.body.appendChild(w);

    close.focus();
}

function closeproj()
{
    if (loadingTimer)
    {
        clearTimeout(loadingTimer);
        loadingTimer = null;
        isloading = false;
        document.body.style.cursor = "";
        document.documentElement.style.cursor = "";
        // clear inline cursor styles on folders
        const allf = document.querySelectorAll(".folder");
        allf.forEach(function(ff)
        {
            ff.style.cursor = "";
        });
    }

    const existing = document.querySelector(".projwin");
    if (existing)
    {
        existing.parentNode.removeChild(existing);
    }

    const sel = document.querySelectorAll(".folder.selected");
    if (sel && sel.length)
    {
        sel.forEach(function(s)
        {
            s.classList.remove("selected");
        });
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

    renderfolders();
    rendercontacts();

   

    if (dom.startbtn)
    {
        dom.startbtn.addEventListener("click", function()
        {
            dom.startbtn.classList.add("selected");
            showview("homeview");
            closeproj();
            setTimeout(function()
            {
                dom.startbtn.classList.remove("selected");
            }, 150);
        }, false);
    }

    updateclock();
    setInterval(updateclock, 1000);

    document.addEventListener("keydown", function(ev)
    {
        if (ev.key === "Escape")
        {
            closeproj();
        }
    }, false);
}

document.addEventListener("DOMContentLoaded", function()
{
    init();
}, false);