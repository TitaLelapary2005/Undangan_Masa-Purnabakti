// A. Fungsi Hitungan Mundur (Countdown)

// Atur tanggal acara (Ganti dengan tanggal acara yang sebenarnya: YYYY, MM-1, DD, HH, MM, SS)
// Contoh: 15 Februari 2026, jam 10 pagi
const eventDate = new Date("Feb 15, 2026 10:00:00").getTime();

const countdownFunction = setInterval(function() {
    const now = new Date().getTime();
    const distance = eventDate - now;

    // Perhitungan waktu
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Tampilkan hasil
    document.getElementById("countdown").innerHTML =
        "<div>" + days + "<span>Hari</span></div>" +
        "<div>" + hours + "<span>Jam</span></div>" +
        "<div>" + minutes + "<span>Menit</span></div>" +
        "<div>" + seconds + "<span>Detik</span></div>";

    // Jika hitungan mundur selesai
    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("countdown").innerHTML = "<p>🎉 ACARA SEDANG BERLANGSUNG! 🎉</p>";
    }
}, 1000);


// B. Logika Formulir RSVP (Menampilkan Jumlah Tamu)

const statusSelect = document.getElementById('status');
const jumlahHadirGroup = document.getElementById('jumlah_hadir_group');

// Tambahkan event listener untuk memantau perubahan pada pilihan Status Kehadiran
statusSelect.addEventListener('change', function() {
    if (this.value === 'Hadir') {
        // Jika memilih "Hadir", tampilkan kolom jumlah tamu
        jumlahHadirGroup.style.display = 'block';
    } else {
        // Jika memilih "Tidak Hadir", sembunyikan kolom dan reset nilainya
        jumlahHadirGroup.style.display = 'none';
        document.getElementById('jumlah_hadir').value = 1; 
    }
});