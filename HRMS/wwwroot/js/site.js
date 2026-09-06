// HRMS Workforce Hub - Client-Side Scripts

function initTheme() {
    const savedTheme = localStorage.getItem('hrms_theme') || 'aesthetic';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeToggleUI(savedTheme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'aesthetic';
    const newTheme = currentTheme === 'aesthetic' ? 'light' : 'aesthetic';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('hrms_theme', newTheme);
    updateThemeToggleUI(newTheme);
}

function updateThemeToggleUI(theme) {
    const buttons = document.querySelectorAll('.theme-toggle-btn');
    buttons.forEach(btn => {
        if (theme === 'aesthetic') {
            btn.innerHTML = '<span class="theme-toggle-icon">🌸</span> <span>Cute Mode</span>';
            btn.setAttribute('title', 'Switch to Clean Light Mode');
        } else {
            btn.innerHTML = '<span class="theme-toggle-icon">☀️</span> <span>Light Mode</span>';
            btn.setAttribute('title', 'Switch to Cute Aesthetic Mode');
        }
    });
}

function toggleSidebar() {
    const sidebar = document.querySelector('.dashboard-sidebar');
    if (sidebar) {
        sidebar.classList.toggle('show');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
});
