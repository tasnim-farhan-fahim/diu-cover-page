document.getElementById('coverForm').addEventListener('submit', function(event) {
    event.preventDefault();


    const formData = new FormData(event.target);
    const entries = formData.entries();
    let documentContent = '';

    documentContent += `<p> Topic Name: <strong>${formData.get('topicName')}</strong></p>`;
    documentContent += `<p> Course Code: <strong>${formData.get('courseCode')}</strong></p>`;
    documentContent += `<p> Course Title: <strong>${formData.get('courseTitle')}</strong></p>`;
    documentContent += `<p>   </p>`;
    documentContent += `<p> <strong>Submitted To:  </strong></p>`;
    documentContent += `<p>                 Name: <strong>${formData.get('submittedToName')}</strong></p>`;
    documentContent += `<p>                 Designation: <strong>${formData.get('submittedToDesignation')}</strong></p>`;
    documentContent += `<p>                 Department: <strong>${formData.get('submittedToDepartment')}</strong></p>`;
    documentContent += `<p>                 <strong>Daffodil International University</strong></p>`;
    documentContent += `<p>   </p>`;
    documentContent += `<p><strong> Submitted By:  </strong></p>`;
    documentContent += `<p>                 Name: <strong>${formData.get('submittedByName')} </strong></p>`;
    documentContent += `<p>                 ID: <strong>${formData.get('studentId')}</strong></p>`;
    documentContent += `<p>                 Section: <strong>${formData.get('section')}</strong></p>`;
    documentContent += `<p>                 Semester: <strong>${formData.get('semester')}</strong></p>`;
    documentContent += `<p>                 Department: <strong>${formData.get('submittedByDepartment')}</strong></p>`;
    documentContent += `<p>                 <strong>Daffodil International University  </strong></p>`;
    documentContent += `<p>   </p>`;
    documentContent += `<p> Submission Date: <strong>${formData.get('submissionDate')}</strong></p>`;

    document.getElementById('documentContent').innerHTML = documentContent;
    document.querySelector('.form').style.display = 'none';
    document.getElementById('document').style.display = 'block';
});

document.getElementById('downloadPdf').addEventListener('click', function() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF('p', 'pt', 'a4');


    doc.html(document.getElementById('document'), {
        callback: function (doc) {
            doc.save('cover-page.pdf');
        },
        x: 10,
        y: 10
    });
});

document.getElementById('downloadImage').addEventListener('click', function() {
    html2canvas(document.getElementById('document')).then(canvas => {
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/jpeg');
        link.download = 'cover-page.jpg';
        link.click();
    });
});



// Assuming you have an event listener for form submission
document.getElementById('submissionDate').addEventListener('blur', function() {
    const inputDate = this.value; // Get the user-entered date (YYYY-MM-DD format)
    const formattedDate = formatDate(inputDate); // Format the date

    // Update the input value with the formatted date
    this.value = formattedDate;
});

// Function to format the date (YYYY-MM-DD to Month Day, Year)
function formatDate(inputDate) {
    const dateParts = inputDate.split('-');
    const year = dateParts[0];
    const month = new Date(inputDate).toLocaleString('default', { month: 'long' });
    const day = dateParts[2];

    return `${month} ${day}, ${year}`;
}
