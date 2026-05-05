// /assets/js/engine.js

/* ==================================
    Global Functions and Utilities
===================================== */

// Date field formatting DD-MM-YYYY to DD/MM/YYYY
function formatDateDDMMYY(dateStr) {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    if (isNaN(date)) return dateStr; 
    
    const dd = String(date.getDate()).padStart(2, '0');
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const yy = String(date.getFullYear()); 
    
    return `${dd}/${mm}/${yy}`;
}

// Function to handle Date Inputs (Hide placeholders + Full area clicks)
function setupDateInputs() {
    const dateInputs = document.querySelectorAll('input[type="date"]');
    
    dateInputs.forEach(input => {
        if (!input.value) {
            input.type = 'text';
        }

        const activateDatePicker = function() {
            this.type = 'date'; 
            if (typeof this.showPicker === 'function') {
                try { this.showPicker(); } 
                catch (error) { console.warn('Could not open date picker:', error); }
            }
        };
        
        input.addEventListener('click', activateDatePicker);
        input.addEventListener('focus', activateDatePicker);
        
        input.addEventListener('blur', function() {
            if (!this.value) this.type = 'text';
        });
    });
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

/* ==============================================
    Index Fields Generation
================================================= */
function generateIndexFields() {
    const count = parseInt(document.getElementById('experimentCount')?.value) || 0;
    const container = document.getElementById('dynamicFieldsContainer');
    
    if (!container) return; 

    container.innerHTML = '';

    for (let i = 1; i <= count; i++) {
        container.innerHTML += `
            <fieldset class="animate-slide-up">
                <legend>Lab Report ${i} Details</legend>
                <div class="form-group">
                    <input type="text" id="expName${i}" name="expName${i}" placeholder=" ">
                    <label>Experiment Name</label>
                </div>
                <div class="form-group">
                    <input type="date" id="expDate${i}" name="expDate${i}" placeholder=" ">
                    <label>Submission Date</label>
                </div>
                <div class="form-group">
                    <input type="text" id="expPage${i}" name="expPage${i}" placeholder=" ">
                    <label>Page Range</label>
                </div>
            </fieldset>
        `;
    }
    
    if (typeof setupDateInputs === 'function') {
        setupDateInputs();
    }
}

/* ==============================================
    Form Data saving using localStorage Logic
================================================= */
const silentSave = () => {
    const data = {
        teacherDepartment: document.getElementById('teacherDepartment')?.value || '',
        studentName: document.getElementById('studentName')?.value || '',
        studentId: document.getElementById('studentId')?.value || '',
        section: document.getElementById('section')?.value || '',
        semester: document.getElementById('semester')?.value || '',
        studentDepartment: document.getElementById('studentDepartment')?.value || '',
        experimentCount: document.getElementById('experimentCount')?.value || ''
    };
    localStorage.setItem('diu_cover_autofill', JSON.stringify(data));
};

const silentLoad = () => {
    const savedDataString = localStorage.getItem('diu_cover_autofill'); 
    if (savedDataString) {
        const data = JSON.parse(savedDataString);
        const fields = ['teacherDepartment', 'studentName', 'studentId', 'section', 'semester', 'studentDepartment', 'experimentCount'];
        
        fields.forEach(id => {
            const element = document.getElementById(id);
            if (element && data[id]) {
                element.value = data[id];
            }
        });
    }
};


/* ==============================================
    Main Initialization & Form Submission
================================================= */
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Restore Permanent Data & Generate dynamic fields
    silentLoad();
    generateIndexFields();
    setupDateInputs();

    // 2. Attach Auto-Save Event Listeners
    const fieldIds = ['teacherDepartment', 'studentName', 'studentId', 'section', 'semester', 'studentDepartment', 'experimentCount'];
    fieldIds.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.addEventListener('input', silentSave);
            // Re-generate fields instantly if count changes
            if (id === 'experimentCount') element.addEventListener('input', generateIndexFields);
        }
    });

    // 3. Attach Form Submission Logic
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(form);
            const dataObj = Object.fromEntries(formData.entries());
            dataObj.formType = form.id;

            // Save output data
            localStorage.setItem('diu_cover_data', JSON.stringify(dataObj));
            
            // Save temporary backup for the Back Button
            const tempBackup = Object.fromEntries(formData.entries());
            tempBackup._formId = form.id; 
            sessionStorage.setItem('temp_form_backup', JSON.stringify(tempBackup));

            // Go to output
            window.location.href = 'output/output-view.html';
        });
    });

    // 4. Output Rendering Logic (Only runs if on output.html)
    const outputContainer = document.getElementById('dynamic-content');
    if (outputContainer) {
        const storedData = localStorage.getItem('diu_cover_data');
        if (!storedData) {
            outputContainer.innerHTML = '<p style="text-align:center; color:red;">No data found.</p>';
            return;
        }

        const data = JSON.parse(storedData);
        let htmlContent = '';

        const submissionBlock = `
            <div class="submission-grid">
                <div class="submission-col">
                    <p  class="submission-col-label"> <span>Submitted To</span></p>
                    <p><strong>Name:</strong> ${data.teacherName || ''}</p>
                    <p><strong>Designation:</strong> ${data.teacherDesignation || ''}</p>
                    <p><strong>Department of ${data.teacherDepartment || ''}</strong></p>
                    <p><strong>${data.teacherUniversity || 'Daffodil International University'}</strong> </p>
                </div>
                <div class="submission-col">
                    <p class="submission-col-label"> <span>Submitted By</span></p>
                    <p><strong>Name:</strong> ${data.studentName || ''}</p>
                    <p><strong>ID:</strong> ${data.studentId || ''}</p>
                    <p><strong>Section:</strong> ${data.section || ''}</p>
                    <p><strong>Semester:</strong> ${data.semester || ''}</p>
                    <p><strong>Department of  ${data.studentDepartment || ''}</strong></p>
                    <p><strong> ${data.studentUniversity || 'Daffodil International University'}</strong></p>
                </div>
            </div>
            <div class="submission-date">Date of Submission: ${formatDateDDMMYY(data.submissionDate) || ''}</div>
        `;

        if (data.formType === 'assignmentForm') {
            htmlContent += `
                <div class="doc-title"><span>Assignment</span></div>
                <div class="course-info">
                    <p><strong>Course Code:</strong> ${data.courseCode || ''}</p>
                    <p><strong>Course Title:</strong> ${data.courseTitle || ''}</p>
                    <p><strong>Topic Name:</strong> ${data.topicName || ''}</p>
                </div>${submissionBlock}`;
        } else if (data.formType === 'labReportForm') {
            htmlContent += `
                <div class="doc-title"><span>Lab Report</span></div>
                <div class="course-info">
                    <p><strong>Experiment No:</strong> ${data.experimentNo}</p>
                    <p><strong>Experiment Name:</strong> ${data.experimentName}</p>
                    <p><strong>Course Code:</strong> ${data.courseCode || ''}</p>
                    <p><strong>Course Title:</strong> ${data.courseTitle || ''}</p>
                </div>${submissionBlock}`;
        } else if (data.formType === 'combinedReportForm') {
            htmlContent += `
                <div class="doc-title"><span>Final Lab Report</span></div>
                <div class="course-info">
                    <p><strong>Course Code:</strong> ${data.courseCode || ''}</p>
                    <p><strong>Course Title:</strong> ${data.courseTitle || ''}</p>
                </div>${submissionBlock}`;
        } else if (data.formType === 'indexForm') {
            htmlContent += `
                <div class="doc-title"><span>Lab Report Index</span></div>
                <table class="index-table">
                    <thead><tr class ="index-header">
                        <th class="index-data-cell-exp-no">Exp. No</th><th class="index-data-cell-date">Date</th><th class="index-data-cell-exp-name">Name of Experiment</th><th class="index-data-cell-page-no">Page No</th><th class="index-data-cell-remarks">Remarks</th>
                    </tr></thead><tbody>`;
            const count = parseInt(data.experimentCount) || 0;
            for(let i = 1; i <= count; i++) {
                htmlContent += `
                    <tr class="index-data-row">
                        <td class="index-data-cell-exp-no">${i}</td>
                        <td class="index-data-cell-date">${formatDateDDMMYY(data['expDate'+i]) || ''}</td>
                        <td class="index-data-cell-exp-name">${data['expName'+i] || ''}</td>
                        <td class="index-data-cell-page-no">${data['expPage'+i] || ''}</td>
                        <td class="index-data-cell-remarks"></td>
                    </tr>`;
            }
            htmlContent += `</tbody></table>`;
        }
        outputContainer.innerHTML = htmlContent;
    }
});

