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
            '상': '당신은 타고난 복을 지닌 관상입니다! 넓은 이마와 또렷한 눈빛은 지혜와 통찰력을, 두툼한 귓볼은 재물운을 상징합니다. 또한, 입꼬리가 살짝 올라가 있어 인덕이 많고 주변 사람들에게 행운을 가져다주는 길상입니다. 하는 일마다 술술 풀리고 사람들의 존경을 받는 리더의 상입니다. 앞으로 펼쳐질 성공적인 삶을 기대해도 좋습니다!',
            '중': '당신은 안정적이고 균형 잡힌 관상입니다! 단정하고 깔끔한 인상은 신뢰감을 주며, 부드러운 눈매는 온화한 성품을 나타냅니다. 코의 형태가 안정적이어서 재물운도 꾸준히 들어오는 편입니다. 큰 굴곡 없이 평탄하고 행복한 삶을 꾸려나갈 관상으로, 꾸준한 노력으로 더욱 발전할 수 있습니다. 작은 행운들이 당신을 기다리고 있습니다!',
            '하': '당신은 개성 넘치는 매력적인 관상입니다! 날카로운 눈매는 강한 추진력을, 개성 있는 코는 특별한 재능을 의미합니다. 때로는 고집이 세다는 인상을 줄 수 있지만, 이는 목표를 향한 강한 의지를 나타냅니다. 남들과는 다른 특별한 길을 개척하여 성공할 수 있는 관상입니다. 당신만의 독특한 매력으로 주변을 사로잡을 수 있습니다. 스스로를 믿고 나아가세요!'
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
            '상': 'You possess a face of innate prosperity! A broad forehead and clear eyes symbolize wisdom and insight, while thick earlobes indicate wealth. Your gently upturned mouth corners suggest great personal charm, bringing luck to those around you. This is the mark of a respected leader who finds smooth success in all endeavors. Look forward to a successful life ahead!',
            '중': 'Yours is a balanced and stable face! Your neat and tidy appearance inspires trust, and soft eyes reveal a gentle nature. A steady nose shape indicates consistent financial fortune. This face suggests a smooth and happy life without major upheavals; continuous effort will bring further development. Small fortunes are awaiting you!',
            '하': 'You have a face of distinctive charm! Sharp eyes signify strong drive, and a unique nose suggests special talents. While sometimes perceived as stubborn, this reflects your strong will towards your goals. This face is destined to forge a unique path to success, captivating others with your individual charisma. Trust yourself and move forward!'
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