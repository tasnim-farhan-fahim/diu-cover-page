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


        documentContent += `<div class="index-left-bottom" id="index-header"><strong> Expt. No. </strong></div>`;
        documentContent += `<div class="index-border-header" id="index-header"><strong> Date </strong></div>`;
        documentContent += `<div class="index-border-header" id="index-header"><strong> Name of the Experiment </strong></div>`;
        documentContent += `<div class="index-border-header" id="index-header"><strong> Page No. </strong></div>`;
        documentContent += `<div class="index-right-bottom" id="index-header"><strong> Remarks </strong></div>`;

        documentContent += `<div class="index-left-bottom" id="index-experiment-no"><strong>  1 </strong></div>`;
        documentContent += `<div class="index-border" id="dateSubmission"><strong>    ${formData.get('submissionDate1')} </strong></div>`;
        documentContent += `<div class="index-border" ><strong>   ${formData.get('experimentName1')} </strong></div>`;
        documentContent += `<div class="index-border" id="pageLimit"><strong>   ${formData.get('pageToPage1')} </strong></div>`;
        documentContent += `<div class="index-right-bottom" ><strong>  </strong></div>`;

        documentContent += `<div class="index-left-bottom" id="index-experiment-no"><strong>  2 </strong></div>`;
        documentContent += `<div class="index-border" id="dateSubmission"><strong>    ${formData.get('submissionDate2')} </strong></div>`;
        documentContent += `<div class="index-border" ><strong>   ${formData.get('experimentName2')} </strong></div>`;
        documentContent += `<div class="index-border" id="pageLimit"><strong>   ${formData.get('pageToPage2')} </strong></div>`;
        documentContent += `<div class="index-right-bottom" ><strong>  </strong></div>`;

        documentContent += `<div class="index-left-bottom" id="index-experiment-no"><strong>  3 </strong></div>`;
        documentContent += `<div class="index-border" id="dateSubmission"><strong>   ${formData.get('submissionDate3')} </strong></div>`;
        documentContent += `<div class="index-border" ><strong>   ${formData.get('experimentName3')} </strong></div>`;
        documentContent += `<div class="index-border" id="pageLimit"><strong>   ${formData.get('pageToPage3')} </strong></div>`;
        documentContent += `<div class="index-right-bottom" ><strong>  </strong></div>`;

        documentContent += `<div class="index-left-bottom" id="index-experiment-no"><strong>  4 </strong></div>`;
        documentContent += `<div class="index-border" id="dateSubmission"><strong>   ${formData.get('submissionDate4')} </strong></div>`;
        documentContent += `<div class="index-border" ><strong>   ${formData.get('experimentName4')} </strong></div>`;
        documentContent += `<div class="index-border" id="pageLimit"><strong>   ${formData.get('pageToPage4')} </strong></div>`;
        documentContent += `<div class="index-right-bottom" ><strong>  </strong></div>`;

        documentContent += `<div class="index-left-bottom" id="index-experiment-no"><strong>  5 </strong></div>`;
        documentContent += `<div class="index-border" id="dateSubmission"><strong>   ${formData.get('submissionDate5')} </strong></div>`;
        documentContent += `<div class="index-border" ><strong>   ${formData.get('experimentName5')} </strong></div>`;
        documentContent += `<div class="index-border" id="pageLimit"><strong>   ${formData.get('pageToPage5')} </strong></div>`;
        documentContent += `<div class="index-right-bottom" ><strong>  </strong></div>`;

        documentContent += `<div class="index-left-bottom" id="index-experiment-no"><strong>  6 </strong></div>`;
        documentContent += `<div class="index-border" id="dateSubmission"><strong>   ${formData.get('submissionDate6')} </strong></div>`;
        documentContent += `<div class="index-border" ><strong>   ${formData.get('experimentName6')} </strong></div>`;
        documentContent += `<div class="index-border" id="pageLimit"><strong>   ${formData.get('pageToPage6')} </strong></div>`;
        documentContent += `<div class="index-right-bottom" ><strong>  </strong></div>`;

        documentContent += `<div class="index-left-bottom" id="index-experiment-no"><strong>  7 </strong></div>`;
        documentContent += `<div class="index-border" id="dateSubmission"><strong>   ${formData.get('submissionDate7')} </strong></div>`;
        documentContent += `<div class="index-border" ><strong>   ${formData.get('experimentName7')} </strong></div>`;
        documentContent += `<div class="index-border" id="pageLimit"><strong>   ${formData.get('pageToPage7')} </strong></div>`;
        documentContent += `<div class="index-right-bottom" ><strong>  </strong></div>`;

        documentContent += `<div class="index-left-bottom" id="index-experiment-no"><strong>  8 </strong></div>`;
        documentContent += `<div class="index-border" id="dateSubmission"><strong>   ${formData.get('submissionDate8')} </strong></div>`;
        documentContent += `<div class="index-border" ><strong>   ${formData.get('experimentName8')} </strong></div>`;
        documentContent += `<div class="index-border" id="pageLimit"><strong>   ${formData.get('pageToPage8')} </strong></div>`;
        documentContent += `<div class="index-right-bottom" ><strong>  </strong></div>`;

        documentContent += `<div class="index-left-bottom" id="index-experiment-no"><strong>  9 </strong></div>`;
        documentContent += `<div class="index-border" id="dateSubmission"><strong>   ${formData.get('submissionDate9')} </strong></div>`;
        documentContent += `<div class="index-border" ><strong>   ${formData.get('experimentName9')} </strong></div>`;
        documentContent += `<div class="index-border" id="pageLimit"><strong>   ${formData.get('pageToPage9')} </strong></div>`;
        documentContent += `<div class="index-right-bottom" ><strong>  </strong></div>`;

        documentContent += `<div class="index-left-footer" id="index-experiment-no"><strong>  10 </strong></div>`;
        documentContent += `<div class="index-border-footer" id="dateSubmission"><strong>   ${formData.get('submissionDate10')} </strong></div>`;
        documentContent += `<div class="index-border-footer" ><strong>   ${formData.get('experimentName10')} </strong></div>`;
        documentContent += `<div class="index-border-footer" id="pageLimit"><strong>   ${formData.get('pageToPage10')} </strong></div>`;
        documentContent += `<div class="index-right-footer" ><strong>  </strong></div>`;



        document.getElementById('documentContentIndex').innerHTML = documentContent;
        document.querySelector('.form').style.display = 'none';
        document.getElementById('index-document').style.display = 'block';
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
        format: [780, 1102.52],
    });

    hideButtons();  

    doc.html(document.getElementById('document') || document.getElementById('index-document'), {
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
    
    html2canvas(document.getElementById('document') || document.getElementById('index-document'), {
        
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



