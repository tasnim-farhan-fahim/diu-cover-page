const overlay = document.getElementById('modal-overlay');
const closeBtn = document.getElementById('close-btn');
const copyBtn = document.getElementById('copy-btn');
const surveyUrl = "https://forms.gle/ySQer5LBehQfJB4u5";

closeBtn.addEventListener('click', () => {
  overlay.style.display = 'none';
});

copyBtn.addEventListener('click', () => {
  navigator.clipboard.writeText(surveyUrl).then(() => {
    copyBtn.textContent = "Copied!";
    copyBtn.style.backgroundColor = "#d4edda";
    setTimeout(() => {
      copyBtn.textContent = "Copy";
      copyBtn.style.backgroundColor = "#f0f0f0";
    }, 2000);
  });
});
