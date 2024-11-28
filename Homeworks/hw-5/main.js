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
  };

const listEl = document.querySelector('.list');
function renderUserCard({
    name = '',
    username = '',
    email	 = '',
}) 
    {
    const card = document.createElement('article');
    const nameEl = document.createElement('h3');
    const usernameEl = document.createElement('h3');
    const emailEl = document.createElement('h3');
    
    
    card.className = 'user__card'
  
  
    nameEl.textContent = name;
    usernameEl.textContent = `Имя пользователя: ${username}`;
    emailEl.textContent = email;
     
    card.appendChild(nameEl)
    card.appendChild(usernameEl)
    card.appendChild(emailEl)

    return card;
  }

  function getUserList(list) {
    listEl.innerHTML = ''; 
    list.forEach(item => {
      const card = renderUserCard(item); 
      listEl.appendChild(card);
    });
  }

  const request = new Request('https://jsonplaceholder.typicode.com');
  (async () => {
  try {
   const responseGet = await request.get('/users');
   getUserList(responseGet);
    
    } catch (error) {
    console.error('Request error:', error);
  }
})()









