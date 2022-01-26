//Update the UI with the results from the meaningcloud API. The results are
//modified to increase readability by the user. For example, abbreviations for
//the polarity of an article are expanded into full words, and uppercase results
//are lower-cased (SUBJECTIVE -> Subjective).

function constructEntry(data) {
  //if meaningcloud responds with a status of "OK", then update the UI
  if (data.status.msg == "OK") {
    const entry = document.getElementById("entry");
    entry.style.display = "flex";
    const fragment = document.createDocumentFragment();
    const header = document.createElement("h2");
    header.innerHTML = `Sentiment Analysis Results`;
    fragment.append(header);

    const scoreDiv = document.createElement("div");
    const score = data.score_tag;
    let polarity =
      score == "P+"
        ? "Strongly Positive"
        : score == "P"
        ? "Positive"
        : score == "NEU"
        ? "Neutral"
        : score == "N"
        ? "Negative"
        : score == "N+"
        ? "Strongly Negative"
        : "No Polarity";
    scoreDiv.innerHTML = `<b>Polarity:</b> ${polarity}`;
    fragment.append(scoreDiv);

    entry.style.backgroundColor =
      polarity === "Strongly Positive"
        ? "#6EE782"
        : polarity === "Positive"
        ? "#82C9DF"
        : polarity === "Neutral"
        ? "#CFCFCF"
        : polarity === "Negative"
        ? "#FF9E45"
        : polarity === "Strongly Negative"
        ? "#FD6D64"
        : "#FFF";

    const agreeDiv = document.createElement("div");
    const agreement = myLibrary.capitalFirstLetter(data.agreement);
    agreeDiv.innerHTML = `<b>Agreement:</b> ${agreement}`;
    fragment.append(agreeDiv);

    const subjectDiv = document.createElement("div");
    const subjectivity = myLibrary.capitalFirstLetter(data.subjectivity);
    subjectDiv.innerHTML = `<b>Subjectivity:</b> ${subjectivity}`;
    fragment.append(subjectDiv);

    const confDiv = Fdocument.createElement("div");
    confDiv.innerHTML = `<b>Confidence:</b> ${data.confidence}%`;
    fragment.append(confDiv);

    const ironyDiv = document.createElement("div");
    const irony = myLibrary.capitalFirstLetter(data.irony);
    ironyDiv.innerHTML = `<b>Irony:</b> ${irony}`;
    fragment.append(ironyDiv);

    entry.appendChild(fragment);
  } else if (data.status.msg == "Operation denied") {
    // if meaningcloud does not responds with 'Operation denied' tell the user
    //they need an api key
    alert(`${data.status.msg}. API Key not accepted.`);
  } else {
    // if meaningcloud does not respond with a status message of "OK", alert the
    //user to change the URL.
    alert(`${data.status.msg}. Please check the URL or enter a new one.`);
  }
}

export { constructEntry };
