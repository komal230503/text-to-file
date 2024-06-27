const text = document.getElementById("textToConvert");
const convertBtn = document.getElementById("convertBtn");

convertBtn.addEventListener('click', function () { //This means that whenever the user clicks the button, the code inside the function will run.
    
    const speechSynth = window.speechSynthesis; /*Checking the Speech Synthesis:
    Inside the function, the code first checks if the browser supports the "Speech Synthesis" feature, which is the technology that allows the computer to speak the text.
    It does this by checking the window.speechSynthesis object, which is the interface for the Speech Synthesis API.*/
    
    const enteredText = text.value; /*The code then gets the text that the user has entered in the text textarea and stores it in the enteredText variable.*/
    
    const error = document.querySelector('.error-para');/*The code checks two conditions to handle errors:
    If the Speech Synthesis is not speaking and the enteredText is empty (after removing any spaces):
    In this case, the code sets an error message in the .error-para element, telling the user to enter some text.
    If the Speech Synthesis is not speaking and the enteredText is not empty:
    In this case, the code clears the error message, as the user has entered some text and is ready to convert it to speech.*/

    if (!speechSynth.speaking &&
        !enteredText.trim().length) {
        error.textContent = `Nothing to Convert! 
        Enter text in the text area.`
    }
    
    if (!speechSynth.speaking && enteredText.trim().length) {
        error.textContent = "";
        const newUtter =
            new SpeechSynthesisUtterance(enteredText);/*If the conditions for error handling are not met, the code creates a new SpeechSynthesisUtterance object, which is the interface for the text that needs to be spoken.
            It then calls the speechSynthesis.speak(newUtter) method to start the text-to-speech conversion.
            The code also changes the button's text to "Sound is Playing..." to indicate that the conversion is in progress.*/
        speechSynth.speak(newUtter);
        convertBtn.textContent = "Sound is Playing..."
    }
    
    setTimeout(() => {
        convertBtn.textContent = "Play Converted Sound"
    }, 5000);
});