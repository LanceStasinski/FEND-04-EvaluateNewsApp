function constructEntry (data) {
  //capitalize first letter and lowercase the rest function found posted by
  //gurvinder372 at https://stackoverflow.com/questions/36996698/how-do-i-lowercase-any-string-then-capitalize-only-the-first-letter-of-the-word

  const entry = document.getElementById('entry');
  entry.style.display = "flex";
  const fragment = document.createDocumentFragment();
  const header = document.createElement('h2').innerHTML = 'Sentiment Analysis Results';
  fragment.append(header);

  const scoreDiv = document.createElement('div');
  const score = data.score_tag;
  let polarity = (score == 'P+') ? 'Strongly Positive'
    : (score == 'P') ? 'Positive'
    : (score == 'NEU') ? 'Neutral'
    : (score == 'N') ? 'Negative'
    : (score == 'N+') ? 'Strongly Negative'
    : 'No Polarity';
  scoreDiv.innerHTML = `<b>Polarity:</b> ${polarity}`;
  fragment.append(scoreDiv);

  const agreeDiv = document.createElement('div');
  const agreement = myLibrary.capitalFirstLetter(data.agreement);
  agreeDiv.innerHTML = `<b>Agreement:</b> ${agreement}`;
  fragment.append(agreeDiv);

  const subjectDiv = document.createElement('div');
  const subjectivity = myLibrary.capitalFirstLetter(data.subjectivity);
  subjectDiv.innerHTML = `<b>Subjectivity:</b> ${subjectivity}`;
  fragment.append(subjectDiv);

  const confDiv = document.createElement('div');
  confDiv.innerHTML = `<b>Confidence:</b> ${data.confidence}%`;
  fragment.append(confDiv);

  const ironyDiv = document.createElement('div');
  const irony = myLibrary.capitalFirstLetter(data.irony);
  ironyDiv.innerHTML = `<b>Irony:</b> ${irony}`;
  fragment.append(ironyDiv);

  entry.appendChild(fragment);
}

export { constructEntry }