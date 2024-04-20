function displayPoem(response) {
    
    new Typewriter('#poem', {
        strings: response.data.answer,
        autoStart: true,
        cursor: null,
        delay: 80,
      });
  
      console.log("poem generated");
}


function generatePoem(event) {
    event.preventDefault();

    let apiKey = "deabbt600bd7ofd44dbd308802faa2f2";
    let userInstructions = document.querySelector("#instructions");
    let prompt = `Please write a poem about ${userInstructions.value}`;
    let context = "You are poem expert and loves to write short poems. Please write a 4 line poem, dispaly each sentence in a line in basic HTML. Please make the poem funny";
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
    
    axios.get(apiUrl).then(displayPoem);

    console.log("generating poem");
   
}



let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
