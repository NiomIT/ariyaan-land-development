function items(items) {
    return `
      ${items.map(item => `<div class="col-6"><span class="topic"><a href="${item.link}" class="lol">${item.name}</a></span></div>`).join("")}
  `;
  }
  
  
  
  function catagoryTemplate(category) {
    return `
    <img src="${category.photo}" alt="Progoti Team" class="progotiTeam">
    <br>
    <br>
    <p class="about">${category.about}</p>
    `;
  }
  
  document.getElementById("category").innerHTML = `
    ${categoryData.map(catagoryTemplate).join("")}  
  `;
  
  
  