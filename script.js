console.log('Its working')

// ─── Sidebar loader ───────────────────────────────────────────────
// Fetches sidebar.html once and injects it into every page.
// To update the nav, edit sidebar.html only — no other file needs changing.
function loadSidebar() {
    const container = document.getElementById('sidebar-container');
    if (!container) return;
    fetch('sidebar.html')
        .then(function(res) {
            if (!res.ok) throw new Error('Could not load sidebar.html');
            return res.text();
        })
        .then(function(html) {
            container.innerHTML = html;
        })
        .catch(function(err) {
            console.error('Sidebar load error:', err);
        });
}

// ─── Sidebar open / close ─────────────────────────────────────────
function w3_open() {
    document.getElementById("mySidebar").classList.add("show");
}

function w3_close() {
    document.getElementById("mySidebar").classList.remove("show");
}

// ─── Theme ────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', function() {

    loadSidebar();

    let theme = localStorage.getItem('theme');
    if (theme == null) {
        setTheme('light');
    } else {
        setTheme(theme);
    }

    // Theme dots may not exist on every page — only bind if present
    let themeDots = document.getElementsByClassName('theme-dot');
    for (let i = 0; i < themeDots.length; i++) {
        themeDots[i].addEventListener('click', function() {
            let mode = this.dataset.mode;
            setTheme(mode);
        });
    }
});

function setTheme(mode) {
    let themeStyle = document.getElementById('theme-style');
    if (!themeStyle) {
        themeStyle = document.createElement('link');
        themeStyle.id = 'theme-style';
        themeStyle.rel = 'stylesheet';
        document.head.appendChild(themeStyle);
    }
    if (mode == 'light')        themeStyle.href = 'default.css';
    else if (mode == 'blue')    themeStyle.href = 'blue.css';
    else if (mode == 'green')   themeStyle.href = 'green.css';
    else if (mode == 'purple')  themeStyle.href = 'purple.css';
    localStorage.setItem('theme', mode);
}

// ─── Slideshow ────────────────────────────────────────────────────
var slideIndex = 0;
showSlides();

function showSlides() {
    var slides = document.getElementsByClassName("mySlides");
    if (slides.length === 0) {
        setTimeout(showSlides, 500); // wait until DOM is ready
        return;
    }
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 1500);
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}
