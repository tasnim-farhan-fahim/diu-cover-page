// /assets/js/navigation.js

document.addEventListener('DOMContentLoaded', () => {
    injectFontAwesome();
    injectNavigation();
});

// Automatically injects the Font Awesome CDN
function injectFontAwesome() {
    if (!document.querySelector('link[href*="font-awesome"]')) {
        const faLink = document.createElement('link');
        faLink.rel = 'stylesheet';
        faLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
        document.head.appendChild(faLink);
    }
}

function injectNavigation() {
    // 1. Top Navigation (Floating Pill)
    const topNavHTML = `
        <header class="top-nav-bar">
            <div class="nav-container">
                <a href="/" class="logo-container">
                    <img src="/assets/img/top-nav-logo.png" alt="DIU Cover Page Logo" class="logo-icon" onerror="this.style.display='none'">
                </a>
            </div>
        </header>
    `;

    // 2. Bottom Navigation (Fixed Action Bar) - 4th item changed to About
    const bottomNavHTML = `
        <nav class="bottom-nav-bar">
            <a href="/" class="nav-item" id="nav-home">
                <i class="fa-solid fa-house nav-icon"></i>
                <span class="nav-label">Home</span>
            </a>
            <a href="/create/" class="nav-item" id="nav-create">
                <i class="fa-solid fa-file-signature nav-icon"></i>
                <span class="nav-label">Create</span>
            </a>
            <a href="/guidelines/" class="nav-item" id="nav-guide">
                <i class="fa-solid fa-lightbulb nav-icon"></i>
                <span class="nav-label">Guides</span>
            </a>
            <a href="/about/" class="nav-item" id="nav-about">
                <i class="fa-solid fa-circle-info nav-icon"></i>
                <span class="nav-label">About</span>
            </a>
        </nav>
    `;

    // 3. Inject into DOM
    document.body.insertAdjacentHTML('afterbegin', topNavHTML);
    document.body.insertAdjacentHTML('beforeend', bottomNavHTML);
    
    // 4. Set Active State
    highlightCurrentPage();
}

function highlightCurrentPage() {
    const path = window.location.pathname;
    
    // Remove active class from all first (failsafe)
    document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));

    if (path.includes('/create/')) {
        document.getElementById('nav-create')?.classList.add('active');
    } else if (path.includes('/guidelines/')) {
        document.getElementById('nav-guide')?.classList.add('active');
    } else if (path.includes('/about/')) {
        document.getElementById('nav-about')?.classList.add('active');
    } else if (path === '/' || path === '/index.html') {
        // Explicitly check for the homepage. 
        // If they are on contact.html or policy pages, nothing gets highlighted.
        document.getElementById('nav-home')?.classList.add('active');
    }
}