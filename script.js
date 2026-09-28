let startupData = {
    business: "",
    location: "",
    stage: "",
    readiness: {
        name: false,
        budget: false,
        customer: false,
        product: false,
        online: false
    }
};


// ================================
// START / CLOSE WIZARD
// ================================

function startJourney() {
    if (!requireLogin()) return;

    document.getElementById("wizard").classList.add("show");
    document.body.style.overflow = "hidden";
}

function closeWizard() {
    document.getElementById("wizard").classList.remove("show");
    document.body.style.overflow = "auto";
}


// ================================
// SELECT WIZARD OPTION
// ================================

function selectOption(element, category, value) {

    const parent = element.parentElement;

    parent.querySelectorAll(".wizard-option").forEach(option => {
        option.classList.remove("selected");
    });

    element.classList.add("selected");

    startupData[category] = value;
}


// ================================
// READINESS CHECK
// ================================

function toggleReadiness(element, key) {
    const checkbox = element.querySelector("input[type=checkbox]");
    const isChecked = !checkbox.checked;
    checkbox.checked = isChecked;
    element.classList.toggle("selected", isChecked);
    startupData.readiness[key] = isChecked;

    const count = Object.values(startupData.readiness).filter(Boolean).length;
    const counter = document.getElementById("readiness-count");
    if (counter) {
        counter.textContent = `${count}/5`;
    }
    const inlineCounter = document.getElementById("readiness-count-inline");
    if (inlineCounter) inlineCounter.textContent = count;
}


// ================================
// GENERATE ROADMAP
// ================================

function generateRoadmap() {

    const readinessComplete = Object.values(startupData.readiness || {}).some(Boolean);

    if (
        startupData.business === "" ||
        startupData.location === "" ||
        startupData.stage === "" ||
        !readinessComplete
    ) {
        const language = getCurrentLanguage();

        const messages = {
            en: "Please complete the startup details and select at least one readiness item.",
            hi: "कृपया स्टार्टअप की जानकारी पूरी करें और कम से कम एक तैयारी विकल्प चुनें।",
            mr: "कृपया स्टार्टअपची माहिती पूर्ण करा आणि किमान एक तयारी पर्याय निवडा."
        };

        alert(messages[language] || messages.en);
        return;
    }

    startupData.readinessScore = Object.values(startupData.readiness || {}).filter(Boolean).length;

    setUserItem(
        "startupData",
        JSON.stringify(startupData)
    );

    removeUserItem("completedSteps");

    closeWizard();

    window.location.href = "roadmap.html";
}


// ================================
// LANGUAGE DATA
// ================================

const translations = {

    en: {

        navHome: "Home",
        navHow: "How It Works",
        navFeatures: "Features",
        navStart: "Start Journey",

        heroBadge: "🌱 Built for first-time founders",
        heroTitle1: "Your startup journey,",
        heroTitle2: "made simpler.",
        heroText:
            "From your first idea to your first launch, StartEase helps you understand what comes next — without the overwhelm.",

        startJourney: "Start My Journey",
        seeHow: "See How It Works",

        previewLabel: "Your Startup Roadmap",
        previewBusiness: "Food Business",
        previewPlanning: "Business Planning",
        previewCompleted: "Completed",
        previewRegistration: "Business Registration",
        previewNext: "Next step",
        previewTax: "Tax Registration",
        previewPending: "Pending",
        previewLicences: "Required Licences",

        howLabel: "HOW IT WORKS",
        howTitle1: "From idea to startup,",
        howTitle2: "one step at a time.",
        howSubtitle:
            "No complicated paperwork hunting. Just answer a few questions and we'll guide you.",

        howStep1Title: "Tell us about your startup",
        howStep1Text:
            "Answer a few simple questions about your business and location.",

        howStep2Title: "Get your roadmap",
        howStep2Text:
            "Receive a personalized list of registrations, documents and steps.",

        howStep3Title: "Track your progress",
        howStep3Text:
            "Mark tasks as completed and keep your startup journey organized.",

        whyLabel: "WHY STARTEASE",
        whyTitle1: "Less confusion.",
        whyTitle2: "More confidence.",

        feature1Title: "Smart Startup Wizard",
        feature1Text:
            "Answer simple questions and get a personalized startup roadmap.",

        feature2Title: "Funding & Loan Guidance",
        feature2Text:
            "Explore funding routes and understand what you may need before applying.",

        feature3Title: "Developer Connect",
        feature3Text:
            "Find the right kind of technical help when your idea needs a website or app.",

        feature4Title: "AI Startup Assistant",
        feature4Text:
            "Get quick explanations and guidance while you move through your journey.",

        innovation: "OUR INNOVATION",
        comingSoon: "COMING NEXT",

        journeyLabel: "THE STARTEASE JOURNEY",
        journeyTitle: "Plan it. Fund it. Build it. Launch it.",
        journeyPlan: "Plan",
        journeyFund: "Fund",
        journeyBuild: "Build",
        journeyLaunch: "Launch",

        ctaTitle1: "Ready to turn your idea",
        ctaTitle2: "into a startup?",
        ctaText: "Let's figure out your first steps.",
        ctaButton: "Start My Journey →",

        footerText:
            "Simplifying the startup journey for first-time founders.",
        footerPrototype:
            "Prototype • Student Innovation",

        wizardLabel: "STARTUP WIZARD",
        wizardTitle: "Let's understand your startup.",
        wizardText:
            "Answer a few simple questions and get a roadmap that fits where you are right now.",

        readinessQuestion: "4. How ready is your startup today?",
        readinessText: "Select what you already have. There are no wrong answers — this helps us understand your starting point.",
        readinessName: "Business name",
        readinessNameText: "I have a name in mind",
        readinessBudget: "Basic budget",
        readinessBudgetText: "I know my starting budget",
        readinessCustomer: "Target customer",
        readinessCustomerText: "I know who I want to serve",
        readinessProduct: "Product or service",
        readinessProductText: "I know what I will offer",
        readinessOnline: "Online presence",
        readinessOnlineText: "I have a website, page or online profile",
        readinessCountLabel: "Ready items",

        businessQuestion:
            "1. What type of business are you starting?",

        retail: "Retail",
        retailText: "Products & stores",

        food: "Food",
        foodText: "Food & beverages",

        technology: "Technology",
        technologyText: "Tech & software",

        services: "Services",
        servicesText: "Professional services",

        locationQuestion:
            "2. Where will your business operate?",

        selectState: "Select your state",

        stageQuestion:
            "3. Where are you in your journey?",

        idea: "Just an idea",
        ideaText: "Planning my business",

        planningLaunch: "Planning to launch",
        planningText: "Getting everything ready",

        operating: "Already operating",
        operatingText: "My business has started",

        generate: "Generate My Roadmap →"
    },


    hi: {

        navHome: "होम",
        navHow: "यह कैसे काम करता है",
        navFeatures: "फीचर्स",
        navStart: "यात्रा शुरू करें",

        heroBadge:
            "🚀 पहली बार व्यवसाय शुरू करने वालों के लिए",

        heroTitle1: "आपकी स्टार्टअप यात्रा,",
        heroTitle2: "अब आसान।",

        heroText:
            "StartEase नए उद्यमियों को व्यवसाय शुरू करने के लिए आवश्यक पंजीकरण, दस्तावेज़ और चरणों को समझने में मदद करता है — सब कुछ एक जगह।",

        startJourney: "मेरी यात्रा शुरू करें",
        seeHow: "यह कैसे काम करता है",

        previewLabel: "आपका स्टार्टअप रोडमैप",
        previewBusiness: "फूड बिज़नेस",
        previewPlanning: "बिज़नेस प्लानिंग",
        previewCompleted: "पूरा हुआ",
        previewRegistration: "बिज़नेस रजिस्ट्रेशन",
        previewNext: "अगला चरण",
        previewTax: "टैक्स रजिस्ट्रेशन",
        previewPending: "बाकी",
        previewLicences: "आवश्यक लाइसेंस",

        howLabel: "यह कैसे काम करता है",

        howTitle1: "आइडिया से स्टार्टअप तक,",
        howTitle2: "एक कदम एक समय पर।",

        howSubtitle:
            "जटिल कागज़ी प्रक्रिया खोजने की जरूरत नहीं। बस कुछ सवालों के जवाब दें और हम आपका मार्गदर्शन करेंगे।",

        howStep1Title:
            "अपने स्टार्टअप के बारे में बताएं",

        howStep1Text:
            "अपने व्यवसाय और स्थान के बारे में कुछ आसान सवालों के जवाब दें।",

        howStep2Title:
            "अपना रोडमैप पाएं",

        howStep2Text:
            "पंजीकरण, दस्तावेज़ और चरणों की व्यक्तिगत सूची प्राप्त करें।",

        howStep3Title:
            "अपनी प्रगति देखें",

        howStep3Text:
            "पूरे किए गए कार्यों को चिन्हित करें और अपनी यात्रा व्यवस्थित रखें।",

        whyLabel: "STARTEASE क्यों?",
        whyTitle1: "कम उलझन।",
        whyTitle2: "ज्यादा भरोसा।",

        feature1Title:
            "स्मार्ट स्टार्टअप विज़ार्ड",
        feature1Text:
            "सरल सवालों के जवाब दें और अपना व्यक्तिगत स्टार्टअप रोडमैप पाएं।",
        feature2Title:
            "फंडिंग और लोन मार्गदर्शन",
        feature2Text:
            "फंडिंग के विकल्प समझें और आवेदन से पहले जरूरी चीज़ों को जानें।",
        feature3Title:
            "डेवलपर कनेक्ट",
        feature3Text:
            "वेबसाइट या ऐप के लिए सही तकनीकी मदद खोजने में सहायता पाएं।",
        feature4Title:
            "AI स्टार्टअप असिस्टेंट",
        feature4Text:
            "अपनी यात्रा के दौरान आसान जवाब और मार्गदर्शन पाएं।",
        innovation:
            "हमारी खास सुविधा",
        comingSoon:
            "जल्द आ रहा है",
        journeyLabel: "STARTEASE की यात्रा",
        journeyTitle: "योजना बनाएं। फंड जुटाएं। बनाएं। लॉन्च करें।",
        journeyPlan: "योजना",
        journeyFund: "फंड",
        journeyBuild: "बनाएं",
        journeyLaunch: "लॉन्च",

        ctaTitle1:
            "अपने आइडिया को",

        ctaTitle2:
            "स्टार्टअप में बदलने के लिए तैयार हैं?",

        ctaText:
            "आइए आपके पहले कदम तय करें।",

        ctaButton:
            "मेरी यात्रा शुरू करें →",

        footerText:
            "पहली बार व्यवसाय शुरू करने वालों के लिए स्टार्टअप यात्रा को आसान बनाना।",

        footerPrototype:
            "प्रोटोटाइप • छात्र नवाचार",

        wizardLabel:
            "स्टार्टअप विज़ार्ड",

        wizardTitle:
            "आइए आपके स्टार्टअप को समझते हैं।",

        wizardText:
            "तीन आसान सवालों के जवाब दें और हम आपका स्टार्टअप रोडमैप बनाएंगे।",

        readinessQuestion: "4. आज आपका स्टार्टअप कितना तैयार है?",
        readinessText: "जो चीज़ें आपके पास पहले से हैं उन्हें चुनें। कोई गलत जवाब नहीं है — इससे हमें आपकी शुरुआत समझने में मदद मिलेगी।",
        readinessName: "व्यवसाय का नाम",
        readinessNameText: "मेरे मन में एक नाम है",
        readinessBudget: "शुरुआती बजट",
        readinessBudgetText: "मुझे अपना शुरुआती बजट पता है",
        readinessCustomer: "लक्षित ग्राहक",
        readinessCustomerText: "मुझे पता है कि मैं किसे सेवा देना चाहता/चाहती हूं",
        readinessProduct: "उत्पाद या सेवा",
        readinessProductText: "मुझे पता है कि मैं क्या पेश करूंगा/करूंगी",
        readinessOnline: "ऑनलाइन मौजूदगी",
        readinessOnlineText: "मेरे पास वेबसाइट, पेज या ऑनलाइन प्रोफाइल है",
        readinessCountLabel: "तैयार चीज़ें",

        businessQuestion:
            "1. आप किस प्रकार का व्यवसाय शुरू कर रहे हैं?",

        retail: "रिटेल",
        retailText: "उत्पाद और दुकानें",

        food: "फूड",
        foodText: "खाद्य और पेय पदार्थ",

        technology: "टेक्नोलॉजी",
        technologyText: "टेक और सॉफ्टवेयर",

        services: "सेवाएं",
        servicesText: "प्रोफेशनल सेवाएं",

        locationQuestion:
            "2. आपका व्यवसाय कहाँ संचालित होगा?",

        selectState:
            "अपना राज्य चुनें",

        stageQuestion:
            "3. आप अपनी यात्रा के किस चरण में हैं?",

        idea: "सिर्फ आइडिया",
        ideaText:
            "अपने व्यवसाय की योजना बना रहा/रही हूं",

        planningLaunch:
            "लॉन्च की तैयारी",

        planningText:
            "सब कुछ तैयार कर रहा/रही हूं",

        operating:
            "पहले से संचालित",

        operatingText:
            "मेरा व्यवसाय शुरू हो चुका है",

        generate:
            "मेरा रोडमैप बनाएं →"
    },


    mr: {

        navHome: "होम",
        navHow: "हे कसे काम करते",
        navFeatures: "फीचर्स",
        navStart: "प्रवास सुरू करा",

        heroBadge:
            "🚀 पहिल्यांदा व्यवसाय सुरू करणाऱ्या संस्थापकांसाठी",

        heroTitle1:
            "तुमचा स्टार्टअप प्रवास,",

        heroTitle2:
            "आता सोपा.",

        heroText:
            "StartEase नवीन उद्योजकांना व्यवसाय सुरू करण्यासाठी आवश्यक नोंदणी, कागदपत्रे आणि टप्पे समजून घेण्यास मदत करते — सर्व काही एका ठिकाणी.",

        startJourney:
            "माझा प्रवास सुरू करा",

        seeHow:
            "हे कसे काम करते ते पहा",

        previewLabel:
            "तुमचा स्टार्टअप रोडमॅप",

        previewBusiness:
            "फूड व्यवसाय",

        previewPlanning:
            "व्यवसाय नियोजन",

        previewCompleted:
            "पूर्ण",

        previewRegistration:
            "व्यवसाय नोंदणी",

        previewNext:
            "पुढील टप्पा",

        previewTax:
            "कर नोंदणी",

        previewPending:
            "प्रलंबित",

        previewLicences:
            "आवश्यक परवाने",

        howLabel:
            "हे कसे काम करते",

        howTitle1:
            "कल्पनेपासून स्टार्टअपपर्यंत,",

        howTitle2:
            "एकावेळी एक पाऊल.",

        howSubtitle:
            "कठीण कागदपत्रे शोधण्याची गरज नाही. काही सोप्या प्रश्नांची उत्तरे द्या आणि आम्ही तुम्हाला मार्गदर्शन करू.",

        howStep1Title:
            "तुमच्या स्टार्टअपबद्दल सांगा",

        howStep1Text:
            "तुमच्या व्यवसाय आणि ठिकाणाबद्दल काही सोप्या प्रश्नांची उत्तरे द्या.",

        howStep2Title:
            "तुमचा रोडमॅप मिळवा",

        howStep2Text:
            "नोंदणी, कागदपत्रे आणि टप्प्यांची वैयक्तिक यादी मिळवा.",

        howStep3Title:
            "तुमची प्रगती ट्रॅक करा",

        howStep3Text:
            "पूर्ण झालेली कामे चिन्हांकित करा आणि तुमचा प्रवास व्यवस्थित ठेवा.",

        whyLabel:
            "STARTEASE का?",
        whyTitle1:
            "कमी गोंधळ.",
        whyTitle2:
            "जास्त आत्मविश्वास.",
        feature1Title:
            "स्मार्ट स्टार्टअप विझार्ड",
        feature1Text:
            "सोप्या प्रश्नांची उत्तरे द्या आणि तुमचा वैयक्तिक स्टार्टअप रोडमॅप मिळवा.",
        feature2Title:
            "फंडिंग आणि कर्ज मार्गदर्शन",
        feature2Text:
            "फंडिंगचे पर्याय समजून घ्या आणि अर्ज करण्यापूर्वी काय आवश्यक आहे ते जाणून घ्या.",
        feature3Title:
            "डेव्हलपर कनेक्ट",
        feature3Text:
            "वेबसाइट किंवा अॅपसाठी योग्य तांत्रिक मदत शोधण्यासाठी मार्गदर्शन मिळवा.",
        feature4Title:
            "AI स्टार्टअप असिस्टंट",
        feature4Text:
            "तुमच्या प्रवासात सोपी उत्तरे आणि मार्गदर्शन मिळवा.",
        innovation:
            "आमची खास सुविधा",
        comingSoon:
            "लवकरच येत आहे",
        journeyLabel: "STARTEASE चा प्रवास",
        journeyTitle: "नियोजन करा. निधी मिळवा. तयार करा. लॉन्च करा.",
        journeyPlan: "नियोजन",
        journeyFund: "निधी",
        journeyBuild: "तयार करा",
        journeyLaunch: "लॉन्च",

        ctaTitle1:
            "तुमची कल्पना",

        ctaTitle2:
            "स्टार्टअपमध्ये बदलण्यासाठी तयार आहात?",

        ctaText:
            "चला, तुमची पहिली पावले ठरवूया.",

        ctaButton:
            "माझा प्रवास सुरू करा →",

        footerText:
            "पहिल्यांदा व्यवसाय सुरू करणाऱ्या संस्थापकांसाठी स्टार्टअप प्रवास सोपा बनवणे.",

        footerPrototype:
            "प्रोटोटाइप • विद्यार्थी नवकल्पना",

        wizardLabel:
            "स्टार्टअप विझार्ड",

        wizardTitle:
            "तुमचा स्टार्टअप समजून घेऊया.",

        wizardText:
            "तीन सोप्या प्रश्नांची उत्तरे द्या आणि आम्ही तुमचा स्टार्टअप रोडमॅप तयार करू.",

        readinessQuestion: "4. आज तुमचा स्टार्टअप किती तयार आहे?",
        readinessText: "तुमच्याकडे आधीपासून असलेल्या गोष्टी निवडा. चुकीचे उत्तर नाही — यामुळे तुमची सुरुवात समजण्यास मदत होईल.",
        readinessName: "व्यवसायाचे नाव",
        readinessNameText: "माझ्या मनात एक नाव आहे",
        readinessBudget: "सुरुवातीचे बजेट",
        readinessBudgetText: "मला माझे सुरुवातीचे बजेट माहित आहे",
        readinessCustomer: "लक्षित ग्राहक",
        readinessCustomerText: "मला कोणाला सेवा द्यायची हे माहित आहे",
        readinessProduct: "उत्पादन किंवा सेवा",
        readinessProductText: "मी काय देणार आहे हे मला माहित आहे",
        readinessOnline: "ऑनलाइन उपस्थिती",
        readinessOnlineText: "माझ्याकडे वेबसाइट, पेज किंवा ऑनलाइन प्रोफाइल आहे",
        readinessCountLabel: "तयार गोष्टी",

        businessQuestion:
            "1. तुम्ही कोणत्या प्रकारचा व्यवसाय सुरू करत आहात?",

        retail:
            "रिटेल",

        retailText:
            "उत्पादने आणि दुकाने",

        food:
            "फूड",

        foodText:
            "अन्न आणि पेये",

        technology:
            "तंत्रज्ञान",

        technologyText:
            "टेक आणि सॉफ्टवेअर",

        services:
            "सेवा",

        servicesText:
            "व्यावसायिक सेवा",

        locationQuestion:
            "2. तुमचा व्यवसाय कुठे चालवला जाईल?",

        selectState:
            "तुमचे राज्य निवडा",

        stageQuestion:
            "3. तुम्ही तुमच्या प्रवासाच्या कोणत्या टप्प्यावर आहात?",

        idea:
            "फक्त कल्पना",

        ideaText:
            "माझ्या व्यवसायाचे नियोजन करत आहे",

        planningLaunch:
            "लॉन्चची तयारी",

        planningText:
            "सर्व काही तयार करत आहे",

        operating:
            "आधीपासून सुरू आहे",

        operatingText:
            "माझा व्यवसाय सुरू झाला आहे",

        generate:
            "माझा रोडमॅप तयार करा →"
    }
};


// ================================
// CURRENT LANGUAGE
// ================================

function getCurrentLanguage() {
    return localStorage.getItem("startEaseLanguage") || "en";
}


// ================================
// CHANGE LANGUAGE
// ================================

function changeLanguage(language) {

    const t = translations[language] || translations.en;

    document.querySelectorAll("[data-i18n]").forEach(element => {

        const key = element.dataset.i18n;

        if (
            Object.prototype.hasOwnProperty.call(t, key)
        ) {
            element.textContent = t[key];
        }

    });

    const selector =
        document.getElementById("language-selector");

    if (selector) {
        selector.value = language;
    }

    localStorage.setItem(
        "startEaseLanguage",
        language
    );

    updateRoadmapPreview();
}


// ================================
// LANGUAGE SELECTOR
// ================================

const languageSelector =
    document.getElementById("language-selector");

if (languageSelector) {

    languageSelector.value =
        getCurrentLanguage();

    languageSelector.addEventListener(
        "change",
        function () {
            changeLanguage(this.value);
        }
    );
}


// ================================
// SEE HOW IT WORKS
// ================================

const seeHowButton =
    document.getElementById("see-how-btn");

if (seeHowButton) {

    seeHowButton.addEventListener(
        "click",
        function () {

            const section =
                document.getElementById("how-it-works");

            if (section) {
                section.scrollIntoView({
                    behavior: "smooth"
                });
            }

        }
    );
}


// ================================
// ROADMAP PREVIEW
// ================================

function updateRoadmapPreview() {

    const progressCircle =
        document.getElementById("preview-progress");

    if (!progressCircle) {
        return;
    }

    const savedData =
        getUserItem("startupData");

    const completedData =
        JSON.parse(
            getUserItem("completedSteps")
        ) || [];

    if (!savedData) {

        progressCircle.textContent = "0%";

        return;
    }

    const totalSteps =
        Number(
            getUserItem("totalRoadmapSteps")
        ) || 5;

    const completedCount =
        completedData.length;

    const percentage =
        Math.round(
            (completedCount / totalSteps) * 100
        );

    progressCircle.textContent =
        `${percentage}%`;


    const data =
        JSON.parse(savedData);

    const businessElement =
        document.getElementById("preview-business");

    if (businessElement && data.business) {

        const language =
            getCurrentLanguage();

        const businessNames = {

            en: {
                Retail: "Retail Business",
                Food: "Food Business",
                Technology: "Technology Business",
                Services: "Services Business"
            },

            hi: {
                Retail: "रिटेल बिज़नेस",
                Food: "फूड बिज़नेस",
                Technology: "टेक्नोलॉजी बिज़नेस",
                Services: "सर्विस बिज़नेस"
            },

            mr: {
                Retail: "रिटेल व्यवसाय",
                Food: "फूड व्यवसाय",
                Technology: "तंत्रज्ञान व्यवसाय",
                Services: "सेवा व्यवसाय"
            }

        };

        businessElement.textContent =
            businessNames[language]?.[data.business]
            || data.business;

    }
}


// ================================
// INITIAL LANGUAGE
// ================================

changeLanguage(getCurrentLanguage());


// ================================
// STORAGE UPDATE
// ================================

window.addEventListener(
    "storage",
    function () {
        updateRoadmapPreview();
    }
);