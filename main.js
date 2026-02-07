const drawButton = document.getElementById('draw-button');
const resultDiv = document.getElementById('result');
const shareButton = document.getElementById('share-button');
const langKoButton = document.getElementById('lang-ko');
const langEnButton = document.getElementById('lang-en');
const contactNavButton = document.getElementById('contact-nav-button');
const contactSection = document.getElementById('contact-section');
const contactCloseButton = document.getElementById('contact-close-button');
const confettiCanvas = document.getElementById('confetti-canvas');

const translations = {
    ko: {
        title: '행운 당첨',
        header: '행운을 시험해보세요!',
        drawButton: '뽑기',
        resultPrefix: '축하합니다! "',
        resultSuffix: '"에 당첨되었습니다!',
        shareButton: '결과 공유하기',
        shareText: '방금 "행운 당첨" 사이트에서 멋진 상품에 당첨되었습니다! ',
        shareAlert: '인스타그램에 공유해보세요!',
        noPrizeAlert: '먼저 상품을 뽑아주세요!',
        prizes: [
            '영화 티켓',
            '커피 한 잔',
            '온라인 쇼핑 할인 쿠폰',
            '다음 여행 10% 할인',
            '음악 스트리밍 1개월 무료 이용권',
            'e북 교환권',
            '아이스크림 한 스쿱',
            '다음 주문 시 무료 배송'
        ],
        contactNavButton: '제휴 문의',
        contactTitle: '제휴 문의',
        labelName: '이름:',
        labelEmail: '이메일:',
        labelMessage: '메시지:',
        contactSubmit: '보내기',
        faceTestNavButton: '관상 테스트',
        faceTestTitle: '관상 테스트',
        backToHome: '홈으로 돌아가기',
        tmImageModel: 'Teachable Machine Image Model',
        start: '시작',
        faceDescriptions: {
            '상': '당신은 상위 1%의 관상입니다! 빛나는 앞날이 기대됩니다!',
            '중': '당신은 평범하지만 매력적인 관상입니다! 노력하면 빛을 볼 거예요!',
            '하': '당신은 독특한 매력의 관상입니다! 자신감을 가지세요!'
        },
        shareFaceButton: '결과 공유하기',
        shareFaceText: '방금 관상 테스트에서 "##RESULT##" 관상으로 나왔어요! ##DESCRIPTION##'
    },
    en: {
        title: 'Lucky Draw',
        header: 'Test Your Luck!',
        drawButton: 'Draw',
        resultPrefix: 'Congratulations! You won "',
        resultSuffix: '"!',
        shareButton: 'Share Result',
        shareText: 'I just won a great prize from the "Lucky Draw" site! ',
        shareAlert: 'Share on Instagram!',
        noPrizeAlert: 'Please draw a prize first!',
        prizes: [
            'Movie Ticket',
            'Cup of Coffee',
            'Online Shopping Discount Coupon',
            '10% off your next trip',
            '1 month free music streaming',
            'E-book Voucher',
            'Scoop of Ice Cream',
            'Free shipping on next order'
        ],
        contactNavButton: 'Partnership Inquiry',
        contactTitle: 'Partnership Inquiry',
        labelName: 'Name:',
        labelEmail: 'Email:',
        labelMessage: 'Message:',
        contactSubmit: 'Send',
        faceTestNavButton: 'Face Test',
        faceTestTitle: 'Face Test',
        backToHome: 'Back to Home',
        tmImageModel: 'Teachable Machine Image Model',
        start: 'Start',
        faceDescriptions: {
            '상': 'You have a top 1% face reading! A bright future awaits!',
            '중': 'You have an average but charming face reading! Efforts will pay off!',
            '하': 'You have a uniquely charming face reading! Be confident!'
        },
        shareFaceButton: 'Share Result',
        shareFaceText: 'My face reading test result is "##RESULT##"! ##DESCRIPTION##'
    }
};

let currentLang = localStorage.getItem('lang') || 'ko';

const setLanguage = (lang) => {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    document.title = translations[lang].title;
    document.getElementById('header-title').textContent = translations[lang].header;
    document.getElementById('draw-button').textContent = translations[lang].drawButton;
    document.getElementById('share-button').textContent = translations[lang].shareButton;
    contactNavButton.textContent = translations[lang].contactNavButton;
    document.getElementById('face-test-nav-button').textContent = translations[lang].faceTestNavButton;

    // Only update contact form specific elements if they exist (for face_test.html)
    if (document.getElementById('contact-title')) {
        document.getElementById('contact-title').textContent = translations[lang].contactTitle;
        document.getElementById('label-name').textContent = translations[lang].labelName;
        document.getElementById('label-email').textContent = translations[lang].labelEmail;
        document.getElementById('label-message').textContent = translations[lang].labelMessage;
        document.getElementById('contact-submit').textContent = translations[lang].contactSubmit;
    }


    // Update active class for language buttons
    langKoButton.classList.remove('active');
    langEnButton.classList.remove('active');
    if (lang === 'ko') {
        langKoButton.classList.add('active');
    } else {
        langEnButton.classList.add('active');
    }

    // If a prize is currently displayed, re-display it in the new language
    const currentPrizeText = resultDiv.dataset.prize;
    if (currentPrizeText) {
        const prizeIndex = translations['ko'].prizes.indexOf(currentPrizeText);
        if (prizeIndex !== -1) {
            resultDiv.textContent = `${translations[lang].resultPrefix}"${translations[lang].prizes[prizeIndex]}"${translations[lang].resultSuffix}`;
        }
    } else {
         resultDiv.textContent = ''; // Clear result if no prize was drawn
    }
};

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


// Initialize language on page load
setLanguage(currentLang);


const myConfetti = confetti.create(confettiCanvas, {
    resize: true,
    useWorker: true
});