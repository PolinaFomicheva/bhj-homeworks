const chatWidget = document.querySelector('.chat-widget');
const messages = document.querySelector( '.chat-widget__messages' );
const input = document.getElementById('chat-widget__input');
const container = document.querySelector('.chat-widget__messages-container');


chatWidget.onclick = () => {
  if (!chatWidget.classList.contains('chat-widget_active')) {
    inactivityTime();
  }
    chatWidget.classList.add('chat-widget_active')
};

// таймер
function inactivityTime() {
  let time = setTimeout(logout, 30000);
  window.onload = resetTimer;
  document.onkeydown = resetTimer;

  function logout() {
    messages.innerHTML += `
    <div class="message">
    <div class="message__time">${dataTime()}</div>
    <div class="message__text">
    Вы ещё здесь?
    </div>
  </div>
  `;
  }

  function resetTimer() {
    clearTimeout(time);
    time = setTimeout(logout, 30000);
  }
}

function correctTime(num) {
  if (num >= 0 && num <= 9) {
    return '0' + num;
  } else {
    return num;
  }
}

// время
function dataTime() {
  let date = new Date();
  return `${correctTime(date.getHours())}:${correctTime(date.getMinutes())}`;
}

// задание
input.addEventListener('keydown', (event) => {
  if (event.code === 'Enter' && input.value != '') {
    
    messages.innerHTML += `
      <div class="message message_client">
        <div class="message__time">${dataTime()}</div>
        <div class="message__text">
          ${input.value}
        </div>
      </div>
      `;

      input.value = '';

      let botMessages = [
        'Добрый день, мы ещё не проснулись. Позвоните через 10 лет',
        'Кто тут?',
        'Где ваша совесть?',
        // не нашла список сообщений бота, написала вручную
      ];
      const botSay = botMessages[Math.floor(Math.random() * botMessages.length)];
  

      messages.innerHTML += `
      <div class="message">
        <div class="message__time">${dataTime()}</div>
        <div class="message__text">
          ${botSay}
        </div>
      </div>
      `;

      container.scrollTo(0, container.scrollHeight);
    };
  })


