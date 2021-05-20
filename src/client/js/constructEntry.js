function constructEntry (data) {
  //capitalize first letter and lowercase the rest function found posted by
  //gurvinder372 at https://stackoverflow.com/questions/36996698/how-do-i-lowercase-any-string-then-capitalize-only-the-first-letter-of-the-word
  function capitalFirstLetter (string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  }

  const entry = document.getElementById('entry');
  entry.style.display = "flex";
  const fragment = document.createDocumentFragment();
  const header = document.createElement('h2').innerHTML("Sentiment Analysis Results")
  fragment.appendChild(header);

  const scoreDiv = document.createElement('div');
  const score = data.score_tag;
  let polarity = (score == 'P+') ? 'Strongly Positive'
    : (score == 'P') ? 'Positive'
    : (score == 'NEU') ? 'Neutral'
    : (score == 'N') ? 'Negative'
    : (score == 'N+') ? 'Strongly Negative'
    : 'No Polarity';
  scoreDiv.innerHTML = `<b>Polarity:</b> ${polarity}`;
  fragment.appendChild(scoreDiv);

  const agreeDiv = document.createElement('div');
  const agreement = capitalFirstLetter(data.agreement);
  agreeDiv.innerHTML = `<b>Agreement:</b> ${agreement}`;
  fragment.appendChild(agreeDiv);

  const subjectDiv = document.createElement('div');
  const subjectivity = capitalFirstLetter(data.subjectivity);
  subjectDiv.innerHTML = `<b>Subjectivity:</b> ${subjectivity}`;
  fragment.appendChild(subjectDiv);

  const confDiv = document.createElement('div');
  confDiv.innerHTML = `<b>Confidence:</b> ${data.confidence}%`;
  fragment.appendChild(confDiv);

  const ironyDiv = document.createElement('div');
  const irony = capitalFirstLetter(data.irony);
  ironyDiv.innerHTML = `<b>Irony:</b> ${irony}`;
  fragment.appendChild(ironyDiv);

  entry.appendChild(fragment);
}

export { constructEntry }