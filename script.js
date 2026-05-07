const HTML2PDF_CDN = 'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js';

function loadScript(src) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src;
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
}

async function savePDF() {
  if (typeof html2pdf === 'undefined') {
    await loadScript(HTML2PDF_CDN);
  }

  const page = document.querySelector('.page');
  page.style.border    = 'none';
  page.style.boxShadow = 'none';

  await html2pdf(page, {
    margin:      0,
    filename:    'dan-li-resume.pdf',
    image:       { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 3, useCORS: true },
    jsPDF:       { unit: 'in', format: 'letter', orientation: 'portrait' }
  });

  page.style.border    = '';
  page.style.boxShadow = '';
}
