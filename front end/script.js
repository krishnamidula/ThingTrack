document.getElementById('signInBtn').addEventListener('click', function () {
    document.getElementById('signInForm').classList.add('show-form');
});

document.getElementById('loginBtn').addEventListener('click', function () {
    document.getElementById('loginForm').classList.add('show-form');
});

function goToLogin() {
    document.getElementById('splashScreen').classList.add('hidden');
    document.getElementById('mainPage').classList.remove('hidden');
}

function goBack() {
    document.getElementById('signInForm').classList.remove('show-form');
    document.getElementById('loginForm').classList.remove('show-form');
}
// Toggle Chat Visibility
function toggleChat() {
    let chatContainer = document.getElementById('chatContainer');
    chatContainer.style.display = chatContainer.style.display === 'block' ? 'none' : 'block';
}

// Handle Sending Messages
function sendMessage() {
    let userInput = document.getElementById('userInput');
    let chatBox = document.getElementById('chatBox');

    if (userInput.value.trim() === "") return;

    // Display User Message
    let userMessage = document.createElement('div');
    userMessage.classList.add('user-message');
    userMessage.innerText = userInput.value;
    chatBox.appendChild(userMessage);

    // Simulate AI Thinking
    let botMessage = document.createElement('div');
    botMessage.classList.add('bot-message');
    botMessage.innerText = "Thinking...";
    chatBox.appendChild(botMessage);

    setTimeout(() => {
        botMessage.innerText = generateAIResponse(userInput.value);
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 1000);

    userInput.value = "";
}

// Generate AI Response (Basic)
function generateAIResponse(input) {
    let responses = [
        "Interesting question!",
        "I'm still learning. Can you elaborate?",
        "That sounds great! Tell me more.",
        "Let's explore this further!",
        "I'm here to assist you."
    ];
    return responses[Math.floor(Math.random() * responses.length)];
}
function showChatbot() {
    document.querySelector('.content').style.transform = 'translateY(-100vh)';
    document.getElementById('chatSection').style.top = '0';
}

function hideChatbot() {
    document.querySelector('.content').style.transform = 'translateY(0)';
    document.getElementById('chatSection').style.top = '100vh';
}
/* script.js */
function updateAccountDetails() {
    const userType = document.getElementById("userType").value;
    const detailsDiv = document.getElementById("accountDetails");
    if (userType === "customer") {
        detailsDiv.innerHTML = `<h3>Customer Profile</h3><p>Name: John Doe</p><p>Address: 123 Green St.</p><p>Gift Points: 150</p><button>Logout</button>`;
    } else {
        detailsDiv.innerHTML = `<h3>Delivery Agent Profile</h3><p>Name: Alex Rider</p><p>Company: FastTrack</p><p>Ratings: ⭐⭐⭐⭐</p><p>Distance Covered: 1200km</p><button>Logout</button>`;
    }
}
document.addEventListener("DOMContentLoaded", updateAccountDetails);
// Function to switch between sections
function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });

    // Show the selected section
    document.getElementById(sectionId).classList.add('active');

    // Update active sidebar item
    document.querySelectorAll('.sidebar ul li').forEach(item => {
        item.classList.remove('active');
    });

    // Set active class
    event.target.classList.add('active');
}

// Logout Function
function logout() {
    alert("Logging out...");
    window.location.href = "login.html"; // Redirect to login page
}


