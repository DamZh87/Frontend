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
 getUserList(responseGet); 
  } catch (error) {
  console.error('Request error:', error);
}
})()




const listEl = document.querySelector('.list');
function renderUserCard({
    name = '',
    website = '',
    email	 = '',
    address = '',
    company = '',
    
}) 
    {
    const card = document.createElement('div');
    const nameEl = document.createElement('h3');
    const cityEl = document.createElement('p');
    const company_nameEl = document.createElement('middle');
    const emailEl = document.createElement('a');
    const siteEl = document.createElement('a');
    
    card.className = 'user__card'
    nameEl.className = 'user__name'
    cityEl.className ='city_name'
    company_nameEl.className ='company_name'
    emailEl.className ='p_small'
    siteEl.className ='p_small'

    nameEl.textContent = name;
    siteEl.setAttribute('href',`www.`+ website);
    siteEl.setAttribute('target', '_blank');
    siteEl.textContent = `Visit website: ${website}`;
    emailEl.setAttribute('href',`mailto:`+email);
    emailEl.textContent = `Mail to: ${email}`;
    cityEl.textContent = `From ${JSON.stringify(address.city)}`;
    company_nameEl.textContent = `Works in: ${JSON.stringify(company.name)} company`
    card.appendChild(nameEl)
    card.appendChild(cityEl)
    card.appendChild(company_nameEl)
    card.appendChild(emailEl)
    card.appendChild(siteEl)

    return card;
  }

  function getUserList(list) {
    listEl.innerHTML = ''; 
    list.forEach(item => {
      const card = renderUserCard(item); 
      listEl.appendChild(card);
    });
  }


 









