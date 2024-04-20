function displayPoem(response) {
    
    new Typewriter('#poem', {
        strings: response.data.answer,
        autoStart: true,
        cursor: null,
        delay: 40,
      });
  
}


function generatePoem(event) {
    event.preventDefault();

    let apiKey = "deabbt600bd7ofd44dbd308802faa2f2";
    let userInstructions = document.querySelector("#instructions");
    let prompt = `Please write a poem about ${userInstructions.value}`;
    let context = "You are a poem expert and loves to write short poems. Your mission is to generate a 4 sentences poem in HTML format. The three first sentences should be followed by a <br>. Make sure to follow the user instructions. Please make the poem funny. Display the poem directly without any other text before it. Do not add an extra line at the end of the poem";
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
    
    let poemElement = document.querySelector("#poem");
    poemElement.classList.remove("hidden");
    poemElement.innerHTML = ` <div> 🔄 Generating your poem about ${userInstructions.value}</div>`;


    axios.get(apiUrl).then(displayPoem);
}



let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
