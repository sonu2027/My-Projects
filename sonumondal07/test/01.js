function debounce(func, delay) {
    let timeoutId;
  
  
    return function (...args) {
  
      clearTimeout(timeoutId);
  
      timeoutId = setTimeout(() => func.apply(this, args), delay);
  
    };
  
  }
  
  
  function fetchDataFromAPI(query) {
  
    // Some asynchronous API call based on the query
  
    console.log('Fetching data for query:', query);
  
  }
  
  
  const debouncedFetchData = debounce(fetchDataFromAPI, 500);
  
  
  debouncedFetchData('apple');
  
  debouncedFetchData('banana');
  
  debouncedFetchData('orange');