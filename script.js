const cardsContainer = document.getElementById('cards-container');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const currentEl = document.getElementById('current');
const showBtn = document.getElementById('show');
const hideBtn = document.getElementById('hide');
const questionEl = document.getElementById('question');
const answerEl = document.getElementById('answer');
const addCardBtn = document.getElementById('add-card');
const clearBtn = document.getElementById('clear');
const addContainer = document.getElementById('add-container');

// Keep track of current card
let currentActiveCard = 0;

// Store DOM cards
const cardsEl = [];




 const cardsData = [
   {
     question: 'image1',
     answer: 'Neurology'
   },
   {
     question: 'image2',
     answer: 'Ophthalmology'
  },
  {
     question: 'image3',
     answer: 'Family'
  },
  {
    question: 'image4',
    answer: 'Psychiatry'
 },
 {
  question: 'image5',
  answer: 'Forensic'
},
{
  question: 'image6',
  answer: 'Ortho'
},
{
  question: 'image7',
  answer: 'Obstetrics'
},
{
  question: 'image8',
  answer: 'Anesthesiology'
},
{
  question: 'image9',
  answer: 'Radiology'
},
{
  question: 'image10',
  answer: 'Dermatology'
},
{
  question: 'image11',
  answer: 'ENT'
}

 ];

// Create all cards
function createCards() {
  cardsData.forEach((data, index) => createCard(data, index));
}

function updateCurrentText() {
  currentEl.innerText = `${currentActiveCard + 1}/${cardsEl.length}`;
}

// Create a single card in DOM
function createCard(data, index) {
  const card = document.createElement('div');
  card.classList.add('card');

  if (index === 0) {
    card.classList.add('active');
  }

  card.innerHTML = `
  <div class="inner-card">
  <div class="inner-card-front">
    <image  height="100%"  width="100%" src=images/${data.question}.png >
  </div>
  <div class="inner-card-back">
    <h1>
      ${data.answer}
    </h1>
  </div>
</div>
  `;

  card.addEventListener('mouseover', () => card.classList.toggle('show-answer'));
  card.addEventListener("mouseout",  () => card.classList.toggle('show-answer'));
  card.addEventListener('click', () => window.location.href = "table.html");
  


  // Add to DOM cards
  cardsEl.push(card);

  cardsContainer.appendChild(card);

  updateCurrentText();
}




createCards();

// Event listeners

// Next button
nextBtn.addEventListener('click', () => {
  cardsEl[currentActiveCard].className = 'card left';

  currentActiveCard = currentActiveCard + 1;

  if (currentActiveCard > cardsEl.length - 1) {
    currentActiveCard = cardsEl.length - 1;
  }

  cardsEl[currentActiveCard].className = 'card active';

  updateCurrentText();
});

// Prev button
prevBtn.addEventListener('click', () => {
  cardsEl[currentActiveCard].className = 'card right';

  currentActiveCard = currentActiveCard - 1;

  if (currentActiveCard < 0) {
    currentActiveCard = 0;
  }

  cardsEl[currentActiveCard].className = 'card active';

  updateCurrentText();
});

// Show add container
showBtn.addEventListener('click', () => addContainer.classList.add('show'));
// Hide add container
hideBtn.addEventListener('click', () => addContainer.classList.remove('show'));




