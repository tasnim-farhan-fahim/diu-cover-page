document.addEventListener('DOMContentLoaded', () => {
    const modalOverlay = document.getElementById('survey-modal');
    const closeBtn = document.getElementById('close-survey');
    const copyBtn = document.getElementById('copy-survey-link');
    const surveyLink = 'https://forms.gle/ySQer5LBehQfJB4u5';

    if (!modalOverlay || !closeBtn) return;

    const surveyCard = modalOverlay.querySelector('.survey-card');

    // Remove any default 'hidden' class to prevent display:none conflicts
    modalOverlay.classList.remove('hidden');

    // Immediately put the modal into the shrunk/invisible state on load
    modalOverlay.classList.add('minimized-state');
    surveyCard.classList.add('minimized-state');

    // Helper function to lock/unlock background scrolling
    const toggleScrollLock = (lock) => {
        document.body.style.overflow = lock ? 'hidden' : '';
    };

    // 1. Create the floating anchor
    const anchor = document.createElement('div');
    anchor.id = 'survey-anchor';
    anchor.className = 'survey-anchor';
    anchor.innerHTML = '<i class="fa-solid fa-hands-helping"></i>';
    document.body.appendChild(anchor);

    // 2. Show modal automatically 3 seconds after page load
    setTimeout(() => {
        modalOverlay.classList.remove('minimized-state');
        surveyCard.classList.remove('minimized-state');
        toggleScrollLock(true);
    }, 2000);

    // 3. Minimize logic (Smoothly suck to the left)
    closeBtn.addEventListener('click', () => {
        toggleScrollLock(false); // Unlock page scroll
        
        // Let CSS automatically handle the animation and hiding!
        modalOverlay.classList.add('minimized-state');
        surveyCard.classList.add('minimized-state');

        // Pop out the anchor tab slightly after the modal starts shrinking
        setTimeout(() => {
            anchor.classList.add('visible');
        }, 400); 
    });

    // 4. Expand logic (Smoothly return to center)
    anchor.addEventListener('click', () => {
        toggleScrollLock(true); // Lock page scroll
        
        anchor.classList.remove('visible'); // Hide the anchor tab
        
        // Wait a tiny fraction of a second, then expand the modal back
        setTimeout(() => {
            modalOverlay.classList.remove('minimized-state');
            surveyCard.classList.remove('minimized-state');
        }, 150);
    });

    // Copy Link Logic
    if (copyBtn) {
        copyBtn.addEventListener('click', function() {
            navigator.clipboard.writeText(surveyLink).then(() => {
                const originalText = this.innerHTML;
                this.innerHTML = '<i class="fa-solid fa-check"></i> Copied!';
                this.classList.add('copied');
                setTimeout(() => {
                    this.innerHTML = originalText;
                    this.classList.remove('copied');
                }, 2000);
            }).catch(err => {
                console.error('Failed to copy:', err);
                alert('Copy failed. Survey link: ' + surveyLink);
            });
        });
    }
});



