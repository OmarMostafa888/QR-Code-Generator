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
    qrContainer.firstChild.remove();
    qrContainer.lastChild.remove();
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
      console.log(document.querySelector(".qr-img"));
      qrDownloadLink.href = document.querySelector(".qr-img").src;
    });
  } else {
    alert("Please make sure your URL is right");
  }
});
