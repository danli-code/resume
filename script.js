function savePDF() {
  const page = document.querySelector('.page');
  page.style.border    = 'none';
  page.style.boxShadow = 'none';
  html2pdf(page, {
    margin:      0,
    filename:    'dan-li-resume.pdf',
    image:       { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 3, useCORS: true },
    jsPDF:       { unit: 'in', format: 'letter', orientation: 'portrait' }
  }).then(() => {
    page.style.border    = '';
    page.style.boxShadow = '';
  });
}
