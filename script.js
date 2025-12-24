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
            case 1:
                this.animateChart1();
                break;
            case 2:
                this.animateChart1Enhanced();
                break;
            case 3:
                this.animateChart1Final();
                break;
            case 4:
                this.animateChart2Start();
                break;
            case 5:
                this.animateChart2Growth();
                break;
            case 6:
                this.animateChart2Final();
                break;
            case 7:
                this.animateChart3Start();
                break;
            case 8:
                this.animateChart3Network();
                break;
            case 9:
                this.animateChart3Complete();
                break;
        }
    }

    // Chart 1 Animations (Circle)
    animateChart1() {
        const chart = document.getElementById('chart-1');
        chart.classList.add('active');
    }

    animateChart1Enhanced() {
        const chart = document.getElementById('chart-1');
        const circle = chart.querySelector('.pulse-circle');
        if (circle) {
            circle.setAttribute('r', '100');
        }
    }

    animateChart1Final() {
        const chart = document.getElementById('chart-1');
        const circle = chart.querySelector('.pulse-circle');
        if (circle) {
            circle.setAttribute('r', '120');
            circle.setAttribute('fill', '#764ba2');
        }
    }

    // Chart 2 Animations (Bar Chart)
    animateChart2Start() {
        const chart = document.getElementById('chart-2');
        chart.classList.add('active');
        const bars = chart.querySelectorAll('.bar');
        bars.forEach((bar, index) => {
            setTimeout(() => {
                bar.classList.add('animate');
            }, index * 100);
        });
    }

    animateChart2Growth() {
        const chart = document.getElementById('chart-2');
        const bars = chart.querySelectorAll('.bar');
        bars.forEach((bar, index) => {
            bar.style.setProperty('--height', `${60 + (index * 10)}%`);
        });
    }

    animateChart2Final() {
        const chart = document.getElementById('chart-2');
        const bars = chart.querySelectorAll('.bar');
        const heights = ['70%', '85%', '95%', '100%'];
        bars.forEach((bar, index) => {
            bar.style.setProperty('--height', heights[index]);
        });
    }

    // Chart 3 Animations (Network)
    animateChart3Start() {
        const chart = document.getElementById('chart-3');
        chart.classList.add('active');
        const nodes = chart.querySelectorAll('.node');
        // Animate center node first
        nodes[0].classList.add('active');
    }

    animateChart3Network() {
        const chart = document.getElementById('chart-3');
        const nodes = chart.querySelectorAll('.node');
        // Animate all nodes
        nodes.forEach((node, index) => {
            setTimeout(() => {
                node.classList.add('active');
            }, index * 150);
        });
    }

    animateChart3Complete() {
        const chart = document.getElementById('chart-3');
        const nodes = chart.querySelectorAll('.node');
        // All nodes active with enhanced effect
        nodes.forEach(node => {
            node.classList.add('active');
            node.style.transform = 'translate(-50%, -50%) scale(1.1)';
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
