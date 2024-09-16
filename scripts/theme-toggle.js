const applyTheme = (theme) => {
    document.documentElement.setAttribute('data-bs-theme', theme);
    localStorage.setItem('theme', theme);
}

const loadTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
        applyTheme(savedTheme);
    } else {
        applyTheme(systemPrefersDark ? 'dark' : 'light');
    }
}

document.getElementById('light-mode').addEventListener('click', function() {
    applyTheme('light');
});

document.getElementById('dark-mode').addEventListener('click', function() {
    applyTheme('dark');
});

document.getElementById('auto-mode').addEventListener('click', function() {
    localStorage.removeItem('theme');
    loadTheme();
});

loadTheme();