console.log('Its working')

function w3_open() {
    document.getElementById("mySidebar").classList.add("show");
}

function w3_close() {
    document.getElementById("mySidebar").classList.remove("show");
}



document.addEventListener('DOMContentLoaded', function() {
    console.log('Its working');

    let theme = localStorage.getItem('theme');
    if (theme == null) {
        setTheme('light');
    } else {
        setTheme(theme);
    }

    let themeDots = document.getElementsByClassName('theme-dot');
    for (let i = 0; i < themeDots.length; i++) {
        themeDots[i].addEventListener('click', function() {
            let mode = this.dataset.mode;
            console.log('Option clicked:', mode);
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

    if (mode == 'light') {
        themeStyle.href = 'default.css';
    } else if (mode == 'blue') {
        themeStyle.href = 'blue.css';
    } else if (mode == 'green') {
        themeStyle.href = 'green.css';
    } else if (mode == 'purple') {
        themeStyle.href = 'purple.css';
    }

    localStorage.setItem('theme', mode);
}
