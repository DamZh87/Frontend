var closeChatButtonEl = document.getElementById('close_chat');
var openChatButtonEl = document.getElementById('open_chat');
var windowChat = document.getElementById('window_chat')

function closeChatWindow() {
  windowChat.className = 'close_window';
  openChatButtonEl.className = 'open_chat_button';
}

function openChatWindow() {
  windowChat.className = 'window__chat';
  openChatButtonEl.className = 'close_button';
}

openChatButtonEl.addEventListener('click', openChatWindow)
closeChatButtonEl.addEventListener('click', closeChatWindow);