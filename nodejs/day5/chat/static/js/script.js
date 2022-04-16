const sendBtn = document.getElementById("send");
const messageInput = document.getElementById("message");
const messagesContainer = document.getElementById("messages");
const messageHtml = ({user, message}) => `
<div class="d-flex mb-4 bg-dark rounded-3 align-items-center p-3">
    <span class="display-6 me-2 text-capitalize">${user || 'Anonymous'}</span>
    <p class="lead m-0 text-white flex-grow-1">${message}</p>
</div>
`;
const socket = io();
sendBtn.addEventListener("click", () => {
  const message = messageInput.value;
  messageInput.value = '';
  socket.emit("message send", message);
  messagesContainer.innerHTML += messageHtml({
    user: 'me',
    message
  });
});
socket.on("message broadcast", data => {
  messagesContainer.innerHTML += messageHtml(data);
})
