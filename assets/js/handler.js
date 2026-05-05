/* =========================================
        Index Form Update Panel Logic
========================================= */

// Select option handler for mobile/tablet screens
function openCenteredMenu(e) {
    // Only run on mobile/tablet screens
    if (window.innerWidth > 768) return;

    // 1. STOP the native menu from opening
    e.preventDefault();
    e.target.blur();

    const select = e.target;

    // 2. LOCK background scrolling
    document.body.style.overflow = 'hidden';

    // 3. Create the Overlay
    const overlay = document.createElement('div');
    overlay.id = "custom-select-overlay";
    Object.assign(overlay.style, {
        position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0.2)', zIndex: '10000',
        display: 'flex', justifyContent: 'center', alignItems: 'center'
    });

    // 4. Create the Modal
    const modal = document.createElement('div');
    Object.assign(modal.style, {
        backgroundColor: '#fff', width: '60%', maxHeight: '80vh',
        borderRadius: '15px', padding: '15px', overflowY: 'auto',
        boxShadow: '0 10px 40px rgba(0,0,0,0.5)',
        display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', // Grid view
        gap: '10px'
    });

    // 5. Populate Options
    Array.from(select.options).forEach(opt => {
        if (opt.value === "" || opt.disabled) return;

        const btn = document.createElement('div');
        btn.innerText = opt.text;
        Object.assign(btn.style, {
            padding: '15px 5px', border: '1px solid #6a32eb', borderRadius: '8px',
            backgroundColor: '#f9f9f9', textAlign: 'center', fontSize: '14px',
            fontWeight: 'bold', color: '#6a32eb', cursor: 'pointer'
        });

        btn.onclick = function () {
            select.value = opt.value;
            select.dispatchEvent(new Event('change')); // Trigger your existing logic
            closeMenu();
        };
        modal.appendChild(btn);
    });
    function closeMenu() {
        document.body.style.overflow = ''; // Unlock scrolling
        if (document.getElementById('custom-select-overlay')) {
            document.body.removeChild(overlay);
        }
    }
    overlay.onclick = (event) => { if (event.target === overlay) closeMenu(); };

    overlay.appendChild(modal);
    document.body.appendChild(overlay);
}
/* =========================================
        Home Page Update Panel Logic
========================================= */

// Anchor Update Panel Logic(Top-Left of the screen)
document.addEventListener('DOMContentLoaded', () => {
    const updatePanel = document.getElementById('update-anchor');
    const toggleBtn = document.getElementById('toggle-update');
    const updateIcon = document.getElementById('update-icon');

    if (!updatePanel || !toggleBtn) return;

    // Change this string whenever you have a new update to show! (e.g., 'v1.1', 'v2', 'update-may-2026')
    const currentUpdateVersion = 'v1.0';

    // Check the browser's memory for the specific version they last saw
    const seenVersion = localStorage.getItem('seenUpdateVersion');
    if (seenVersion !== currentUpdateVersion) {

        setTimeout(() => {
            updatePanel.classList.remove('minimized');
            updateIcon.classList.remove('fa-chevron-right');
            updateIcon.classList.add('fa-chevron-left');

            localStorage.setItem('seenUpdateVersion', currentUpdateVersion);
            setTimeout(() => {
                if (!updatePanel.classList.contains('minimized')) {
                    updatePanel.classList.add('minimized');
                    updateIcon.classList.remove('fa-chevron-left');
                    updateIcon.classList.add('fa-chevron-right');
                }
            }, 5000);

        }, 5000);
    }

    // Manual Toggle Logic (Always works)
    toggleBtn.addEventListener('click', () => {
        if (updatePanel.classList.contains('minimized')) {
            updatePanel.classList.remove('minimized');
            updateIcon.classList.remove('fa-chevron-right');
            updateIcon.classList.add('fa-chevron-left');
        } else {
            updatePanel.classList.add('minimized');
            updateIcon.classList.remove('fa-chevron-left');
            updateIcon.classList.add('fa-chevron-right');
        }
    });
});