const mode_button = document.getElementById('mode-button');
mode_button.addEventListener('click', changeMode);
mode_button.addEventListener('mouseover', previewMode);
mode_button.addEventListener('mouseout', resetMode);
let received_messages = [];

const send_button = document.getElementById('send');
send_button.addEventListener('click', receiveMessage);

const message_field = document.getElementById('message');
message_field.addEventListener('click', clearMessages);

function changeMode(){
  let mode_name = document.getElementById('mode-name');
  if(mode_name.textContent === 'light'){
      console.log("changing to light");
      document.body.setAttribute('class', 'light');
      mode_name.textContent = 'dark';
  }
  else{
      console.log("changing to dark");
      document.body.setAttribute('class', 'dark');
      mode_name.textContent = 'light';
    }
}

function previewMode(){
  let mode_name = document.getElementById('mode-name');
  if(mode_name.textContent === 'light'){
      console.log("preview light");
      document.body.setAttribute('class', 'light');
  }
  else{
      console.log("preview dark");
      document.body.setAttribute('class', 'dark');
    }
}

function resetMode(){
  let mode_name = document.getElementById('mode-name');
  if(mode_name.textContent === 'light'){
      console.log("back to dark");
      document.body.setAttribute('class', 'dark');
  }
  else{
      console.log("back to light");
      document.body.setAttribute('class', 'light');
    }
}


function receiveMessage(){
  let message = document.getElementById('message');
  let displayed_messages = document.getElementById('messages');
  if(message.value === ''){
      console.log("no message");
      console.log(message);
      let alert = document.createElement('p');
      alert.textContent = "Please enter a message.";
      displayed_messages.innerHTML = '';
      displayed_messages.appendChild(alert);
  }
  else{
      console.log("message received");
      let alert = document.createElement('p');
      alert.textContent = "Thank you for your message!";
      displayed_messages.innerHTML = '';
      displayed_messages.appendChild(alert);
      let name = document.getElementById('name');
      let email = document.getElementById('email');
      let new_message = {Name:name.value, Email:email.value, message:message.value};
      received_messages.push(new_message);
      console.log(received_messages);
    }
}

function clearMessages(){
  let displayed_messages = document.getElementById('messages');
  displayed_messages.innerHTML = '';
}
