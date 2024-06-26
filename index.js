function stopBackgroundSoundAndPlayBum() {
    var audio = document.getElementById("audioElement");
    audio.src = "audio/bum.mp3"; // Mengatur sumber audio ke "bum.mp3"
    audio.removeAttribute("loop");
    audio.stop(); // Menghentikan backsound
    audio.play();
}

var atasTexts = [
    "<b>maaf ya</b>",
    "<b>beneran</b>",
    "<b>gak dimaafin</b>",
    "<b>gak asik luwh</b>",
    "<b>MAAFIN</b>",
];

var bawahTexts = [
    "<b>kemaren mah herey</b>",
    "<b>maafan skrg mah</b>",
    "<b>jg gpp si</b>",
    "<b>memberi dislike</b>",
    "<b>ATAU GUE PUKUL</b>",
]

var currentAtasIndex = 0;
var currentBawahIndex = 0;

function changeText() {
    var atasText = document.getElementById("question");
    var bawahText = document.getElementById("apologize");
    // Update atasText
    if (currentAtasIndex < atasTexts.length - 1) {
        atasText.innerHTML = atasTexts[currentAtasIndex];
        currentAtasIndex = (currentAtasIndex + 1) % atasTexts.length;
    } else {
        // Stop updating atasText when reaching the last text
        atasText.innerHTML = atasTexts[currentAtasIndex];
    }
    
    // Update bawahText
    if (currentBawahIndex < bawahTexts.length - 1) {
        bawahText.innerHTML = bawahTexts[currentBawahIndex];
        currentBawahIndex = (currentBawahIndex + 1) % bawahTexts.length;
    } else {
        // Stop updating bawahText when reaching the last text
        bawahText.innerHTML = bawahTexts[currentBawahIndex];
        stopBackgroundSoundAndPlayBum();
    }
}

var imagePaths = [
    "img/mff.png",
    "img/saya.png",
    "img/mff-1.png",
    "img/gimana.png",
    "img/dislike.png",
    "img/marahasli.png"
];

var currentImageIndex = 0;

// Fungsi untuk mengubah gambar saat tombol "no" diklik
function changeImage() {
    var emoteImg = document.getElementById("emoteImg");
    currentImageIndex++; // Mengatur indeks untuk gambar berikutnya
    if (currentImageIndex < imagePaths.length) {
        emoteImg.src = imagePaths[currentImageIndex];
    } else {
        // Jika sudah mencapai gambar terakhir, matikan event listener
        document.getElementById("noButton").removeEventListener("click", changeImage);
    }
}

// Fungsi untuk memperbesar font tombol "Yes"
function increaseFontSize() {
    var yesButton = document.querySelector('button[onclick*="thankyou.html"]');
    var currentFontSize = parseInt(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = currentFontSize + 10 + "px"; // Increase font size by 10px
}

function playAudio() {
    var audio = document.getElementById("audioElement");
    audio.play();
}

document.getElementById("noButton").addEventListener("click", changeImage);
document.getElementById("noButton").addEventListener("click", increaseFontSize);
document.getElementById("noButton").addEventListener("click", changeText);
document.getElementById("noButton").addEventListener("click", playAudio);

window.onload = function () {
    // URL dari halaman yang Anda ingin deteksi pengalihan
    var targetPage = "bolabali.html";

    // Mendapatkan URL referer
    var referrer = document.referrer;

    // Memeriksa apakah pengguna diarahkan dari halaman target
    if (referrer.includes(targetPage)) {
        alert("1 - 0 btw");
    }
};