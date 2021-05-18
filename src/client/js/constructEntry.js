function constructEntry (data) {
  //capitalize first letter and lowercase the rest function found posted by
  //gurvinder372 at https://stackoverflow.com/questions/36996698/how-do-i-lowercase-any-string-then-capitalize-only-the-first-letter-of-the-word
  function capitalFirstLetter (string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  }

  const entry = document.getElementById('entry');
  const header = document.createElement('h2').innerHTML("Sentiment Analysis Results")
  entry.appendChild(header);

  const scoreDiv = document.createElement('div');
  let polarity = "";
  const score = data.score_tag;
  if (score == 'P+') {
    polarity = 'Strongly Positive';
  } else if (score == 'P') {
    polarity = 'Positive';
  } else if (score == 'NEU') {
    polarity = 'Neutral';
  } else if (score == 'N') {
    polarity = 'Negative';
  } else if (score == 'N+') {
    polarity = 'Strongly Negative';
  } else if (score == 'NONE') {
    polarity = 'No polarity';
  }
  scoreDiv.innerHTML = `<b>Polarity:</b> ${polarity}`;
  entry.appendChild(scoreDiv);

  const agreeDiv = document.createElement('div');
  const agreement = capitalFirstLetter(data.agreement);
  agreeDiv.innerHTML = `<b>Agreement:</b> ${agreement}`;
  entry.appendChild(agreeDiv);

  const subjectDiv = document.createElement('div');
  const subjectivity = capitalFirstLetter(data.subjectivity);
  subjectDiv.innerHTML = `<b>Subjectivity:</b> ${subjectivity}`;
  entry.appendChild(subjectDiv);

  const confDiv = document.createElement('div');
  confDiv.innerHTML = `<b>Confidence:</b> ${data.confidence}%`;
  entry.appendChild(confDiv);

  const ironyDiv = document.createElement('div');
  const irony = capitalFirstLetter(data.irony);
  ironyDiv.innerHTML = `<b>Irony:</b> ${irony}`;
  entry.appendChild(ironyDiv);
}