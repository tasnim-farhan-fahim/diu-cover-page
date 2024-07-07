document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll(".nav-button a");
    const forms = document.querySelectorAll(".form-container");

    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();

            // Hide all forms
            forms.forEach(form => {
                form.style.display = "none";
            });

            // Show the clicked form
            const targetForm = document.querySelector(this.getAttribute("href"));
            if (targetForm) {
                targetForm.style.display = "block";
            }
        });
    });
});



document.querySelectorAll('.form').forEach(form => {
    form.addEventListener('submit', function(event) {
    event.preventDefault();


    const formData = new FormData(event.target);
    let documentContent = '';
    const formId = event.target.id;

    if (formId==='assignment-form'){
        documentContent += `<p ><strong><span class="assignment-text">ASSIGNMENT</span></strong></p>`;

        documentContent += `<p ><strong> Course Code:  ${formData.get('courseCode')} </strong></p>`;
        documentContent += `<p ><strong> Course Title:  ${formData.get('courseTitle')} </strong></p>`;

        documentContent += `<p ><strong> Topic Name:  ${formData.get('topicName')} </strong></p>`;

        documentContent += `<p>   </p>`;
        documentContent += `<p ><strong><span class="category-head-text-style">Submitted To: </span></strong></p>`;
        documentContent += `<p class="space"><strong>Name:  ${formData.get('submittedToName')} </strong></p>`;
        documentContent += `<p class="space"><strong>Designation:  ${formData.get('submittedToDesignation')} </strong></p>`;
        documentContent += `<p class="space"><strong>Department:  ${formData.get('submittedToDepartment')} </strong></p>`;
        documentContent += `<p class="space"><strong> Daffodil International University </strong></p>`;
        documentContent += `<p>   </p>`;
        documentContent += `<p ><strong><span class="category-head-text-style">Submitted By: </span></strong></p>`;
        documentContent += `<p class="space"><strong>Name:  ${formData.get('submittedByName')}  </strong></p>`;
        documentContent += `<p class="space"><strong>ID:  ${formData.get('studentId')} </strong></p>`;
        documentContent += `<p class="space"><strong>Section:  ${formData.get('section')} </strong></p>`;
        documentContent += `<p class="space"><strong>Semester:  ${formData.get('semester')} </strong></p>`;
        documentContent += `<p class="space"><strong>Department:  ${formData.get('submittedByDepartment')} </strong></p>`;
        documentContent += `<p class="space"><strong> Daffodil International University   </strong></p>`;
        documentContent += `<p>   </p>`;
        documentContent += `<p ><strong><span class="category-head-text-style">Submission Date:</span> ${formData.get('submissionDate')} </strong></p>`;

        document.getElementById('documentContent').innerHTML = documentContent;
        document.querySelector('.form').style.display = 'none';
        document.getElementById('document').style.display = 'block';
    }
    else if (formId==='lab-report-form'){
        
        documentContent += `<p ><strong><span class="assignment-text">LAB REPORT</span></strong></p>`;

        documentContent += `<p ><strong> Course Code:  ${formData.get('courseCode')} </strong></p>`;
        documentContent += `<p ><strong> Course Title:  ${formData.get('courseTitle')} </strong></p>`;

        documentContent += `<p ><strong> Experiment No:  ${formData.get('experimentNo')} </strong></p>`;
        documentContent += `<p ><strong> Experiment Name:  ${formData.get('experimentName')} </strong></p>`;

        documentContent += `<p>   </p>`;
        documentContent += `<p ><strong><span class="category-head-text-style">Submitted To: </span></strong></p>`;
        documentContent += `<p class="space"><strong>Name:  ${formData.get('submittedToName')} </strong></p>`;
        documentContent += `<p class="space"><strong>Designation:  ${formData.get('submittedToDesignation')} </strong></p>`;
        documentContent += `<p class="space"><strong>Department:  ${formData.get('submittedToDepartment')} </strong></p>`;
        documentContent += `<p class="space"><strong> Daffodil International University </strong></p>`;
        documentContent += `<p>   </p>`;
        documentContent += `<p ><strong><span class="category-head-text-style">Submitted By: </span></strong></p>`;
        documentContent += `<p class="space"><strong>Name:  ${formData.get('submittedByName')}  </strong></p>`;
        documentContent += `<p class="space"><strong>ID:  ${formData.get('studentId')} </strong></p>`;
        documentContent += `<p class="space"><strong>Section:  ${formData.get('section')} </strong></p>`;
        documentContent += `<p class="space"><strong>Semester:  ${formData.get('semester')} </strong></p>`;
        documentContent += `<p class="space"><strong>Department:  ${formData.get('submittedByDepartment')} </strong></p>`;
        documentContent += `<p class="space"><strong> Daffodil International University   </strong></p>`;
        documentContent += `<p>   </p>`;
        documentContent += `<p ><strong><span class="category-head-text-style">Submission Date:</span> ${formData.get('submissionDate')} </strong></p>`;

        document.getElementById('documentContent').innerHTML = documentContent;
        document.querySelector('.form').style.display = 'none';
        document.getElementById('document').style.display = 'block';
    }
    else if (formId==='final-lab-report-form'){
        
        documentContent += `<p ><strong><span class="assignment-text">FINAL LAB REPORT</span></strong></p>`;

        documentContent += `<p ><strong> Course Code:  ${formData.get('courseCode')} </strong></p>`;
        documentContent += `<p ><strong> Course Title:  ${formData.get('courseTitle')} </strong></p>`;

        documentContent += `<p>   </p>`;
        documentContent += `<p ><strong><span class="category-head-text-style">Submitted To: </span></strong></p>`;
        documentContent += `<p class="space"><strong>Name:  ${formData.get('submittedToName')} </strong></p>`;
        documentContent += `<p class="space"><strong>Designation:  ${formData.get('submittedToDesignation')} </strong></p>`;
        documentContent += `<p class="space"><strong>Department:  ${formData.get('submittedToDepartment')} </strong></p>`;
        documentContent += `<p class="space"><strong> Daffodil International University </strong></p>`;
        documentContent += `<p>   </p>`;
        documentContent += `<p ><strong><span class="category-head-text-style">Submitted By: </span></strong></p>`;
        documentContent += `<p class="space"><strong>Name:  ${formData.get('submittedByName')}  </strong></p>`;
        documentContent += `<p class="space"><strong>ID:  ${formData.get('studentId')} </strong></p>`;
        documentContent += `<p class="space"><strong>Section:  ${formData.get('section')} </strong></p>`;
        documentContent += `<p class="space"><strong>Semester:  ${formData.get('semester')} </strong></p>`;
        documentContent += `<p class="space"><strong>Department:  ${formData.get('submittedByDepartment')} </strong></p>`;
        documentContent += `<p class="space"><strong> Daffodil International University   </strong></p>`;
        documentContent += `<p>   </p>`;
        documentContent += `<p ><strong><span class="category-head-text-style">Submission Date:</span> ${formData.get('submissionDate')} </strong></p>`;

        document.getElementById('documentContent').innerHTML = documentContent;
        document.querySelector('.form').style.display = 'none';
        document.getElementById('document').style.display = 'block';
    }
    else if (formId==='lab-index-form'){

        documentContent += `<p ><strong><span class="assignment-text">INDEX</span></strong></p>`;
        let i = 1;
            do {
                documentContent += `<p class="index-grid" ><strong>  ${i} </strong></p>`;
                documentContent += `<p class="index-grid" ><strong> date  ${formData.get('submissionDate')} </strong></p>`;
                documentContent += `<p class="index-grid" ><strong> name  ${formData.get('experimentName')} </strong></p>`;
                i++;
            } while (i < 11);


        document.getElementById('documentContent').innerHTML = documentContent;
        document.querySelector('.form').style.display = 'none';
        document.getElementById('document').style.display = 'block';
    }

});
});


const inputs = document.querySelectorAll('input');
inputs.forEach((input, index) => {
    input.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            const nextInput = inputs[index + 1];
            if (nextInput) {
                nextInput.focus();
            } else {
                document.querySelector('.submit').focus();
            }
        }
    });
});



function hideButtons() {
    document.querySelectorAll('button').forEach(button => {
        button.style.display = 'none';
    });
}

function showButtons() {
    document.querySelectorAll('button').forEach(button => {
        button.style.display = 'inline';
    });
}

document.getElementById('downloadPdf').addEventListener('click', function() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({
        orientation: 'portrait',
        unit: 'px',
        format: [793.7, 1122.52],
    });

    hideButtons();  // Assuming you have functions to hide and show buttons

    doc.html(document.getElementById('document'), {
        callback: function (doc) {
            doc.save('cover-page.pdf');
            showButtons();  // Show buttons after generating the PDF
        },
        html2canvas: {
            scale: 0.986,  // Reduce scale to fit more content and reduce size
            useCORS: true   // Use this option if you have cross-origin images
        }
    });
});
document.getElementById('downloadImage').addEventListener('click', function() {
    
    html2canvas(document.getElementById('document'), {
        
        scale: 4,  // Increase the scale for higher quality
        useCORS: true,  // Use this option if you have cross-origin images
        backgroundColor: '#ffffff'
    }).then(canvas => {
        // Adjust the canvas dimensions for higher quality
        const imgWidth = 793.7;
        const imgHeight = 1122.52;

        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/jpeg', 0.7);  // Set the quality to 1.0
        link.download = 'cover-page.jpeg';
        link.click();
    });
});



