// ============================================
// GET STARTUP INFORMATION
// ============================================

if (!getCurrentUser()) {
    window.location.href = "index.html";
}

const savedData =
    getUserItem("startupData");


if (!savedData) {

    window.location.href = "index.html";

}


const startupData =
    JSON.parse(savedData);


const roadmapContainer =
    document.getElementById("roadmap-container");



// ============================================
// TRANSLATIONS
// ============================================

const roadmapTranslations = {

    en: {

        roadmapLabel:
            "YOUR PERSONALIZED ROADMAP",

        roadmapTitle1:
            "Let's get your startup",

        roadmapTitle2:
            "ready.",

        personalizedBadge:
            "✨ Personalized roadmap based on your startup",

        progressTitle:
            "Startup Progress",

        progressText:
            "Keep moving forward 🚀",

        journey:
            "Your journey",

        nextSteps:
            "YOUR NEXT STEPS",

        roadmapHeading:
            "Startup Roadmap",

        reset:
            "Reset Progress",

        modalRequired:
            "Usually required",

        modalNote:
            "💡 Requirements can vary depending on your business and location.",

        gotIt:
            "Got it",

        helpTitle:
            "Not sure where to start?",

        helpText:
            "Start with the highlighted step. We've arranged your roadmap in a simple order.",

        completeTitle:
            "ROADMAP COMPLETE",

        completeHeading:
            "You did it! 🚀",

        completeText:
            "Your startup roadmap is complete. You've taken all the major steps — now it's time to build!",

        letsGo:
            "Let's Go! ✨",

        completed:
            "COMPLETED",

        startHere:
            "Start here",

        nextStep:
            "Next step",

        upcoming:
            "Upcoming",

        businessSpecific:
            "Business specific",

        usuallyRequired:
            "Usually required:",

        markCompleted:
            "Mark as Completed",

        completedButton:
            "✓ Completed",

        viewDetails:
            "View Details →",

        officialPortal:
            "Official Portal ↗",

        officialVideo:
            "🎥 Official Video",

        officialGuide:
            "📖 Official Guide",

        openPortal:
            "🏛️ Open Official Portal ↗",

        step:
            "STEP",

        businessWord:
            "business",

        stage:
            "Stage:",

        businessStructureTitle:
            "Choose your business structure",

        businessStructureDescription:
            "Decide how your business will be organised, such as a proprietorship, partnership, LLP or company.",

        businessRegistrationTitle:
            "Business Registration",

        businessRegistrationDescription:
            "Complete the appropriate registration process for your chosen business structure.",

        msmeTitle:
            "MSME / Udyam Registration",

        msmeDescription:
            "Check whether Udyam registration is relevant to your enterprise and review the official requirements.",

        gstTitle:
            "GST Registration",

        gstDescription:
            "Check whether GST registration applies to your business based on its activities and circumstances.",

        foodTitle:
            "Food Business Compliance",

        foodDescription:
            "If your startup operates as a food business, check the applicable food-safety registration or licence requirements.",

        retailTitle:
            "Local Business Requirements",

        retailDescription:
            "Check the registrations, permissions or local requirements that may apply to your retail business and location.",

        technologyTitle:
            "Technology Startup Checklist",

        technologyDescription:
            "Review the registrations, business documentation and startup-specific requirements relevant to your technology venture.",

        servicesTitle:
            "Industry-specific Requirements",


        navHome: "Home",
        navFunding: "Funding",
        navFeatures: "Features",
        navStartAgain: "Start Again",

        navConnect: "Connect",

        navAssistant: "AI Assistant",
        assistantFab: "Ask StartEase",
        assistantKicker: "STARTEASE AI ASSISTANT",
        assistantTitle: "Your startup co-pilot.",
        assistantSubtitle: "Ask about your next step, funding, setup or building your product.",
        assistantPlaceholder: "Ask me something about your startup...",
        assistantSend: "Send",
        assistantFootnote: "StartEase uses your roadmap context to give guidance. Verify official requirements before applying.",
        assistantWelcome: "Hi {name}! I already know the basics of your {business} journey. Tell me what you are stuck on, and I’ll use your roadmap, progress and startup stage to guide you.",
        assistantQuickNext: "What should I do next?",
        assistantQuickProgress: "How am I doing?",
        assistantQuickFunding: "Can I look at funding?",
        assistantQuickBuild: "I need a developer",
        assistantQuickReadiness: "What am I missing?",

        connectLabel: "STARTEASE CONNECT",
        connectTitle: "Know what help you need. Know what to ask for.",
        connectText: "Choose the kind of help your startup needs and build a simple brief you can take to a professional or service platform.",
        connectBadge: "Build with confidence",
        connectDeveloperTag: "BUILD",
        connectDeveloperTitle: "Developer",
        connectDeveloperText: "Website, mobile app or both.",
        connectDesignerTag: "BRAND",
        connectDesignerTitle: "Designer",
        connectDesignerText: "Logo, identity and visual design.",
        connectFinanceTag: "MONEY",
        connectFinanceTitle: "Finance help",
        connectFinanceText: "Bookkeeping, accounts and financial setup.",
        connectLegalTag: "LEGAL",
        connectLegalTitle: "Legal help",
        connectLegalText: "Registrations, agreements and legal guidance.",
        connectStepLabel: "STEP 1 · TELL US WHAT YOU NEED",
        connectBriefLabel: "YOUR STARTER BRIEF",
        connectCopy: "Copy brief",
        connectNote: "StartEase does not assign or verify service providers. It helps you understand the help you need and prepare a clear brief before you contact one.",

        fundingLabel: "FUND YOUR STARTUP",
        fundingTitle: "Find a funding route that fits your stage.",
        fundingText: "Explore self-funding, loans and startup funding in one simple place. StartEase helps you understand the route before you apply.",
        fundingTagStartup: "STARTUP FUNDING",
        fundingStartupTitle: "Startup India funding guide",
        fundingStartupText: "Explore funding routes, government schemes and investor-focused resources for startups.",
        fundingTagLoan: "BUSINESS LOANS",
        fundingLoanTitle: "Loans for micro businesses",
        fundingLoanText: "PMMY supports eligible micro enterprises through lending institutions, with categories based on loan size.",
        fundingTagPortal: "FIND A ROUTE",
        fundingPortalTitle: "JanSamarth",
        fundingPortalText: "A government portal that brings multiple credit-linked schemes into one place so applicants can explore relevant options.",
        fundingTagSeed: "SEED FUND",
        fundingSeedTitle: "Startup India Seed Fund",
        fundingSeedText: "Explore seed-fund support for eligible startups and review the official application information.",
        fundingLearn: "Explore official resource →",
        fundingPrepLabel: "BEFORE YOU APPLY",
        fundingPrepTitle: "Keep these basics ready",
        fundingCheck1: "Business details and founder information",
        fundingCheck2: "Basic financial or budget information",
        fundingCheck3: "Documents requested by the relevant scheme or lender",
        fundingCheck4: "A clear idea of how the funding will be used",
        fundingNote: "Eligibility, approval and terms depend on the relevant scheme, lender or institution.",

        servicesDescription:
            "Identify any registrations, permissions or licences that may apply to your particular service and location."

    },


    hi: {

        roadmapLabel:
            "आपका व्यक्तिगत रोडमैप",

        roadmapTitle1:
            "आइए आपके स्टार्टअप को",

        roadmapTitle2:
            "तैयार करें।",

        personalizedBadge:
            "✨ आपके स्टार्टअप के आधार पर व्यक्तिगत रोडमैप",

        progressTitle:
            "स्टार्टअप प्रगति",

        progressText:
            "आगे बढ़ते रहें 🚀",

        journey:
            "आपकी यात्रा",

        nextSteps:
            "आपके अगले चरण",

        roadmapHeading:
            "स्टार्टअप रोडमैप",

        reset:
            "प्रगति रीसेट करें",

        modalRequired:
            "आमतौर पर आवश्यक",

        modalNote:
            "💡 आवश्यकताएँ आपके व्यवसाय और स्थान के अनुसार अलग हो सकती हैं।",

        gotIt:
            "समझ गया",

        helpTitle:
            "समझ नहीं आ रहा कहाँ से शुरू करें?",

        helpText:
            "हाइलाइट किए गए चरण से शुरुआत करें। हमने आपका रोडमैप एक आसान क्रम में रखा है।",

        completeTitle:
            "रोडमैप पूरा हुआ",

        completeHeading:
            "आपने कर दिखाया! 🚀",

        completeText:
            "आपका स्टार्टअप रोडमैप पूरा हो गया है। आपने सभी प्रमुख चरण पूरे कर लिए हैं — अब इसे बनाने का समय है!",

        letsGo:
            "चलो शुरू करें! ✨",

        completed:
            "पूरा हुआ",

        startHere:
            "यहाँ से शुरू करें",

        nextStep:
            "अगला चरण",

        upcoming:
            "आगामी",

        businessSpecific:
            "व्यवसाय-विशिष्ट",

        usuallyRequired:
            "आमतौर पर आवश्यक:",

        markCompleted:
            "पूरा हुआ चिन्हित करें",

        completedButton:
            "✓ पूरा हुआ",

        viewDetails:
            "विवरण देखें →",

        officialPortal:
            "आधिकारिक पोर्टल ↗",

        officialVideo:
            "🎥 आधिकारिक वीडियो",

        officialGuide:
            "📖 आधिकारिक गाइड",

        openPortal:
            "🏛️ आधिकारिक पोर्टल खोलें ↗",

        step:
            "चरण",

        businessWord:
            "बिज़नेस",

        stage:
            "चरण:",

        businessStructureTitle:
            "अपने व्यवसाय का ढाँचा चुनें",

        businessStructureDescription:
            "तय करें कि आपका व्यवसाय किस प्रकार व्यवस्थित होगा, जैसे प्रोप्राइटरशिप, पार्टनरशिप, LLP या कंपनी।",

        businessRegistrationTitle:
            "बिज़नेस रजिस्ट्रेशन",

        businessRegistrationDescription:
            "अपने चुने हुए व्यवसाय ढाँचे के अनुसार उचित पंजीकरण प्रक्रिया पूरी करें।",

        msmeTitle:
            "MSME / उद्यम रजिस्ट्रेशन",

        msmeDescription:
            "जाँचें कि आपके व्यवसाय के लिए उद्यम रजिस्ट्रेशन आवश्यक है या नहीं और आधिकारिक आवश्यकताओं को देखें।",

        gstTitle:
            "GST रजिस्ट्रेशन",

        gstDescription:
            "जाँचें कि आपके व्यवसाय की गतिविधियों और परिस्थितियों के आधार पर GST रजिस्ट्रेशन लागू होता है या नहीं।",

        foodTitle:
            "फूड बिज़नेस अनुपालन",

        foodDescription:
            "यदि आपका स्टार्टअप खाद्य व्यवसाय है, तो लागू खाद्य-सुरक्षा पंजीकरण या लाइसेंस की आवश्यकताओं की जाँच करें।",

        retailTitle:
            "स्थानीय व्यवसाय आवश्यकताएँ",

        retailDescription:
            "अपने रिटेल व्यवसाय और स्थान पर लागू होने वाले पंजीकरण, अनुमतियों या स्थानीय आवश्यकताओं की जाँच करें।",

        technologyTitle:
            "टेक्नोलॉजी स्टार्टअप चेकलिस्ट",

        technologyDescription:
            "अपने टेक्नोलॉजी व्यवसाय से संबंधित पंजीकरण, व्यावसायिक दस्तावेज़ और स्टार्टअप आवश्यकताओं की समीक्षा करें।",

        servicesTitle:
            "उद्योग-विशिष्ट आवश्यकताएँ",

        navHome: "होम",
        navFunding: "फंडिंग",
        navFeatures: "फीचर्स",
        navStartAgain: "फिर से शुरू करें",

        navConnect: "कनेक्ट",

        navAssistant: "AI असिस्टेंट",
        assistantFab: "StartEase से पूछें",
        assistantKicker: "STARTEASE AI असिस्टेंट",
        assistantTitle: "आपका स्टार्टअप को-पायलट।",
        assistantSubtitle: "अगले कदम, फंडिंग, सेटअप या प्रोडक्ट बनाने के बारे में पूछें।",
        assistantPlaceholder: "अपने स्टार्टअप के बारे में कुछ पूछें...",
        assistantSend: "भेजें",
        assistantFootnote: "StartEase आपके रोडमैप के आधार पर मार्गदर्शन देता है। आवेदन से पहले आधिकारिक आवश्यकताएँ जाँचें।",
        assistantWelcome: "नमस्ते {name}! मुझे आपके {business} स्टार्टअप की बुनियादी जानकारी पता है। जहाँ अटके हैं बताइए — मैं आपके रोडमैप, प्रोग्रेस और स्टेज के आधार पर मदद करूँगा।",
        assistantQuickNext: "अब मुझे क्या करना चाहिए?",
        assistantQuickProgress: "मेरी प्रोग्रेस कैसी है?",
        assistantQuickFunding: "क्या मैं फंडिंग देख सकता/सकती हूँ?",
        assistantQuickBuild: "मुझे डेवलपर चाहिए",
        assistantQuickReadiness: "मुझमें क्या कमी है?",

        connectLabel: "STARTEASE कनेक्ट",
        connectTitle: "आपको किस मदद की जरूरत है, जानें। क्या पूछना है, यह भी जानें।",
        connectText: "अपने स्टार्टअप के लिए जरूरी मदद चुनें और एक आसान ब्रीफ तैयार करें जिसे आप किसी प्रोफेशनल या सर्विस प्लेटफॉर्म के साथ साझा कर सकें।",
        connectBadge: "आत्मविश्वास से बनाएं",
        connectDeveloperTag: "बिल्ड",
        connectDeveloperTitle: "डेवलपर",
        connectDeveloperText: "वेबसाइट, मोबाइल ऐप या दोनों।",
        connectDesignerTag: "ब्रांड",
        connectDesignerTitle: "डिज़ाइनर",
        connectDesignerText: "लोगो, पहचान और विज़ुअल डिज़ाइन।",
        connectFinanceTag: "पैसा",
        connectFinanceTitle: "वित्तीय मदद",
        connectFinanceText: "अकाउंट, बहीखाता और वित्तीय सेटअप।",
        connectLegalTag: "कानूनी",
        connectLegalTitle: "कानूनी मदद",
        connectLegalText: "रजिस्ट्रेशन, समझौते और कानूनी मार्गदर्शन।",
        connectStepLabel: "चरण 1 · बताएं आपको क्या चाहिए",
        connectBriefLabel: "आपका स्टार्टर ब्रीफ",
        connectCopy: "ब्रीफ कॉपी करें",
        connectNote: "StartEase किसी सर्विस प्रोफेशनल को नियुक्त या सत्यापित नहीं करता। यह आपको सही मदद समझने और संपर्क करने से पहले एक स्पष्ट ब्रीफ तैयार करने में मदद करता है।",

        fundingLabel: "अपने स्टार्टअप के लिए फंडिंग",
        fundingTitle: "अपने चरण के अनुसार फंडिंग विकल्प खोजें।",
        fundingText: "सेल्फ-फंडिंग, लोन और स्टार्टअप फंडिंग विकल्पों को एक ही जगह समझें। StartEase आवेदन से पहले विकल्प समझने में मदद करता है।",
        fundingTagStartup: "स्टार्टअप फंडिंग",
        fundingStartupTitle: "Startup India फंडिंग गाइड",
        fundingStartupText: "स्टार्टअप के लिए फंडिंग मार्ग, सरकारी योजनाएँ और निवेश से जुड़ी जानकारी देखें।",
        fundingTagLoan: "बिज़नेस लोन",
        fundingLoanTitle: "माइक्रो बिज़नेस के लिए लोन",
        fundingLoanText: "PMMY पात्र माइक्रो उद्यमों को ऋण संस्थानों के माध्यम से सहायता देता है, जिसमें लोन राशि के अनुसार श्रेणियाँ होती हैं।",
        fundingTagPortal: "विकल्प खोजें",
        fundingPortalTitle: "JanSamarth",
        fundingPortalText: "एक सरकारी पोर्टल जहाँ कई क्रेडिट-लिंक्ड योजनाएँ एक जगह मिलती हैं और आवेदक संबंधित विकल्प देख सकते हैं।",
        fundingTagSeed: "सीड फंड",
        fundingSeedTitle: "Startup India Seed Fund",
        fundingSeedText: "पात्र स्टार्टअप के लिए सीड-फंड सहायता देखें और आधिकारिक आवेदन जानकारी पढ़ें।",
        fundingLearn: "आधिकारिक जानकारी देखें →",
        fundingPrepLabel: "आवेदन से पहले",
        fundingPrepTitle: "ये बुनियादी चीज़ें तैयार रखें",
        fundingCheck1: "व्यवसाय और संस्थापक की जानकारी",
        fundingCheck2: "बजट या बुनियादी वित्तीय जानकारी",
        fundingCheck3: "योजना या लोनदाता द्वारा मांगे गए दस्तावेज़",
        fundingCheck4: "फंडिंग का उपयोग कैसे होगा इसकी स्पष्ट योजना",
        fundingNote: "पात्रता, स्वीकृति और शर्तें संबंधित योजना, लोनदाता या संस्था पर निर्भर करती हैं",

        servicesDescription:
            "अपने सेवा व्यवसाय और स्थान पर लागू होने वाले पंजीकरण, अनुमतियों या लाइसेंस की पहचान करें।"

    },


    mr: {

        roadmapLabel:
            "तुमचा वैयक्तिक रोडमॅप",

        roadmapTitle1:
            "चला तुमचा स्टार्टअप",

        roadmapTitle2:
            "तयार करूया.",

        personalizedBadge:
            "✨ तुमच्या स्टार्टअपवर आधारित वैयक्तिक रोडमॅप",

        progressTitle:
            "स्टार्टअप प्रगती",

        progressText:
            "पुढे जात रहा 🚀",

        journey:
            "तुमचा प्रवास",

        nextSteps:
            "तुमचे पुढील टप्पे",

        roadmapHeading:
            "स्टार्टअप रोडमॅप",

        reset:
            "प्रगती रीसेट करा",

        modalRequired:
            "सामान्यतः आवश्यक",

        modalNote:
            "💡 आवश्यकता तुमच्या व्यवसाय आणि ठिकाणानुसार बदलू शकतात.",

        gotIt:
            "समजले",

        helpTitle:
            "कुठून सुरुवात करावी हे समजत नाही?",

        helpText:
            "हायलाइट केलेल्या टप्प्यापासून सुरुवात करा. आम्ही तुमचा रोडमॅप सोप्या क्रमाने तयार केला आहे.",

        completeTitle:
            "रोडमॅप पूर्ण",

        completeHeading:
            "तुम्ही करून दाखवलंत! 🚀",

        completeText:
            "तुमचा स्टार्टअप रोडमॅप पूर्ण झाला आहे. तुम्ही सर्व प्रमुख टप्पे पूर्ण केले आहेत — आता ते प्रत्यक्षात आणण्याची वेळ आहे!",

        letsGo:
            "चला सुरू करूया! ✨",

        completed:
            "पूर्ण",

        startHere:
            "येथून सुरुवात करा",

        nextStep:
            "पुढील टप्पा",

        upcoming:
            "आगामी",

        businessSpecific:
            "व्यवसाय-विशिष्ट",

        usuallyRequired:
            "सामान्यतः आवश्यक:",

        markCompleted:
            "पूर्ण झाले म्हणून चिन्हांकित करा",

        completedButton:
            "✓ पूर्ण",

        viewDetails:
            "तपशील पहा →",

        officialPortal:
            "अधिकृत पोर्टल ↗",

        officialVideo:
            "🎥 अधिकृत व्हिडिओ",

        officialGuide:
            "📖 अधिकृत मार्गदर्शक",

        openPortal:
            "🏛️ अधिकृत पोर्टल उघडा ↗",

        step:
            "टप्पा",

        businessWord:
            "व्यवसाय",

        stage:
            "टप्पा:",

        businessStructureTitle:
            "तुमच्या व्यवसायाची रचना निवडा",

        businessStructureDescription:
            "तुमचा व्यवसाय कसा आयोजित केला जाईल हे ठरवा, जसे प्रोप्रायटरशिप, पार्टनरशिप, LLP किंवा कंपनी.",

        businessRegistrationTitle:
            "व्यवसाय नोंदणी",

        businessRegistrationDescription:
            "तुमच्या निवडलेल्या व्यवसायाच्या रचनेनुसार योग्य नोंदणी प्रक्रिया पूर्ण करा.",

        msmeTitle:
            "MSME / उद्यम नोंदणी",

        msmeDescription:
            "तुमच्या व्यवसायासाठी उद्यम नोंदणी लागू आहे का ते तपासा आणि अधिकृत आवश्यकता पहा.",

        gstTitle:
            "GST नोंदणी",

        gstDescription:
            "तुमच्या व्यवसायाच्या क्रियाकलापांनुसार आणि परिस्थितीनुसार GST नोंदणी लागू आहे का ते तपासा.",

        foodTitle:
            "फूड व्यवसाय अनुपालन",

        foodDescription:
            "तुमचा स्टार्टअप खाद्य व्यवसाय असल्यास लागू अन्न-सुरक्षा नोंदणी किंवा परवान्याच्या आवश्यकता तपासा.",

        retailTitle:
            "स्थानिक व्यवसाय आवश्यकता",

        retailDescription:
            "तुमच्या रिटेल व्यवसायासाठी आणि ठिकाणासाठी लागू होणाऱ्या नोंदणी, परवानग्या किंवा स्थानिक आवश्यकता तपासा.",

        technologyTitle:
            "तंत्रज्ञान स्टार्टअप चेकलिस्ट",

        technologyDescription:
            "तुमच्या तंत्रज्ञान व्यवसायाशी संबंधित नोंदणी, व्यावसायिक कागदपत्रे आणि स्टार्टअप आवश्यकता तपासा.",

        servicesTitle:
            "उद्योग-विशिष्ट आवश्यकता",


        navHome: "होम",
        navFunding: "फंडिंग",
        navFeatures: "फीचर्स",
        navStartAgain: "पुन्हा सुरू करा",

        navConnect: "कनेक्ट",

        navAssistant: "AI असिस्टंट",
        assistantFab: "StartEase ला विचारा",
        assistantKicker: "STARTEASE AI असिस्टंट",
        assistantTitle: "तुमचा स्टार्टअप को-पायलट.",
        assistantSubtitle: "पुढचा टप्पा, फंडिंग, सेटअप किंवा प्रॉडक्ट तयार करण्याबद्दल विचारा.",
        assistantPlaceholder: "तुमच्या स्टार्टअपबद्दल काही विचारा...",
        assistantSend: "पाठवा",
        assistantFootnote: "StartEase तुमच्या रोडमॅपच्या संदर्भातून मार्गदर्शन देते. अर्ज करण्यापूर्वी अधिकृत आवश्यकता तपासा.",
        assistantWelcome: "नमस्कार {name}! तुमच्या {business} स्टार्टअपची मूलभूत माहिती मला माहित आहे. कुठे अडकलात ते सांगा — मी तुमच्या रोडमॅप, प्रगती आणि टप्प्यानुसार मदत करेन.",
        assistantQuickNext: "आता काय करावे?",
        assistantQuickProgress: "माझी प्रगती कशी आहे?",
        assistantQuickFunding: "फंडिंग पाहू शकतो का?",
        assistantQuickBuild: "मला डेव्हलपर हवा आहे",
        assistantQuickReadiness: "माझ्यात काय कमी आहे?",

        connectLabel: "STARTEASE कनेक्ट",
        connectTitle: "तुम्हाला कोणती मदत हवी आहे ते जाणून घ्या. काय विचारायचे तेही जाणून घ्या.",
        connectText: "तुमच्या स्टार्टअपला हवी असलेली मदत निवडा आणि एखाद्या प्रोफेशनल किंवा सर्विस प्लॅटफॉर्मसोबत शेअर करता येईल असा सोपा ब्रीफ तयार करा.",
        connectBadge: "आत्मविश्वासाने तयार करा",
        connectDeveloperTag: "बिल्ड",
        connectDeveloperTitle: "डेव्हलपर",
        connectDeveloperText: "वेबसाइट, मोबाइल अॅप किंवा दोन्ही.",
        connectDesignerTag: "ब्रँड",
        connectDesignerTitle: "डिझायनर",
        connectDesignerText: "लोगो, ओळख आणि व्हिज्युअल डिझाइन.",
        connectFinanceTag: "पैसे",
        connectFinanceTitle: "आर्थिक मदत",
        connectFinanceText: "अकाउंटिंग, बुककीपिंग आणि आर्थिक सेटअप.",
        connectLegalTag: "कायदेशीर",
        connectLegalTitle: "कायदेशीर मदत",
        connectLegalText: "नोंदणी, करार आणि कायदेशीर मार्गदर्शन.",
        connectStepLabel: "टप्पा 1 · तुम्हाला काय हवे ते सांगा",
        connectBriefLabel: "तुमचा स्टार्टर ब्रीफ",
        connectCopy: "ब्रीफ कॉपी करा",
        connectNote: "StartEase कोणत्याही सर्विस प्रोफेशनलची नेमणूक किंवा पडताळणी करत नाही. संपर्क करण्यापूर्वी तुम्हाला कोणती मदत हवी आहे हे समजून घेण्यासाठी आणि स्पष्ट ब्रीफ तयार करण्यासाठी ते मदत करते.",

        fundingLabel: "तुमच्या स्टार्टअपसाठी फंडिंग",
        fundingTitle: "तुमच्या टप्प्यानुसार योग्य फंडिंग मार्ग शोधा.",
        fundingText: "सेल्फ-फंडिंग, कर्ज आणि स्टार्टअप फंडिंगचे पर्याय एकाच ठिकाणी समजून घ्या. अर्ज करण्यापूर्वी पर्याय समजून घेण्यासाठी StartEase मदत करते.",
        fundingTagStartup: "स्टार्टअप फंडिंग",
        fundingStartupTitle: "Startup India फंडिंग मार्गदर्शक",
        fundingStartupText: "स्टार्टअपसाठी फंडिंगचे मार्ग, सरकारी योजना आणि गुंतवणुकीशी संबंधित माहिती पाहा.",
        fundingTagLoan: "व्यवसाय कर्ज",
        fundingLoanTitle: "सूक्ष्म व्यवसायांसाठी कर्ज",
        fundingLoanText: "PMMY पात्र सूक्ष्म उद्योगांना कर्ज देणाऱ्या संस्थांमार्फत मदत करते. कर्जाच्या रकमेनुसार श्रेणी असतात.",
        fundingTagPortal: "मार्ग शोधा",
        fundingPortalTitle: "JanSamarth",
        fundingPortalText: "क्रेडिट-लिंक्ड अनेक योजना एका ठिकाणी पाहण्यासाठी सरकारी पोर्टल.",
        fundingTagSeed: "सीड फंड",
        fundingSeedTitle: "Startup India Seed Fund",
        fundingSeedText: "पात्र स्टार्टअपसाठी सीड-फंड मदत आणि अधिकृत अर्जाची माहिती पाहा.",
        fundingLearn: "अधिकृत माहिती पाहा →",
        fundingPrepLabel: "अर्ज करण्यापूर्वी",
        fundingPrepTitle: "या मूलभूत गोष्टी तयार ठेवा",
        fundingCheck1: "व्यवसाय आणि संस्थापकाची माहिती",
        fundingCheck2: "अंदाजे बजेट किंवा आर्थिक माहिती",
        fundingCheck3: "योजना किंवा कर्जदात्याने मागितलेली कागदपत्रे",
        fundingCheck4: "फंडिंगचा वापर कसा करणार याची स्पष्ट योजना",
        fundingNote: "पात्रता, मंजुरी आणि अटी संबंधित योजना, कर्जदाता किंवा संस्थेवर अवलंबून असतात.",

        servicesDescription:
            "तुमच्या सेवा व्यवसायासाठी आणि ठिकाणासाठी लागू होणाऱ्या नोंदणी, परवानग्या किंवा परवाने ओळखा."

    }

};


// ============================================
// GET CURRENT LANGUAGE
// ============================================

function getRoadmapLanguage() {

    return localStorage.getItem(
        "startEaseLanguage"
    ) || "en";

}


function t(key) {

    const language =
        getRoadmapLanguage();

    return roadmapTranslations[language]?.[key]
        || roadmapTranslations.en[key]
        || key;

}


// ============================================
// ROADMAP DATA
// ============================================

const baseSteps = [

    {
        id: 1,
        icon: "🏢",

        titleKey:
            "businessStructureTitle",

        descriptionKey:
            "businessStructureDescription",

        statusKey:
            "startHere",

        requirements: [
            "Business name",
            "Business activity",
            "Founder details"
        ]

    },


    {
        id: 2,
        icon: "📋",

        titleKey:
            "businessRegistrationTitle",

        descriptionKey:
            "businessRegistrationDescription",

        statusKey:
            "nextStep",

        requirements: [
            "PAN",
            "Identity proof",
            "Address proof",
            "Business details"
        ],

        officialUrl:
            "https://www.mca.gov.in/"

    },


    {
        id: 3,
        icon: "🌱",

        titleKey:
            "msmeTitle",

        descriptionKey:
            "msmeDescription",

        statusKey:
            "upcoming",

        requirements: [
            "Aadhaar",
            "PAN",
            "Business information"
        ],

        officialUrl:
            "https://udyamregistration.gov.in/"

    },


    {
        id: 4,
        icon: "🧾",

        titleKey:
            "gstTitle",

        descriptionKey:
            "gstDescription",

        statusKey:
            "upcoming",

        requirements: [
            "PAN",
            "Business address",
            "Business information",
            "Bank details"
        ],

        officialUrl:
            "https://www.gst.gov.in/",

        guideUrl:
            "https://tutorial.gst.gov.in/userguide/registration/Apply_for_Registration_Normal_Taxpayer.htm",

        guideType:
            "official-guide"

    }

];


// ============================================
// PERSONALIZED STEP
// ============================================

let personalizedStep;


if (startupData.business === "Food") {

    personalizedStep = {

        id: 5,
        icon: "🍽️",

        titleKey:
            "foodTitle",

        descriptionKey:
            "foodDescription",

        statusKey:
            "businessSpecific",

        requirements: [
            "Business details",
            "Food business activity",
            "Premises details"
        ],

        officialUrl:
            "https://fssai.gov.in/",

        guideUrl:
            "https://www.youtube.com/c/FoodsafetyinIndia",

        guideType:
            "official-video"

    };

}
else if (startupData.business === "Retail") {

    personalizedStep = {

        id: 5,
        icon: "🏪",

        titleKey:
            "retailTitle",

        descriptionKey:
            "retailDescription",

        statusKey:
            "businessSpecific",

        requirements: [
            "Business activity",
            "Business address",
            "Location details"
        ]

    };

}
else if (startupData.business === "Technology") {

    personalizedStep = {

        id: 5,
        icon: "💻",

        titleKey:
            "technologyTitle",

        descriptionKey:
            "technologyDescription",

        statusKey:
            "businessSpecific",

        requirements: [
            "Business activity",
            "Founder details",
            "Business documentation"
        ]

    };

}
else {

    personalizedStep = {

        id: 5,
        icon: "📜",

        titleKey:
            "servicesTitle",

        descriptionKey:
            "servicesDescription",

        statusKey:
            "businessSpecific",

        requirements: [
            "Business activity",
            "Location",
            "Industry-specific documents"
        ]

    };

}


const roadmapSteps = [
    ...baseSteps,
    personalizedStep
];


setUserItem(
    "totalRoadmapSteps",
    roadmapSteps.length
);


// ============================================
// COMPLETED STEPS
// ============================================

let completedSteps =
    JSON.parse(
        getUserItem("completedSteps")
    ) || [];


let celebrationShown =
    completedSteps.length === roadmapSteps.length;


// ============================================
// STARTUP SUMMARY
// ============================================

function updateSummary() {

    const summary =
        document.getElementById(
            "startup-summary"
        );

    if (!summary) return;


    const businessNames = {

        en: {
            Retail: "Retail",
            Food: "Food",
            Technology: "Technology",
            Services: "Services"
        },

        hi: {
            Retail: "रिटेल",
            Food: "फूड",
            Technology: "टेक्नोलॉजी",
            Services: "सर्विस"
        },

        mr: {
            Retail: "रिटेल",
            Food: "फूड",
            Technology: "तंत्रज्ञान",
            Services: "सेवा"
        }

    };


    const stageNames = {

        en: {
            Idea: "Idea",
            Planning: "Planning",
            Operating: "Operating"
        },

        hi: {
            Idea: "आइडिया",
            Planning: "प्लानिंग",
            Operating: "संचालित"
        },

        mr: {
            Idea: "कल्पना",
            Planning: "नियोजन",
            Operating: "सुरू आहे"
        }

    };


    const language =
        getRoadmapLanguage();


    const business =
        businessNames[language]?.[
            startupData.business
        ] || startupData.business;


    const stage =
        stageNames[language]?.[
            startupData.stage
        ] || startupData.stage;


    summary.innerHTML =
        `<strong>${business}</strong> ${t("businessWord")}
         in <strong>${startupData.location}</strong>
         · ${t("stage")} <strong>${stage}</strong>`;

}


// ============================================
// STATIC TRANSLATIONS
// ============================================

function updateStaticTexts() {

    document
        .querySelectorAll("[data-i18n]")
        .forEach(element => {

            const key =
                element.dataset.i18n;

            const translated =
                t(key);

            if (translated) {
                element.textContent =
                    translated;
            }

        });


    const selector =
        document.getElementById(
            "language-selector"
        );

    if (selector) {

        selector.value =
            getRoadmapLanguage();

    }


    updateSummary();

}


// ============================================
// TRANSLATED STEP
// ============================================

function getTranslatedStep(step) {

    return {

        ...step,

        title:
            t(step.titleKey),

        description:
            t(step.descriptionKey),

        status:
            t(step.statusKey)

    };

}


// ============================================
// RENDER ROADMAP
// ============================================

function renderRoadmap() {

    roadmapContainer.innerHTML = "";


    roadmapSteps.forEach(
        (originalStep, index) => {

            const step =
                getTranslatedStep(
                    originalStep
                );


            const completed =
                completedSteps.includes(
                    step.id
                );


            const isNext =
                !completed &&
                completedSteps.length === index;


            const card =
                document.createElement("div");


            card.className =
                `roadmap-card
                ${completed ? "completed-card" : ""}
                ${isNext ? "next-card" : ""}`;


            card.innerHTML = `

                <div class="roadmap-card-icon">
                    ${completed ? "✓" : step.icon}
                </div>


                <div class="roadmap-card-content">

                    <div class="roadmap-card-top">

                        <span class="step-status">
                            ${
                                completed
                                ? t("completed")
                                : step.status
                            }
                        </span>

                        <span class="step-number">
                            ${t("step")} ${step.id}
                        </span>

                    </div>


                    <h3>
                        ${step.title}
                    </h3>


                    <p>
                        ${step.description}
                    </p>


                    <div class="requirements">

                        <strong>
                            ${t("usuallyRequired")}
                        </strong>

                        <div class="requirement-list">

                            ${step.requirements
                                .map(
                                    item =>
                                        `<span>${translateRequirement(item)}</span>`
                                )
                                .join("")}

                        </div>

                    </div>


                    <div class="roadmap-actions">

                        ${
                            completed

                            ?

                            `<button
                                class="completed-btn"
                                onclick="toggleStep(${step.id})">

                                ${t("completedButton")}

                            </button>`

                            :

                            `<button
                                class="step-btn"
                                onclick="toggleStep(${step.id})">

                                ${t("markCompleted")}

                            </button>`
                        }


                        <button
                            class="details-btn"
                            onclick="showDetails(${step.id})">

                            ${t("viewDetails")}

                        </button>


                        ${
                            step.officialUrl

                            ?

                            `<a
                                class="official-btn"
                                href="${step.officialUrl}"
                                target="_blank"
                                rel="noopener noreferrer">

                                ${t("officialPortal")}

                            </a>`

                            :

                            ""
                        }

                    </div>

                </div>

            `;


            roadmapContainer.appendChild(card);

        }
    );


    updateProgress();

}


// ============================================
// REQUIREMENT TRANSLATIONS
// ============================================

function translateRequirement(item) {

    const language =
        getRoadmapLanguage();


    const translations = {

        en: {
            "Business name": "Business name",
            "Business activity": "Business activity",
            "Founder details": "Founder details",
            "PAN": "PAN",
            "Identity proof": "Identity proof",
            "Address proof": "Address proof",
            "Business details": "Business details",
            "Aadhaar": "Aadhaar",
            "Business information": "Business information",
            "Business address": "Business address",
            "Bank details": "Bank details",
            "Food business activity": "Food business activity",
            "Premises details": "Premises details",
            "Location details": "Location details",
            "Location": "Location",
            "Business documentation": "Business documentation",
            "Industry-specific documents": "Industry-specific documents"
        },

        hi: {
            "Business name": "व्यवसाय का नाम",
            "Business activity": "व्यवसाय की गतिविधि",
            "Founder details": "संस्थापक का विवरण",
            "PAN": "PAN",
            "Identity proof": "पहचान प्रमाण",
            "Address proof": "पता प्रमाण",
            "Business details": "व्यवसाय का विवरण",
            "Aadhaar": "आधार",
            "Business information": "व्यवसाय की जानकारी",
            "Business address": "व्यवसाय का पता",
            "Bank details": "बैंक विवरण",
            "Food business activity": "खाद्य व्यवसाय गतिविधि",
            "Premises details": "परिसर का विवरण",
            "Location details": "स्थान का विवरण",
            "Location": "स्थान",
            "Business documentation": "व्यवसाय दस्तावेज़",
            "Industry-specific documents": "उद्योग-विशिष्ट दस्तावेज़"
        },

        mr: {
            "Business name": "व्यवसायाचे नाव",
            "Business activity": "व्यवसायाची क्रिया",
            "Founder details": "संस्थापकाचा तपशील",
            "PAN": "PAN",
            "Identity proof": "ओळख पुरावा",
            "Address proof": "पत्ता पुरावा",
            "Business details": "व्यवसायाचा तपशील",
            "Aadhaar": "आधार",
            "Business information": "व्यवसायाची माहिती",
            "Business address": "व्यवसायाचा पत्ता",
            "Bank details": "बँक तपशील",
            "Food business activity": "फूड व्यवसायाची क्रिया",
            "Premises details": "जागेचा तपशील",
            "Location details": "ठिकाणाचा तपशील",
            "Location": "ठिकाण",
            "Business documentation": "व्यवसायाची कागदपत्रे",
            "Industry-specific documents": "उद्योग-विशिष्ट कागदपत्रे"
        }

    };


    return (
        translations[language]?.[item]
        || item
    );

}


// ============================================
// TOGGLE STEP
// ============================================

function toggleStep(id) {

    if (completedSteps.includes(id)) {

        completedSteps =
            completedSteps.filter(
                step => step !== id
            );

    }
    else {

        completedSteps.push(id);

    }


    setUserItem(
        "completedSteps",
        JSON.stringify(completedSteps)
    );


    renderRoadmap();

}


// ============================================
// UPDATE PROGRESS
// ============================================

function updateProgress() {

    const total =
        roadmapSteps.length;

    const completed =
        completedSteps.length;


    const percentage =
        Math.round(
            (completed / total) * 100
        );


    document
        .getElementById("progress-number")
        .textContent =
        `${percentage}%`;


    document
        .getElementById("progress-fill")
        .style.width =
        `${percentage}%`;


    document
        .getElementById("completed-count")
        .textContent =
        `${completed} of ${total} completed`;


    if (
        percentage === 100 &&
        !celebrationShown
    ) {

        celebrationShown = true;

        showCelebration();

    }


    if (percentage < 100) {

        celebrationShown = false;

    }

}


// ============================================
// SHOW DETAILS
// ============================================

function showDetails(id) {

    const originalStep =
        roadmapSteps.find(
            item => item.id === id
        );


    if (!originalStep) {
        return;
    }


    const step =
        getTranslatedStep(
            originalStep
        );


    document
        .getElementById("modal-icon")
        .textContent =
        step.icon;


    document
        .getElementById("modal-step")
        .textContent =
        `${t("step")} ${step.id}`;


    document
        .getElementById("modal-title")
        .textContent =
        step.title;


    document
        .getElementById("modal-description")
        .textContent =
        step.description;


    const requirementList =
        document.getElementById(
            "modal-requirement-list"
        );


    requirementList.innerHTML =
        step.requirements
            .map(
                item =>
                    `<span>${translateRequirement(item)}</span>`
            )
            .join("");


    const resources =
        document.getElementById(
            "modal-resources"
        );


    resources.innerHTML = "";


    if (step.guideUrl) {

        resources.innerHTML += `

            <a
                class="modal-resource tutorial-resource"
                href="${step.guideUrl}"
                target="_blank"
                rel="noopener noreferrer">

                ${
                    step.guideType === "official-video"
                    ? t("officialVideo")
                    : t("officialGuide")
                }

                ↗

            </a>

        `;

    }


    if (step.officialUrl) {

        resources.innerHTML += `

            <a
                class="modal-resource official-resource"
                href="${step.officialUrl}"
                target="_blank"
                rel="noopener noreferrer">

                ${t("openPortal")}

            </a>

        `;

    }


    document
        .getElementById("details-modal")
        .classList.add("show");

}


// ============================================
// CLOSE DETAILS
// ============================================

function closeDetails() {

    document
        .getElementById("details-modal")
        .classList.remove("show");

}


// ============================================
// RESET PROGRESS
// ============================================

function resetProgress() {

    completedSteps = [];

    celebrationShown = false;

    removeUserItem(
        "completedSteps"
    );

    closeCelebration();

    renderRoadmap();

}


// ============================================
// CELEBRATION
// ============================================

function showCelebration() {

    const overlay =
        document.getElementById(
            "celebration-overlay"
        );


    overlay.classList.add("show");

    createConfetti();

}


function closeCelebration() {

    const overlay =
        document.getElementById(
            "celebration-overlay"
        );


    overlay.classList.remove("show");


    document
        .getElementById(
            "celebration-confetti"
        )
        .innerHTML = "";

}


function createConfetti() {

    const container =
        document.getElementById(
            "celebration-confetti"
        );


    container.innerHTML = "";


    for (
        let i = 0;
        i < 45;
        i++
    ) {

        const piece =
            document.createElement("span");


        piece.className =
            "confetti-piece";


        piece.style.left =
            Math.random() * 100 + "%";


        piece.style.animationDuration =
            (2.5 + Math.random() * 2.5) + "s";


        piece.style.animationDelay =
            Math.random() * 0.8 + "s";


        piece.style.transform =
            `rotate(${Math.random() * 360}deg)`;


        const size =
            6 + Math.random() * 7;


        piece.style.width =
            size + "px";


        piece.style.height =
            (size * 1.4) + "px";


        container.appendChild(piece);

    }

}


// ============================================
// STARTEASE CONNECT
// ============================================

const connectData = {
    developer: {
        title: { en: "Build a website or app", hi: "वेबसाइट या ऐप बनाएं", mr: "वेबसाइट किंवा अॅप तयार करा" },
        text: { en: "Answer two quick questions and StartEase will prepare a starter brief you can share with a developer.", hi: "दो छोटे सवालों के जवाब दें और StartEase आपके लिए डेवलपर के साथ साझा करने योग्य ब्रीफ तैयार करेगा।", mr: "दोन सोप्या प्रश्नांची उत्तरे द्या आणि StartEase डेव्हलपरसोबत शेअर करता येईल असा ब्रीफ तयार करेल." },
        options: [
            { id: "website", icon: "🌐", label: { en: "Website", hi: "वेबसाइट", mr: "वेबसाइट" }, brief: { en: "Business information, key pages, contact details, mobile-friendly design, domain and hosting.", hi: "व्यवसाय की जानकारी, जरूरी पेज, संपर्क विवरण, मोबाइल-फ्रेंडली डिज़ाइन, डोमेन और होस्टिंग।", mr: "व्यवसायाची माहिती, आवश्यक पेजेस, संपर्क तपशील, मोबाइल-फ्रेंडली डिझाइन, डोमेन आणि होस्टिंग." } },
            { id: "app", icon: "📱", label: { en: "Mobile app", hi: "मोबाइल ऐप", mr: "मोबाइल अॅप" }, brief: { en: "App screens, user flow, platform choice, backend needs, testing and store-ready build.", hi: "ऐप स्क्रीन, यूज़र फ्लो, प्लेटफॉर्म, बैकएंड की जरूरत, टेस्टिंग और स्टोर-रेडी बिल्ड।", mr: "अॅप स्क्रीन, यूजर फ्लो, प्लॅटफॉर्म, बॅकएंड गरजा, टेस्टिंग आणि स्टोअर-रेडी बिल्ड." } },
            { id: "both", icon: "✨", label: { en: "Website + app", hi: "वेबसाइट + ऐप", mr: "वेबसाइट + अॅप" }, brief: { en: "Responsive website, mobile app, shared data/backend, authentication, testing and deployment.", hi: "रिस्पॉन्सिव वेबसाइट, मोबाइल ऐप, साझा डेटा/बैकएंड, लॉगिन, टेस्टिंग और डिप्लॉयमेंट।", mr: "रिस्पॉन्सिव वेबसाइट, मोबाइल अॅप, शेअर्ड डेटा/बॅकएंड, लॉगिन, टेस्टिंग आणि डिप्लॉयमेंट." } },
            { id: "unsure", icon: "?", label: { en: "Not sure yet", hi: "अभी तय नहीं", mr: "अजून ठरलेले नाही" }, brief: { en: "Help me decide between a website, app or both based on my business needs.", hi: "मेरी बिज़नेस जरूरतों के आधार पर वेबसाइट, ऐप या दोनों में से चुनने में मदद करें।", mr: "माझ्या व्यवसायाच्या गरजेनुसार वेबसाइट, अॅप किंवा दोन्ही यापैकी निवडण्यात मदत करा." } }
        ]
    },
    designer: {
        title: { en: "Shape your brand", hi: "अपने ब्रांड को पहचान दें", mr: "तुमच्या ब्रँडला ओळख द्या" },
        text: { en: "Choose the kind of design help you need and prepare a clear starting brief.", hi: "डिज़ाइन में किस तरह की मदद चाहिए, चुनें और एक स्पष्ट शुरुआती ब्रीफ तैयार करें।", mr: "तुम्हाला कोणत्या प्रकारची डिझाइन मदत हवी आहे ते निवडा आणि स्पष्ट ब्रीफ तयार करा." },
        options: [
            { id: "logo", icon: "✦", label: { en: "Logo & identity", hi: "लोगो और पहचान", mr: "लोगो आणि ओळख" }, brief: { en: "Logo, colors, typography and a simple brand identity for the business.", hi: "व्यवसाय के लिए लोगो, रंग, टाइपोग्राफी और सरल ब्रांड पहचान।", mr: "व्यवसायासाठी लोगो, रंग, टायपोग्राफी आणि साधी ब्रँड ओळख." } },
            { id: "ui", icon: "🖥️", label: { en: "Website / app UI", hi: "वेबसाइट / ऐप UI", mr: "वेबसाइट / अॅप UI" }, brief: { en: "User flows, wireframes, screen designs and a consistent visual system.", hi: "यूज़र फ्लो, वायरफ्रेम, स्क्रीन डिज़ाइन और एक समान विज़ुअल सिस्टम।", mr: "यूजर फ्लो, वायरफ्रेम, स्क्रीन डिझाइन आणि सुसंगत व्हिज्युअल सिस्टम." } },
            { id: "social", icon: "📣", label: { en: "Social media kit", hi: "सोशल मीडिया किट", mr: "सोशल मीडिया किट" }, brief: { en: "Profile visuals, post templates and a simple social media design system.", hi: "प्रोफाइल विज़ुअल, पोस्ट टेम्पलेट और सरल सोशल मीडिया डिज़ाइन सिस्टम।", mr: "प्रोफाइल व्हिज्युअल्स, पोस्ट टेम्पलेट्स आणि साधी सोशल मीडिया डिझाइन सिस्टम." } }
        ]
    },
    finance: {
        title: { en: "Get your numbers organised", hi: "अपने वित्त को व्यवस्थित करें", mr: "तुमचे आर्थिक नियोजन व्यवस्थित करा" },
        text: { en: "Prepare the basics you can discuss with an accountant or finance professional.", hi: "वे बुनियादी बातें तैयार करें जिन पर आप अकाउंटेंट या वित्तीय प्रोफेशनल से चर्चा कर सकते हैं।", mr: "अकाउंटंट किंवा आर्थिक प्रोफेशनलसोबत चर्चा करण्यासाठी आवश्यक मूलभूत माहिती तयार करा." },
        options: [
            { id: "setup", icon: "🧾", label: { en: "Business setup", hi: "बिज़नेस सेटअप", mr: "व्यवसाय सेटअप" }, brief: { en: "Business structure, basic records, invoicing approach and financial organisation.", hi: "बिज़नेस स्ट्रक्चर, बेसिक रिकॉर्ड, इनवॉइसिंग और वित्तीय व्यवस्था।", mr: "व्यवसाय रचना, मूलभूत नोंदी, इनव्हॉइसिंग आणि आर्थिक व्यवस्था." } },
            { id: "books", icon: "📚", label: { en: "Bookkeeping", hi: "बहीखाता", mr: "बुककीपिंग" }, brief: { en: "Income, expenses, invoices, records and a simple bookkeeping workflow.", hi: "आय, खर्च, इनवॉइस, रिकॉर्ड और सरल बहीखाता प्रक्रिया।", mr: "उत्पन्न, खर्च, इनव्हॉइस, नोंदी आणि सोपी बुककीपिंग प्रक्रिया." } },
            { id: "planning", icon: "📈", label: { en: "Financial planning", hi: "वित्तीय योजना", mr: "आर्थिक नियोजन" }, brief: { en: "Startup costs, monthly expenses, pricing assumptions and a basic cash-flow view.", hi: "स्टार्टअप लागत, मासिक खर्च, कीमत संबंधी अनुमान और बेसिक कैश-फ्लो।", mr: "स्टार्टअप खर्च, मासिक खर्च, किंमत अंदाज आणि मूलभूत कॅश-फ्लो." } }
        ]
    },
    legal: {
        title: { en: "Prepare for legal help", hi: "कानूनी मदद के लिए तैयार हों", mr: "कायदेशीर मदतीसाठी तयार व्हा" },
        text: { en: "Identify the legal area you need help with before speaking to a professional.", hi: "किस कानूनी क्षेत्र में मदद चाहिए, यह पहले पहचानें और फिर प्रोफेशनल से बात करें।", mr: "कोणत्या कायदेशीर क्षेत्रात मदत हवी आहे ते आधी ओळखा आणि मग प्रोफेशनलशी बोला." },
        options: [
            { id: "registration", icon: "🏢", label: { en: "Registration", hi: "रजिस्ट्रेशन", mr: "नोंदणी" }, brief: { en: "Business structure, registration documents and questions about applicable local requirements.", hi: "बिज़नेस स्ट्रक्चर, रजिस्ट्रेशन दस्तावेज़ और लागू स्थानीय आवश्यकताओं से जुड़े सवाल।", mr: "व्यवसाय रचना, नोंदणी कागदपत्रे आणि लागू स्थानिक आवश्यकतांबाबत प्रश्न." } },
            { id: "contracts", icon: "📄", label: { en: "Contracts", hi: "कॉन्ट्रैक्ट", mr: "करार" }, brief: { en: "Questions about founder, vendor, client or partnership agreements to discuss with a legal professional.", hi: "फाउंडर, वेंडर, क्लाइंट या पार्टनरशिप एग्रीमेंट पर कानूनी प्रोफेशनल से चर्चा के लिए प्रश्न।", mr: "फाउंडर, विक्रेता, क्लायंट किंवा भागीदारी करारांबाबत कायदेशीर प्रोफेशनलशी चर्चा करण्यासाठी प्रश्न." } },
            { id: "ip", icon: "™", label: { en: "Brand / IP", hi: "ब्रांड / IP", mr: "ब्रँड / IP" }, brief: { en: "Questions about brand name, logo, content or other intellectual-property concerns.", hi: "ब्रांड नाम, लोगो, कंटेंट या अन्य बौद्धिक संपदा से जुड़े सवाल।", mr: "ब्रँड नाव, लोगो, कंटेंट किंवा इतर बौद्धिक संपदा विषयक प्रश्न." } }
        ]
    }
};

let selectedConnectType = "developer";
let selectedConnectOption = "website";

function selectConnectType(type) {
    selectedConnectType = type;
    document.querySelectorAll(".connect-card").forEach(card => card.classList.toggle("active", card.dataset.connectType === type));
    renderConnectPanel();
}

function renderConnectPanel() {
    const data = connectData[selectedConnectType];
    const lang = getRoadmapLanguage();
    const title = document.getElementById("connect-panel-title");
    const text = document.getElementById("connect-panel-text");
    const options = document.getElementById("connect-options");
    if (!data || !title || !text || !options) return;

    title.textContent = data.title[lang] || data.title.en;
    text.textContent = data.text[lang] || data.text.en;
    selectedConnectOption = data.options[0].id;
    options.innerHTML = data.options.map((item, index) => `
        <button class="connect-option ${index === 0 ? "active" : ""}" onclick="selectConnectOption('${item.id}')" data-connect-option="${item.id}">
            <span>${item.icon}</span>
            <strong>${item.label[lang] || item.label.en}</strong>
        </button>
    `).join("");
    updateConnectResult();
}

function selectConnectOption(id) {
    selectedConnectOption = id;
    document.querySelectorAll(".connect-option").forEach(option => option.classList.toggle("active", option.dataset.connectOption === id));
    updateConnectResult();
}

function updateConnectResult() {
    const data = connectData[selectedConnectType];
    const item = data?.options.find(option => option.id === selectedConnectOption) || data?.options[0];
    const lang = getRoadmapLanguage();
    const title = document.getElementById("connect-result-title");
    const text = document.getElementById("connect-result-text");
    if (!item || !title || !text) return;
    title.textContent = item.label[lang] || item.label.en;
    text.textContent = item.brief[lang] || item.brief.en;
}

async function copyConnectBrief() {
    const data = connectData[selectedConnectType];
    const item = data?.options.find(option => option.id === selectedConnectOption) || data?.options[0];
    const lang = getRoadmapLanguage();
    if (!item) return;
    const title = item.label[lang] || item.label.en;
    const brief = item.brief[lang] || item.brief.en;
    const payload = `StartEase starter brief\n\nNeed: ${title}\n${brief}`;
    try {
        await navigator.clipboard.writeText(payload);
        const btn = document.querySelector(".connect-copy-btn");
        if (btn) {
            const original = btn.textContent;
            btn.textContent = lang === "hi" ? "कॉपी हो गया ✓" : lang === "mr" ? "कॉपी झाले ✓" : "Copied ✓";
            setTimeout(() => { btn.textContent = original; }, 1600);
        }
    } catch (_) {
        window.prompt("Copy your StartEase brief:", payload);
    }
}

// ============================================
// CONTEXT-AWARE AI ASSISTANT
// ============================================

const assistantState = {
    initialized: false,
    history: []
};

function assistantLang() {
    return getRoadmapLanguage();
}

function assistantUserName() {
    try {
        const user = typeof getCurrentUser === "function" ? getCurrentUser() : null;
        return user?.name || "Founder";
    } catch (_) { return "Founder"; }
}

function assistantContext() {
    let data = {};
    try { data = JSON.parse(getUserItem("startupData") || "{}"); } catch (_) {}
    const total = roadmapSteps.length;
    const completed = completedSteps.length;
    const next = roadmapSteps.find(step => !completedSteps.includes(step.id));
    const readiness = data.readiness || {};
    const readyCount = Object.values(readiness).filter(Boolean).length;
    return {
        data,
        total,
        completed,
        percentage: total ? Math.round((completed / total) * 100) : 0,
        next,
        readyCount,
        readiness
    };
}

function assistantText(key, fallback) {
    return roadmapTranslations[assistantLang()]?.[key] || roadmapTranslations.en?.[key] || fallback;
}

function assistantNormalize(value) {
    return String(value || "").toLowerCase().replace(/[^\p{L}\p{N}\s]/gu, " ").replace(/\s+/g, " ").trim();
}

function assistantTokens(value) {
    return assistantNormalize(value).split(" ").filter(token => token.length > 2);
}

function assistantFindStep(query) {
    const qTokens = assistantTokens(query);
    let best = null;
    let bestScore = 0;
    roadmapSteps.forEach(step => {
        const translated = getTranslatedStep(step);
        const haystack = assistantNormalize(`${translated.title} ${translated.description} ${(step.requirements || []).join(" ")}`);
        let score = 0;
        qTokens.forEach(token => {
            if (haystack.includes(token)) score += token.length > 5 ? 2 : 1;
        });
        if (score > bestScore) { bestScore = score; best = step; }
    });
    return bestScore ? best : null;
}

function assistantOpenTarget(id) {
    const target = document.getElementById(id);
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
}

function assistantMakeResponse(rawQuery) {
    const q = assistantNormalize(rawQuery);
    const c = assistantContext();
    const lang = assistantLang();
    const step = c.next ? getTranslatedStep(c.next) : null;
    const matchedStep = assistantFindStep(rawQuery);
    const business = c.data.business || "startup";
    const stage = c.data.stage || "planning";
    const location = c.data.location || "your location";
    const name = assistantUserName();
    const hi = lang === "hi", mr = lang === "mr";

    const has = (...words) => words.some(w => q.includes(assistantNormalize(w)));

    if (!q) return hi ? "कुछ लिखिए — मैं आपके रोडमैप के आधार पर मदद करूँगा।" : mr ? "काहीतरी विचारा — मी तुमच्या रोडमॅपच्या आधारावर मदत करेन." : "Type a question and I’ll use your roadmap context to help.";

    if (has("hello","hi","hey","namaste","नमस्ते","नमस्कार")) {
        const nextName = step ? step.title : (hi ? "आपका लॉन्च" : mr ? "तुमचे लॉन्च" : "your launch");
        return hi ? `Hi ${name}! 👋 अभी आपकी ${business} journey ${c.percentage}% पूरी है. अगला focus **${nextName}** है. चाहें तो मैं इसे step-by-step समझा सकता हूँ।` : mr ? `नमस्कार ${name}! 👋 तुमच्या ${business} journey पैकी ${c.percentage}% पूर्ण झाली आहे. पुढचा फोकस **${nextName}** आहे. हवे असल्यास मी तो टप्पा समजावून सांगू शकतो.` : `Hi ${name}! 👋 Your ${business} journey is ${c.percentage}% complete. Your next focus is **${nextName}**. I can break it down step by step.`;
    }

    if (has("next", "what should i do", "now what", "aage", "ab kya", "अगला", "अब क्या", "पुढे", "आता काय")) {
        if (!step) return hi ? "🎉 आपका पूरा roadmap complete है. अब StartEase Connect से build help या Funding section से financing options explore कर सकते हैं." : mr ? "🎉 तुमचा पूर्ण रोडमॅप झाला आहे. आता StartEase Connect मधून build help किंवा Funding मधून financing options पाहू शकता." : "🎉 Your roadmap is complete. You can now use StartEase Connect for build help or explore the Funding section for financing options.";
        const req = (step.requirements || []).slice(0, 4).join(", ");
        return hi ? `अभी आपका **Step ${step.id}: ${step.title}** बाकी है.\n\n${step.description}\n\n**पहले तैयार रखें:** ${req || "basic business details"}.\n\nइसे पूरा करने के बाद अगला roadmap step automatically आपका next focus बन जाएगा.` : mr ? `आत्ता तुमचा **Step ${step.id}: ${step.title}** बाकी आहे.\n\n${step.description}\n\n**आधी तयार ठेवा:** ${req || "मूलभूत व्यवसाय माहिती"}.\n\nहा टप्पा पूर्ण केल्यावर पुढचा roadmap step तुमचा पुढचा focus बनेल.` : `Your current **Step ${step.id}: ${step.title}** is next.\n\n${step.description}\n\n**Keep ready:** ${req || "basic business details"}.\n\nOnce you mark it complete, the roadmap will move your next pending step into focus.`;
    }

    if (has("progress", "how am i", "kitna", "percent", "प्रगति", "कितना", "प्रगती")) {
        const nextName = step ? step.title : "complete";
        return hi ? `आप ${c.percentage}% complete हैं — **${c.completed}/${c.total} steps**. आपकी startup stage **${stage}** है और अगला focus **${nextName}** है. आपकी readiness में ${c.readyCount}/5 items marked हैं.` : mr ? `तुम्ही ${c.percentage}% पूर्ण केले आहे — **${c.completed}/${c.total} steps**. तुमचा startup stage **${stage}** आहे आणि पुढचा focus **${nextName}** आहे. Readiness मध्ये ${c.readyCount}/5 items आहेत.` : `You’re ${c.percentage}% through — **${c.completed}/${c.total} steps**. Your startup stage is **${stage}**, your next focus is **${nextName}**, and your readiness check has ${c.readyCount}/5 items marked.`;
    }

    if (has("ready", "readiness", "missing", "what am i missing", "तैयार", "कमी", "missing")) {
        const labels = { name: {en:"business name",hi:"व्यवसाय का नाम",mr:"व्यवसायाचे नाव"}, budget:{en:"basic budget",hi:"शुरुआती बजट",mr:"सुरुवातीचे बजेट"}, customer:{en:"target customer",hi:"target customer",mr:"लक्षित ग्राहक"}, product:{en:"product/service",hi:"product/service",mr:"उत्पाद/सेवा"}, online:{en:"online presence",hi:"online presence",mr:"ऑनलाइन उपस्थिती"} };
        const missing = Object.keys(labels).filter(k => !c.readiness[k]).map(k => labels[k][lang] || labels[k].en);
        if (!missing.length) return hi ? "तुम्हारी readiness check में सभी 5 items marked हैं. 🎯 अब roadmap steps पर focus करें." : mr ? "तुमच्या readiness check मधील सर्व 5 items निवडले आहेत. 🎯 आता roadmap वर focus करा." : "All 5 readiness items are marked. 🎯 Now focus on the roadmap steps.";
        return hi ? `आपकी readiness अभी **${c.readyCount}/5** है. अभी ये चीज़ें बाकी हैं: **${missing.join(", ")}**. पहले इन्हें clear करना आपकी शुरुआती planning को आसान बना सकता है.` : mr ? `तुमची readiness **${c.readyCount}/5** आहे. अजून हे बाकी आहे: **${missing.join(", ")}**. सुरुवातीच्या planning साठी हे आधी clear करणे उपयोगी ठरेल.` : `Your readiness is **${c.readyCount}/5**. You haven’t marked: **${missing.join(", ")}**. Getting these basics clear can make the early planning stage easier.`;
    }

    if (has("fund", "funding", "loan", "money", "paisa", "paise", "फंड", "लोन", "पैसे", "फंडिंग")) {
        assistantOpenTarget("funding");
        const route = stage.toLowerCase().includes("idea") ? "startup funding and seed resources" : stage.toLowerCase().includes("operating") ? "business loans and growth funding" : "a mix of startup funding and business-loan routes";
        return hi ? `हाँ. आपकी **${stage}** stage को देखते हुए StartEase में **${route}** explore करना sensible starting point है. Funding section में Startup India, loan routes और JanSamarth जैसे official resources हैं. Approval या eligibility मैं guarantee नहीं कर सकता — वह संबंधित institution तय करता है. मैंने Funding section आपके लिए खोल दिया है.` : mr ? `हो. तुमच्या **${stage}** stage नुसार **${route}** पाहणे हा चांगला starting point आहे. Funding section मध्ये Startup India, loan routes आणि JanSamarth सारखी official resources आहेत. Eligibility किंवा approval मी हमी देऊ शकत नाही — ती संबंधित संस्था ठरवते. मी Funding section तुमच्यासाठी उघडला आहे.` : `Yes. For your **${stage}** stage, a sensible starting point is **${route}**. The Funding section has official resources covering Startup India, loan routes and JanSamarth. I can guide you, but the relevant institution decides eligibility and approval. I’ve opened the Funding section for you.`;
    }

    if (has("developer", "website", "app", "software", "build", "tech", "developer", "डेवलपर", "वेबसाइट", "अॅप", "डेव्हलपर")) {
        assistantOpenTarget("connect");
        return hi ? `बिल्कुल. अगर आप software, website या app बनाना चाहते हैं, तो **StartEase Connect → Developer** चुनें. वहाँ आप Website, Mobile App, दोनों या “Not sure” चुन सकते हैं और StartEase आपके लिए एक starter brief बना देगा. मैंने Connect section खोल दिया है.` : mr ? `नक्की. Software, website किंवा app तयार करायचा असल्यास **StartEase Connect → Developer** निवडा. तिथे Website, Mobile App, दोन्ही किंवा “Not sure” निवडता येईल आणि StartEase starter brief तयार करेल. मी Connect section उघडले आहे.` : `Absolutely. If you need software, a website or an app, go to **StartEase Connect → Developer**. You can choose Website, Mobile App, Both or Not sure, and StartEase will build a starter brief for you. I’ve opened Connect for you.`;
    }

    if (has("document", "documents", "paper", "papers", "doc", "कागज", "दस्तावेज", "कागदपत्र")) {
        const target = matchedStep || step;
        if (target) {
            const translated = getTranslatedStep(target);
            const req = (target.requirements || []).join(", ");
            return hi ? `For **${translated.title}**, StartEase currently lists these as usually required: **${req || "business details"}**. Requirements can vary, so use the official resource attached to the step before submitting anything.` : mr ? `**${translated.title}** साठी StartEase मध्ये साधारणपणे हे लागते: **${req || "व्यवसायाची माहिती"}**. आवश्यकता बदलू शकतात, त्यामुळे काही सबमिट करण्यापूर्वी step मधील official resource तपासा.` : `For **${translated.title}**, StartEase currently lists: **${req || "basic business details"}** as usual requirements. Requirements can vary, so check the step’s official resource before submitting anything.`;
        }
    }

    if (has("gst", "udyam", "msme", "registration", "register", "license", "licence", "fssai", "tax", "जीएसटी", "नोंदणी", "लाइसेंस")) {
        const target = matchedStep || roadmapSteps.find(s => assistantNormalize(getTranslatedStep(s).title).includes("gst")) || step;
        if (target) {
            const translated = getTranslatedStep(target);
            const req = (target.requirements || []).slice(0, 4).join(", ");
            return hi ? `आप शायद **${translated.title}** के बारे में पूछ रहे हैं. ${translated.description}\n\nआमतौर पर तैयार रखने वाली चीज़ें: **${req || "business details"}**. Details modal में official resource भी दिया है.` : mr ? `तुम्ही बहुधा **${translated.title}** बद्दल विचारत आहात. ${translated.description}\n\nसाधारणपणे तयार ठेवा: **${req || "व्यवसाय माहिती"}**. Details modal मध्ये official resource देखील आहे.` : `It sounds like you’re asking about **${translated.title}**. ${translated.description}\n\nUsually keep ready: **${req || "business details"}**. The step’s details modal also has its official resource.`;
        }
    }

    if (has("why", "explain", "meaning", "what is", "क्यों", "समझाओ", "का अर्थ", "का", "काय")) {
        const target = matchedStep || step;
        if (target) {
            const translated = getTranslatedStep(target);
            return hi ? `**${translated.title}** का मतलब: ${translated.description} इस step का purpose है कि आप इसे अपने startup पर लागू होने वाली requirements के हिसाब से पूरा करें.` : mr ? `**${translated.title}** म्हणजे: ${translated.description} तुमच्या startup ला लागू होणाऱ्या requirements नुसार हा टप्पा पूर्ण करणे हा याचा उद्देश आहे.` : `**${translated.title}** means: ${translated.description} The goal is to complete it according to the requirements that actually apply to your startup.`;
        }
    }

    // Generic step matching gives the assistant a useful answer even for an unexpected question.
    if (matchedStep) {
        const translated = getTranslatedStep(matchedStep);
        const req = (matchedStep.requirements || []).slice(0, 4).join(", ");
        return hi ? `मुझे लगता है आप **${translated.title}** के बारे में पूछ रहे हैं. ${translated.description}\n\n**Usually required:** ${req || "basic business details"}. अगर आप चाहें तो पूछें “इसे कैसे करूँ?” और मैं अगला practical step बताऊँगा.` : mr ? `मला वाटते तुम्ही **${translated.title}** बद्दल विचारत आहात. ${translated.description}\n\n**साधारणपणे आवश्यक:** ${req || "मूलभूत व्यवसाय माहिती"}. हवे असल्यास “हे कसे करायचे?” विचारा आणि मी practical next step सांगेन.` : `I think you’re asking about **${translated.title}**. ${translated.description}\n\n**Usually required:** ${req || "basic business details"}. Ask me “how do I do this?” and I’ll turn it into a practical next step.`;
    }

    return hi ? `मैं आपके roadmap context के साथ मदद कर सकता हूँ. Try asking **“अब मुझे क्या करना चाहिए?”**, **“मुझे funding चाहिए”**, **“मुझे developer चाहिए”**, **“मेरी progress कैसी है?”** या किसी specific step का नाम.` : mr ? `मी तुमच्या roadmap context सोबत मदत करू शकतो. **“आता काय करावे?”**, **“मला funding हवी आहे”**, **“मला developer हवा आहे”**, **“माझी progress कशी आहे?”** किंवा एखाद्या specific step चे नाव विचारा.` : `I can help using your actual roadmap context. Try **“What should I do next?”**, **“I need funding”**, **“I need a developer”**, **“How am I doing?”**, or ask about a specific roadmap step.`;
}

function assistantEscape(text) {
    return String(text).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\n/g,"<br>").replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>");
}

function renderAssistantContext() {
    const el = document.getElementById("assistant-context");
    if (!el) return;
    const c = assistantContext();
    const lang = assistantLang();
    const business = c.data.business || "Startup";
    const next = c.next ? getTranslatedStep(c.next).title : (lang === "hi" ? "पूरा" : lang === "mr" ? "पूर्ण" : "Complete");
    const stage = c.data.stage || "Planning";
    el.innerHTML = `<span>🌱 ${business}</span><span>📍 ${stage}</span><span>↗ ${c.percentage}%</span><span>Next: ${next}</span>`;
}

function assistantAddMessage(role, text) {
    const box = document.getElementById("assistant-messages");
    if (!box) return;
    const bubble = document.createElement("div");
    bubble.className = `assistant-message ${role}`;
    bubble.innerHTML = `<div class="assistant-avatar">${role === "bot" ? "✦" : "You"}</div><div class="assistant-bubble">${assistantEscape(text)}</div>`;
    box.appendChild(bubble);
    box.scrollTop = box.scrollHeight;
}

function assistantSuggestions() {
    const box = document.getElementById("assistant-suggestions");
    if (!box) return;
    const keys = ["assistantQuickNext","assistantQuickProgress","assistantQuickFunding","assistantQuickBuild","assistantQuickReadiness"];
    box.innerHTML = keys.map(key => `<button type="button" onclick="assistantAsk(assistantText('${key}',''))">${assistantText(key,key)}</button>`).join("");
}

function assistantInit() {
    if (assistantState.initialized) return;
    assistantState.initialized = true;
    const c = assistantContext();
    const welcome = assistantText("assistantWelcome", "Hi! Tell me what you need help with.")
        .replace("{name}", assistantUserName())
        .replace("{business}", c.data.business || "startup");
    assistantAddMessage("bot", welcome);
    assistantSuggestions();
    renderAssistantContext();
    const form = document.getElementById("assistant-form");
    if (form) form.addEventListener("submit", event => { event.preventDefault(); const input = document.getElementById("assistant-input"); if (input) { assistantAsk(input.value); input.value = ""; } });
}

function assistantAsk(query) {
    if (!query || !String(query).trim()) return;
    assistantInit();
    assistantAddMessage("user", query);
    const answer = assistantMakeResponse(query);
    window.setTimeout(() => { assistantAddMessage("bot", answer); renderAssistantContext(); }, 220);
}

function toggleAssistant(open) {
    const panel = document.getElementById("assistant-panel");
    if (!panel) return;
    assistantInit();
    panel.classList.toggle("show", !!open);
    panel.setAttribute("aria-hidden", open ? "false" : "true");
    if (open) {
        renderAssistantContext();
        const input = document.getElementById("assistant-input");
        if (input) setTimeout(() => input.focus(), 120);
    }
}

// ============================================
// LANGUAGE SELECTOR
// ============================================

const languageSelector =
    document.getElementById(
        "language-selector"
    );


if (languageSelector) {

    languageSelector.value =
        getRoadmapLanguage();


    languageSelector.addEventListener(
        "change",
        function () {

            localStorage.setItem(
                "startEaseLanguage",
                this.value
            );

            updateStaticTexts();
            updateFundingStage();
            renderConnectPanel();
            renderRoadmap();

        }
    );

}




// ============================================
// FUNDING STAGE CONTEXT
// ============================================

function updateFundingStage() {
    const pill = document.getElementById("funding-stage-pill");
    if (!pill) return;

    const data = getUserItem("startupData");
    let startup = {};
    try { startup = data ? JSON.parse(data) : {}; } catch (_) {}

    const labels = {
        idea: { en: "Idea stage", hi: "आइडिया चरण", mr: "आयडिया टप्पा" },
        planning: { en: "Planning stage", hi: "प्लानिंग चरण", mr: "प्लॅनिंग टप्पा" },
        operating: { en: "Operating business", hi: "चलता हुआ व्यवसाय", mr: "सुरू असलेला व्यवसाय" }
    };

    const lang = getRoadmapLanguage();
    const label = (labels[startup.stage] && labels[startup.stage][lang]) || labels.planning[lang];
    pill.textContent = "✦ " + label;
}

// ============================================
// INITIAL LOAD
// ============================================

updateStaticTexts();
updateFundingStage();
renderConnectPanel();

renderRoadmap();