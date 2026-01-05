
var form = document.getElementById("my-form");

async function handleSubmit(event) {
event.preventDefault(); 
var status = document.getElementById("my-form-status");
var data = new FormData(event.target);

fetch("https://formspree.io/f/mvgernzw", {
method: "POST",
body: data,
headers: {
'Accept': 'application/json'
}
}).then(response => {
if (response.ok) {
alert("Pesan berhasil dikirim!"); 
form.reset(); 
} else {
alert("Oops! Ada masalah saat mengirim.");
}
}).catch(error => {
alert("Oops! Terjadi kesalahan koneksi.");
});
}

form.addEventListener("submit", handleSubmit)
