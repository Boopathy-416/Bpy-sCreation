// ---------------------------------------------------------------------------------------------------------------------------
document
.querySelector(".table-responsive")
.addEventListener("wheel", function (event) {
  // Horizontal scroll
  this.scrollLeft += event.deltaY;
  event.preventDefault(); // Prevent vertical scroll
});

// ---------------------------------------------------------------------------------------------------------------------------
// --create account 

document.getElementById('createAccountBtn').addEventListener('click', function() {
  document.getElementById('accountForm').classList.add('show');
});

document.addEventListener('click', function(event) {
  const form = document.getElementById('accountForm');
  if (!form.contains(event.target) && !document.getElementById('createAccountBtn').contains(event.target)) {
    form.classList.remove('show');

  }
});

document.getElementById('loginUser').addEventListener('click', function(){
  document.getElementById('loginForm').classList.add('show');
} );

document.addEventListener('click', function(event){
  const user = document.getElementById('loginForm');
  if (!user.contains(event.target) && !document.getElementById('loginUser').contains(event.target)){
    user.classList.remove('show')
  }
})

// ---------------------------------------------------------------------------------------------------------------------------


// chatbot Ai
document.getElementById('send-button').addEventListener('click', sendMessage);
document.getElementById('user-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    if (userInput.trim() === '') return;

    addMessageToChat('user-message', userInput);
    document.getElementById('user-input').value = '';

    setTimeout(() => {
        const botResponse = getBotResponse(userInput);
        addMessageToChat('bot-message', botResponse);
    }, 1000);
}

function addMessageToChat(messageClass, message) {
    const chatLog = document.getElementById('chat-log');
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', messageClass);
    messageElement.innerText = message;
    chatLog.appendChild(messageElement);
    chatLog.scrollTop = chatLog.scrollHeight;
}

function getBotResponse(input) {
    const responses = {
        "hi": "Hello! How can I assist you today?",
        "hello": "Hi there! How can I help you?",
        "how are you": "I'm just a bot, but I'm doing great! How about you?",
        "bye": "Goodbye! Have a great day!",
        "default": "Sorry, I didn't understand that. Could you please rephrase?"
    };

    input = input.toLowerCase();
    return responses[input] || responses['default'];
}


console.log("hello world");
// --------------------------------------------------------side navbar-------------------------------------------------------------------

// side navber 
const body = document.querySelector('body'),
sidebar = body.querySelector('nav'),
toggle = body.querySelector(".toggle"),
searchBtn = body.querySelector(".search-box"),
modeSwitch = body.querySelector(".toggle-switch"),
modeText = body.querySelector(".mode-text");
toggle.addEventListener("click" , () =>{
sidebar.classList.toggle("close");
})
searchBtn.addEventListener("click" , () =>{
sidebar.classList.remove("close");
})
modeSwitch.addEventListener("click" , () =>{
body.classList.toggle("dark");

if(body.classList.contains("dark")){
  modeText.innerText = "Light mode";
}else{
  modeText.innerText = "Dark mode";
  
}
});
// ---------------------------------------------------------------------------------------------------------------------------
const sidebor = document.getElementById('sidebar');
const toggleBtn = document.getElementById('toggle-btn');

toggleBtn.addEventListener('click', function() {
    sidebor.classList.toggle('close');
    this.classList.toggle('active');
});

sidebor.addEventListener('click', function() {
    if (window.innerWidth <= 768) {
        this.classList.add('close');
        toggleBtn.classList.remove('active');
    }
});


