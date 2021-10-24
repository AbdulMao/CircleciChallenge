test('Text appears on button press', () => {  
    document.body.innerHTML = `
    <button id="actionButton"> Click me! </button>
    <p id="textMessage"></p>
    `;

    require('./button.js');

    const testButton = document.getElementById('actionButton');
    const testText = document.getElementById('textMessage');;
    testButton.click();
  
    expect(testText.innerHTML).toBe('Hello World');
  });