const chatData = {};
  let currentChat = 'general';

  function showChat(topic) {
    currentChat = topic;
    const chatWindow = document.getElementById('chat-window');
    chatWindow.innerHTML = chatData[topic] ? chatData[topic] : `<p>No hay mensajes en ${topic}</p>`;
  }

  function sendMessage() {
    const chatInput = document.getElementById('chat-input');
    const message = chatInput.value.trim();
    if (message) {
      if (!chatData[currentChat]) {
        chatData[currentChat] = '';
      }
      chatData[currentChat] += `<div><strong>Usuario:</strong> ${message}</div>`;
      document.getElementById('chat-window').innerHTML = chatData[currentChat];
      chatInput.value = '';
    }
  }