window.addEventListener('load', () => {
  const loader = document.getElementById('loading-screen');

  setTimeout(() => {
    loader.classList.add('loader-hidden');
  }, 900); 
});
// Prevent right-click context menu
// document.addEventListener('contextmenu', e => e.preventDefault());

// Resize document for export
function documentResize() {
    const doc = document.getElementById('outputContainer');
    if (doc) doc.style.width = '210mm';
}

// Handle form submission for all forms
function handleFormSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formId = form.id;
    const formData = new FormData(form);
    let html = '';

    if (formId === 'assignmentForm') {
        html += `<h2><span>Assignment Submission</span></h2>`;
        html += renderCourseDetails(formData);
        html += `<p><strong>Topic Name:</strong> ${formData.get('topicName')}</p>`;
        html += renderCommonDetails(formData);
        showOutput(html);
    } else if (formId === 'labReportForm') {
        html += `<h2><span>Lab Report Submission</span></h2>`;
        html += renderCourseDetails(formData);
        html += `<p><strong>Experiment No:</strong> ${formData.get('experimentNo')}</p>`;
        html += `<p><strong>Experiment Name:</strong> ${formData.get('experimentName')}</p>`;
        html += renderCommonDetails(formData);
        showOutput(html);
    } else if (formId === 'finalLabReportForm') {
        html += `<h2><span>Final Lab Report Submission</span></h2>`;
        html += renderCourseDetails(formData);
        html += renderCommonDetails(formData);
        showOutput(html);
    } else if (formId === 'labReportIndexForm') {
            html += `<h2><span>Lab Report Index</span></h2>`;
            html += `<table style="width:100%;border-collapse:collapse;margin-top:24px;">`;
            html += `<thead><tr style="background:#f4f6fb;">`;
            html += `<th style="border:1px solid #bfc7d1;padding:8px;">Expt No</th>`;
            html += `<th style="border:1px solid #bfc7d1;padding:8px;">Date</th>`;
            html += `<th style="border:1px solid #bfc7d1;padding:8px;">Name of the Experiment</th>`;
            html += `<th style="border:1px solid #bfc7d1;padding:8px;">Page No</th>`;
            html += `<th style="border:1px solid #bfc7d1;padding:8px;">Remarks</th>`;
            html += `</tr></thead><tbody>`;
            for (let i = 1; i <= 10; i++) {
                html += `<tr>`;
                html += `<td style="border:1px solid #bfc7d1;padding:8px;text-align:center;">${formData.get('experimentNo' + i) || ''}</td>`;
                html += `<td style="border:1px solid #bfc7d1;padding:4px;text-align:center;">${formatDateDDMMYY(formData.get('submissionDate' + i)) || ''}</td>`;
                html += `<td style="border:1px solid #bfc7d1;padding:8px;">${formData.get('experimentName' + i) || ''}</td>`;
                html += `<td style="border:1px solid #bfc7d1;padding:8px;text-align:center;">${formData.get('page' + i) || ''}</td>`;
                html += `<td style="border:1px solid #bfc7d1;padding:8px;text-align:center;"></td>`;
                html += `</tr>`;
            }
            html += `</tbody></table>`;
        showOutput(html);
    }
}

// Render Course Details
function renderCourseDetails(formData) {
    let html = '';
    html += `<p><strong>Course Code:</strong> ${formData.get('courseCode')}</p>`;
    html += `<p><strong>Course Name:</strong> ${formData.get('courseName')}</p>`;
    return html;
}
// add double line space
function addDoubleLineSpace() {
    return `<br>`;
}

// Render Common Details
function renderCommonDetails(formData) {
    let html = '';
    html += addDoubleLineSpace();
    html += `<h2><span>Submitted To</span></h2>`;
    html += `<p><strong>Name:</strong> ${formData.get('teacherName')}</p>`;
    html += `<p><strong>Designation:</strong> ${formData.get('TeacherDesignation')}</p>`;
    html += `<p><strong>Department:</strong> ${formData.get('teacherDepartment')}</p>`;
    html += `<p><strong> ${formData.get('university')}</strong></p>`;
    html += addDoubleLineSpace();
    html += `<h2><span>Submitted By</span></h2>`;
    html += `<p><strong>Name:</strong> ${formData.get('studentName')}</p>`;
    html += `<p><strong>ID:</strong> ${formData.get('studentId')}</p>`;
    html += `<p><strong>Section:</strong> ${formData.get('section')}</p>`;
    html += `<p><strong>Semester:</strong> ${formData.get('semester')}</p>`;
    html += `<p><strong>Department:</strong> ${formData.get('studentDepartment')}</p>`;
    html += `<p><strong> ${formData.get('studentUniversity')}</strong></p>`;
    html += addDoubleLineSpace();
    html += `<p style="text-align: center; color: #2a3a5e;">
    <strong><span style="border: 2px solid #2a3a5e; border-radius: 1cap; padding: 4px;">Submission Date: ${formatDateDDMMYY(formData.get('submissionDate'))}</span></strong></p>`;
    return html;
}


function showOutput(html) {
    localStorage.setItem('formOutput', html);
    window.location.href = '../src/output.html';
}

// date input handling
document.addEventListener('DOMContentLoaded', () => {
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', handleFormSubmit);
    });
        // Show calendar popup when clicking on input[type=date]
        document.querySelectorAll('input[type="date"]').forEach(input => {
            input.addEventListener('click', function(e) {
                this.showPicker && this.showPicker();
                // For browsers that don't support showPicker, focus will still work
                this.focus();
            });
            // input.addEventListener('keydown', function(e) {
            //     if (e.key === 'Enter') {
            //         this.showPicker && this.showPicker();
            //         this.focus();
            //     }
            // });
        });
});

// Format date to DD/MM/YY
function formatDateDDMMYY(dateStr) {
    const date = new Date(dateStr);
    if (isNaN(date)) return '';
    const dd = String(date.getDate()).padStart(2, '0');
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const yy = String(date.getFullYear());
    return `${dd}/${mm}/${yy}`;
}

// Enter key navigation for inputs
document.querySelectorAll('input').forEach((input, idx, arr) => {
    input.addEventListener('keydown', e => {
        if (e.key === 'Enter') {
            e.preventDefault();
            const next = arr[idx + 1];
            if (next) next.focus();
            else input.form.querySelector('button[type="submit"]')?.focus();
        }
    });
});


// Event binding for single downloadPdf button
const pdfBtn = document.getElementById('downloadPdf');
if (pdfBtn) {
    pdfBtn.addEventListener('click', function() {
        // documentResize();
        const el = document.getElementById('outputContainer');
        if (!el) {
            alert('No output found to download');
            return;
        }
        const { jsPDF } = window.jspdf;
        html2canvas(el, {
            scale: 4, // Higher scale for better quality before compression
            useCORS: true,
            backgroundColor: '#ffffff'
        }).then(canvas => {
            const imgData = canvas.toDataURL('image/jpeg', 0.95); // High quality
            // PDF page size in mm for A4
            const pageWidth = 210; // mm
            const pageHeight = 297; // mm
            const doc = new jsPDF({
                orientation: 'portrait',
                unit: 'mm',
                format: [pageWidth, pageHeight],
                compress: true
            });
            // Calculate image dimensions in mm to fit page width
            const imgWidth = pageWidth;
            const imgHeight = (canvas.height * imgWidth) / canvas.width;
            doc.addImage(imgData, 'JPEG', 0, 0, imgWidth, imgHeight);
            doc.save('cover-page.pdf');
        }).catch(err => {
            console.error('html2canvas/jsPDF error:', err);
            alert('Failed to generate PDF');
        });
    });
}

// Event binding for single downloadImg button
const imgBtn = document.getElementById('downloadImg');
if (imgBtn) {
    imgBtn.addEventListener('click', function() {
        // documentResize();
        const el = document.getElementById('outputContainer');
        if (!el) {
            alert('No output found to download');
            return;
        }
        html2canvas(el, {
            scale: 4, // High scale for quality
            useCORS: true,
            backgroundColor: '#ffffff'
        }).then(canvas => {
            const link = document.createElement('a');
            link.href = canvas.toDataURL('image/jpeg', 0.85); // Good quality, reasonable size
            link.download = 'cover-page.jpg';
            document.body.appendChild(link);
            link.click();
            setTimeout(() => link.remove(), 1000);
        }).catch(err => {
            console.error('html2canvas error:', err);
            alert('Failed to generate image');
        });
    });
}
// Set active navigation link based on current page
function setActiveNav() {
  const links = document.querySelectorAll(".nav-link");
  const currentFile = window.location.pathname.split("/").pop() || "index.html";
  links.forEach(link => {
    const href = link.getAttribute("href");
    if (!href) return;
    const linkFile = href.split("/").pop();
    if (linkFile === currentFile) {
      link.classList.add("active");
    }
  });
}
setActiveNav();


 // Calculates scrolling progress and updates the vertical progress bar (height).

function updateVerticalProgressBar() {
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  const scrollPercent = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
  const progressBars = document.querySelectorAll('#progress-bar-left, #progress-bar-right');
  progressBars.forEach(progressBar => {
    progressBar.style.height = `${scrollPercent}%`;
  });
}
window.addEventListener('scroll', updateVerticalProgressBar);
updateVerticalProgressBar();


// Function to save data to localStorage
const silentSave = () => {
    const data = {
        teacherDepartment: document.getElementById('teacherDepartment')?.value || '',
        studentName: document.getElementById('studentName')?.value || '',
        studentId: document.getElementById('studentId')?.value || '',
        section: document.getElementById('section')?.value || '',
        semester: document.getElementById('semester')?.value || '',
        studentDepartment: document.getElementById('studentDepartment')?.value || ''
    };
    localStorage.setItem('diu_cover_autofill', JSON.stringify(data));
};

// Function to load data on refresh/return
const silentLoad = () => {
    const savedData = localStorage.getItem('diu_autofill_data'); // Ensure consistency in key name
    const data = JSON.parse(localStorage.getItem('diu_cover_autofill'));
    
    if (data) {
        const fields = ['teacherDepartment', 'studentName', 'studentId', 'section', 'semester', 'studentDepartment'];
        fields.forEach(id => {
            const element = document.getElementById(id);
            if (element && data[id]) {
                element.value = data[id];
            }
        });
    }
};

// Initialize listeners
document.addEventListener('DOMContentLoaded', () => {
    silentLoad();

    // Attach the saver to your specific IDs
    const fieldIds = ['teacherDepartment', 'studentName', 'studentId', 'section', 'semester', 'studentDepartment'];
    fieldIds.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            // "input" event triggers for every keystroke or paste
            element.addEventListener('input', silentSave);
        }
    });
});