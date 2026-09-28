// ============================================
// STARTEASE AUTHENTICATION (FRONT-END DEMO)
// ============================================

const AUTH_USERS_KEY = "startEaseUsers";
const CURRENT_USER_KEY = "startEaseCurrentUser";

function getAuthUsers() {
    try {
        return JSON.parse(localStorage.getItem(AUTH_USERS_KEY)) || [];
    } catch {
        return [];
    }
}

function saveAuthUsers(users) {
    localStorage.setItem(AUTH_USERS_KEY, JSON.stringify(users));
}

function getCurrentUser() {
    try {
        return JSON.parse(localStorage.getItem(CURRENT_USER_KEY));
    } catch {
        return null;
    }
}

function setCurrentUser(user) {
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
}

function userStorageKey(key) {
    const user = getCurrentUser();
    return user ? `startEase_${user.id}_${key}` : key;
}

function getUserItem(key) {
    return localStorage.getItem(userStorageKey(key));
}

function setUserItem(key, value) {
    localStorage.setItem(userStorageKey(key), value);
}

function removeUserItem(key) {
    localStorage.removeItem(userStorageKey(key));
}

function normalizeEmail(email) {
    return email.trim().toLowerCase();
}

function makeUserId(email) {
    return normalizeEmail(email).replace(/[^a-z0-9]/g, "_");
}

function openAuthModal(mode = "login") {
    const modal = document.getElementById("auth-modal");
    if (!modal) return;
    modal.classList.add("show");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    showAuthMode(mode);
}

function closeAuthModal() {
    const modal = document.getElementById("auth-modal");
    if (!modal) return;
    modal.classList.remove("show");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    clearAuthErrors();
}

function clearAuthErrors() {
    ["login-error", "signup-error"].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.textContent = "";
    });
}

function showAuthMode(mode) {
    const login = document.getElementById("login-form");
    const signup = document.getElementById("signup-form");
    const loginTab = document.getElementById("login-tab");
    const signupTab = document.getElementById("signup-tab");
    const title = document.getElementById("auth-title");
    const subtitle = document.getElementById("auth-subtitle");

    if (!login || !signup) return;
    clearAuthErrors();

    const isLogin = mode === "login";
    login.classList.toggle("hidden", !isLogin);
    signup.classList.toggle("hidden", isLogin);
    loginTab?.classList.toggle("active", isLogin);
    signupTab?.classList.toggle("active", !isLogin);

    if (title) title.textContent = isLogin ? "Welcome back." : "Start your journey.";
    if (subtitle) subtitle.textContent = isLogin
        ? "Log in to continue your startup journey."
        : "Create a simple StartEase account and keep your roadmap with you.";
}

function handleSignup(event) {
    event.preventDefault();

    const name = document.getElementById("signup-name").value.trim();
    const email = normalizeEmail(document.getElementById("signup-email").value);
    const password = document.getElementById("signup-password").value;
    const error = document.getElementById("signup-error");

    const users = getAuthUsers();
    if (users.some(user => user.email === email)) {
        error.textContent = "An account with this email already exists.";
        return;
    }

    const user = {
        id: makeUserId(email),
        name,
        email,
        password
    };

    users.push(user);
    saveAuthUsers(users);
    setCurrentUser({ id: user.id, name: user.name, email: user.email });

    updateAuthUI();
    closeAuthModal();

    // A new account starts clean, while the user's data stays isolated.
    alert(`Welcome to StartEase, ${name}!`);
}

function handleLogin(event) {
    event.preventDefault();

    const email = normalizeEmail(document.getElementById("login-email").value);
    const password = document.getElementById("login-password").value;
    const error = document.getElementById("login-error");

    const user = getAuthUsers().find(
        item => item.email === email && item.password === password
    );

    if (!user) {
        error.textContent = "Email or password is incorrect.";
        return;
    }

    setCurrentUser({ id: user.id, name: user.name, email: user.email });
    updateAuthUI();
    closeAuthModal();
}

function logoutUser() {
    localStorage.removeItem(CURRENT_USER_KEY);
    updateAuthUI();

    if (location.pathname.endsWith("roadmap.html")) {
        window.location.href = "index.html";
    }
}

function updateAuthUI() {
    const user = getCurrentUser();
    const authAction = document.getElementById("auth-action");

    if (authAction) {
        if (user) {
            authAction.textContent = `Hi, ${user.name.split(" ")[0]}`;
            authAction.onclick = logoutUser;
            authAction.title = "Log out";
        } else {
            authAction.textContent = "Log in";
            authAction.onclick = () => openAuthModal("login");
            authAction.title = "Log in";
        }
    }
}

function requireLogin() {
    if (getCurrentUser()) return true;
    openAuthModal("login");
    return false;
}

// Close when clicking outside the card.
document.addEventListener("click", event => {
    const modal = document.getElementById("auth-modal");
    if (modal && event.target === modal) closeAuthModal();
});

document.addEventListener("keydown", event => {
    if (event.key === "Escape") closeAuthModal();
});

document.addEventListener("DOMContentLoaded", updateAuthUI);
