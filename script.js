// Mobile Navigation Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Hero reveal effect
window.addEventListener('load', function() {
    const heroContent = document.querySelector('.hero-content');
    
    if (!heroContent) {
        console.log('Hero content not found');
        return;
    }
    
    console.log('Hero content found, setting up reveal...');
    
    let revealed = false;
    
    function showHero() {
        if (revealed) return;
        console.log('Revealing hero content...');
        heroContent.classList.add('show');
        revealed = true;
    }
    
    // Показать при скролле
    window.addEventListener('scroll', function() {
        if (window.scrollY > 20) {
            showHero();
        }
    });
    
    // Показать при движении мыши
    document.addEventListener('mousemove', showHero, { once: true });
    
    // Показать при клике
    document.addEventListener('click', showHero, { once: true });
    
    // Показать автоматически через 1.5 секунды
    setTimeout(showHero, 1500);
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 80;
            const targetPosition = target.offsetTop - offset;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(0, 0, 0, 0.98)';
        navbar.style.padding = '15px 0';
    } else {
        navbar.style.background = 'rgba(0, 0, 0, 0.95)';
        navbar.style.padding = '20px 0';
    }
});

// Contact Form Handler
const contactForm = document.getElementById('contactForm');
const bookingDateInput = document.getElementById('booking-date');
const dateError = document.getElementById('date-error');

// Set minimum date to today
const today = new Date();
bookingDateInput.min = today.toISOString().split('T')[0];

// Validate that selected date is Saturday or Sunday
bookingDateInput.addEventListener('change', function() {
    const selectedDate = new Date(this.value + 'T00:00:00');
    const dayOfWeek = selectedDate.getDay(); // 0 = Sunday, 6 = Saturday
    
    if (dayOfWeek !== 0 && dayOfWeek !== 6) {
        dateError.style.display = 'block';
        this.setCustomValidity('Seleziona sabato o domenica');
        this.style.borderColor = 'red';
    } else {
        dateError.style.display = 'none';
        this.setCustomValidity('');
        this.style.borderColor = '';
    }
});

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const bookingDate = document.getElementById('booking-date').value;
    const bookingTime = document.getElementById('booking-time').value;
    const service = document.getElementById('service').value;
    const message = document.getElementById('message').value;
    
    // Validate date one more time
    const selectedDate = new Date(bookingDate + 'T00:00:00');
    const dayOfWeek = selectedDate.getDay();
    
    if (dayOfWeek !== 0 && dayOfWeek !== 6) {
        alert('⚠️ Puoi prenotare solo per sabato o domenica!');
        return;
    }
    
    // Format the date
    const dateObj = new Date(bookingDate);
    const formattedDate = dateObj.toLocaleDateString('it-IT', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });
    
    // Show success message
    alert(`✅ Grazie ${name}!\n\nLa tua prenotazione è confermata:\n📅 ${formattedDate}\n⏰ Ore ${bookingTime}\n🏍️ Servizio: ${service}\n\nTi contatteremo presto! 🏁`);
    
    // Reset form
    contactForm.reset();
    dateError.style.display = 'none';
    
    // In a real application, you would use fetch or XMLHttpRequest to send data:
    /*
    fetch('your-api-endpoint', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name,
            email,
            phone,
            bookingDate,
            bookingTime,
            service,
            message
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        alert('Prenotazione inviata con successo!');
        contactForm.reset();
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('Errore nell\'invio della prenotazione. Riprova più tardi.');
    });
    */
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections and cards
document.addEventListener('DOMContentLoaded', () => {
    const elementsToAnimate = document.querySelectorAll(
        '.service-card, .stat, .day-card, .gallery-item, .contact-item'
    );
    
    elementsToAnimate.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Add loading effect to buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        if (!this.classList.contains('loading')) {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 100);
        }
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero-content');
    const scrolled = window.pageYOffset;
    if (hero) {
        if (scrolled < window.innerHeight) {
            hero.style.transform = `translate(-50%, -50%) translateY(${scrolled * 0.5}px)`;
            hero.style.opacity = 1 - (scrolled / 700);
        } else {
            // Сбрасываем transform когда секция вне зоны видимости
            hero.style.transform = 'translate(-50%, -50%)';
            hero.style.opacity = 0;
        }
    }
});

// Stats counter animation
const animateCounter = (element, target, duration) => {
    let current = 0;
    const increment = target / (duration / 16);
    
    const updateCounter = () => {
        current += increment;
        if (current < target) {
            element.textContent = Math.floor(current).toLocaleString();
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target.toLocaleString() + '+';
        }
    };
    
    updateCounter();
};

// Trigger counter animation when stats section is visible
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
            const statNumber = entry.target.querySelector('h4');
            if (statNumber && statNumber.textContent.includes('6,338')) {
                animateCounter(statNumber, 6338, 2000);
                entry.target.classList.add('animated');
            }
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat').forEach(stat => {
    statsObserver.observe(stat);
});

// ============================================
// SOCIAL MEDIA FOLLOWERS UPDATE
// ============================================
// ⚠️ ВАЖНО: Автоматическое получение невозможно из-за:
// 1. Instagram API - требует бизнес-аккаунт + Facebook Developer App
// 2. TikTok API - только для партнеров, закрытый доступ
// 3. CORS блокирует прямые запросы из браузера
// 4. Веб-скрейпинг нарушает Terms of Service
//
// Решение: Обновлять числа вручную
// ============================================

function updateFollowerCount() {
    const followerElement = document.getElementById('follower-count');
    if (followerElement) {
        // ⬇️ ОБНОВЛЯЙТЕ ЭТИ ЧИСЛА ВРУЧНУЮ ⬇️
        const instagramFollowers = 6338;  // @the_doctoracademy_asd
        const tiktokFollowers = 6093;     // @thedoctoracademy46
        // ⬆️ ОБНОВЛЯЙТЕ ЭТИ ЧИСЛА ВРУЧНУЮ ⬆️
        
        const totalFollowers = instagramFollowers + tiktokFollowers;
        
        // Форматирование С плюсом
        followerElement.textContent = totalFollowers.toLocaleString('it-IT') + '+';
        
        console.log('📊 Total Followers: ' + totalFollowers.toLocaleString('it-IT') + '+');
    }
}

updateFollowerCount();

console.log('The Doctor Academy website loaded successfully! 🏁');
