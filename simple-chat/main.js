const messageInput = document.getElementById("message-input");
const messagesContainer = document.getElementById("messagesContainer");

class Message {
	constructor(
		author,
		text,
		sentAt
	) {
		this.author = author;
		this.text = text;
		this.sentAt = sentAt;
	}
}

/**
 * @type {Array<Message>}
 */
let messages = [];
let userName;
let usersCount;

/**
 * Build HTML for chat message
 * @param {Message} message Chat message
 * @returns {string} Message HTML
 */
function buildMessageFromTemplate(message) {
	return `<div class="message-username">${message.author}</div>
          <div class="message-text">${message.text}</div>
          <div class="message-send-at">${getHumanDate(message.sentAt)}</div>
        </div>`;
}

/**
 * Formats date
 * @param {string} dateRaw 
 * @returns 
 */
function getHumanDate(dateRaw) {
	if (!dateRaw) {
		return "";
	}

	const date = new Date(dateRaw);

	const hours = date.getHours().toString().padStart(2, '0');
	const minutes = date.getMinutes().toString().padStart(2, '0');
	const day = date.getDate().toString().padStart(2, '0');
	const month = (date.getMonth() + 1).toString().padStart(2, '0');
	const year = date.getFullYear();

	return new Date().getFullYear() === year
		? `${day}.${month} ${hours}:${minutes}`
		: `${day}.${month}.${year} ${hours}:${minutes}`;
}

/**
 * Publish massage to chat
 * @param {Message} message 
 */
function publishMessage(message) {
	const messageBlock = document.createElement("div");

	messageBlock.classList.add("message");
	messageBlock.classList.add(message.author === userName ? "is-from" : "is-to");

	const builtMessageFromTemplate = buildMessageFromTemplate(message);

	messageBlock.innerHTML = builtMessageFromTemplate;

	messagesContainer.append(messageBlock);

	messageBlock.scrollIntoView();
}

/**
 * Saves messages to local storage
 */
function saveMessages() {
	localStorage.setItem("messages", JSON.stringify(messages));
}

/**
 * Loads messages from local storage
 * @returns {Message[]} Messages
 */
function loadMessages() {
	return JSON.parse(localStorage.getItem("messages"));
}

/**
 * Saves messages to storage and prints them on screen
 * @param {String} messageText Message text
 */
function pushMessage(messageText) {
	const message = new Message(
		userName,
		messageText,
		Date.now()
	);

	messages.push(message);

	publishMessage(message);
	saveMessages();
}

/**
 * Get user's nickname
 */
function getName() {
	userName = prompt("Напишите свое имя", "Воробей");
}

/**
 * Scripts initialization
 */
function init() {
	getName();

	const storedMessages = loadMessages() ?? [];

	messages = storedMessages;
	messages.forEach(publishMessage);

	setUsersCount();
}

/**
 * Sets users count in chat
 */
function setUsersCount() {
	const uiElement = document.getElementsByClassName("chat-users-count")[0];
	const users = new Set(messages.map(({ author }) => author));
	const currentUser = users.has(userName) ? 0 : 1;

	uiElement.innerHTML = uiElement.innerHTML.replace("0", users.size + currentUser);
}

/**
 * Handler for key pressing
 * @param {KeyboardEvent} event Key pressing event
 */
function onTextKeyUp(event) {
	if (messageInput.value === "") {
		return;
	}

	if (event.key === "Enter") {
		pushMessageIfPossible();
	}
}

/**
 * Publish non-empty message
 */
function pushMessageIfPossible() {
	const message = messageInput.value;
	if (message.length > 0) {
		pushMessage(message);

		messageInput.value = "";
	}
}

document.getElementById("send-btn").addEventListener("click", pushMessageIfPossible);
messageInput.addEventListener("keyup", onTextKeyUp);

init();
