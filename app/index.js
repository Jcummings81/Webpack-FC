
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
  var person = new Card(input1.value, input2.value);
  person.addToCards();
  person.logCard();
  input1.value = null;
  input2.value = null;
}
