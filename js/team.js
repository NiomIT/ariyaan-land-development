function items(items) {
    return `
      ${items.map(item => `<div class="col-6"><span class="topic"><a href="${item.link}" class="lol">${item.name}</a></span></div>`).join("")}
  `;
  }
  
  
  
  function catagoryTemplate(category) {
    return `
    <div class="col-xl-4 col-md-6 gap">
        <div class="card">
            <div class="card-header" data-toggle="collapse" data-target="#${category.id}">
                <div class="overflow-hidden">
                    <div class="card-content">
                        <div class="cleartfix">
                              
                                  <div class="media align-items-stretch">
                                      <div class="align-self-center">
                                          <img class="manu-img" src="${category.photo}" alt="${category.name}">
                                      </div>
                                      
                                      <div class="align-self-center">
                                      <h3 class="manu-item" style="margin: 0 0 0 20px; font-size: 20px; font-weight: bold;">${category.name}</h3>
                                      <p class="manu-item" style="margin: 10px 0 0 20px; font-size: 15px;">${category.designation}</p>
                                      </div>
                                      
                                      
                    
                                    
                                  </div>
                              
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
    `;
  }
  
  document.getElementById("category").innerHTML = `
    ${categoryData.map(catagoryTemplate).join("")}  
  `;
  
  
  