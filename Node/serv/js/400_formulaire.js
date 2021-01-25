function handleFormSubmit(event) {
    event.preventDefault();
    
    const data = new FormData(event.target);
    
    const formJSON = Object.fromEntries(data.entries());

    
  
    // for multi-selects, we need special handling
    
    
    const results = document.querySelector('.results p');
    results.innerText = JSON.stringify(formJSON, null, 2);

}

  const form = document.querySelector('form');
  form.addEventListener('submit', handleFormSubmit);
