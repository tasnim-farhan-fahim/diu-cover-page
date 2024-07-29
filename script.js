document.addEventListener("DOMContentLoaded", function() {
    if (isMobileDevice() && !isDesktopSiteEnabled()) {
        showPopup();
    }
});

function isMobileDevice() {
    return /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

function isDesktopSiteEnabled() {
    // Desktop site mode on mobile typically results in a larger viewport width
    return window.innerWidth > 800 || /Tablet|iPad/i.test(navigator.userAgent);
}

function showPopup() {
    document.getElementById("popup").style.display = "flex";
    document.body.style.overflow = "hidden"; // Disable scrolling when popup is displayed
}

function handlePopupOk() {
    switchToDesktopSite();
    closePopup();
}

function switchToDesktopSite() {
    // This is a naive way to switch to desktop site by reloading the page
    // In real scenarios, you may need a more sophisticated approach
    // Depending on your mobile browser, you might need to instruct the user manually
    alert("Please manually switch to Desktop Site mode in your browser settings.");
    // Reload the page to apply desktop site settings
    location.reload();
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
    document.body.style.overflow = "auto"; // Enable scrolling when popup is closed
}

window.addEventListener('resize', function() {
    if (isMobileDevice() && isDesktopSiteEnabled()) {
        closePopup();
    }
});



// 
function documentResize(){
    const resize = (document.getElementById('document')||document.getElementById('index-document'));
    resize.style.width = "780px";
}

document.querySelectorAll('.form').forEach(form => {
    form.addEventListener('submit', function(event) {
    event.preventDefault();


    const formData = new FormData(event.target);
    let documentContent = '';
    const formId = event.target.id;

    if (formId==='assignment-form'){
        documentContent += `<p class="page-header-text"><strong><span class="page-header-text-underline">ASSIGNMENT</span></strong></p>`;

        documentContent += `<p ><strong> Course Code: </strong> ${formData.get('courseCode')} </p>`;
        documentContent += `<p ><strong> Course Title: </strong> ${formData.get('courseTitle')} </p>`;

        documentContent += `<p ><strong> Topic Name: </strong> ${formData.get('topicName')} </p>`;

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
    else if (formId==='lab-report-form'){
        
        documentContent += `<p class="page-header-text"><strong><span class="page-header-text-underline">LAB REPORT</span></strong></p>`;

        documentContent += `<p ><strong> Course Code:  </strong>${formData.get('courseCode')} </p>`;
        documentContent += `<p ><strong> Course Title:  </strong>${formData.get('courseTitle')} </p>`;

        documentContent += `<p ><strong> Experiment No:  </strong>${formData.get('experimentNo')} </p>`;
        documentContent += `<p ><strong> Experiment Name: </strong> ${formData.get('experimentName')} </p>`;

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
        documentContent += `<p class="category-head-text-style"><strong><span class="category-head-text-style-underline">Submission Date:</strong></span> <span class="dateColor">${formData.get('submissionDate')}</span></p>`;

        document.getElementById('documentContent').innerHTML = documentContent;
        document.querySelector('.form').style.display = 'none';
        document.getElementById('document').style.display = 'block';
    }
    else if (formId==='final-lab-report-form'){
        
        documentContent += `<p class="page-header-text"><strong><span class="page-header-text-underline">FINAL LAB REPORT</span></strong></p>`;

        documentContent += `<p ><strong> Course Code:  </strong>${formData.get('courseCode')} </p>`;
        documentContent += `<p ><strong> Course Title: </strong> ${formData.get('courseTitle')} </p>`;

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


        documentContent += `<div class="index-left-bottom" id="index-header"><strong> Expt. No. </strong></div>`;
        documentContent += `<div class="index-border-header" id="index-header"><strong> Date </strong></div>`;
        documentContent += `<div class="index-border-header" id="index-header"><strong> Name of the Experiment </strong></div>`;
        documentContent += `<div class="index-border-header" id="index-header"><strong> Page No. </strong></div>`;
        documentContent += `<div class="index-right-bottom" id="index-header"><strong> Remarks </strong></div>`;

        documentContent += `<div class="index-left-bottom" id="index-experiment-no"><strong>  1 </strong></div>`;
        documentContent += `<div class="index-border" id="dateSubmission"><strong>    ${formData.get('submissionDate1')} </strong></div>`;
        documentContent += `<div class="index-border" >  ${formData.get('experimentName1')} </div>`;
        documentContent += `<div class="index-border" id="pageLimit"><strong>   ${formData.get('pageToPage1')} </strong></div>`;
        documentContent += `<div class="index-right-bottom" ><strong>  </strong></div>`;

        documentContent += `<div class="index-left-bottom" id="index-experiment-no"><strong>  2 </strong></div>`;
        documentContent += `<div class="index-border" id="dateSubmission"><strong>    ${formData.get('submissionDate2')} </strong></div>`;
        documentContent += `<div class="index-border" >   ${formData.get('experimentName2')} </div>`;
        documentContent += `<div class="index-border" id="pageLimit"><strong>   ${formData.get('pageToPage2')} </strong></div>`;
        documentContent += `<div class="index-right-bottom" ><strong>  </strong></div>`;

        documentContent += `<div class="index-left-bottom" id="index-experiment-no"><strong>  3 </strong></div>`;
        documentContent += `<div class="index-border" id="dateSubmission"><strong>   ${formData.get('submissionDate3')} </strong></div>`;
        documentContent += `<div class="index-border" >   ${formData.get('experimentName3')} </div>`;
        documentContent += `<div class="index-border" id="pageLimit"><strong>   ${formData.get('pageToPage3')} </strong></div>`;
        documentContent += `<div class="index-right-bottom" ><strong>  </strong></div>`;

        documentContent += `<div class="index-left-bottom" id="index-experiment-no"><strong>  4 </strong></div>`;
        documentContent += `<div class="index-border" id="dateSubmission"><strong>   ${formData.get('submissionDate4')} </strong></div>`;
        documentContent += `<div class="index-border" >   ${formData.get('experimentName4')} </div>`;
        documentContent += `<div class="index-border" id="pageLimit"><strong>   ${formData.get('pageToPage4')} </strong></div>`;
        documentContent += `<div class="index-right-bottom" ><strong>  </strong></div>`;

        documentContent += `<div class="index-left-bottom" id="index-experiment-no"><strong>  5 </strong></div>`;
        documentContent += `<div class="index-border" id="dateSubmission"><strong>   ${formData.get('submissionDate5')} </strong></div>`;
        documentContent += `<div class="index-border" >   ${formData.get('experimentName5')} </div>`;
        documentContent += `<div class="index-border" id="pageLimit"><strong>   ${formData.get('pageToPage5')} </strong></div>`;
        documentContent += `<div class="index-right-bottom" ><strong>  </strong></div>`;

        documentContent += `<div class="index-left-bottom" id="index-experiment-no"><strong>  6 </strong></div>`;
        documentContent += `<div class="index-border" id="dateSubmission"><strong>   ${formData.get('submissionDate6')} </strong></div>`;
        documentContent += `<div class="index-border" >   ${formData.get('experimentName6')} </div>`;
        documentContent += `<div class="index-border" id="pageLimit"><strong>   ${formData.get('pageToPage6')} </strong></div>`;
        documentContent += `<div class="index-right-bottom" ><strong>  </strong></div>`;

        documentContent += `<div class="index-left-bottom" id="index-experiment-no"><strong>  7 </strong></div>`;
        documentContent += `<div class="index-border" id="dateSubmission"><strong>   ${formData.get('submissionDate7')} </strong></div>`;
        documentContent += `<div class="index-border" >   ${formData.get('experimentName7')} </div>`;
        documentContent += `<div class="index-border" id="pageLimit"><strong>   ${formData.get('pageToPage7')} </strong></div>`;
        documentContent += `<div class="index-right-bottom" ><strong>  </strong></div>`;

        documentContent += `<div class="index-left-bottom" id="index-experiment-no"><strong>  8 </strong></div>`;
        documentContent += `<div class="index-border" id="dateSubmission"><strong>   ${formData.get('submissionDate8')} </strong></div>`;
        documentContent += `<div class="index-border" >   ${formData.get('experimentName8')} </div>`;
        documentContent += `<div class="index-border" id="pageLimit"><strong>   ${formData.get('pageToPage8')} </strong></div>`;
        documentContent += `<div class="index-right-bottom" ><strong>  </strong></div>`;

        documentContent += `<div class="index-left-bottom" id="index-experiment-no"><strong>  9 </strong></div>`;
        documentContent += `<div class="index-border" id="dateSubmission"><strong>   ${formData.get('submissionDate9')} </strong></div>`;
        documentContent += `<div class="index-border" >   ${formData.get('experimentName9')} </div>`;
        documentContent += `<div class="index-border" id="pageLimit"><strong>   ${formData.get('pageToPage9')} </strong></div>`;
        documentContent += `<div class="index-right-bottom" ><strong>  </strong></div>`;

        documentContent += `<div class="index-left-footer" id="index-experiment-no"><strong>  10 </strong></div>`;
        documentContent += `<div class="index-border-footer" id="dateSubmission"><strong>   ${formData.get('submissionDate10')} </strong></div>`;
        documentContent += `<div class="index-border-footer" >   ${formData.get('experimentName10')} </div>`;
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



document.getElementById('downloadPdf').addEventListener('click', function() {

    documentResize();
    const { jsPDF } = window.jspdf;
    
    html2canvas(document.getElementById('document') || document.getElementById('index-document'), {
        scale: 2,  // Higher scale for better quality before compression
        useCORS: true,
        
        backgroundColor: '#ffffff'
    }).then(canvas => {
        const imgData = canvas.toDataURL('image/jpeg', 3);  // Adjust quality parameter

        const doc = new jsPDF({
            orientation: 'portrait',
            unit: 'px',
            format: [793, 1122.52],
            compress: true  // Enable compression
        });

        const imgWidth = 793.7;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        
        doc.addImage(imgData, 'JPEG', 0, 0, imgWidth, imgHeight);
        doc.save('cover-page.pdf');

    });
});

document.getElementById('downloadImage').addEventListener('click', function() {
    html2canvas(document.getElementById('document') || document.getElementById('index-document'), {
        scale: 4,  // Reduce the scale for better file size management
        useCORS: true,  // Use this option if you have cross-origin images
        backgroundColor: '#ffffff'
    }).then(canvas => {
        // Adjust the canvas dimensions for higher quality
        const imgWidth = 793.7;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;

        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/jpeg', 0.75);  // Set the quality to 0.75 for compression
        link.download = 'cover-page.jpeg';
        link.click();
    });
});

