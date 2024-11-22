
import { shopItems, useShopItems, getCatalog, filterSelect, poorItemsRemoveCheckbox } from './get.js';

document.addEventListener('DOMContentLoaded', () => {

useShopItems();  



filterSelect.addEventListener('input', (e)=>{
  const {value} = e.target;
  const initialItems = [...shopItems];
  
  if (value === 'onTitle') {

  const sortedOnTitle = initialItems.sort((a, b)=> a.title.toLowerCase().localeCompare(b.title.toLocaleLowerCase()))
    
    return getCatalog(sortedOnTitle);
  }

  if (value === 'poor') {
    const sortedPoor = initialItems.sort((a, b)=> a.price > b.price ? 1 : -1)
    return getCatalog(sortedPoor);
  }
  
  if (value === 'rich') {
    const sortedRich = initialItems.sort((a, b)=> a.price < b.price ? 1 : -1)
    return getCatalog(sortedRich);
  }

  if (value === 'storageMin') {
    const sortedStorageMin = initialItems.sort((a, b)=> a.quantity > b.quantity ? 1 : -1)
    return getCatalog(sortedStorageMin);
  }
  
  if (value === 'storageMax') {
    const sortedStorageMax = initialItems.sort((a, b)=> a.quantity < b.quantity ? 1 : -1)
    return getCatalog(sortedStorageMax);
  }
  if (value === 'default') {
    getCatalog(shopItems);
  }
  
  
})



poorItemsRemoveCheckbox.addEventListener('input', (e)=>{
  const {checked} = e.target;

  if (checked) {
    const filteredPoorItems = [...shopItems].filter((catalogItem)=> catalogItem.price >= 500)
    getCatalog(filteredPoorItems)
   
    filterSelect.addEventListener('input', (e)=>{
      const {value} = e.target;
      const initialItems = [...filteredPoorItems];
      
      if (value === 'onTitle') {
    
      const sortedOnTitle = initialItems.sort((a, b)=> a.title.toLowerCase().localeCompare(b.title.toLocaleLowerCase()))
        
        return getCatalog(sortedOnTitle);
      }
    
      if (value === 'poor') {
        const sortedPoor = initialItems.sort((a, b)=> a.price > b.price ? 1 : -1)
        return getCatalog(sortedPoor);
      }
      
      if (value === 'rich') {
        const sortedRich = initialItems.sort((a, b)=> a.price < b.price ? 1 : -1)
        return getCatalog(sortedRich);
      }
    
      if (value === 'storageMin') {
        const sortedStorageMin = initialItems.sort((a, b)=> a.quantity > b.quantity ? 1 : -1)
        return getCatalog(sortedStorageMin);
      }
      
      if (value === 'storageMax') {
        const sortedStorageMax = initialItems.sort((a, b)=> a.quantity < b.quantity ? 1 : -1)
        return getCatalog(sortedStorageMax);
      }
      if (value === 'default') {
        getCatalog(filteredPoorItems);
      }
      
     
    })
    
  } else {
    
   
    
filterSelect.addEventListener('input', (e)=>{
  const {value} = e.target;
  const initialItems = [...shopItems];
  
  if (value === 'onTitle') {

  const sortedOnTitle = initialItems.sort((a, b)=> a.title.toLowerCase().localeCompare(b.title.toLocaleLowerCase()))
    
    return getCatalog(sortedOnTitle);
  }

  if (value === 'poor') {
    const sortedPoor = initialItems.sort((a, b)=> a.price > b.price ? 1 : -1)
    return getCatalog(sortedPoor);
  }
  
  if (value === 'rich') {
    const sortedRich = initialItems.sort((a, b)=> a.price < b.price ? 1 : -1)
    return getCatalog(sortedRich);
  }

  if (value === 'storageMin') {
    const sortedStorageMin = initialItems.sort((a, b)=> a.quantity > b.quantity ? 1 : -1)
    return getCatalog(sortedStorageMin);
  }
  
  if (value === 'storageMax') {
    const sortedStorageMax = initialItems.sort((a, b)=> a.quantity < b.quantity ? 1 : -1)
    return getCatalog(sortedStorageMax);
  }
  if (value === 'default') {
    getCatalog(shopItems);
  }
})

getCatalog(shopItems);


  }
  
})




});

// ДЗ: Доработать фильтрацию и сортировку чтобы они работали вместе
// Доп. будет плюсом к ДЗ: 
// Если поделите js файл на модули и список shopItems будете получать через fetch из *.json
// Стилизация карточек и инпутов тоже с модульным подходом.
