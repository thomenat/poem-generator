function generatePoem(event) {
    event.preventDefault();

    new Typewriter('#poem', {
      strings: "Poem will show up here",
      autoStart: true,
      cursor: null,
      delay: 75,
    });

}


let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
