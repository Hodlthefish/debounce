const debounce = (func, delay) => {
    let timeout;
  
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };
  
  const handleInput = () => {
    console.log('Пользователь вводит текст...');
  };
  
  const debouncedInputHandler = debounce(handleInput, 500);
  document.getElementById('input-field').addEventListener('input', debouncedInputHandler);
  