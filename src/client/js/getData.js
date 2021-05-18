const getData = async (url= '') => {
  const request = await fetch(url);

  try{
    const newEntry = await request.json();
    //add data to html here
  } catch(error) {
    console.log("error", error);
    alert("Could not get data from server")
  }
}

export { getData }