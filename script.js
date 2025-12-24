// Scrollytelling Animation Controller
class ScrollytellingController {
    constructor() {
        this.steps = document.querySelectorAll('.step');
        this.sections = document.querySelectorAll('.scroll-section');
        this.currentStep = null;
        this.init();
    }

    init() {
        // Set up Intersection Observer for steps
        this.setupStepObserver();

        // Initial animations
        this.animateOnLoad();

        // Smooth scroll for anchor links
        this.setupSmoothScroll();

        // Listen for scroll events
        window.addEventListener('scroll', () => this.handleScroll());
    }

    setupStepObserver() {
        const options = {
            root: null,
            rootMargin: '-40% 0px -40% 0px',
            threshold: 0
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.activateStep(entry.target);
                }
            });
        }, options);

        this.steps.forEach(step => observer.observe(step));
    }

    activateStep(step) {
        // Remove active class from all steps
        this.steps.forEach(s => s.classList.remove('active'));

        // Add active class to current step
        step.classList.add('active');

        // Get the step number
        const stepNumber = parseInt(step.dataset.step);
        this.currentStep = stepNumber;

        // Trigger specific animations based on step
        this.triggerStepAnimation(stepNumber);
    }

    triggerStepAnimation(stepNumber) {
        switch(stepNumber) {
            // Section 1: Timeline (Steps 1-3)
            case 1:
                this.animateTimelineStart();
                break;
            case 2:
                this.animateTimelineProgress();
                break;
            case 3:
                this.animateTimelineComplete();
                break;
            // Section 2: Territory (Steps 4-6)
            case 4:
                this.animateTerritoryStart();
                break;
            case 5:
                this.animateTerritoryExpansion();
                break;
            case 6:
                this.animateTerritoryPeak();
                break;
            // Section 3: Battles (Steps 7-9)
            case 7:
                this.animateBattlesVictories();
                break;
            case 8:
                this.animateBattlesAll();
                break;
            case 9:
                this.animateBattlesCost();
                break;
            // Section 4: Reforms (Steps 10-12)
            case 10:
                this.animateReformsLegal();
                break;
            case 11:
                this.animateReformsModernization();
                break;
            case 12:
                this.animateReformsComplete();
                break;
            // Section 5: Decline (Steps 13-16)
            case 13:
                this.animateDeclineRussia();
                break;
            case 14:
                this.animateDeclineExile();
                break;
            case 15:
                this.animateDeclineHundredDays();
                break;
            case 16:
                this.animateDeclineFinal();
                break;
        }
    }

    // Section 1: Timeline Animations
    animateTimelineStart() {
        const chart = document.getElementById('chart-1');
        chart.classList.add('active');
        const line = chart.querySelector('.timeline-line');
        const events = chart.querySelectorAll('.timeline-event');

        if (line) line.classList.add('active');
        if (events[0]) events[0].classList.add('active');
    }

    animateTimelineProgress() {
        const chart = document.getElementById('chart-1');
        const events = chart.querySelectorAll('.timeline-event');

        events.forEach((event, index) => {
            if (index <= 2) {
                setTimeout(() => event.classList.add('active'), index * 200);
            }
        });
    }

    animateTimelineComplete() {
        const chart = document.getElementById('chart-1');
        const events = chart.querySelectorAll('.timeline-event');

        events.forEach((event, index) => {
            setTimeout(() => event.classList.add('active'), index * 150);
        });
    }

    // Section 2: Territory Animations
    animateTerritoryStart() {
        const chart = document.getElementById('chart-2');
        chart.classList.add('active');
        const france = chart.querySelector('.territory.france');
        if (france) france.classList.add('active');
    }

    animateTerritoryExpansion() {
        const chart = document.getElementById('chart-2');
        const territories = chart.querySelectorAll('.territory');

        territories.forEach((territory, index) => {
            setTimeout(() => territory.classList.add('active'), index * 150);
        });
    }

    animateTerritoryPeak() {
        const chart = document.getElementById('chart-2');
        const expansions = chart.querySelectorAll('.territory.expansion');

        expansions.forEach(territory => {
            territory.classList.add('active');
        });
    }

    // Section 3: Battle Animations
    animateBattlesVictories() {
        const chart = document.getElementById('chart-3');
        chart.classList.add('active');
        const battles = chart.querySelectorAll('.battle-bar');

        // Animate only victories first
        battles.forEach((battle, index) => {
            if (battle.classList.contains('victory')) {
                setTimeout(() => battle.classList.add('animate'), index * 200);
            }
        });
    }

    animateBattlesAll() {
        const chart = document.getElementById('chart-3');
        const battles = chart.querySelectorAll('.battle-bar');

        // Animate all battles
        battles.forEach((battle, index) => {
            setTimeout(() => battle.classList.add('animate'), index * 150);
        });
    }

    animateBattlesCost() {
        const chart = document.getElementById('chart-3');
        const defeats = chart.querySelectorAll('.battle-bar.defeat');

        // Highlight defeats
        defeats.forEach(defeat => {
            defeat.style.transform = 'scaleY(1) scaleX(1.1)';
        });
    }

    // Section 4: Reform Animations
    animateReformsLegal() {
        const chart = document.getElementById('chart-4');
        chart.classList.add('active');
        const cards = chart.querySelectorAll('.reform-card');

        if (cards[0]) cards[0].classList.add('active');
    }

    animateReformsModernization() {
        const chart = document.getElementById('chart-4');
        const cards = chart.querySelectorAll('.reform-card');

        cards.forEach((card, index) => {
            if (index <= 2) {
                setTimeout(() => card.classList.add('active'), index * 200);
            }
        });
    }

    animateReformsComplete() {
        const chart = document.getElementById('chart-4');
        const cards = chart.querySelectorAll('.reform-card');

        cards.forEach((card, index) => {
            setTimeout(() => card.classList.add('active'), index * 150);
        });
    }

    // Section 5: Decline Animations
    animateDeclineRussia() {
        const chart = document.getElementById('chart-5');
        chart.classList.add('active');
        const line = chart.querySelector('.decline-line');
        const points = chart.querySelectorAll('.decline-point');
        const labels = chart.querySelectorAll('.decline-label');

        if (line) line.classList.add('active');
        if (points[0]) points[0].classList.add('active');
        if (labels[0]) labels[0].classList.add('active');
    }

    animateDeclineExile() {
        const chart = document.getElementById('chart-5');
        const points = chart.querySelectorAll('.decline-point');
        const labels = chart.querySelectorAll('.decline-label');

        points.forEach((point, index) => {
            if (index <= 2) {
                setTimeout(() => {
                    point.classList.add('active');
                    if (labels[index]) labels[index].classList.add('active');
                }, index * 200);
            }
        });
    }

    animateDeclineHundredDays() {
        const chart = document.getElementById('chart-5');
        const points = chart.querySelectorAll('.decline-point');
        const labels = chart.querySelectorAll('.decline-label');

        points.forEach((point, index) => {
            if (index <= 3) {
                setTimeout(() => {
                    point.classList.add('active');
                    if (labels[index]) labels[index].classList.add('active');
                }, index * 150);
            }
        });
    }

    animateDeclineFinal() {
        const chart = document.getElementById('chart-5');
        const points = chart.querySelectorAll('.decline-point');
        const labels = chart.querySelectorAll('.decline-label');

        points.forEach((point, index) => {
            setTimeout(() => {
                point.classList.add('active');
                if (labels[index]) labels[index].classList.add('active');
            }, index * 100);
        });
    }

    handleScroll() {
        // Add parallax effect to hero section
        const hero = document.querySelector('.hero');
        if (hero) {
            const scrolled = window.pageYOffset;
            const rate = scrolled * 0.5;
            hero.style.transform = `translate3d(0, ${rate}px, 0)`;
        }

        // Add fade effect to scroll indicator
        const scrollIndicator = document.querySelector('.scroll-indicator');
        if (scrollIndicator) {
            const opacity = 1 - (window.pageYOffset / 500);
            scrollIndicator.style.opacity = Math.max(0, opacity);
        }
    }

    animateOnLoad() {
        // Animate elements when page loads
        const hero = document.querySelector('.hero');
        if (hero) {
            hero.style.opacity = '1';
        }
    }

    setupSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }
}

// Progress Indicator
class ProgressIndicator {
    constructor() {
        this.createProgressBar();
        window.addEventListener('scroll', () => this.updateProgress());
    }

    createProgressBar() {
        const progressBar = document.createElement('div');
        progressBar.id = 'progress-bar';
        progressBar.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 0%;
            height: 4px;
            background: linear-gradient(90deg, #667eea, #764ba2);
            z-index: 9999;
            transition: width 0.2s ease;
        `;
        document.body.appendChild(progressBar);
    }

    updateProgress() {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight - windowHeight;
        const scrolled = window.pageYOffset;
        const progress = (scrolled / documentHeight) * 100;

        const progressBar = document.getElementById('progress-bar');
        if (progressBar) {
            progressBar.style.width = `${progress}%`;
        }
    }
}

// Utility: Lazy load images (if you add images later)
class LazyLoader {
    constructor() {
        this.images = document.querySelectorAll('img[data-src]');
        this.init();
    }

    init() {
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                        imageObserver.unobserve(img);
                    }
                });
            });

            this.images.forEach(img => imageObserver.observe(img));
        } else {
            // Fallback for older browsers
            this.images.forEach(img => {
                img.src = img.dataset.src;
            });
        }
    }
}

// Performance: Debounce function for scroll events
function debounce(func, wait = 10, immediate = true) {
    let timeout;
    return function() {
        const context = this;
        const args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Initialize scrollytelling controller
    const controller = new ScrollytellingController();

    // Initialize progress indicator
    const progress = new ProgressIndicator();

    // Initialize lazy loader
    const lazyLoader = new LazyLoader();

    // Add loaded class to body for CSS transitions
    document.body.classList.add('loaded');

    console.log('Scrollytelling experience initialized! 🚀');
});

// Handle resize events
window.addEventListener('resize', debounce(() => {
    // Recalculate positions if needed
    console.log('Window resized, recalculating...');
}, 250));

// Export for potential external use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { ScrollytellingController, ProgressIndicator, LazyLoader };
}
