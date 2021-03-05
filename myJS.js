// Used Moment.js to log and format the time a message gets submitted in the contact form
// Used Font Awesome to add an icon to the "switch mode" button

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
      document.body.setAttribute('class', 'light');
      mode_name.textContent = 'dark';
  }
  else{
      document.body.setAttribute('class', 'dark');
      mode_name.textContent = 'light';
    }
}

function previewMode(){
  let mode_name = document.getElementById('mode-name');
  if(mode_name.textContent === 'light'){
      document.body.setAttribute('class', 'light');
  }
  else{
      document.body.setAttribute('class', 'dark');
    }
}

function resetMode(){
  let mode_name = document.getElementById('mode-name');
  if(mode_name.textContent === 'light'){
      document.body.setAttribute('class', 'dark');
  }
  else{
      document.body.setAttribute('class', 'light');
    }
}


function receiveMessage(){
  let message = document.getElementById('message');
  let displayed_messages = document.getElementById('messages');
  if(message.value === ''){
      let alert = document.createElement('p');
      alert.textContent = "Please enter a message.";
      displayed_messages.innerHTML = '';
      displayed_messages.appendChild(alert);
  }
  else{
      let alert = document.createElement('p');
      alert.textContent = "Thank you for your message!";
      displayed_messages.innerHTML = '';
      displayed_messages.appendChild(alert);
      let name = document.getElementById('name');
      let email = document.getElementById('email');
      let time = moment().format('MMMM Do YYYY, h:mm:ss a');
      let new_message = {Name:name.value, Email:email.value, message:message.value, Time:time};
      received_messages.push(new_message);
    }
}

function clearMessages(){
  let displayed_messages = document.getElementById('messages');
  displayed_messages.innerHTML = '';
}
