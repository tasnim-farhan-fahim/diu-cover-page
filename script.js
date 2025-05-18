function documentResize(){
    const resize = (document.getElementById('document')||document.getElementById('index-document'));
    resize.style.width = "780px";
}
// Prevent inspect with the code below   

document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
  });

// ------------------------->
// let page = document.getElementById('document-holder');

// edit.addEventListener('click', function() {
//     display()
// });
// function display() {
//     section.style.display = "block";
//     page.style.display = "none";
// }
//-------------------------->

document.querySelectorAll('.form').forEach(form => {
    form.addEventListener('submit', function(event) {
    event.preventDefault();
    form.target = '_parent';

    const formData = new FormData(event.target);
    let documentContent = '';
    const formId = event.target.id;

    if(formId==='assignment-form' || formId==='lab-report-form' || formId==='final-lab-report-form'){
        if (formId==='assignment-form'){
        documentContent += `<p class="page-header-text"><strong><span class="page-header-text-underline"> ASSIGNMENT </span></strong></p>`;

        documentContent += `<p ><strong> Course Code: </strong> ${formData.get('courseCode')} </p>`;
        documentContent += `<p ><strong> Course Title: </strong> ${formData.get('courseTitle')} </p>`;

        documentContent += `<p ><strong> Topic Name: </strong> ${formData.get('topicName')} </p>`;

        }
        else if (formId==='lab-report-form' || formId==='final-lab-report-form'){
            if(formId==='lab-report-form'){
                documentContent += `<p class="page-header-text"><strong><span class="page-header-text-underline">LAB REPORT</span></strong></p>`;
                documentContent += `<p ><strong> Experiment No:  </strong>${formData.get('experimentNo')} </p>`;
                documentContent += `<p ><strong> Experiment Name: </strong> ${formData.get('experimentName')} </p>`;
            }
            else if (formId==='final-lab-report-form'){
                documentContent += `<p class="page-header-text"><strong><span class="page-header-text-underline">FINAL LAB REPORT</span></strong></p>`;
            }
            documentContent += `<p ><strong> Course Code:  </strong>${formData.get('courseCode')} </p>`;
            documentContent += `<p ><strong> Course Title: </strong> ${formData.get('courseTitle')} </p>`;
        }

        documentContent += `<p>   </p>`;
        documentContent += `<p class="category-head-text-style"><strong><span class="category-head-text-style-underline">Submitted To: </span></strong></p>`;
        documentContent += `<p class="space"><strong>Name:  </strong>${formData.get('submittedToName')} </p>`;
        documentContent += `<p class="space"><strong>Designation:  </strong>${formData.get('submittedToDesignation')} </p>`;
        documentContent += `<p class="space"><strong>Department:  </strong>${formData.get('submittedToDepartment')} </p>`;
        documentContent += `<p class="space"><strong> Daffodil International University </strong></p>`;
        documentContent += `<p>   </p>`;
        documentContent += `<p class="category-head-text-style"><strong><span class="category-head-text-style-underline">Submitted By: </strong></span></p>`;
        documentContent += `<p class="space"><strong>Name:  </strong> ${formData.get('submittedByName')}  </p>`;
        documentContent += `<p class="space"><strong>ID:  </strong> ${formData.get('studentId')} </p>`;
        documentContent += `<p class="space"><strong>Section:  </strong> ${formData.get('section')} </p>`;
        documentContent += `<p class="space"><strong>Semester:  </strong> ${formData.get('semester')} </p>`;
        documentContent += `<p class="space"><strong>Department:  </strong> ${formData.get('submittedByDepartment')} </p>`;
        documentContent += `<p class="space"><strong> Daffodil International University </strong></p>`;
        documentContent += `<p>   </p>`;
        documentContent += `<p class="category-head-text-style"><strong><span class="category-head-text-style-underline">Submission Date:</strong></span> <span class="dateColor">${formData.get('submissionDate')}</span> </p>`;

        document.getElementById('documentContent').innerHTML = documentContent;
        document.querySelector('.form').style.display = 'none';
        document.getElementById('document').style.display = 'block';
    
    }
    
    else if (formId==='lab-index-form'){


        // Add table headers
        documentContent += `
        <div class="index-left-bottom" id="index-header"><strong> Expt. No. </strong></div>
        <div class="index-border-header" id="index-header"><strong> Date </strong></div>
        <div class="index-border-header" id="index-header"><strong> Name of the Experiment </strong></div>
        <div class="index-border-header" id="index-header"><strong> Page No. </strong></div>
        <div class="index-right-bottom" id="index-header"><strong> Remarks </strong></div>
        `;

        // Add experiment rows
        for (let i = 1; i <= 10; i++) {
        const isFooter = i === 10;
        const leftClass = isFooter ? 'index-left-footer' : 'index-left-bottom';
        const borderClass = isFooter ? 'index-border-footer' : 'index-border';
        const rightClass = isFooter ? 'index-right-footer' : 'index-right-bottom';

        documentContent += `
            <div class="${leftClass}" id="index-experiment-no"><strong> ${i} </strong></div>
            <div class="${borderClass}" id="dateSubmission"><strong> ${formData.get('submissionDate' + i)} </strong></div>
            <div class="${borderClass}"> ${formData.get('experimentName' + i)} </div>
            <div class="${borderClass}" id="pageLimit"><strong> ${formData.get('pageToPage' + i)} </strong></div>
            <div class="${rightClass}"><strong> </strong></div>`;
        }

        // Final rendering
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



document.getElementById('downloadPdf').addEventListener('click', function() {

    documentResize();
    const { jsPDF } = window.jspdf;
    
    html2canvas(document.getElementById('document') || document.getElementById('index-document'), {
        scale: 4,  // Higher scale for better quality before compression
        useCORS: true,
        
        backgroundColor: '#ffffff'
    }).then(canvas => {
        const imgData = canvas.toDataURL('image/jpeg', 3);  // Adjust quality parameter

        const doc = new jsPDF({
            orientation: 'portrait',
            unit: 'px',
            format: [780, 1102.92],
            compress: true  // Enable compression
        });

        const imgWidth = 780;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        
        doc.addImage(imgData, 'JPEG', 0, 0, imgWidth, imgHeight);
        doc.save('cover-page.pdf');

    });
});
// -------------------------------------------------------->
// document.getElementById('downloadDocx').addEventListener('click', function() {
//     const contentElement = document.getElementById('document') || document.getElementById('index-document');
//     if (!contentElement) {
//         console.error('Content element not found');
//         return;
//     }
//     const content = contentElement.innerHTML;
//     const converted = htmlDocx.asBlob(content);
//     const link = document.createElement('a');
//     link.href = URL.createObjectURL(converted);
//     link.download = 'cover-page.docx';
//     link.click();
// });

// -------------------------------------------------------->
document.getElementById('downloadImage').addEventListener('click', function() {
    html2canvas(document.getElementById('document') || document.getElementById('index-document'), {
        scale: 4,  // Reduce the scale for better file size management
        useCORS: true,  // Use this option if you have cross-origin images
        backgroundColor: '#ffffff'
    }).then(canvas => {
        // Adjust the canvas dimensions for higher quality
        const imgWidth = 780;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;

        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/jpeg', 0.75);  // Set the quality to 0.75 for compression
        link.download = 'cover-page.jpeg';
        link.click();
    });
});

