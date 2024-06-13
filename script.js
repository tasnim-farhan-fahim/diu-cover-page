document.getElementById('coverForm').addEventListener('submit', function(event) {
    event.preventDefault();


    const formData = new FormData(event.target);
    let documentContent = '';

    //documentContent += `<p class="assignment"> ${formData.get('pageType').toUpperCase()} </p>`;
    documentContent += `<p id="text-gap" class="assignment">ASSIGNMENT</p>`;
    documentContent += `<p id="text-gap" > Course Code:  ${formData.get('courseCode')} </p>`;
    documentContent += `<p id="text-gap" > Course Title:  ${formData.get('courseTitle')} </p>`;
    documentContent += `<p id="text-gap" > Topic Name:  ${formData.get('topicName')} </p>`;
    documentContent += `<p>   </p>`;
    documentContent += `<p id="text-gap" class="underline">Submitted To: </p>`;
    documentContent += `<p id="text-gap" class="space">Name:  ${formData.get('submittedToName')} </p>`;
    documentContent += `<p id="text-gap" class="space">Designation:  ${formData.get('submittedToDesignation')} </p>`;
    documentContent += `<p id="text-gap" class="space">Department:  ${formData.get('submittedToDepartment')} </p>`;
    documentContent += `<p id="text-gap" class="space"> Daffodil International University </p>`;
    documentContent += `<p>   </p>`;
    documentContent += `<p id="text-gap" class="underline">Submitted By: </p>`;
    documentContent += `<p id="text-gap" class="space">Name:  ${formData.get('submittedByName')}  </p>`;
    documentContent += `<p id="text-gap" class="space">ID:  ${formData.get('studentId')} </p>`;
    documentContent += `<p id="text-gap" class="space">Section:  ${formData.get('section')} </p>`;
    documentContent += `<p id="text-gap" class="space">Semester:  ${formData.get('semester')} </p>`;
    documentContent += `<p id="text-gap" class="space">Department:  ${formData.get('submittedByDepartment')} </p>`;
    documentContent += `<p id="text-gap" class="space"> Daffodil International University   </p>`;
    documentContent += `<p>   </p>`;
    documentContent += `<p id="text-gap" class="underline">Submission Date: ${formData.get('submissionDate')} </p>`;
    documentContent += `<p class="tradeMark">z2f</p>`;

    document.getElementById('documentContent').innerHTML = documentContent;
    document.querySelector('.form').style.display = 'none';
    document.getElementById('document').style.display = 'block';
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
    document.getElementById('downloadPdf').style.display = 'none';
    document.getElementById('downloadImage').style.display = 'none';
}

function showButtons() {
    document.getElementById('downloadPdf').style.display = 'block';
    document.getElementById('downloadImage').style.display = 'block';
}

document.getElementById('downloadPdf').addEventListener('click', function() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF('p', 'pt', 'a4');
    hideButtons();
    doc.html(document.getElementById('document'), {
        callback: function (doc) {
            doc.save('cover-page.pdf');
            showButtons();
        },
        x: 10,
        y: 10,
        width: 575,
        windowWidth: 800,
        html2canvas: {
            backgroundColor: '#ffffff'  // Set background color to white
        }
    });
});



document.getElementById('downloadImage').addEventListener('click', function() {
    hideButtons();  // Hide buttons before generating the image

    html2canvas(document.getElementById('document'), {
        scale: 4,  // Increase the scale for higher quality
        useCORS: true,  // Use this option if you have cross-origin images
        backgroundColor: '#ffffff'
    }).then(canvas => {
        // Adjust the canvas dimensions for higher quality
        const imgWidth = canvas.width;
        const imgHeight = canvas.height;

        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/jpeg', 0.7);  // Set the quality to 1.0
        link.download = 'cover-page.jpg';
        link.click();

        showButtons();  // Show buttons after generating the image
    });
});



