const applyTheme = (theme) => {
    document.getElementById('light-mode').classList.remove('active');
    document.getElementById('dark-mode').classList.remove('active');
    document.getElementById('auto-mode').classList.remove('active');
    localStorage.setItem('theme', theme);

    if (theme === 'auto') {
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        document.documentElement.setAttribute('data-bs-theme', systemPrefersDark ? 'dark' : 'light');
    } else {
        document.documentElement.setAttribute('data-bs-theme', theme);
    }

    document.getElementById(`${theme}-mode`).classList.add('active');
};

const loadTheme = () => {
    const savedTheme = localStorage.getItem('theme') || 'auto';
    applyTheme(savedTheme);
};

document.getElementById('light-mode').addEventListener('click', function() {
    applyTheme('light');
});

document.getElementById('dark-mode').addEventListener('click', function() {
    applyTheme('dark');
});

document.getElementById('auto-mode').addEventListener('click', function() {
    applyTheme('auto');
});

loadTheme();

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    if (localStorage.getItem('theme') === 'auto') {
        applyTheme('auto');
    }
});