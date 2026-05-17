// ===== INITIALIZE GOOGLE MAP =====
function initMap() {
    const location = { lat: -6.9175, lng: 107.6062 }; // Koordinat Bandung, Jawa Barat
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: location,
        mapTypeControl: false,
        fullscreenControl: false
    });

    const marker = new google.maps.Marker({
        position: location,
        map: map,
        title: 'Ballroom Masjid Nurul Huda',
        icon: 'http://maps.google.com/mapfiles/ms/icons/yellow-dot.png'
    });

    const infoWindow = new google.maps.InfoWindow({
        content: `
            <div style="color: #2c3e50; font-family: Arial, sans-serif;">
                <h3 style="margin: 10px 0; color: #d4af37;">Ballroom Masjid Nurul Huda</h3>
                <p style="margin: 5px 0; font-size: 14px;">Jl. Ahmad Yani No. 45, Bandung, Jawa Barat 40123</p>
                <p style="margin: 5px 0; font-size: 12px; color: #7f8c8d;">Akad: Jumat, 20 Juni 2025 | 09:00 - 11:00 WIB</p>
                <p style="margin: 5px 0; font-size: 12px; color: #7f8c8d;">Resepsi: Jumat, 20 Juni 2025 | 12:00 - 16:00 WIB</p>
            </div>
        `
    });

    marker.addListener('click', () => {
        infoWindow.open(map, marker);
    });

    infoWindow.open(map, marker);
}

// Call map function when page loads
window.addEventListener('load', initMap);

// ===== COMMENTS SYSTEM =====
const STORAGE_KEY = 'wedding_comments';

// Initialize comments from localStorage
function initializeComments() {
    loadComments();
}

// Get all comments from localStorage
function getComments() {
    const comments = localStorage.getItem(STORAGE_KEY);
    return comments ? JSON.parse(comments) : [];
}

// Save comments to localStorage
function saveComments(comments) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(comments));
}

// Add new comment
function addComment(name, email, text) {
    const comments = getComments();
    const newComment = {
        id: Date.now(),
        name: sanitizeInput(name),
        email: sanitizeInput(email),
        text: sanitizeInput(text),
        date: new Date().toISOString()
    };
    comments.unshift(newComment);
    saveComments(comments);
    return newComment;
}

// Sanitize input to prevent XSS
function sanitizeInput(input) {
    const div = document.createElement('div');
    div.textContent = input;
    return div.innerHTML;
}

// Load and display comments
function loadComments() {
    const comments = getComments();
    const commentsList = document.getElementById('commentsList');

    if (comments.length === 0) {
        commentsList.innerHTML = '<div class="no-comments">Jadilah yang pertama memberikan ucapan dan doa restu! 🤲</div>';
        return;
    }

    commentsList.innerHTML = '';
    comments.forEach(comment => {
        const commentElement = createCommentElement(comment);
        commentsList.appendChild(commentElement);
    });
}

// Create comment HTML element
function createCommentElement(comment) {
    const div = document.createElement('div');
    div.className = 'comment-item';
    
    const date = new Date(comment.date);
    const formattedDate = formatDate(date);

    div.innerHTML = `
        <div class="comment-author"><i class="fas fa-user-circle"></i> ${comment.name}</div>
        <div class="comment-date"><i class="fas fa-clock"></i> ${formattedDate}</div>
        <div class="comment-text">${comment.text}</div>
    `;

    return div;
}

// Format date to Indonesian locale
function formatDate(date) {
    const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        timeZone: 'Asia/Jakarta'
    };
    return date.toLocaleDateString('id-ID', options);
}

// Handle form submission
document.getElementById('commentForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('commenterName').value.trim();
    const email = document.getElementById('commenterEmail').value.trim();
    const text = document.getElementById('commentText').value.trim();

    if (!name || !email || !text) {
        alert('Mohon lengkapi semua kolom!');
        return;
    }

    // Validate email
    if (!isValidEmail(email)) {
        alert('Mohon masukkan email yang valid!');
        return;
    }

    // Add comment
    addComment(name, email, text);

    // Clear form
    this.reset();

    // Show success message
    showSuccessMessage();

    // Reload comments
    loadComments();

    // Scroll to comments
    document.querySelector('.comments-list').scrollIntoView({ behavior: 'smooth' });
});

// Validate email format
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Show success message
function showSuccessMessage() {
    const form = document.getElementById('commentForm');
    const message = document.createElement('div');
    message.style.cssText = `
        background-color: #d4f1d4;
        color: #2c5f2d;
        padding: 15px 20px;
        border-radius: 5px;
        margin-bottom: 20px;
        display: flex;
        align-items: center;
        gap: 10px;
        animation: slideInUp 0.5s ease;
    `;
    message.innerHTML = '<i class="fas fa-check-circle"></i> Ucapan Anda telah dikirim! Terima kasih atas doa restunya 🤲';
    form.parentNode.insertBefore(message, form);

    // Remove message after 5 seconds
    setTimeout(() => {
        message.remove();
    }, 5000);
}

// ===== AUTO-REFRESH COMMENTS (Real-time simulation) =====
setInterval(() => {
    loadComments();
}, 3000); // Refresh setiap 3 detik

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ===== PAGE LOAD =====
document.addEventListener('DOMContentLoaded', function() {
    initializeComments();
    
    // Add animation to elements on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.section-title, .photo-card, .event-card, .contact-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// ===== SAMPLE DATA (OPTIONAL) =====
function addSampleComments() {
    const samples = [
        {
            name: 'Ibu Hj. Salmiyah',
            email: 'ibu.salmiyah@email.com',
            text: 'Alhamdulillah, selamat ya nak Ahmad dan Siti. Semoga menjadi keluarga yang sakinah, mawaddah, wa rahmah. Diberkahi oleh Allah SWT. 🤲'
        },
        {
            name: 'Bpk. H. Suryanto',
            email: 'suryanto.h@email.com',
            text: 'Tabarakallah atas pernikahan kalian. Semoga selalu dalam lindungan Allah dan bahagia selamanya.'
        },
        {
            name: 'Mba Rina',
            email: 'rina.wedding@email.com',
            text: 'Wah, finally! Selamat ya atas pernikahan Ahmad dan Siti. Kalian berdua sangat cocok. Semoga lancar acaranya dan bahagia selamanya! 💕'
        }
    ];

    samples.forEach(sample => {
        addComment(sample.name, sample.email, sample.text);
    });
    loadComments();
}

// Uncomment line below untuk menambahkan sample komentar
// addSampleComments();