function appendToResult(value) {
    const result = document.getElementById('result');
    result.value += value;
  }
  
  function calculateResult() {
    const result = document.getElementById('result');
    const expression = result.value;
  
    try {
      const answer = eval(expression);
      result.value = answer;
    } catch (error) {
      result.value = 'Error';
    }
  }
  
  function clearResult() {
    const result = document.getElementById('result');
    result.value = '';
  }
  
  const buttons = document.querySelectorAll('button');
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      button.classList.add('clicked');
      setTimeout(() => {
        button.classList.remove('clicked');
      }, 200);
    });
  });