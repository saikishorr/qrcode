function generateQRCode() {
  const url = document.getElementById("urlInput").value.trim();
  const previewImg = document.getElementById("previewImg");
  const downloadBtn = document.getElementById("downloadBtn");
  const canvas = document.getElementById("hiddenCanvas");

  previewImg.style.display = "none";
  downloadBtn.style.display = "none";

  if (!url) {
    alert("Please enter a URL.");
    return;
  }

  // Generate high-resolution QR code on canvas (600x600)
  const size = 600;
  canvas.width = size;
  canvas.height = size;

  QRCode.toCanvas(canvas, url, { width: size, errorCorrectionLevel: 'H' }, function (error) {
    if (error) {
      console.error(error);
      alert("Error generating QR code.");
      return;
    }

    // Convert to image for preview (small size)
    const dataURL = canvas.toDataURL("image/png");
    previewImg.src = dataURL;
    previewImg.style.display = "inline-block";

    // Set download link to high-res image
    downloadBtn.href = canvas.toDataURL("image/png");
    downloadBtn.style.display = "inline-block";
    downloadBtn.textContent = "Download QR Code";
  });
}
