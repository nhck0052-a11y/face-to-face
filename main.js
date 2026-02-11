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

// Translations
const translations = {
    ko: {
        title: 'Face-to-Face: 행운과 재미',
        // --- Index.html Content ---
        heroTitle: 'Face-to-Face: 당신의 숨겨진 매력을 발견하다!',
        heroTagline: '최첨단 AI 기술과 유쾌한 행운 뽑기가 만났습니다. 지금 바로 당신의 얼굴과 운세를 탐험하고 친구들과 공유해보세요!',
        heroButtonAi: 'AI 동물상 테스트 시작하기',
        featuresHeading: 'Face-to-Face의 특별한 기능',
        featureAiTitle: 'AI 동물상 테스트',
        featureAiDescription: '당신의 얼굴을 분석하여 가장 잘 어울리는 동물상을 찾아드립니다. 섬세한 AI 기술이 당신의 독특한 매력을 포착하고, 재미있는 결과와 함께 친구들과 웃음꽃을 피울 수 있습니다.',
        featureAiButton: '자세히 알아보기',
        featureDrawTitle: '매일매일 행운 뽑기',
        featureDrawDescription: '오늘의 운세를 시험해보고 싶으신가요? 버튼 하나로 당신에게 찾아올 소소한 행운을 발견해보세요. 예측 불가능한 즐거움이 가득한 행운 뽑기가 당신을 기다립니다!',
        valueHeading: '왜 Face-to-Face를 선택해야 할까요?',
        valueAiTitle: '정확하고 재미있는 AI 분석',
        valueAiDescription: '최첨단 AI 기술로 얼굴 특징을 정밀하게 분석하여 흥미롭고 신뢰도 높은 동물상 결과를 제공합니다.',
        valueShareTitle: '손쉬운 결과 공유',
        valueShareDescription: '친구, 가족과 함께 결과를 쉽게 공유하고, 서로의 동물상을 비교하며 즐거운 시간을 보낼 수 있습니다.',
        valueJoyTitle: '매일 새로운 즐거움',
        valueJoyDescription: '단순한 테스트를 넘어, 매일매일 새로운 행운과 발견의 기회를 제공하여 일상에 활력을 불어넣습니다.',
        luckyDrawResultsHeading: '오늘의 행운 결과',
        testimonialsHeading: '사용자 후기',
        testimonialText1: '"제 얼굴이 시바견이라니! 정말 재미있고 신기했어요. 친구들과 다 같이 해봤는데 시간 가는 줄 몰랐네요."',
        testimonialAuthor1: '- 김**님',
        testimonialText2: '"별 기대 없이 행운 뽑기를 했는데, 진짜 좋은 일이 생겼어요! 매일 아침마다 확인하는 재미가 쏠쏠합니다."',
        testimonialAuthor2: '- 박**님',
        testimonialText3: '"깔끔한 디자인과 직관적인 사용법이 마음에 들어요. 지루할 때 한 번씩 들어와서 즐기기 좋습니다!"',
        testimonialAuthor3: '- 이**님',

        // --- About.html Content ---
        aboutPageTitle: 'Face-to-Face에 대하여',
        aboutIntroText: 'Face-to-Face는 단순한 웹사이트를 넘어, 일상에 즐거움과 신선한 경험을 선사하기 위해 탄생했습니다. 최신 웹 기술과 혁신적인 AI를 결합하여 사용자들에게 독특하고 기억에 남는 인터랙티브 경험을 제공하는 것이 우리의 목표입니다.',
        aboutVisionTitle: '우리의 비전',
        aboutVisionDescription: '우리는 사용자들이 자신의 얼굴에서 새로운 매력을 발견하고, 소소한 행운을 통해 긍정적인 에너지를 얻으며, 친구들과 함께 유쾌한 시간을 보낼 수 있는 공간을 만들고자 합니다. 기술이 사람들의 삶에 긍정적인 영향을 미치고, 즐거움을 창조하는 도구가 될 수 있음을 보여주는 것이 우리의 비전입니다.',
        aboutFeaturesTitle: '주요 기능 소개',
        aboutFeatureDrawTitle: '행운 뽑기',
        aboutFeatureDrawDescription: '매일매일 어떤 행운이 당신을 기다리고 있을까요? \'행운 뽑기\'는 간단한 클릭 한 번으로 오늘의 운세를 시험해보고, 작은 기쁨을 발견할 수 있는 기능입니다. 예측할 수 없는 결과가 주는 설렘을 경험해보세요.',
        aboutFeatureAiTitle: 'AI 동물상 테스트',
        aboutFeatureAiDescription: '최첨단 AI 기술을 활용하여 당신의 얼굴 특징을 분석하고, 어떤 동물과 가장 닮았는지 찾아드립니다. 흥미로운 통찰과 함께 친구들과 결과를 공유하며 즐거운 대화를 나눌 수 있습니다. 당신 안에 숨겨진 동물 친구를 찾아보세요!',
        aboutTechnologyTitle: '우리의 기술',
        aboutTechnologyDescription: 'Face-to-Face는 안정적이고 빠른 사용자 경험을 제공하기 위해 최신 웹 표준과 기술을 채택하고 있습니다. 특히 \'AI 동물상 테스트\'에는 정교한 얼굴 인식 및 분석 AI 모델이 적용되어 정확하고 신뢰할 수 있는 결과를 제공합니다. 사용자 데이터 보호를 최우선으로 생각하며, 안전한 환경을 구축하기 위해 끊임없이 노력하고 있습니다.',
        aboutFutureTitle: '미래 계획',
        aboutFutureDescription: '우리는 현재의 기능에 만족하지 않고, 사용자들의 피드백을 적극적으로 반영하여 더욱 새롭고 혁신적인 기능을 추가할 계획입니다. 지속적인 업데이트와 개선을 통해 Face-to-Face가 여러분의 일상에 더욱 특별한 가치를 더할 수 있도록 최선을 다하겠습니다.',
        aboutContactPrompt: '문의사항이나 제휴 제안이 있으시면 언제든지 연락주시기 바랍니다. 여러분의 소중한 의견을 기다립니다.',
        aboutBackToHome: '홈으로 돌아가기',

        // --- Privacy.html Content ---
        privacyPageTitle: '개인정보 처리방침',
        privacyIntroText1: 'Face-to-Face는 사용자의 개인정보 보호를 매우 중요하게 생각하며, 대한민국 개인정보보호법 및 관련 법규를 준수하고 있습니다. 본 처리방침은 Face-to-Face 서비스(이하 \'서비스\') 이용과정에서 수집, 이용, 제공되는 개인정보에 대해 상세히 설명합니다.',
        privacyIntroText2: '본 개인정보 처리방침은 2026년 2월 8일부터 적용됩니다.',
        privacySection1Title: '1. 개인정보의 수집 및 이용 목적',
        privacySection1Desc: '회사는 다음의 목적을 위해 개인정보를 수집 및 이용합니다. 수집된 개인정보는 다음의 목적 이외의 용도로는 사용되지 않으며, 이용 목적이 변경될 시에는 사전 동의를 구할 예정입니다.',
        privacySection1Li1: '문의 및 상담 처리: \'제휴 문의\'를 통한 이름, 이메일 주소, 메시지 내용은 문의 내용 확인, 사실 조사를 위한 연락 및 통지, 처리 결과 통보 등의 목적으로 사용됩니다.',
        privacySection1Li2: '서비스 개선 및 통계: 사용자의 서비스 이용 기록, 접속 빈도, 서비스 이용에 대한 통계 등을 분석하여 서비스의 품질을 향상시키고, 개인 맞춤형 서비스를 제공하기 위해 사용됩니다. 이 과정에서 개인을 식별할 수 없는 형태로 정보가 가공될 수 있습니다.',
        privacySection1Li3: '광고 및 마케팅: Google AdSense 등 광고 플랫폼을 통해 사용자에게 맞춤형 광고를 제공하기 위해 서비스 이용 기록 및 관심사를 분석할 수 있습니다. (자세한 내용은 \'쿠키 활용\' 섹션 참조)',
        privacySection2Title: '2. 수집하는 개인정보 항목 및 수집 방법',
        privacySection2Li1: '문의 시 수집 항목: 이름, 이메일 주소, 메시지 내용',
        privacySection2Li2: '서비스 이용 과정에서 자동 수집 항목: IP 주소, 쿠키, 서비스 이용 기록, 접속 로그, 기기 정보 (브라우저 종류, OS 등)',
        privacySection2Desc1: '개인정보 수집 방법:',
        privacySection2Li3: '사용자가 \'제휴 문의\' 양식을 통해 직접 입력하고 동의하는 방식',
        privacySection2Li4: '서비스 이용 과정에서 자동 생성되어 수집되는 방식 (예: 웹 브라우저 쿠키, 서버 로그 파일)',
        privacySection3Title: '3. 개인정보의 보유 및 이용 기간',
        privacySection3Li1: '문의 및 상담 기록: 문의 처리 완료 후 6개월간 보관 후 지체 없이 파기합니다.',
        privacySection3Li2: '서비스 이용 관련 정보: 서비스 종료 시 또는 개인정보 수집 및 이용 목적 달성 시까지 보관하며, 이후 지체 없이 파기합니다. 단, 관련 법령의 규정에 의하여 보존할 필요성이 있는 경우에는 해당 법령에서 정한 기간 동안 보존합니다.',
        privacySection4Title: '4. 개인정보의 파기 절차 및 방법',
        privacySection4Desc: '회사는 개인정보 수집 및 이용 목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다.',
        privacySection4Li1: '파기 절차: 목적이 달성된 개인정보는 별도의 DB로 옮겨져(종이의 경우 별도 서류함) 관계 법령에 따라 일정 기간 저장된 후 파기됩니다. 별도 DB로 옮겨진 개인정보는 법률에 의한 경우가 아니고서는 다른 목적으로 이용되지 않습니다.',
        privacySection4Li2: '파기 방법: 전자적 파일 형태로 저장된 개인정보는 기록을 재생할 수 없는 기술적 방법을 사용하여 삭제하며, 종이 문서에 기록된 개인정보는 분쇄기로 분쇄하거나 소각하여 파기합니다.',
        privacySection5Title: '5. 개인정보의 제3자 제공',
        privacySection5Desc: '회사는 사용자의 개인정보를 \'1. 개인정보의 수집 및 이용 목적\'에서 명시한 범위를 초과하여 이용하거나 원칙적으로 외부에 제공하지 않습니다. 다만, 다음의 경우에는 예외로 합니다.',
        privacySection5Li1: '사용자가 사전에 동의한 경우',
        privacySection5Li2: '법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우',
        privacySection6Title: '6. 쿠키 활용',
        privacySection6Desc1: '회사는 사용자에게 더 나은 서비스를 제공하기 위해 \'쿠키(Cookie)\'를 사용할 수 있습니다. 쿠키는 웹사이트를 운영하는데 이용되는 서버가 사용자의 컴퓨터 브라우저에 보내는 소량의 정보이며, 사용자의 PC 내 하드디스크에 저장됩니다.',
        privacySection6Li1: '쿠키의 목적: 사용자 접속 빈도나 방문 시간 등을 분석하고 사용자의 취향과 관심분야를 파악하여 타겟 마케팅 및 서비스 개편 등의 척도로 활용합니다.',
        privacySection6Li2: '쿠키 설치/운영 및 거부: 사용자는 쿠키 설치에 대한 선택권을 가지고 있습니다. 웹 브라우저의 옵션을 설정함으로써 모든 쿠키를 허용하거나, 쿠키가 저장될 때마다 확인을 거치거나, 모든 쿠키의 저장을 거부할 수 있습니다. 단, 쿠키 저장을 거부할 경우 일부 서비스 이용에 어려움이 있을 수 있습니다.',
        privacySection6H3: 'Google AdSense',
        privacySection6Desc2: '본 서비스는 Google이 제공하는 광고 서비스인 Google AdSense를 통해 광고를 게재하고 있습니다. Google은 쿠키를 사용하여 사용자의 웹사이트 방문 기록 및 기타 웹사이트 방문 기록을 기반으로 맞춤형 광고를 표시할 수 있습니다.',
        privacySection6Desc3: '사용자는 Google의 광고 및 콘텐츠 네트워크 개인정보 처리방침 페이지를 방문하여 맞춤형 광고 게재에 사용되는 쿠키를 선택 해제할 수 있습니다.',
        privacySection7Title: '7. 개인정보 보호 책임자 및 담당 부서',
        privacySection7Desc: '회사는 사용자의 개인정보를 보호하고 개인정보와 관련한 불만을 처리하기 위하여 아래와 같이 개인정보 보호 책임자 및 담당 부서를 지정하고 있습니다.',
        privacySection7Li1: '개인정보 보호 책임자: [담당자 이름 또는 직책 - 예: 웹사이트 관리자]',
        privacySection7Li2: '연락처: [문의 이메일 주소 - 예: privacy@facetoface.com]',
        privacySection7Desc2: '기타 개인정보 침해에 대한 신고나 상담이 필요하신 경우에는 아래 기관에 문의하시기 바랍니다.',
        privacySection7Li3: '개인정보 침해신고센터 (privacy.kisa.or.kr / 국번없이 118)',
        privacySection7Li4: '대검찰청 사이버수사과 (www.spo.go.kr / 국번없이 1301)',
        privacySection7Li5: '경찰청 사이버안전국 (cyberbureau.police.go.kr / 국번없이 182)',
        privacySection8Title: '8. 개인정보 처리방침 변경에 관한 사항',
        privacySection8Desc: '이 개인정보 처리방침은 법령 및 방침에 따른 변경 내용의 추가, 삭제 및 정정이 있는 경우에는 변경사항의 시행 7일 전부터 웹사이트 공지사항을 통하여 고지할 것입니다.',

        // --- Navigation & Other UI Elements ---
        drawButton: '뽑기', // Used by draw buttons
        shareButton: '결과 공유하기',
        contactNavButton: '문의하기',
        contactTitle: '문의하기',
        labelName: '이름:',
        labelEmail: '이메일:',
        labelMessage: '메시지:',
        contactSubmit: '보내기',
        animalFaceTestNavButton: 'AI 동물상 테스트',
        aboutNavButton: '회사 소개',
        footerAbout: '회사 소개',
        footerPrivacy: '개인정보 처리방침',
        resultPrefix: '축하합니다! "',
        resultSuffix: '"에 당첨되었습니다!',
        shareText: '방금 "Face-to-Face" 사이트에서 멋진 상품에 당첨되었습니다! ',
        shareAlert: '인스타그램에 공유해보세요!',
        noPrizeAlert: '먼저 상품을 뽑아주세요!',
        prizes: [
            '영화 티켓', '커피 한 잔', '온라인 쇼핑 할인 쿠폰', '다음 여행 10% 할인',
            '음악 스트리밍 1개월 무료 이용권', 'e북 교환권', '아이스크림 한 스쿱', '다음 주문 시 무료 배송'
        ],
    },
    en: {
        title: 'Face-to-Face: Luck and Fun',
        // --- Index.html Content ---
        heroTitle: 'Face-to-Face: Discover Your Hidden Charm!',
        heroTagline: 'Advanced AI technology meets delightful lucky draws. Explore your face and fortune now, and share the fun with friends!',
        heroButtonAi: 'Start AI Animal Face Test',
        featuresHeading: 'Special Features of Face-to-Face',
        featureAiTitle: 'AI Animal Face Test',
        featureAiDescription: 'Our advanced AI analyzes your facial features to find which animal you resemble most. Discover your unique charm and share amusing results with friends!',
        featureAiButton: 'Learn More',
        featureDrawTitle: 'Daily Lucky Draw',
        featureDrawDescription: 'Curious about today\'s fortune? Press a button to find small joys. Exciting and unpredictable lucky draws await you!',
        valueHeading: 'Why Choose Face-to-Face?',
        valueAiTitle: 'Accurate and Fun AI Analysis',
        valueAiDescription: 'Cutting-edge AI accurately analyzes facial features, providing interesting and reliable animal resemblance results.',
        valueShareTitle: 'Easy Sharing of Results',
        valueShareDescription: 'Easily share results with friends and family, compare animal resemblances, and have a great time together.',
        valueJoyTitle: 'New Joys Every Day',
        valueJoyDescription: 'Beyond simple tests, we offer daily opportunities for new luck and discoveries, bringing vitality to your daily life.',
        luckyDrawResultsHeading: 'Today\'s Lucky Draw Result',
        testimonialsHeading: 'User Reviews',
        testimonialText1: '"My face is a Shiba Inu?! So fun and amazing! My friends and I all tried it and lost track of time."',
        testimonialAuthor1: '- Kim**',
        testimonialText2: '"I didn\'t expect much from the lucky draw, but something great happened! It\'s fun to check every morning."',
        testimonialAuthor2: '- Park**',
        testimonialText3: '"I love the clean design and intuitive interface. It\'s great for entertaining myself when I\'m bored!"',
        testimonialAuthor3: '- Lee**',

        // --- About.html Content ---
        aboutPageTitle: 'About Face-to-Face',
        aboutIntroText: 'Face-to-Face is more than just a website; it was born to bring joy and fresh experiences to everyday life. Our goal is to provide users with unique and memorable interactive experiences by combining the latest web technologies with innovative AI.',
        aboutVisionTitle: 'Our Vision',
        aboutVisionDescription: 'We aim to create a space where users can discover new charms in their faces, gain positive energy through small fortunes, and enjoy pleasant times with friends. Our vision is to demonstrate that technology can positively impact people\'s lives and be a tool for creating joy.',
        aboutFeaturesTitle: 'Introduction to Key Features',
        aboutFeatureDrawTitle: 'Lucky Draw',
        aboutFeatureDrawDescription: 'What fortune awaits you every day? \'Lucky Draw\' is a simple, fun feature where you can test your luck with just one click and discover small joys. Experience the excitement of unpredictable results!',
        aboutFeatureAiTitle: 'AI Animal Face Test',
        aboutFeatureAiDescription: 'Utilizing cutting-edge AI technology, we analyze your facial features to find which animal you most resemble. Enjoy interesting insights and share your results with friends for delightful conversations. Discover the hidden animal friend within you!',
        aboutTechnologyTitle: 'Our Technology',
        aboutTechnologyDescription: 'Face-to-Face adopts the latest web standards and technologies to provide a stable and fast user experience. Particularly, our \'AI Animal Face Test\' incorporates sophisticated facial recognition and analysis AI models to deliver accurate and reliable results. We prioritize user data protection and continuously strive to build a secure environment.',
        aboutFutureTitle: 'Future Plans',
        aboutFutureDescription: 'We are not content with current features and plan to actively incorporate user feedback to add newer and more innovative functionalities. Through continuous updates and improvements, we will do our best to ensure Face-to-Face adds even more special value to your daily life.',
        aboutContactPrompt: 'If you have any inquiries or partnership proposals, please feel free to contact us at any time. We look forward to your valuable feedback.',
        aboutBackToHome: 'Back to Home',

        // --- Privacy.html Content ---
        privacyPageTitle: 'Privacy Policy',
        privacyIntroText1: 'Face-to-Face highly values the protection of user personal information and complies with the Personal Information Protection Act of Korea and related laws. This policy elaborates on the personal information collected, used, and provided during the use of the Face-to-Face service (hereinafter \'Service\').',
        privacyIntroText2: 'This Privacy Policy is effective from February 8, 2026.',
        privacySection1Title: '1. Purpose of Collection and Use of Personal Information',
        privacySection1Desc: 'The Company collects and uses personal information for the following purposes. The collected personal information will not be used for purposes other than those specified below, and prior consent will be sought if the purpose of use changes.',
        privacySection1Li1: 'Inquiry and Consultation Processing: Name, email address, and message content collected through \'Partnership Inquiry\' are used for verifying inquiry details, contacting and notifying for fact-finding, and communicating results.',
        privacySection1Li2: 'Service Improvement and Statistics: Service usage records, access frequency, and statistics on service use are analyzed to improve service quality and provide personalized services. Information may be processed into a non-identifiable form for this purpose.',
        privacySection1Li3: 'Advertising and Marketing: Through advertising platforms such as Google AdSense, service usage records and interests may be analyzed to provide customized advertisements. (See \'Cookie Utilization\' section for details)',
        privacySection2Title: '2. Items of Personal Information Collected and Collection Methods',
        privacySection2Li1: 'Items collected during inquiry: Name, email address, message content',
        privacySection2Li2: 'Items automatically collected during service use: IP address, cookies, service usage records, access logs, device information (browser type, OS, etc.)',
        privacySection2Desc1: 'Methods of Personal Information Collection:',
        privacySection2Li3: 'Direct input and consent by the user through the \'Partnership Inquiry\' form',
        privacySection2Li4: 'Automatic collection during service use (e.g., web browser cookies, server log files)',
        privacySection3Title: '3. Retention and Use Period of Personal Information',
        privacySection3Li1: 'Inquiry and Consultation Records: Retained for 6 months after the completion of inquiry processing and then promptly destroyed.',
        privacySection3Li2: 'Service Use Related Information: Retained until the termination of the service or the achievement of the purpose of personal information collection and use, and then promptly destroyed. However, if there is a need for preservation under relevant laws, it will be preserved for the period specified by those laws.',
        privacySection4Title: '4. Procedures and Methods for Personal Information Destruction',
        privacySection4Desc: 'The Company promptly destroys personal information after the purpose of collection and use is achieved.',
        privacySection4Li1: 'Destruction Procedure: Personal information that has fulfilled its purpose is transferred to a separate DB (or separate paper documents) and stored for a certain period according to relevant laws before being destroyed. Personal information transferred to a separate DB will not be used for any other purpose unless required by law.',
        privacySection4Li2: 'Destruction Method: Personal information stored in electronic file format is deleted using technical methods that prevent reproduction of records, and personal information recorded on paper documents is destroyed by shredding or incineration.',
        privacySection5Title: '5. Provision of Personal Information to Third Parties',
        privacySection5Desc: 'The Company, in principle, does not provide users\' personal information to external parties beyond the scope specified in \'1. Purpose of Collection and Use of Personal Information\'. However, exceptions apply in the following cases:',
        privacySection5Li1: 'If the user has given prior consent',
        privacySection5Li2: 'If required by law, or by request from investigative agencies through procedures and methods defined by law for investigative purposes',
        privacySection6Title: '6. Cookie Utilization',
        privacySection6Desc1: 'The Company may use \'Cookies\' to provide better services to users. A cookie is a small piece of information that a website server sends to the user\'s computer browser and is stored on the user\'s PC hard drive.',
        privacySection6Li1: 'Purpose of Cookies: To analyze user access frequency and visit time, understand user preferences and interests, and utilize them as a basis for targeted marketing and service reorganization.',
        privacySection6Li2: 'Cookie Installation/Operation and Refusal: Users have the option to choose whether to allow cookie installation. By setting options in their web browser, users can allow all cookies, confirm each time a cookie is saved, or refuse to save all cookies. However, refusing to save cookies may cause difficulties in using some services.',
        privacySection6H3: 'Google AdSense',
        privacySection6Desc2: 'This Service displays advertisements through Google AdSense, an advertising service provided by Google. Google may use cookies to display customized advertisements based on the user\'s visit history to this and other websites.',
        privacySection6Desc3: 'Users can opt-out of cookies used for customized advertisement delivery by visiting Google\'s Ads and Content Network Privacy Policy page.',
        privacySection7Title: '7. Personal Information Protection Officer and Department',
        privacySection7Desc: 'The Company has designated a Personal Information Protection Officer and department as follows to protect users\' personal information and handle complaints related to personal information.',
        privacySection7Li1: 'Personal Information Protection Officer: [Name or Position of Officer - e.g., Website Administrator]',
        privacySection7Li2: 'Contact: [Inquiry Email Address - e.g., privacy@facetoface.com]',
        privacySection7Desc2: 'If you need to report personal information infringement or consult, please contact the following organizations:',
        privacySection7Li3: 'Personal Information Infringement Report Center (privacy.kisa.or.kr / Dial 118 without area code)',
        privacySection7Li4: 'Cyber Investigation Division of Supreme Prosecutors\' Office (www.spo.go.kr / Dial 1301 without area code)',
        privacySection7Li5: 'Cyber Safety Bureau of National Police Agency (cyberbureau.police.go.kr / Dial 182 without area code)',
        privacySection8Title: '8. Changes to the Privacy Policy',
        privacySection8Desc: 'If there are additions, deletions, or corrections to the content of this Privacy Policy due to laws and policies, the changes will be announced through the website\'s notice board at least 7 days before their effective date.',

        // --- Navigation & Other UI Elements ---
        drawButton: '뽑기', // Used by draw buttons
        shareButton: '결과 공유하기',
        contactNavButton: '문의하기',
        contactTitle: '문의하기',
        labelName: '이름:',
        labelEmail: '이메일:',
        labelMessage: '메시지:',
        contactSubmit: '보내기',
        animalFaceTestNavButton: 'AI 동물상 테스트',
        aboutNavButton: '회사 소개',
        footerAbout: '회사 소개',
        footerPrivacy: '개인정보 처리방침',
        resultPrefix: '축하합니다! "',
        resultSuffix: '"에 당첨되었습니다!',
        shareText: '방금 "Face-to-Face" 사이트에서 멋진 상품에 당첨되었습니다! ',
        shareAlert: '인스타그램에 공유해보세요!',
        noPrizeAlert: '먼저 상품을 뽑아주세요!',
        prizes: [
            '영화 티켓', '커피 한 잔', '온라인 쇼핑 할인 쿠폰', '다음 여행 10% 할인',
            '음악 스트리밍 1개월 무료 이용권', 'e북 교환권', '아이스크림 한 스쿱', '다음 주문 시 무료 배송'
        ],
    },
    en: {
        title: 'Face-to-Face: Luck and Fun',
        // --- Index.html Content ---
        heroTitle: 'Face-to-Face: Discover Your Hidden Charm!',
        heroTagline: 'Advanced AI technology meets delightful lucky draws. Explore your face and fortune now, and share the fun with friends!',
        heroButtonAi: 'Start AI Animal Face Test',
        featuresHeading: 'Special Features of Face-to-Face',
        featureAiTitle: 'AI Animal Face Test',
        featureAiDescription: 'Our advanced AI analyzes your facial features to find which animal you resemble most. Discover your unique charm and share amusing results with friends!',
        featureAiButton: 'Learn More',
        featureDrawTitle: 'Daily Lucky Draw',
        featureDrawDescription: 'Curious about today\'s fortune? Press a button to find small joys. Exciting and unpredictable lucky draws await you!',
        valueHeading: 'Why Choose Face-to-Face?',
        valueAiTitle: 'Accurate and Fun AI Analysis',
        valueAiDescription: 'Cutting-edge AI accurately analyzes facial features, providing interesting and reliable animal resemblance results.',
        valueShareTitle: 'Easy Sharing of Results',
        valueShareDescription: 'Easily share results with friends and family, compare animal resemblances, and have a great time together.',
        valueJoyTitle: 'New Joys Every Day',
        valueJoyDescription: 'Beyond simple tests, we offer daily opportunities for new luck and discoveries, bringing vitality to your daily life.',
        luckyDrawResultsHeading: 'Today\'s Lucky Draw Result',
        testimonialsHeading: 'User Reviews',
        testimonialText1: '"My face is a Shiba Inu?! So fun and amazing! My friends and I all tried it and lost track of time."',
        testimonialAuthor1: '- Kim**',
        testimonialText2: '"I didn\'t expect much from the lucky draw, but something great happened! It\'s fun to check every morning."',
        testimonialAuthor2: '- Park**',
        testimonialText3: '"I love the clean design and intuitive interface. It\'s great for entertaining myself when I\'m bored!"',
        testimonialAuthor3: '- Lee**',

        // --- About.html Content ---
        aboutPageTitle: 'About Face-to-Face',
        aboutIntroText: 'Face-to-Face is more than just a website; it was born to bring joy and fresh experiences to everyday life. Our goal is to provide users with unique and memorable interactive experiences by combining the latest web technologies with innovative AI.',
        aboutVisionTitle: 'Our Vision',
        aboutVisionDescription: 'We aim to create a space where users can discover new charms in their faces, gain positive energy through small fortunes, and enjoy pleasant times with friends. Our vision is to demonstrate that technology can positively impact people\'s lives and be a tool for creating joy.',
        aboutFeaturesTitle: 'Introduction to Key Features',
        aboutFeatureDrawTitle: 'Lucky Draw',
        aboutFeatureDrawDescription: 'What fortune awaits you every day? \'Lucky Draw\' is a simple, fun feature where you can test your luck with just one click and discover small joys. Experience the excitement of unpredictable results!',
        aboutFeatureAiTitle: 'AI Animal Face Test',
        aboutFeatureAiDescription: 'Utilizing cutting-edge AI technology, we analyze your facial features to find which animal you most resemble. Enjoy interesting insights and share your results with friends for delightful conversations. Discover the hidden animal friend within you!',
        aboutTechnologyTitle: 'Our Technology',
        aboutTechnologyDescription: 'Face-to-Face adopts the latest web standards and technologies to provide a stable and fast user experience. Particularly, our \'AI Animal Face Test\' incorporates sophisticated facial recognition and analysis AI models to deliver accurate and reliable results. We prioritize user data protection and continuously strive to build a secure environment.',
        aboutFutureTitle: 'Future Plans',
        aboutFutureDescription: 'We are not content with current features and plan to actively incorporate user feedback to add newer and more innovative functionalities. Through continuous updates and improvements, we will do our best to ensure Face-to-Face adds even more special value to your daily life.',
        aboutContactPrompt: 'If you have any inquiries or partnership proposals, please feel free to contact us at any time. We look forward to your valuable feedback.',
        aboutBackToHome: 'Back to Home',

        // --- Privacy.html Content ---
        privacyPageTitle: 'Privacy Policy',
        privacyIntroText1: 'Face-to-Face highly values the protection of user personal information and complies with the Personal Information Protection Act of Korea and related laws. This policy elaborates on the personal information collected, used, and provided during the use of the Face-to-Face service (hereinafter \'Service\').',
        privacyIntroText2: 'This Privacy Policy is effective from February 8, 2026.',
        privacySection1Title: '1. Purpose of Collection and Use of Personal Information',
        privacySection1Desc: 'The Company collects and uses personal information for the following purposes. The collected personal information will not be used for purposes other than those specified below, and prior consent will be sought if the purpose of use changes.',
        privacySection1Li1: 'Inquiry and Consultation Processing: Name, email address, and message content collected through \'Partnership Inquiry\' are used for verifying inquiry details, contacting and notifying for fact-finding, and communicating results.',
        privacySection1Li2: 'Service Improvement and Statistics: Service usage records, access frequency, and statistics on service use are analyzed to improve service quality and provide personalized services. Information may be processed into a non-identifiable form for this purpose.',
        privacySection1Li3: 'Advertising and Marketing: Through advertising platforms such as Google AdSense, service usage records and interests may be analyzed to provide customized advertisements. (See \'Cookie Utilization\' section for details)',
        privacySection2Title: '2. Items of Personal Information Collected and Collection Methods',
        privacySection2Li1: 'Items collected during inquiry: Name, email address, message content',
        privacySection2Li2: 'Items automatically collected during service use: IP address, cookies, service usage records, access logs, device information (browser type, OS, etc.)',
        privacySection2Desc1: 'Methods of Personal Information Collection:',
        privacySection2Li3: 'Direct input and consent by the user through the \'Partnership Inquiry\' form',
        privacySection2Li4: 'Automatic collection during service use (e.g., web browser cookies, server log files)',
        privacySection3Title: '3. Retention and Use Period of Personal Information',
        privacySection3Li1: 'Inquiry and Consultation Records: Retained for 6 months after the completion of inquiry processing and then promptly destroyed.',
        privacySection3Li2: 'Service Use Related Information: Retained until the termination of the service or the achievement of the purpose of personal information collection and use, and then promptly destroyed. However, if there is a need for preservation under relevant laws, it will be preserved for the period specified by those laws.',
        privacySection4Title: '4. Procedures and Methods for Personal Information Destruction',
        privacySection4Desc: 'The Company promptly destroys personal information after the purpose of collection and use is achieved.',
        privacySection4Li1: 'Destruction Procedure: Personal information that has fulfilled its purpose is transferred to a separate DB (or separate paper documents) and stored for a certain period according to relevant laws before being destroyed. Personal information transferred to a separate DB will not be used for any other purpose unless required by law.',
        privacySection4Li2: 'Destruction Method: Personal information stored in electronic file format is deleted using technical methods that prevent reproduction of records, and personal information recorded on paper documents is destroyed by shredding or incineration.',
        privacySection5Title: '5. Provision of Personal Information to Third Parties',
        privacySection5Desc: 'The Company, in principle, does not provide users\' personal information to external parties beyond the scope specified in \'1. Purpose of Collection and Use of Personal Information\'. However, exceptions apply in the following cases:',
        privacySection5Li1: 'If the user has given prior consent',
        privacySection5Li2: 'If required by law, or by request from investigative agencies through procedures and methods defined by law for investigative purposes',
        privacySection6Title: '6. Cookie Utilization',
        privacySection6Desc1: 'The Company may use \'Cookies\' to provide better services to users. A cookie is a small piece of information that a website server sends to the user\'s computer browser and is stored on the user\'s PC hard drive.',
        privacySection6Li1: 'Purpose of Cookies: To analyze user access frequency and visit time, understand user preferences and interests, and utilize them as a basis for targeted marketing and service reorganization.',
        privacySection6Li2: 'Cookie Installation/Operation and Refusal: Users have the option to choose whether to allow cookie installation. By setting options in their web browser, users can allow all cookies, confirm each time a cookie is saved, or refuse to save all cookies. However, refusing to save cookies may cause difficulties in using some services.',
        privacySection6H3: 'Google AdSense',
        privacySection6Desc2: 'This Service displays advertisements through Google AdSense, an advertising service provided by Google. Google may use cookies to display customized advertisements based on the user\'s visit history to this and other websites.',
        privacySection6Desc3: 'Users can opt-out of cookies used for customized advertisement delivery by visiting Google\'s Ads and Content Network Privacy Policy page.',
        privacySection7Title: '7. Personal Information Protection Officer and Department',
        privacySection7Desc: 'The Company has designated a Personal Information Protection Officer and department as follows to protect users\' personal information and handle complaints related to personal information.',
        privacySection7Li1: 'Personal Information Protection Officer: [Name or Position of Officer - e.g., Website Administrator]',
        privacySection7Li2: 'Contact: [Inquiry Email Address - e.g., privacy@facetoface.com]',
        privacySection7Desc2: 'If you need to report personal information infringement or consult, please contact the following organizations:',
        privacySection7Li3: 'Personal Information Infringement Report Center (privacy.kisa.or.kr / Dial 118 without area code)',
        privacySection7Li4: 'Cyber Investigation Division of Supreme Prosecutors\' Office (www.spo.go.kr / Dial 1301 without area code)',
        privacySection7Li5: 'Cyber Safety Bureau of National Police Agency (cyberbureau.police.go.kr / Dial 182 without area code)',
        privacySection8Title: '8. Changes to the Privacy Policy',
        privacySection8Desc: 'If there are additions, deletions, or corrections to the content of this Privacy Policy due to laws and policies, the changes will be announced through the website\'s notice board at least 7 days before their effective date.',

        // --- Navigation & Other UI Elements ---
        drawButton: '뽑기', // Used by draw buttons
        shareButton: '결과 공유하기',
        contactNavButton: '문의하기',
        contactTitle: '문의하기',
        labelName: '이름:',
        labelEmail: '이메일:',
        labelMessage: '메시지:',
        contactSubmit: '보내기',
        animalFaceTestNavButton: 'AI 동물상 테스트',
        aboutNavButton: '회사 소개',
        footerAbout: '회사 소개',
        footerPrivacy: '개인정보 처리방침',
        resultPrefix: '축하합니다! "',
        resultSuffix: '"에 당첨되었습니다!',
        shareText: '방금 "Face-to-Face" 사이트에서 멋진 상품에 당첨되었습니다! ',
        shareAlert: '인스타그램에 공유해보세요!',
        noPrizeAlert: '먼저 상품을 뽑아주세요!',
        prizes: [
            '영화 티켓', '커피 한 잔', '온라인 쇼핑 할인 쿠폰', '다음 여행 10% 할인',
            '음악 스트리밍 1개월 무료 이용권', 'e북 교환권', '아이스크림 한 스쿱', '다음 주문 시 무료 배송'
        ],
    },
    en: {
        title: 'Face-to-Face: Luck and Fun',
        // --- Index.html Content ---
        heroTitle: 'Face-to-Face: Discover Your Hidden Charm!',
        heroTagline: 'Advanced AI technology meets delightful lucky draws. Explore your face and fortune now, and share the fun with friends!',
        heroButtonAi: 'Start AI Animal Face Test',
        featuresHeading: 'Special Features of Face-to-Face',
        featureAiTitle: 'AI Animal Face Test',
        featureAiDescription: 'Our advanced AI analyzes your facial features to find which animal you resemble most. Discover your unique charm and share amusing results with friends!',
        featureAiButton: 'Learn More',
        featureDrawTitle: 'Daily Lucky Draw',
        featureDrawDescription: 'Curious about today\'s fortune? Press a button to find small joys. Exciting and unpredictable lucky draws await you!',
        valueHeading: 'Why Choose Face-to-Face?',
        valueAiTitle: 'Accurate and Fun AI Analysis',
        valueAiDescription: 'Cutting-edge AI accurately analyzes facial features, providing interesting and reliable animal resemblance results.',
        valueShareTitle: 'Easy Sharing of Results',
        valueShareDescription: 'Easily share results with friends and family, compare animal resemblances, and have a great time together.',
        valueJoyTitle: 'New Joys Every Day',
        valueJoyDescription: 'Beyond simple tests, we offer daily opportunities for new luck and discoveries, bringing vitality to your daily life.',
        luckyDrawResultsHeading: 'Today\'s Lucky Draw Result',
        testimonialsHeading: 'User Reviews',
        testimonialText1: '"My face is a Shiba Inu?! So fun and amazing! My friends and I all tried it and lost track of time."',
        testimonialAuthor1: '- Kim**',
        testimonialText2: '"I didn\'t expect much from the lucky draw, but something great happened! It\'s fun to check every morning."',
        testimonialAuthor2: '- Park**',
        testimonialText3: '"I love the clean design and intuitive interface. It\'s great for entertaining myself when I\'m bored!"',
        testimonialAuthor3: '- Lee**',

        // --- About.html Content ---
        aboutPageTitle: 'About Face-to-Face',
        aboutIntroText: 'Face-to-Face is more than just a website; it was born to bring joy and fresh experiences to everyday life. Our goal is to provide users with unique and memorable interactive experiences by combining the latest web technologies with innovative AI.',
        aboutVisionTitle: 'Our Vision',
        aboutVisionDescription: 'We aim to create a space where users can discover new charms in their faces, gain positive energy through small fortunes, and enjoy pleasant times with friends. Our vision is to demonstrate that technology can positively impact people\'s lives and be a tool for creating joy.',
        aboutFeaturesTitle: 'Introduction to Key Features',
        aboutFeatureDrawTitle: 'Lucky Draw',
        aboutFeatureDrawDescription: 'What fortune awaits you every day? \'Lucky Draw\' is a simple, fun feature where you can test your luck with just one click and discover small joys. Experience the excitement of unpredictable results!',
        aboutFeatureAiTitle: 'AI Animal Face Test',
        aboutFeatureAiDescription: 'Utilizing cutting-edge AI technology, we analyze your facial features to find which animal you most resemble. Enjoy interesting insights and share your results with friends for delightful conversations. Discover the hidden animal friend within you!',
        aboutTechnologyTitle: 'Our Technology',
        aboutTechnologyDescription: 'Face-to-Face adopts the latest web standards and technologies to provide a stable and fast user experience. Particularly, our \'AI Animal Face Test\' incorporates sophisticated facial recognition and analysis AI models to deliver accurate and reliable results. We prioritize user data protection and continuously strive to build a secure environment.',
        aboutFutureTitle: 'Future Plans',
        aboutFutureDescription: 'We are not content with current features and plan to actively incorporate user feedback to add newer and more innovative functionalities. Through continuous updates and improvements, we will do our best to ensure Face-to-Face adds even more special value to your daily life.',
        aboutContactPrompt: 'If you have any inquiries or partnership proposals, please feel free to contact us at any time. We look forward to your valuable feedback.',
        aboutBackToHome: 'Back to Home',

        // --- Privacy.html Content ---
        privacyPageTitle: 'Privacy Policy',
        privacyIntroText1: 'Face-to-Face highly values the protection of user personal information and complies with the Personal Information Protection Act of Korea and related laws. This policy elaborates on the personal information collected, used, and provided during the use of the Face-to-Face service (hereinafter \'Service\').',
        privacyIntroText2: 'This Privacy Policy is effective from February 8, 2026.',
        privacySection1Title: '1. Purpose of Collection and Use of Personal Information',
        privacySection1Desc: 'The Company collects and uses personal information for the following purposes. The collected personal information will not be used for purposes other than those specified below, and prior consent will be sought if the purpose of use changes.',
        privacySection1Li1: 'Inquiry and Consultation Processing: Name, email address, and message content collected through \'Partnership Inquiry\' are used for verifying inquiry details, contacting and notifying for fact-finding, and communicating results.',
        privacySection1Li2: 'Service Improvement and Statistics: Service usage records, access frequency, and statistics on service use are analyzed to improve service quality and provide personalized services. Information may be processed into a non-identifiable form for this purpose.',
        privacySection1Li3: 'Advertising and Marketing: Through advertising platforms such as Google AdSense, service usage records and interests may be analyzed to provide customized advertisements. (See \'Cookie Utilization\' section for details)',
        privacySection2Title: '2. Items of Personal Information Collected and Collection Methods',
        privacySection2Li1: 'Items collected during inquiry: Name, email address, message content',
        privacySection2Li2: 'Items automatically collected during service use: IP address, cookies, service usage records, access logs, device information (browser type, OS, etc.)',
        privacySection2Desc1: 'Methods of Personal Information Collection:',
        privacySection2Li3: 'Direct input and consent by the user through the \'Partnership Inquiry\' form',
        privacySection2Li4: 'Automatic collection during service use (e.g., web browser cookies, server log files)',
        privacySection3Title: '3. Retention and Use Period of Personal Information',
        privacySection3Li1: 'Inquiry and Consultation Records: Retained for 6 months after the completion of inquiry processing and then promptly destroyed.',
        privacySection3Li2: 'Service Use Related Information: Retained until the termination of the service or the achievement of the purpose of personal information collection and use, and then promptly destroyed. However, if there is a need for preservation under relevant laws, it will be preserved for the period specified by those laws.',
        privacySection4Title: '4. Procedures and Methods for Personal Information Destruction',
        privacySection4Desc: 'The Company promptly destroys personal information after the purpose of collection and use is achieved.',
        privacySection4Li1: 'Destruction Procedure: Personal information that has fulfilled its purpose is transferred to a separate DB (or separate paper documents) and stored for a certain period according to relevant laws before being destroyed. Personal information transferred to a separate DB will not be used for any other purpose unless required by law.',
        privacySection4Li2: 'Destruction Method: Personal information stored in electronic file format is deleted using technical methods that prevent reproduction of records, and personal information recorded on paper documents is destroyed by shredding or incineration.',
        privacySection5Title: '5. Provision of Personal Information to Third Parties',
        privacySection5Desc: 'The Company, in principle, does not provide users\' personal information to external parties beyond the scope specified in \'1. Purpose of Collection and Use of Personal Information\'. However, exceptions apply in the following cases:',
        privacySection5Li1: 'If the user has given prior consent',
        privacySection5Li2: 'If required by law, or by request from investigative agencies through procedures and methods defined by law for investigative purposes',
        privacySection6Title: '6. Cookie Utilization',
        privacySection6Desc1: 'The Company may use \'Cookies\' to provide better services to users. A cookie is a small piece of information that a website server sends to the user\'s computer browser and is stored on the user\'s PC hard drive.',
        privacySection6Li1: 'Purpose of Cookies: To analyze user access frequency and visit time, understand user preferences and interests, and utilize them as a basis for targeted marketing and service reorganization.',
        privacySection6Li2: 'Cookie Installation/Operation and Refusal: Users have the option to choose whether to allow cookie installation. By setting options in their web browser, users can allow all cookies, confirm each time a cookie is saved, or refuse to save all cookies. However, refusing to save cookies may cause difficulties in using some services.',
        privacySection6H3: 'Google AdSense',
        privacySection6Desc2: 'This Service displays advertisements through Google AdSense, an advertising service provided by Google. Google may use cookies to display customized advertisements based on the user\'s visit history to this and other websites.',
        privacySection6Desc3: 'Users can opt-out of cookies used for customized advertisement delivery by visiting Google\'s Ads and Content Network Privacy Policy page.',
        privacySection7Title: '7. Personal Information Protection Officer and Department',
        privacySection7Desc: 'The Company has designated a Personal Information Protection Officer and department as follows to protect users\' personal information and handle complaints related to personal information.',
        privacySection7Li1: 'Personal Information Protection Officer: [Name or Position of Officer - e.g., Website Administrator]',
        privacySection7Li2: 'Contact: [Inquiry Email Address - e.g., privacy@facetoface.com]',
        privacySection7Desc2: 'If you need to report personal information infringement or consult, please contact the following organizations:',
        privacySection7Li3: 'Personal Information Infringement Report Center (privacy.kisa.or.kr / Dial 118 without area code)',
        privacySection7Li4: 'Cyber Investigation Division of Supreme Prosecutors\' Office (www.spo.go.kr / Dial 1301 without area code)',
        privacySection7Li5: 'Cyber Safety Bureau of National Police Agency (cyberbureau.police.go.kr / Dial 182 without area code)',
        privacySection8Title: '8. Changes to the Privacy Policy',
        privacySection8Desc: 'If there are additions, deletions, or corrections to the content of this Privacy Policy due to laws and policies, the changes will be announced through the website\'s notice board at least 7 days before their effective date.',

        // --- Navigation & Other UI Elements ---
        drawButton: '뽑기', // Used by draw buttons
        shareButton: '결과 공유하기',
        contactNavButton: '문의하기',
        contactTitle: '문의하기',
        labelName: '이름:',
        labelEmail: '이메일:',
        labelMessage: '메시지:',
        contactSubmit: '보내기',
        animalFaceTestNavButton: 'AI 동물상 테스트',
        aboutNavButton: '회사 소개',
        footerAbout: '회사 소개',
        footerPrivacy: '개인정보 처리방침',
        resultPrefix: '축하합니다! "',
        resultSuffix: '"에 당첨되었습니다!',
        shareText: '방금 "Face-to-Face" 사이트에서 멋진 상품에 당첨되었습니다! ',
        shareAlert: '인스타그램에 공유해보세요!',
        noPrizeAlert: '먼저 상품을 뽑아주세요!',
        prizes: [
            '영화 티켓', '커피 한 잔', '온라인 쇼핑 할인 쿠폰', '다음 여행 10% 할인',
            '음악 스트리밍 1개월 무료 이용권', 'e북 교환권', '아이스크림 한 스쿱', '다음 주문 시 무료 배송'
        ],
    }
};

let currentLang = localStorage.getItem('lang') || 'ko';

const setLanguage = (lang) => {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    const t = translations[lang];

    // Conditionally set document.title only for index.html
    if (window.location.pathname === '/' || window.location.pathname.endsWith('index.html')) {
        document.title = t.title;
    }

    const elementsToTranslate = [
        // Header/Navigation
        { id: 'contact-nav-button', key: 'contactNavButton' },
        { id: 'animal-face-test-nav-button', key: 'animalFaceTestNavButton' },
        { id: 'about-nav-button', key: 'aboutNavButton' },

        // Hero Section (index.html)
        { id: 'hero-title', key: 'heroTitle' },
        { id: 'hero-tagline', key: 'heroTagline' },
        { id: 'hero-button-ai', key: 'heroButtonAi' },
        { id: 'draw-button-hero', key: 'drawButton' },

        // Features Overview (index.html)
        { id: 'features-heading', key: 'featuresHeading' },
        { id: 'feature-ai-title', key: 'featureAiTitle' },
        { id: 'feature-ai-description', key: 'featureAiDescription' },
        { id: 'feature-ai-button', key: 'featureAiButton' },
        { id: 'feature-draw-title', key: 'featureDrawTitle' },
        { id: 'feature-draw-description', key: 'featureDrawDescription' },
        { id: 'draw-button', key: 'drawButton' },

        // Value Proposition (index.html)
        { id: 'value-heading', key: 'valueHeading' },
        { id: 'value-ai-title', key: 'valueAiTitle' },
        { id: 'value-ai-description', key: 'valueAiDescription' },
        { id: 'value-share-title', key: 'valueShareTitle' },
        { id: 'value-share-description', key: 'valueShareDescription' },
        { id: 'value-joy-title', key: 'valueJoyTitle' },
        { id: 'value-joy-description', key: 'valueJoyDescription' },

        // Lucky Draw Results (index.html)
        { id: 'lucky-draw-results-heading', key: 'luckyDrawResultsHeading' },
        { id: 'share-button', key: 'shareButton' },

        // Testimonials (index.html)
        { id: 'testimonials-heading', key: 'testimonialsHeading' },
        { id: 'testimonial-text-1', key: 'testimonialText1' },
        { id: 'testimonial-author-1', key: 'testimonialAuthor1' },
        { id: 'testimonial-text-2', key: 'testimonialText2' },
        { id: 'testimonial-author-2', key: 'testimonialAuthor2' },
        { id: 'testimonial-text-3', key: 'testimonialText3' },
        { id: 'testimonial-author-3', key: 'testimonialAuthor3' },

        // Footer - these are already handled
        { id: 'footer-about', key: 'footerAbout' },
        { id: 'footer-privacy', key: 'footerPrivacy' },
    ];

    elementsToTranslate.forEach(item => {
        const element = document.getElementById(item.id);
        if (element) {
            // For anchor tags, update textContent only if it's not the main site title or an image alt
            if (element.tagName === 'A' && element.id !== 'site-title') { // Assuming site-title will stay consistent, and other links are handled.
                 element.textContent = t[item.key];
            } else if (element.tagName !== 'IMG') { // Avoid changing alt text
                element.textContent = t[item.key];
            }
        }
    });

    // Contact modal specific elements
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

            // Scroll to the lucky draw results section
            const luckyDrawResultsSection = document.getElementById('lucky-draw-results');
            if (luckyDrawResultsSection) {
                luckyDrawResultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
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