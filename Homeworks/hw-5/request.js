class Request {
    constructor(baseUrl) {
      this.baseUrl = baseUrl;
    }
      async get(endpoint) {
      return this._fetch(endpoint, {
        method: 'GET'
      });
    }
   
      async _fetch(endpoint) {
      try {
        const response = await fetch(`${this.baseUrl}${endpoint}`);
  
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return await response.json();
      } catch (error) {
        console.error('Fetch error:', error);
        throw error;
      }
    }
  }
  
  const request = new Request('https://jsonplaceholder.typicode.com');
    (async () => {
    try {
      const responseGet = await request.get('/users');
      console.log('GET response:', responseGet);
    } catch (error) {
      console.error('Request error:', error);
    }
  })();