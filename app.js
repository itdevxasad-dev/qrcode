let qr;

function generateQR() {
  const qrText = document.getElementById("qrText").value;
  const qrColor = document.getElementById("qrColor").value;
  const bgColor = document.getElementById("bgColor").value;

  if (!qrText) {
    alert("Itlimos matn yoki url kiriting");
    return;
  }
  document.getElementById("qrcode").innerHTML = "";

  qr = new QRCode(document.getElementById("qrcode"), {
    text: qrText,
    width: 200,
    height: 200,
    colorDark: qrColor,
    colorLight: bgColor,
    correctLevel:  QRCode.CorrectLevel.H,
  });
}