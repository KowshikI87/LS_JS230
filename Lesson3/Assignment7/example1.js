/* eslint-disable no-inner-declarations */
/* eslint-disable vars-on-top */
/* eslint-disable max-lines-per-function */
/* eslint-disable max-len */
/* eslint-disable no-trailing-spaces */
const DOMAIN = 'https://ls-230-xhr-demo.herokuapp.com';
const READY_STATES = [
  'UNSENT',
  'OPENED',
  'HEADERS_RECEIVED',
  'LOADING',
  'DONE'
];

let output;
let extraCheckbox;
let start;

function makeRequest(url) {
  output.innerHTML = '';
  start = new Date();
  let showExtraEvents = extraCheckbox.checked;
  
  log('request instantiated');
  
  let request = new XMLHttpRequest();

  request.timeout = 3000;
  
  var events = 'load error abort loadstart loadend timeout'.split(' ');  
  if (showExtraEvents) {
    events.push('progress');
    events.push('readystatechange');
  }
  
  events.forEach(eventName => {
    request.addEventListener(eventName, logger(eventName));
  });
  
  request.addEventListener('loadend', event => {
    let loadedURL = event.target.responseURL.replace(DOMAIN, '');
    log(`finished loading ${loadedURL}`);
  });
  
  request.open("GET", DOMAIN + url);
  request.send();
  
  log(`request sent to ${url}`);
}

function logger(eventName) {
  return event => logEvent(eventName, event.target.readyState, event.target.response);
}

function requester(url) {
  return () => makeRequest(url);
}

function logEvent(eventName, readyState, responseText) {
  let stateName = READY_STATES[readyState];
  let tr = document.createElement('tr');
  let ms = new Date() - start;
  if (responseText === '') {
    responseText = '-';
  }
  
  tr.innerHTML = `<td class="ms">+${ms}</td><td class="event">${eventName}</td><td class="code">${readyState}</td><td>${stateName}</td><td class="length">${responseText.length}</td><td><pre><code>${responseText}</code></pre></td>`;
  output.appendChild(tr);
}

function log(message) {
  let tr = document.createElement('tr');
  tr.classList.add('header');
  
  let ms = new Date() - start;
  
  tr.innerHTML = `<td class="ms">+${ms}</td><td colspan="5">${message}</td>`;
  
  output.appendChild(tr);
}

document.addEventListener('DOMContentLoaded', () => {
  output = document.getElementById('output');
  extraCheckbox = document.getElementById('extraEvents');
  
  let buttonMap = {
    successButton: '/status/200?stream=true',
    errorButton: '/status/500',
    timeoutButton: '/status/200?delay=4000',
    redirectButton: '/status/302',
    networkButton: '/error/abort'
  };
  
  for (var buttonName in buttonMap) {
    document.getElementById(buttonName).addEventListener('click',  requester(buttonMap[buttonName]));
  }
});