const drawButton = document.getElementById('draw-button');
const resultDiv = document.getElementById('result');
const shareButton = document.getElementById('share-button');
const langKoButton = document.getElementById('lang-ko');
const langEnButton = document.getElementById('lang-en');
const contactNavButton = document.getElementById('contact-nav-button');
const contactSection = document.getElementById('contact-section');
const contactCloseButton = document.getElementById('contact-close-button');
const confettiCanvas = document.getElementById('confetti-canvas');
const animalFaceTestNavButton = document.getElementById('animal-face-test-nav-button');

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
        animalFaceTestNavButton: '동물상 테스트',
        animalFaceTestTitle: '동물상 테스트',
        animalDescriptions: {
            '개상': '당신은 충성스럽고 정이 많은 개상입니다! 크고 맑은 눈은 순수함을, 살짝 처진 눈꼬리는 온화함을 나타냅니다. 주변 사람들에게 편안함을 주며, 한번 마음 준 사람은 절대 배신하지 않는 의리의 상입니다. 긍정적이고 활발한 성격으로 어디서든 인기를 한 몸에 받습니다. 당신의 매력에 모두가 빠져들 거예요!',
            '고양이상': '당신은 도도하고 매력적인 고양이상입니다! 날카로운 듯 올라간 눈꼬리는 섹시함을, 오똑한 콧대는 자신감을 보여줍니다. 신비로운 분위기로 사람들의 시선을 사로잡으며, 독립적이고 자기 주관이 뚜렷합니다. 때로는 까칠해 보이지만, 마음을 열면 누구보다 따뜻한 매력을 발산합니다. 당신의 시크한 매력에 많은 사람들이 반할 것입니다!',
            '돼지상': '당신은 복스럽고 풍요로운 돼지상입니다! 둥글고 푸근한 인상은 재물운과 건강운을 동시에 상징합니다. 넉넉한 얼굴형은 사람들에게 편안함과 안정감을 주며, 먹을 복과 인복이 많아 항상 주변에 사람이 끊이지 않습니다. 낙천적이고 여유로운 성격으로 어떤 어려움도 현명하게 헤쳐나갑니다. 당신과 함께하는 모든 순간이 행복으로 가득 찰 거예요!'
        },
        shareAnimalFaceButton: '결과 공유하기',
        shareAnimalFaceText: '방금 동물상 테스트에서 "##RESULT##" 동물상으로 나왔어요! ##DESCRIPTION##'
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
        animalFaceTestNavButton: 'Animal Face Test',
        animalFaceTestTitle: 'Animal Face Test',
        animalDescriptions: {
            '개상': 'You have a loyal and affectionate Dog Face! Large, clear eyes signify purity, and slightly downturned eyes indicate gentleness. You bring comfort to those around you and never betray those you\'ve bonded with. Your positive and active personality makes you popular everywhere. Everyone will fall for your charm!',
            '고양이상': 'Yours is a haughty and charming Cat Face! Sharply upturned eyes suggest sexiness, and a high nose bridge shows confidence. You captivate attention with your mysterious aura, being independent and opinionated. Though sometimes appearing prickly, you radiate warmth once you open up. Many will be smitten by your chic charm!',
            '돼지상': 'You possess a fortunate and prosperous Pig Face! Your round and amiable features symbolize both wealth and health. Your generous face shape brings comfort and stability to others, and you are blessed with good fortune in food and relationships. Your optimistic and relaxed nature allows you to wisely navigate any difficulties. Every moment with you will be filled with happiness!'
        },
        shareAnimalFaceButton: 'Share Result',
        shareAnimalFaceText: 'My animal face reading result is "##RESULT##"! ##DESCRIPTION##'
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
    animalFaceTestNavButton.textContent = translations[lang].animalFaceTestNavButton;

    // Only update contact form specific elements if they exist (for contact_section)
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
animalFaceTestNavButton.addEventListener('click', () => {
    window.location.href = 'animal_face_test.html';
});


// Initialize language on page load
setLanguage(currentLang);


const myConfetti = confetti.create(confettiCanvas, {
    resize: true,
    useWorker: true
});

drawButton.addEventListener('click', () => {
    resultDiv.textContent = '';
    resultDiv.dataset.prize = ''; // Clear stored prize
    shareButton.style.display = 'none';

    const prizesForCurrentLang = translations[currentLang].prizes; // Prizes for current language
    const prizesKo = translations['ko'].prizes; // Original Korean prizes for consistent indexing

    const randomIndex = Math.floor(Math.random() * prizesForCurrentLang.length);
    const prize = prizesForCurrentLang[randomIndex]; // The selected prize in current language
    const prizeKo = prizesKo[randomIndex]; // The corresponding original Korean prize

    let count = 0;
    const interval = setInterval(() => {
        // Display random prizes in current language during animation
        resultDiv.textContent = prizesForCurrentLang[Math.floor(Math.random() * prizesForCurrentLang.length)];
        count++;
        if (count > 20) {
            clearInterval(interval);
            resultDiv.textContent = `${translations[currentLang].resultPrefix}"${prize}"${translations[currentLang].resultSuffix}`;
            resultDiv.dataset.prize = prizeKo; // Store original Korean prize for re-translation
            myConfetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 }
            });
            // Show share button only after the result is final
            shareButton.style.display = 'block';
        }
    }, 100);
});

shareButton.addEventListener('click', () => {
    const prize = resultDiv.textContent;
    if (prize && prize.includes(translations[currentLang].resultPrefix)) {
        const shareText = `${translations[currentLang].shareText}${prize}`;
        const shareUrl = 'https://www.instagram.com/';

        alert(`인스타그램에 공유해보세요!\n\n${shareText}`);
        window.open(shareUrl, '_blank');

    } else {
        alert(translations[currentLang].noPrizeAlert);
    }
});