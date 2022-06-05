function items(items) {
    return `
      ${items.map(item => `<div class="col-6"><span class="topic"><a href="${item.link}" class="lol">${item.name}</a></span></div>`).join("")}
  `;
  }
  
  
  
  function catagoryTemplate(category) {
    return `
    <div class="card-deck col-xl-4 col-md-6 gap">
    <a href="${category.albumLink}" target="_blank">
    <div class="card">
      <img class="card-img-top" src="${category.photo}" alt="${category.title}">
      <div class="card-body">
        <h5 class="card-title">${category.title}</h5>
        <p class="card-text text-black">${category.description}</p>
        <p class="card-text"><small class="text-muted">${category.time}</small></p>
      </div>
    </div>
    </a>     
  </div>
    `;
  }
  
  document.getElementById("category").innerHTML = `
    ${categoryData.map(catagoryTemplate).join("")}  
  `;