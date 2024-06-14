const chatbox = document.getElementById("chatbox");
const chatContainer = document.getElementById("chat-container");
const userInput = document.getElementById("user-input");
const sendButton = document.getElementById("send-button");
const openChatButton = document.getElementById("open-chat");
const closeChatButton = document.getElementById("close-chat");

let isChatboxOpen = true; // Set the initial state to open

// Function to toggle the chatbox visibility
function toggleChatbox() {
  chatContainer.classList.toggle("hidden");
  isChatboxOpen = !isChatboxOpen; // Toggle the state
}

// Add an event listener to the open chat button
openChatButton.addEventListener("click", toggleChatbox);

// Add an event listener to the close chat button
closeChatButton.addEventListener("click", toggleChatbox);

// Add an event listener to the send button
sendButton.addEventListener("click", function () {
  const userMessage = userInput.value;
  if (userMessage.trim() !== "") {
    addUserMessage(userMessage);
    respondToUser(userMessage);
    userInput.value = "";
  }
});

userInput.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    const userMessage = userInput.value;
    addUserMessage(userMessage);
    respondToUser(userMessage);
    userInput.value = "";
  }
});

function addUserMessage(message) {
  const messageElement = document.createElement("div");
  messageElement.classList.add("mb-2", "text-right");
  messageElement.innerHTML = `<p class="bg-blue-500 text-white rounded-lg py-2 px-4 inline-block">${message}</p>`;
  chatbox.appendChild(messageElement);
  chatbox.scrollTop = chatbox.scrollHeight;
}

function addBotMessage(message) {
  const messageElement = document.createElement("div");
  messageElement.classList.add("mb-2");
  messageElement.innerHTML = `<p class="bg-gray-200 text-gray-700 rounded-lg py-2 px-4 inline-block">${message}</p>`;
  chatbox.appendChild(messageElement);
  chatbox.scrollTop = chatbox.scrollHeight;
}

function respondToUser(userMessage) {
  // Replace this with your chatbot logic
  setTimeout(() => {
// addBotMessage("Great! Let me think about it");
    fetch("/api/response", {
      method: "POST",
      body: JSON.stringify({ message: userMessage }),
      headers: {
        "Content-Type": "application/json",
      }
    })
    .then(res => res.json())
    .then(({ message}) => {
      addBotMessage(message)
    })
  }, Math.floor(Math.random() * (9000 - 3000 + 1)) + 3000);
  // setTimeout(() => {
  //   addBotMessage("I'll get back to you soon");
  // }, 15000);
  // setTimeout(() => {
  //   addBotMessage("gotta get the wife's approval lol");
  // }, 18000);

}


// Automatically open the chatbox on page load
toggleChatbox();
    // addBotMessage("Great! Let me think about it");
    fetch("/api/response", {
      method: "POST",
      body: JSON.stringify({ message: userMessage }),
      headers: {
        "Content-Type": "application/json",
      }
    })
    .then(res => res.json())
    .then(({ message}) => {
      addBotMessage(message)
    })
  }, Math.floor(Math.random() * (9000 - 3000 + 1)) + 3000);
  // setTimeout(() => {
  //   addBotMessage("I'll get back to you soon");
  // }, 15000);
  // setTimeout(() => {
  //   addBotMessage("gotta get the wife's approval lol");
  // }, 18000);

}


// Automatically open the chatbox on page load
toggleChatbox();
