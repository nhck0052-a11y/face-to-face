// DOM Elements
const drawButton = document.getElementById('draw-button'); // This is the feature card draw button
const drawButtonHero = document.getElementById('draw-button-hero'); // This is the hero section draw button
const resultDiv = document.getElementById('result');
const shareButton = document.getElementById('share-button');
const langKoButton = document.getElementById('lang-ko');
const langEnButton = document.getElementById('lang-en');
const contactNavButton = document.getElementById('contact-nav-button');
const contactSection = document.getElementById('contact-section');
const contactCloseButton = document.getElementById('contact-close-button');
const confettiCanvas = document.getElementById('confetti-canvas');
// animalFaceTestNavButton and aboutNavButton are now simple links <a>, no specific JS needed for navigation

// Translations
const translations = {
    ko: {
        title: 'Face-to-Face: 행운과 재미',
        header: 'Face-to-Face에 오신 것을 환영합니다!',
        siteDescription: '일상에 소소한 즐거움을 더하세요! 행운 뽑기로 당신의 운을 시험해보고, AI 동물상 테스트로 새로운 나를 발견해보세요.',
        luckyDrawTitle: '오늘의 행운 뽑기',
        luckyDrawDescription: '버튼을 눌러 오늘의 행운을 확인하세요!',
        drawButton: '뽑기',
        resultPrefix: '축하합니다! "',
        resultSuffix: '"에 당첨되었습니다!',
        shareButton: '결과 공유하기',
        shareText: '방금 "Face-to-Face" 사이트에서 멋진 상품에 당첨되었습니다! ',
        shareAlert: '인스타그램에 공유해보세요!',
        noPrizeAlert: '먼저 상품을 뽑아주세요!',
        prizes: [
            '영화 티켓', '커피 한 잔', '온라인 쇼핑 할인 쿠폰', '다음 여행 10% 할인',
            '음악 스트리밍 1개월 무료 이용권', 'e북 교환권', '아이스크림 한 스쿱', '다음 주문 시 무료 배송'
        ],
        contactNavButton: '제휴 문의',
        contactTitle: '제휴 문의',
        labelName: '이름:',
        labelEmail: '이메일:',
        labelMessage: '메시지:',
        contactSubmit: '보내기',
        animalFaceTestNavButton: '동물상 테스트',
        aboutNavButton: '소개',
        footerAbout: 'About Us',
        footerPrivacy: 'Privacy Policy'
    },
    en: {
        title: 'Face-to-Face: Luck and Fun',
        header: 'Welcome to Face-to-Face!',
        siteDescription: 'Add a little fun to your day! Test your luck with our Lucky Draw and discover a new side of yourself with our AI Animal Face Test.',
        luckyDrawTitle: 'Today\'s Lucky Draw',
        luckyDrawDescription: 'Press the button to see what your luck holds today!',
        drawButton: 'Draw',
        resultPrefix: 'Congratulations! You won "',
        resultSuffix: '"!',
        shareButton: 'Share Result',
        shareText: 'I just won a great prize from the "Face-to-Face" site! ',
        shareAlert: 'Share on Instagram!',
        noPrizeAlert: 'Please draw a prize first!',
        prizes: [
            'Movie Ticket', 'Cup of Coffee', 'Online Shopping Discount Coupon', '10% off your next trip',
            '1 month free music streaming', 'E-book Voucher', 'Scoop of Ice Cream', 'Free shipping on next order'
        ],
        contactNavButton: 'Contact',
        contactTitle: 'Contact Us',
        labelName: 'Name:',
        labelEmail: 'Email:',
        labelMessage: 'Message:',
        contactSubmit: 'Send',
        animalFaceTestNavButton: 'Animal Face Test',
        aboutNavButton: 'About',
        footerAbout: 'About Us',
        footerPrivacy: 'Privacy Policy'
    }
};

let currentLang = localStorage.getItem('lang') || 'ko';

const setLanguage = (lang) => {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    const t = translations[lang];

    // Update all text content based on the selected language
    document.title = t.title; // Keep this as title is still dynamic

    // Update only dynamic elements that are not part of rich content
    document.getElementById('contact-nav-button').textContent = t.contactNavButton;
    document.getElementById('footer-about').textContent = t.footerAbout;
    document.getElementById('footer-privacy').textContent = t.footerPrivacy;

    // Update draw button text
    if (drawButton) { // Ensure button exists on the page
        drawButton.textContent = t.drawButton;
    }
    if (drawButtonHero) { // Ensure button exists on the page
        drawButtonHero.textContent = t.drawButton;
    }

    if (document.getElementById('contact-title')) {
        document.getElementById('contact-title').textContent = t.contactTitle;
        document.getElementById('label-name').textContent = t.labelName;
        document.getElementById('label-email').textContent = t.labelEmail;
        document.getElementById('label-message').textContent = t.labelMessage;
        document.getElementById('contact-submit').textContent = t.contactSubmit;
    }

    langKoButton.classList.toggle('active', lang === 'ko');
    langEnButton.classList.toggle('active', lang === 'en');

    // If a prize is currently displayed, re-display it in the new language
    const currentPrizeText = resultDiv.dataset.prize;
    if (currentPrizeText) {
        const prizeIndex = translations['ko'].prizes.indexOf(currentPrizeText);
        if (prizeIndex !== -1) {
            resultDiv.textContent = `${t.resultPrefix}"${t.prizes[prizeIndex]}"${t.resultSuffix}`;
        }
    } else {
         resultDiv.textContent = ''; // Clear result if no prize was drawn
    }
};

// Event Listeners
langKoButton.addEventListener('click', () => setLanguage('ko'));
langEnButton.addEventListener('click', () => setLanguage('en'));

contactNavButton.addEventListener('click', () => {
    contactSection.classList.add('active');
    document.body.classList.add('body-no-scroll');
});

contactCloseButton.addEventListener('click', () => {
    contactSection.classList.remove('active');
    document.body.classList.remove('body-no-scroll');
});

contactSection.addEventListener('click', (event) => {
    if (event.target === contactSection) {
        contactSection.classList.remove('active');
        document.body.classList.remove('body-no-scroll');
    }
});

const myConfetti = confetti.create(confettiCanvas, {
    resize: true,
    useWorker: true
});

const handleDrawButtonClick = () => {
    resultDiv.textContent = '';
    resultDiv.dataset.prize = '';
    shareButton.style.display = 'none';

    const prizesForCurrentLang = translations[currentLang].prizes;
    const prizesKo = translations['ko'].prizes;

    const randomIndex = Math.floor(Math.random() * prizesForCurrentLang.length);
    const prize = prizesForCurrentLang[randomIndex];
    const prizeKo = prizesKo[randomIndex];

    let count = 0;
    const interval = setInterval(() => {
        resultDiv.textContent = prizesForCurrentLang[Math.floor(Math.random() * prizesForCurrentLang.length)];
        count++;
        if (count > 20) {
            clearInterval(interval);
            resultDiv.textContent = `${translations[currentLang].resultPrefix}"${prize}"${translations[currentLang].resultSuffix}`;
            resultDiv.dataset.prize = prizeKo;
            myConfetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 }
            });
            shareButton.style.display = 'block';
        }
    }, 100);
};

if (drawButton) {
    drawButton.addEventListener('click', handleDrawButtonClick);
}
if (drawButtonHero) {
    drawButtonHero.addEventListener('click', handleDrawButtonClick);
}

// Handle contact link in about.html
const contactLinkAbout = document.getElementById('contact-link-about');
if (contactLinkAbout) {
    contactLinkAbout.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default anchor link behavior
        contactSection.classList.add('active');
        document.body.classList.add('body-no-scroll');
    });
}

shareButton.addEventListener('click', () => {
    const prize = resultDiv.textContent;
    if (prize && prize.includes(translations[currentLang].resultPrefix)) {
        const shareText = `${translations[currentLang].shareText}${prize}`;
        const shareUrl = 'https://www.instagram.com/';

        alert(`${translations[currentLang].shareAlert}\n\n${shareText}`);
        window.open(shareUrl, '_blank');

    } else {
        alert(translations[currentLang].noPrizeAlert);
    }
});

// Initialize language on page load
setLanguage(currentLang);