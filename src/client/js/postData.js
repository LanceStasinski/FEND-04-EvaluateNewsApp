//post user-entered data to server then pass the results to constructEntry()

const REST_API = process.env.REST_API;
async function postData(data) {
  try {
    await fetch(`${REST_API}/add`, {
      method: "POST",
      credentials: "same-origin",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: data }),
    })
      .then((response) => response.json())
      .then((response) => {
        myLibrary.constructEntry(response);
      });
  } catch (error) {
    console.log("error", error);
    alert("Oops, something went wrong.");
  }
}

export { postData };
