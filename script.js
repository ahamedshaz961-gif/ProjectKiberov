const projdata = [
    {
        name: "proj1",
        icon: "",
        image: "assets/projects/proj1.png",
        description: "kiberov sputnik — experimental site",
        github: "https://github.com/ahamedshaz961-gif/kiberovsputnik",
        demo: "https://ahamedshaz961-gif.github.io/kiberovsputnik/"
    },
    {
        name: "proj2",
        icon: "",
        image: "",
        description: "",
        github: "",
        demo: ""
    },
    {
        name: "proj3",
        icon: "",
        image: "",
        description: "",
        github: "",
        demo: ""
    }
];

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

function renderfolders()
{
    if (!dom.desktop) return;
    dom.desktop.innerHTML = "";
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

const lbl = document.createElement("div");
lbl.className = "folderlabel";
lbl.textContent = p.name;

b.appendChild(ic);
b.appendChild(lbl);

b.addEventListener("click", function()
{
    folderactivate(idx);
}, false);

dom.desktop.appendChild(b);
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

    // close any existing project window immediately (spec requires closing before opening new)
    closeproj();

    // visual feedback then loading cursor for 1 second
    el.classList.add("selected");
    isloading = true;
    // set cursor on the clicked element to ensure the wait cursor is visible even if the element has its own cursor style
    el.style.cursor = "wait";
    document.documentElement.style.cursor = "wait";
    document.body.style.cursor = "wait";

    loadingTimer = setTimeout(function()
    {
        // restore cursor and open project window
        el.style.cursor = "";
        document.body.style.cursor = "";
        document.documentElement.style.cursor = "";

        // remove visual selection (folder returns to normal)
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
    closeproj(); // ensure only one window at a time

    const w = document.createElement("div");
    w.className = "projwin";
    w.setAttribute("role", "dialog");
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

    // project title inside content (large pixel font)
    if (p.name && p.name.length)
    {
        const h = document.createElement("h1");
        h.className = "projtitle";
        h.textContent = p.name;
        content.appendChild(h);
    }

    // project image (only when provided)
    if (p.image && p.image.length)
    {
        const img = document.createElement("img");
        img.className = "projimage";
        img.src = p.image;
        img.alt = p.name + " image";
        content.appendChild(img);
    }

    // description (only when provided)
    if (p.description && p.description.length)
    {
        const pd = document.createElement("p");
        pd.className = "projdesc";
        pd.textContent = p.description;
        content.appendChild(pd);
    }

    // links (text-only) - github then demo if present
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

    // focus the close button for accessibility
    close.focus();
}

function closeproj()
{
    // if a loading is in progress, cancel it and restore cursor
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

    // ensure any folder selection is cleared when closing window
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

    if (dom.startbtn)
    {
        dom.startbtn.addEventListener("click", function()
        {
            // act as home button: show home view, cancel loading, close windows, clear selection
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

    // esc closes project window
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