const drawButton = document.getElementById('draw-button');
const resultDiv = document.getElementById('result');
const shareButton = document.getElementById('share-button');
const confettiCanvas = document.getElementById('confetti-canvas');

const prizes = [
    '영화 티켓',
    '커피 한 잔',
    '온라인 쇼핑 할인 쿠폰',
    '다음 여행 10% 할인',
    '음악 스트리밍 1개월 무료 이용권',
    'e북 교환권',
    '아이스크림 한 스쿱',
    '다음 주문 시 무료 배송'
];

const myConfetti = confetti.create(confettiCanvas, {
    resize: true,
    useWorker: true
});

drawButton.addEventListener('click', () => {
    resultDiv.textContent = '';
    shareButton.style.display = 'none';
    const randomIndex = Math.floor(Math.random() * prizes.length);
    const prize = prizes[randomIndex];

    let count = 0;
    const interval = setInterval(() => {
        resultDiv.textContent = prizes[Math.floor(Math.random() * prizes.length)];
        count++;
        if (count > 20) {
            clearInterval(interval);
            resultDiv.textContent = `축하합니다! \"${prize}\"에 당첨되었습니다!`
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
    const prize = resultDiv.textContent;
    if (prize && prize.includes('축하합니다!')) {
        const shareText = `방금 \"행운 당첨\" 사이트에서 멋진 상품에 당첨되었습니다! ${prize}`;
        const shareUrl = 'https://www.instagram.com/';

        alert(`인스타그램에 공유해보세요!\n\n${shareText}`);
        window.open(shareUrl, '_blank');

    } else {
        alert('먼저 상품을 뽑아주세요!');
    }
});