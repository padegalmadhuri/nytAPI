var parent;
var maindiv;
document.addEventListener('DOMContentLoaded', () => {
	 parent = document.createElement('div');
  parent.id="container";
document.getElementsByTagName("body")[0].append(parent);
	parent.className = 'container';
  maindiv=document.createElement('div');
  maindiv.innerHTML=`<div class="row-fluid summary ml-5">
            <button class="btn btn-success" data-toggle="collapse" data-target="#intro" >Arts</button>
            <button class="btn btn-success" data-toggle="collapse" data-target="#intro1"  >Science</button>
            <button class="btn btn-success" data-toggle="collapse" data-target="#intro2" >US</button>
            <button class="btn btn-success" data-toggle="collapse" data-target="#intro3" >World</button>
            <button class="btn btn-success" data-toggle="collapse" data-target="#intro4" >Nyregion</button>
            <button class="btn btn-success" data-toggle="collapse" data-target="#intro5" >Health</button>
            <button class="btn btn-success" data-toggle="collapse" data-target="#intro6" >Opinion</button>
            <button class="btn btn-success" data-toggle="collapse" data-target="#intro7" >Briefing</button>
            <button class="btn btn-success" data-toggle="collapse" data-target="#intro8" >Climate</button>
            <hr class="col-lg-12">
  </div>`
document.getElementsByTagName("body")[0].append(maindiv);
});

//arts
fetch("https://api.nytimes.com/svc/topstories/v2/home.json?api-key=s6pzBL6UdYvaCyYOxxxAqouA3ePVidib")
  .then(function (response) {
  	response.json()
  	.then(function(data){
  		console.log(data.results)
         	data.results.forEach((rest) => {
          if(rest.section==="arts"){
          let row = document.createElement('div');

        parent.appendChild(row);
        row.className = 'row';
        row.innerHTML=`<div id="intro" class="collapse">
        <div class="card mb-3 col-8 col-md-8 col-sm-8 col-lg-8 offset-lg-3 offset-sm-3 offset-md-3 shadow-none p-3 mb-5 bg-light rounded"  style="max-width: 540px;">
          <div class="row no-gutters">
              <div class="col-md-8">
              <div class="card-body">
              <h4 style="color:blue;font-weight:bolder;font-family:Dancing Script">`+rest.section.toUpperCase()+`</h4>
                <h5 class="card-title" style="font-family:Dancing Script">`+rest.title+`</h5>
                <p style="color:grey;opacity:0.7;">`+rest.created_date+`</p>
                <h3>`+rest.byline+`</h3>
                <p class="card-text"><span><h4> Abstarct  </h4></span>`+rest.abstract+`</p>
                <a href="`+rest.short_url+`" target="_blank">Continue Reading</a>
              <span>`+rest.item_type+`</span>
              </div>
            </div>
            <div class="col-md-4">
              <img src="`+rest.multimedia[0].url+`" class="card-img" alt="...">
              </div>
          </div>
          </div>
        </div>`
            document.getElementById("container").append(row);
          }
            });

          })
        })
.catch(function(err){
  console.log(err);
});


//science

  fetch("https://api.nytimes.com/svc/topstories/v2/home.json?api-key=s6pzBL6UdYvaCyYOxxxAqouA3ePVidib")
  .then(function (response) {
  	response.json()
  	.then(function(data){
           	data.results.forEach((rest) => {
          if(rest.section==="science"){
        let row = document.createElement('div');
        parent.appendChild(row);
        row.className = 'row';
        row.innerHTML=`<div id="intro1" class="collapse">
        <div class="card mb-3 col-8 col-md-8 col-sm-8 col-lg-8 offset-lg-3 offset-sm-3 offset-md-3 shadow-none p-3 mb-5 bg-light rounded"  style="max-width: 540px;">
          <div class="row no-gutters">
              <div class="col-md-8">
              <div class="card-body">
              <h4 style="color:blue;font-weight:bolder;font-family:Dancing Script">`+rest.section.toUpperCase()+`</h4>
                <h5 class="card-title">`+rest.title+`</h5>
                <p style="color:grey;opacity:0.7;">`+rest.created_date+`</p>
                <h3>`+rest.byline+`</h3>
                <p class="card-text"><span><h4> Abstarct  </h4></span>`+rest.abstract+`</p>
                <a href="`+rest.short_url+`" target="_blank">Continue Reading</a>
              <span>`+rest.item_type+`</span>
              </div>
            </div>
            <div class="col-md-4">
              <img src="`+rest.multimedia[0].url+`" class="card-img" alt="...">
              </div>
          </div>
          </div>
        </div>`
            document.getElementById("container").append(row);
          }

          });

    })
})
.catch(function(err){
  console.log(err);
});

//US


  fetch("https://api.nytimes.com/svc/topstories/v2/home.json?api-key=s6pzBL6UdYvaCyYOxxxAqouA3ePVidib")
  .then(function (response) {
    response.json()
    .then(function(data){

      data.results.forEach((rest) => {
        if(rest.section==="us"){
          let row = document.createElement('div');
          parent.appendChild(row);
          row.className = 'row';
          row.innerHTML=`<div id="intro2" class="collapse">
          <div class="card mb-3 col-8 col-md-8 col-sm-8 col-lg-8 offset-lg-3 offset-sm-3 offset-md-3 shadow-none p-3 mb-5 bg-light rounded"  style="max-width: 540px;">
          <div class="row no-gutters">
          <div class="col-md-8">
          <div class="card-body">
          <h4 style="color:blue;font-weight:bolder;font-family:Dancing Script">`+rest.section.toUpperCase()+`</h4>
          <h5 class="card-title">`+rest.title+`</h5>
          <p style="color:grey;opacity:0.7;">`+rest.created_date+`</p>
          <h3>`+rest.byline+`</h3>
          <p class="card-text"><span><h4> Abstarct  </h4></span>`+rest.abstract+`</p>
          <a href="`+rest.short_url+`" target="_blank">Continue Reading</a>
          <span>`+rest.item_type+`</span>
          </div>
          </div>
          <div class="col-md-4">
          <img src="`+rest.multimedia[0].url+`" class="card-img" alt="...">
          </div>
          </div>
          </div>
          </div>`
          document.getElementById("container").append(row);
        }

      });

    })
  })
  .catch(function(err){
    console.log(err);
  });

//world

  fetch("https://api.nytimes.com/svc/topstories/v2/home.json?api-key=s6pzBL6UdYvaCyYOxxxAqouA3ePVidib")
  .then(function (response) {
    response.json()
    .then(function(data){
        data.results.forEach((rest) => {
        if(rest.section==="world"){
          let row = document.createElement('div');
          parent.appendChild(row);
          row.className = 'row';
          row.innerHTML=`<div id="intro3" class="collapse">
          <div class="card mb-3 col-8 col-md-8 col-sm-8 col-lg-8 offset-lg-3 offset-sm-3 offset-md-3 shadow-none p-3 mb-5 bg-light rounded"  style="max-width: 540px;">
          <div class="row no-gutters">
          <div class="col-md-8">
          <div class="card-body">
          <h4 style="color:blue;font-weight:bolder;font-family:Dancing Script">`+rest.section.toUpperCase()+`</h4>
          <h5 class="card-title">`+rest.title+`</h5>
          <p style="color:grey;opacity:0.7;">`+rest.created_date+`</p>
          <h3>`+rest.byline+`</h3>
          <p class="card-text"><span><h4> Abstarct  </h4></span>`+rest.abstract+`</p>
          <a href="`+rest.short_url+`" target="_blank">Continue Reading</a>
          <span>`+rest.item_type+`</span>
          </div>
          </div>
          <div class="col-md-4">
          <img src="`+rest.multimedia[0].url+`" class="card-img" alt="...">
          </div>
          </div>
          </div>`
          document.getElementById("container").append(row);
        }

      });

    })
  })
  .catch(function(err){
    console.log(err);
  });


//health


  fetch("https://api.nytimes.com/svc/topstories/v2/home.json?api-key=s6pzBL6UdYvaCyYOxxxAqouA3ePVidib")
  .then(function (response) {
    response.json()
    .then(function(data){

      data.results.forEach((rest) => {
        if(rest.section==="health"){
          let row = document.createElement('div');
          parent.appendChild(row);
          row.className = 'row';
          row.innerHTML=`<div id="intro5" class="collapse">
          <div class="card mb-3 col-8 col-md-8 col-sm-8 col-lg-8 offset-lg-3 offset-sm-3 offset-md-3 shadow-none p-3 mb-5 bg-light rounded"  style="max-width: 540px;">
          <div class="row no-gutters">
          <div class="col-md-8">
          <div class="card-body">
          <h4 style="color:blue;font-weight:bolder;font-family:Dancing Script">`+rest.section.toUpperCase()+`</h4>
          <h5 class="card-title">`+rest.title+`</h5>
          <p style="color:grey;opacity:0.7;">`+rest.created_date+`</p>
          <h3>`+rest.byline+`</h3>
          <p class="card-text"><span><h4> Abstarct  </h4></span>`+rest.abstract+`</p>
          <a href="`+rest.short_url+`" target="_blank">Continue Reading</a>
          <span>`+rest.item_type+`</span>
          </div>
          </div>
          <div class="col-md-4">
          <img src="`+rest.multimedia[0].url+`" class="card-img" alt="...">
          </div>
          </div>
          </div>
          </div>`
          document.getElementById("container").append(row);
        }

      });

    })
  })
  .catch(function(err){
    console.log(err);
  });
//Nyregion
  fetch("https://api.nytimes.com/svc/topstories/v2/home.json?api-key=s6pzBL6UdYvaCyYOxxxAqouA3ePVidib")
    .then(function (response) {
    	response.json()
    	.then(function(data){

           	data.results.forEach((rest) => {
            if(rest.section==="nyregion"){
            let row = document.createElement('div');

          parent.appendChild(row);
          row.className = 'row';
          row.innerHTML=`<div id="intro4" class="collapse">
          <div class="card mb-3 col-8 col-md-8 col-sm-8 col-lg-8 offset-lg-3 offset-sm-3 offset-md-3 shadow-none p-3 mb-5 bg-light rounded"  style="max-width: 540px;">
            <div class="row no-gutters">
                <div class="col-md-8">
                <div class="card-body">
                <h4 style="color:blue;font-weight:bolder;font-family:Dancing Script">`+rest.section.toUpperCase()+`</h4>
                  <h5 class="card-title">`+rest.title+`</h5>
                  <p style="color:grey;opacity:0.7;">`+rest.created_date+`</p>
                  <h3>`+rest.byline+`</h3>
                  <p class="card-text"><span><h4> Abstarct  </h4></span>`+rest.abstract+`</p>
                  <a href="`+rest.short_url+`" target="_blank">Continue Reading</a>
                <span>`+rest.item_type+`</span>
                </div>
              </div>
              <div class="col-md-4">
                <img src="`+rest.multimedia[0].url+`" class="card-img" alt="...">
                </div>
            </div>
            </div>
          </div>`
              document.getElementById("container").append(row);
            }
              });

            })
          })
  .catch(function(err){
    console.log(err);
  });
//Opinion

fetch("https://api.nytimes.com/svc/topstories/v2/home.json?api-key=s6pzBL6UdYvaCyYOxxxAqouA3ePVidib")
  .then(function (response) {
    response.json()
    .then(function(data){

          data.results.forEach((rest) => {
          if(rest.section==="opinion"){
          let row = document.createElement('div');

        parent.appendChild(row);
        row.className = 'row';
        row.innerHTML=`<div id="intro6" class="collapse">
        <div class="card mb-3 col-8 col-md-8 col-sm-8 col-lg-8 offset-lg-3 offset-sm-3 offset-md-3 shadow-none p-3 mb-5 bg-light rounded"  style="max-width: 540px;">
          <div class="row no-gutters">
              <div class="col-md-8">
              <div class="card-body">
              <h4 style="color:blue;font-weight:bolder;font-family:Dancing Script">`+rest.section.toUpperCase()+`</h4>
                <h5 class="card-title">`+rest.title+`</h5>
                <p style="color:grey;opacity:0.7;">`+rest.created_date+`</p>
                <h3>`+rest.byline+`</h3>
                <p class="card-text"><span><h4> Abstarct  </h4></span>`+rest.abstract+`</p>
                <a href="`+rest.short_url+`" target="_blank">Continue Reading</a>
              <span>`+rest.item_type+`</span>
              </div>
            </div>
            <div class="col-md-4">
              <img src="`+rest.multimedia[0].url+`" class="card-img" alt="...">
              </div>
          </div>
          </div>
        </div>`
            document.getElementById("container").append(row);
          }
            });

          })
        })
.catch(function(err){
  console.log(err);
});

//Briefing

fetch("https://api.nytimes.com/svc/topstories/v2/home.json?api-key=s6pzBL6UdYvaCyYOxxxAqouA3ePVidib")
  .then(function (response) {
  	response.json()
  	.then(function(data){

         	data.results.forEach((rest) => {
          if(rest.section==="briefing"){
          let row = document.createElement('div');

        parent.appendChild(row);
        row.className = 'row';
        row.innerHTML=`<div id="intro7" class="collapse">
        <div class="card mb-3 col-8 col-md-8 col-sm-8 col-lg-8 offset-lg-3 offset-sm-3 offset-md-3 shadow-none p-3 mb-5 bg-light rounded"  style="max-width: 540px;">
          <div class="row no-gutters">
              <div class="col-md-8">
              <div class="card-body">
              <h4 style="color:blue;font-weight:bolder;font-family:Dancing Script">`+rest.section.toUpperCase()+`</h4>
                <h5 class="card-title">`+rest.title+`</h5>
                <p style="color:grey;opacity:0.7;">`+rest.created_date+`</p>
                <h3>`+rest.byline+`</h3>
                <p class="card-text"><span><h4> Abstarct  </h4></span>`+rest.abstract+`</p>
                <a href="`+rest.short_url+`" target="_blank">Continue Reading</a>
              <span>`+rest.item_type+`</span>
              </div>
            </div>
            <div class="col-md-4">
              <img src="`+rest.multimedia[0].url+`" class="card-img" alt="...">
              </div>
          </div>
          </div>
        </div>`
            document.getElementById("container").append(row);
          }
            });

          })
        })
.catch(function(err){
  console.log(err);
});

//Climate
fetch("https://api.nytimes.com/svc/topstories/v2/home.json?api-key=s6pzBL6UdYvaCyYOxxxAqouA3ePVidib")
  .then(function (response) {
  	response.json()
  	.then(function(data){

         	data.results.forEach((rest) => {
          if(rest.section==="climate"){
          let row = document.createElement('div');

        parent.appendChild(row);
        row.className = 'row';
        row.innerHTML=`<div id="intro8" class="collapse">
        <div class="card mb-3 col-8 col-md-8 col-sm-8 col-lg-8 offset-lg-3 offset-sm-3 offset-md-3 shadow-none p-3 mb-5 bg-light rounded"  style="max-width: 540px;">
          <div class="row no-gutters">
              <div class="col-md-8">
              <div class="card-body">
              <h4 style="color:blue;font-weight:bolder;font-family:Dancing Script">`+rest.section.toUpperCase()+`</h4>
                <h5 class="card-title">`+rest.title+`</h5>
                <p style="color:grey;opacity:0.7;">`+rest.created_date+`</p>
                <h3>`+rest.byline+`</h3>
                <p class="card-text"><span><h4> Abstarct  </h4></span>`+rest.abstract+`</p>
                <a href="`+rest.short_url+`" target="_blank">Continue Reading</a>
              <span>`+rest.item_type+`</span>
              </div>
            </div>
            <div class="col-md-4">
              <img src="`+rest.multimedia[0].url+`" class="card-img" alt="...">
              </div>
          </div>
          </div>
        </div>`
            document.getElementById("container").append(row);
          }
            });

          })
        })
.catch(function(err){
  console.log(err);
});
