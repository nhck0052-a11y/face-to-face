const drawButton = document.getElementById('draw-button');
const resultDiv = document.getElementById('result');
const shareButton = document.getElementById('share-button');
const langKoButton = document.getElementById('lang-ko');
const langEnButton = document.getElementById('lang-en');
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
                contactSubmit: '보내기'
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
                contactSubmit: 'Send'
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
            document.getElementById('contact-nav-button').textContent = translations[lang].contactNavButton;
            document.getElementById('contact-title').textContent = translations[lang].contactTitle;
            document.getElementById('label-name').textContent = translations[lang].labelName;
            document.getElementById('label-email').textContent = translations[lang].labelEmail;
            document.getElementById('label-message').textContent = translations[lang].labelMessage;
            document.getElementById('contact-submit').textContent = translations[lang].contactSubmit;
        
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

    const prizes = translations[currentLang].prizes;
    const prizesKo = translations['ko'].prizes; // Use Korean prizes for indexing
    const randomIndex = Math.floor(Math.random() * prizes.length);
    const prize = prizes[randomIndex];
    const prizeKo = prizesKo[randomIndex]; // Store the Korean prize for consistent indexing

    let count = 0;
    const interval = setInterval(() => {
        resultDiv.textContent = prizes[Math.floor(Math.random() * prizes.length)];
        count++;
        if (count > 20) {
            clearInterval(interval);
            resultDiv.textContent = `${translations[currentLang].resultPrefix}"${prize}"${translations[currentLang].resultSuffix}`;
            resultDiv.dataset.prize = prizeKo; // Store the original Korean prize for translation
            shareButton.style.display = 'block';
            myConfetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 }
            });
        }
    }, 100);
});

shareButton.addEventListener('click', () => {
    const prizeText = resultDiv.textContent;
    if (prizeText && prizeText.includes(translations[currentLang].resultPrefix)) {
        const shareText = `${translations[currentLang].shareText}${prizeText}`;
        const shareUrl = 'https://www.instagram.com/';

        alert(`${translations[currentLang].shareAlert}\n\n${shareText}`);
        window.open(shareUrl, '_blank');

    } else {
        alert(translations[currentLang].noPrizeAlert);
    }
});