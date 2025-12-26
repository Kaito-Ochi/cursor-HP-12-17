/**
 * kaonavi universe Clone - JavaScript
 * スプラッシュアニメーション、パララックス効果、スクロールアニメーション
 */

document.addEventListener('DOMContentLoaded', () => {
    // 初期化
    initSplashScreen();
    initParallax();
    initScrollAnimations();
    initStarField();
    initSmoothScroll();
    initHamburgerMenu();
});

/**
 * ハンバーガーメニューの初期化
 */
function initHamburgerMenu() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    
    if (!hamburger || !navLinks) return;
    
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    // メニューリンクをクリックしたらメニューを閉じる
    const links = navLinks.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
    
    // メニュー外をクリックしたらメニューを閉じる
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });
}

/**
 * スプラッシュスクリーンの初期化と制御
 */
function initSplashScreen() {
    const splash = document.getElementById('splash');
    const mainContent = document.getElementById('main-content');
    
    // スプラッシュがない場合（about.htmlなど）は直接表示
    if (!splash) {
        if (mainContent) {
            mainContent.classList.remove('hidden');
        }
        triggerHeroAnimations();
        return;
    }
    
    // スプラッシュアニメーション完了後にメインコンテンツを表示
    setTimeout(() => {
        splash.classList.add('fade-out');
        
        setTimeout(() => {
            splash.style.display = 'none';
            mainContent.classList.remove('hidden');
            
            // ヒーローセクションのアニメーションをトリガー
            triggerHeroAnimations();
        }, 800);
    }, 3000);
}

/**
 * ヒーローセクションのアニメーションをトリガー
 */
function triggerHeroAnimations() {
    // CSSアニメーションは自動的に開始されるが、
    // 追加のエフェクトをここで制御可能
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '1';
    }
}

/**
 * パララックス効果の初期化
 */
function initParallax() {
    const heroSection = document.querySelector('.hero');
    const planets = document.querySelectorAll('.hero-planet');
    const starsLayers = document.querySelectorAll('.stars-layer');
    const nebula = document.querySelector('.nebula');
    const penroseContainer = document.querySelector('.penrose-container');
    
    // Story装飾要素
    const decoStars = document.querySelectorAll('.deco-star');
    const decoLights = document.querySelectorAll('.deco-light');
    const decoPlanets = document.querySelectorAll('.deco-planet');
    const decoGlows = document.querySelectorAll('.deco-glow');
    
    // マウス移動によるパララックス
    document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX / window.innerWidth - 0.5;
        const mouseY = e.clientY / window.innerHeight - 0.5;
        
        // 背景惑星のパララックス
        planets.forEach((planet, index) => {
            const speed = (index + 1) * 20;
            const x = mouseX * speed;
            const y = mouseY * speed;
            planet.style.transform = `translate(${x}px, ${y}px)`;
        });
        
        // ペンローズのパララックス（ゆっくり追従）
        if (penroseContainer) {
            const x = mouseX * 20;
            const y = mouseY * 20;
            penroseContainer.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
        }
        
        // 星のパララックス
        starsLayers.forEach((layer, index) => {
            const speed = (index + 1) * 10;
            const x = mouseX * speed;
            const y = mouseY * speed;
            layer.style.transform = `translate(${x}px, ${y}px)`;
        });
        
        // ネビュラのパララックス
        if (nebula) {
            const x = mouseX * 30;
            const y = mouseY * 30;
            nebula.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
        }
        
        // Story装飾のパララックス
        decoStars.forEach((star, index) => {
            const speed = (index + 1) * 15;
            const x = mouseX * speed;
            const y = mouseY * speed;
            star.style.transform = `translate(${x}px, ${y}px)`;
        });
        
        decoLights.forEach((light, index) => {
            const speed = (index + 1) * 25;
            const x = mouseX * speed;
            const y = mouseY * speed;
            light.style.transform = `translate(${x}px, ${y}px)`;
        });
        
        decoPlanets.forEach((planet, index) => {
            const speed = (index + 1) * 20;
            const x = mouseX * speed;
            const y = mouseY * speed;
            planet.style.transform = `translate(${x}px, ${y}px)`;
        });
        
        decoGlows.forEach((glow, index) => {
            const speed = (index + 1) * 10;
            const x = mouseX * speed;
            const y = mouseY * speed;
            glow.style.transform = `translate(${x}px, ${y}px) scale(1)`;
        });
    });
    
    // スクロールによるパララックス
    window.addEventListener('scroll', () => {
        const scrollY = window.pageYOffset;
        
        // ヒーローセクションのパララックス
        if (heroSection) {
            const heroContent = document.querySelector('.hero-content');
            if (heroContent) {
                heroContent.style.opacity = 1 - scrollY / 600;
            }
            
            // ペンローズのスクロールパララックス
            if (penroseContainer) {
                const scale = 1 + scrollY * 0.0003;
                const opacity = 1 - scrollY / 800;
                const rotation = scrollY * 0.02;
                penroseContainer.style.transform = `translate(-50%, calc(-50% + ${scrollY * 0.08}px)) scale(${Math.min(scale, 1.1)}) rotate(${rotation}deg)`;
                penroseContainer.style.opacity = Math.max(opacity, 0);
            }
        }
        
        // 背景惑星のスクロールパララックス
        planets.forEach((planet, index) => {
            const speed = (index + 1) * 0.1;
            planet.style.marginTop = `${scrollY * speed}px`;
        });
        
        // 各セクションの背景パララックス
        document.querySelectorAll('.section').forEach(section => {
            const rect = section.getBoundingClientRect();
            const sectionTop = rect.top + scrollY;
            const offset = (scrollY - sectionTop) * 0.1;
            
            const bg = section.querySelector('.section-bg, .universe-bg, .performer-bg');
            if (bg) {
                bg.style.transform = `translateY(${offset}px)`;
            }
        });
    });
}

/**
 * スクロールアニメーションの初期化
 */
function initScrollAnimations() {
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // スタッガードアニメーション
                const siblings = entry.target.parentElement.querySelectorAll('.fade-in');
                siblings.forEach((sibling, index) => {
                    setTimeout(() => {
                        sibling.classList.add('visible');
                    }, index * 150);
                });
            }
        });
    }, observerOptions);
    
    fadeElements.forEach(el => observer.observe(el));
    
    // スライドインアニメーション（左下から）
    const slideElements = document.querySelectorAll('.slide-in-left');
    
    const slideObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    });
    
    slideElements.forEach(el => slideObserver.observe(el));
    
    // セクションタイトルの特別なアニメーション
    const sectionHeaders = document.querySelectorAll('.section-header, .universe-header, .strategy-header, .invest-header, .performer-content, .ceo-content');
    
    const headerObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 1s var(--transition-smooth) forwards';
            }
        });
    }, {
        threshold: 0.2
    });
    
    sectionHeaders.forEach(header => headerObserver.observe(header));
}

/**
 * 動的な星空の生成
 */
function initStarField() {
    const splashStars = document.querySelector('.splash-stars');
    const heroStars = document.querySelector('.hero-bg');
    
    // スプラッシュ画面の流れ星
    if (splashStars) {
        createShootingStars(splashStars, 3);
    }
    
    // ヒーローセクションの流れ星
    if (heroStars) {
        createShootingStars(heroStars, 5);
    }
    
    // 動的な星の生成
    createDynamicStars();
}

/**
 * 流れ星の生成
 */
function createShootingStars(container, count) {
    for (let i = 0; i < count; i++) {
        const star = document.createElement('div');
        star.className = 'shooting-star';
        star.style.cssText = `
            position: absolute;
            width: 100px;
            height: 1px;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent);
            top: ${Math.random() * 50}%;
            left: ${Math.random() * 100}%;
            transform: rotate(-45deg);
            animation: shootingStar ${3 + Math.random() * 4}s linear infinite;
            animation-delay: ${Math.random() * 5}s;
            opacity: 0;
        `;
        container.appendChild(star);
    }
    
    // 流れ星のアニメーションスタイルを追加
    if (!document.getElementById('shooting-star-styles')) {
        const style = document.createElement('style');
        style.id = 'shooting-star-styles';
        style.textContent = `
            @keyframes shootingStar {
                0% {
                    opacity: 0;
                    transform: translateX(0) translateY(0) rotate(-45deg);
                }
                10% {
                    opacity: 1;
                }
                90% {
                    opacity: 1;
                }
                100% {
                    opacity: 0;
                    transform: translateX(-500px) translateY(500px) rotate(-45deg);
                }
            }
        `;
        document.head.appendChild(style);
    }
}

/**
 * 動的な星を生成
 */
function createDynamicStars() {
    // .hero または .about-hero を取得
    const heroSection = document.querySelector('.hero') || document.querySelector('.about-hero');
    if (!heroSection) return;
    
    const heroBg = heroSection.querySelector('.hero-bg');
    if (!heroBg) return;
    
    // 追加の輝く星
    for (let i = 0; i < 50; i++) {
        const star = document.createElement('div');
        const size = Math.random() * 2 + 1;
        star.className = 'dynamic-star';
        star.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: white;
            border-radius: 50%;
            top: ${Math.random() * 100}%;
            left: ${Math.random() * 100}%;
            opacity: ${Math.random() * 0.5 + 0.3};
            animation: twinkleStar ${2 + Math.random() * 3}s ease-in-out infinite;
            animation-delay: ${Math.random() * 2}s;
            pointer-events: none;
            z-index: 1;
        `;
        heroBg.appendChild(star);
    }
    
    // 輝く星のアニメーションスタイルを追加
    if (!document.getElementById('twinkle-star-styles')) {
        const style = document.createElement('style');
        style.id = 'twinkle-star-styles';
        style.textContent = `
            @keyframes twinkleStar {
                0%, 100% {
                    opacity: 0.3;
                    transform: scale(1);
                }
                50% {
                    opacity: 1;
                    transform: scale(1.2);
                }
            }
        `;
        document.head.appendChild(style);
    }
}

/**
 * スムーススクロールの初期化
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            // 同じページ内のリンクのみスムーススクロール
            if (href.startsWith('#') && !href.includes('.html')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
}

/**
 * スクロール進行に応じたアニメーション強度の計算
 */
function getScrollProgress(element) {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const elementHeight = rect.height;
    
    // 要素が画面内にどれだけ入っているか計算
    const visible = Math.min(windowHeight, rect.bottom) - Math.max(0, rect.top);
    const progress = visible / Math.min(elementHeight, windowHeight);
    
    return Math.max(0, Math.min(1, progress));
}

/**
 * 高度なパララックスエフェクト
 */
function advancedParallax() {
    const sections = document.querySelectorAll('.section');
    
    sections.forEach(section => {
        const progress = getScrollProgress(section);
        const elements = section.querySelectorAll('[data-parallax]');
        
        elements.forEach(el => {
            const speed = parseFloat(el.dataset.parallax) || 0.5;
            const translateY = (1 - progress) * 100 * speed;
            el.style.transform = `translateY(${translateY}px)`;
        });
    });
}

// 追加のスクロールイベント
window.addEventListener('scroll', () => {
    advancedParallax();
    
    // ナビゲーションの背景変更
    const nav = document.querySelector('.nav');
    if (window.scrollY > 100) {
        nav.style.background = 'rgba(10, 10, 26, 0.95)';
    } else {
        nav.style.background = 'linear-gradient(to bottom, rgba(10, 10, 26, 0.9), transparent)';
    }
});

/**
 * リサイズ時の再計算
 */
window.addEventListener('resize', () => {
    // 必要に応じてリサイズ処理
});

/**
 * ページ読み込み完了時の処理
 */
window.addEventListener('load', () => {
    // プリローダーがあれば非表示に
    document.body.style.overflow = 'auto';
});

/**
 * モバイル用: ストーリーセクション画像のパララックス効果
 */
function initMobileStoryParallax() {
    const storyImage1 = document.querySelector('.story-mobile-image-1');
    const storySection = document.getElementById('story');
    
    if (!storyImage1 || !storySection) return;
    
    // モバイルのみ適用（768px以下）
    if (window.innerWidth > 768) return;
    
    window.addEventListener('scroll', () => {
        const rect = storySection.getBoundingClientRect();
        const sectionTop = rect.top;
        const sectionHeight = rect.height;
        const windowHeight = window.innerHeight;
        
        // セクションが画面内にある場合
        if (sectionTop < windowHeight && sectionTop > -sectionHeight) {
            // スクロール進行度を計算（0〜1）
            const progress = Math.max(0, Math.min(1, (windowHeight - sectionTop) / (windowHeight + sectionHeight)));
            
            // 左上に移動するパララックス効果（速度を上げた）
            const moveX = progress * -150; // 左に150px移動
            const moveY = progress * -200; // 上に200px移動
            
            storyImage1.style.transform = `translate(${moveX}px, ${moveY}px)`;
        }
    });
}

// DOM読み込み完了時にパララックス初期化
document.addEventListener('DOMContentLoaded', () => {
    initMobileStoryParallax();
});

// リサイズ時に再初期化
window.addEventListener('resize', () => {
    initMobileStoryParallax();
});

