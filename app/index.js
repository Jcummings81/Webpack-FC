import _ from 'lodash';

const component = (msg) => {
  let element = document.createElement('div')
  let { greeting, content } = msg;
  element.innerHTML = _.join([greeting, content], ' ');

  return element;
}

document.body.appendChild(component({ greeting: 'Hello', content: 'Webpack' }));

var cards = []
var Card = function(subject, answer) {
    this.subject = subject;
    this.answer = answer;
}


Card.prototype.addToCards = function() {
  var list =   document.getElementById("cards");
  var li = document.createElement('li');
  li.innerHTML = this.subject + ", " + this.answer;
  list.appendChild(li);  
}

Card.prototype.logCard = function() {
  console.log(this.subject + " " + this.answer + " created");
}

function addCard() {
  var input1 = document.getElementById('subject');
  var input2 = document.getElementById('answer');
  var person = new Person(input1.value, input2.value);
  card.addToCards();
  card.logCard();
  input1.value = null;
  input2.value = null;
}