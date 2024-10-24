import { Theme } from "../data/enums.js";
import { debounce } from "./utils.js";

const themeButtons = {};

window.matchMedia('(prefers-color-scheme: dark)').addEventListener(
    'change',
    debounce(() => {
        if (localStorage.getItem('theme') === Theme.AUTO) {
            applyTheme(Theme.AUTO);
        }
    }, 100)
);

document.addEventListener('DOMContentLoaded', function () {
    setupThemeButtons();
    loadTheme();
});

/**
 * Setup theme buttons and add event listeners
 */
const setupThemeButtons = () => {
    Object.values(Theme).forEach(theme => {
        const button = document.querySelector(`#${theme}-mode`);
        if (button) {
            // Cache the button for later use
            themeButtons[theme] = button;
            button.addEventListener('click', () => applyTheme(theme));
        }
    });
};

/**
 * Apply the specified theme
 * @param {Theme} theme - The theme to apply
 */
const applyTheme = (theme) => {
    Object.values(Theme).forEach(theme => {
        if (themeButtons[theme]) {
            themeButtons[theme].classList.remove('active');
            themeButtons[theme].setAttribute('aria-pressed', 'false');
        }
    });

    localStorage.setItem('theme', theme);

    if (theme === Theme.AUTO) {
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        document.documentElement.setAttribute('data-bs-theme', systemPrefersDark ? Theme.DARK : Theme.LIGHT);
    } 
    else {
        document.documentElement.setAttribute('data-bs-theme', theme);
    }

    if (themeButtons[theme]) {
        themeButtons[theme].classList.add('active');
        themeButtons[theme].setAttribute('aria-pressed', 'true');
    }
};

/**
 * Load the theme from local storage or fallback to AUTO
 */
const loadTheme = () => {
    try {
        const savedTheme = localStorage.getItem('theme') || Theme.AUTO;
        applyTheme(savedTheme);
    } 
    catch {
        applyTheme(Theme.AUTO);
    }
};