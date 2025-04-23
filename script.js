const linkInput = document.getElementById("link-input");
const qrContainer = document.getElementById("qr-container");
const qrGenerate = document.getElementById("gen-btn");
const downloadBtn = document.getElementById("download-btn");
const qrDownloadLink = document.getElementById("qr-download-link");

qrGenerate.addEventListener("click", () => {
  let regex = /\w+\.\w+/;
  if (regex.test(linkInput.value)) {
    qrContainer.style.display = "block";
    downloadBtn.style.display = "inline-block";
    qrContainer.innerHTML = "";
    let qrcode = new QRCode(qrContainer, {
      text: linkInput.value,
      width: 256,
      height: 256,
      colorDark: "#000000",
      colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.H,
    });
    qrContainer.lastChild.classList.add("qr-img");
    downloadBtn.addEventListener("click", () => {
      const qrCanvas = qrContainer.querySelector("canvas"); // الحصول على الـ canvas
      qrCanvas.toBlob((blob) => {
        const url = URL.createObjectURL(blob); // تحويل الـ Blob إلى رابط صالح
        qrDownloadLink.href = url;
        qrDownloadLink.download = "QR-Code.jpg"; // تحديد الامتداد
        qrDownloadLink.click(); // محاكاة النقر على الرابط لتحميل الصورة
        URL.revokeObjectURL(url); // مسح الرابط بعد التحميل
      }, "image/jpeg");
    });
  } else {
    alert("Please make sure your URL is right");
  }
});
