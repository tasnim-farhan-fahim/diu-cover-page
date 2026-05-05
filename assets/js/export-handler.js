// /assets/js/export-handler.js

document.addEventListener('DOMContentLoaded', () => {
    
    const btnImg = document.getElementById('btn-img');
    const btnPdf = document.getElementById('btn-pdf');
    const btnBack = document.getElementById('btn-back');
    const captureArea = document.getElementById('capture-area');

    // Configuration optimized for file size AND quality
    const canvasOptions = {
        scale: 3, // Lowered from 2 to 1.5 to save massive amounts of space
        useCORS: true,
        logging: false
    };

    if (btnBack) {
        btnBack.addEventListener('click', () => {
            window.history.back();
        });
    }

    if (btnImg && captureArea) {
        btnImg.addEventListener('click', () => {
            btnImg.innerHTML = '<i class="fa fa-spinner fa-spin"></i> Generating...';
            
            html2canvas(captureArea, canvasOptions).then(canvas => {
                const link = document.createElement('a');
                link.download = 'DIU_Cover_Page.jpg'; // Changed to .jpg
                
                // Export as JPEG with 80% quality instead of heavy PNG
                link.href = canvas.toDataURL('image/jpeg', 0.8); 
                
                link.click();
                btnImg.innerHTML = '<i class="fa fa-image"></i> Download Image';
            });
        });
    }

    if (btnPdf && captureArea) {
        btnPdf.addEventListener('click', () => {
            btnPdf.innerHTML = '<i class="fa fa-spinner fa-spin"></i> Generating...';
            
            html2canvas(captureArea, canvasOptions).then(canvas => {
                // Compress the image data before feeding it to the PDF
                const imgData = canvas.toDataURL('image/jpeg', 0.8); 
                const { jsPDF } = window.jspdf;
                
                // Standard A4 setup
                const pdf = new jsPDF('p', 'mm', 'a4');
                const pdfWidth = pdf.internal.pageSize.getWidth();
                const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
                
                // Add as JPEG to the PDF to keep the document size tiny
                pdf.addImage(imgData, 'JPEG', 0, 0, pdfWidth, pdfHeight);
                pdf.save('DIU_Cover_Page.pdf');
                
                btnPdf.innerHTML = '<i class="fa fa-file-pdf"></i> Download PDF';
            });
        });
    }
});