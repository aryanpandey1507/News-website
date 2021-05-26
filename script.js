console.log("news website")
// this is the api key-- pub_30772bb1c2d38cf28a13df3c7d441b8d1be      0f78a6d7a7468aad61f3f3650cd9bbe9
// news container is grabbed
let Bnews=document.getElementById("Bnews");
const apikey= 'b2582f1b30ca43b687273ff4516a9abe';
// get request from the server

// creating an AJAX get request
const xhr= new XMLHttpRequest();

xhr.open( 'GET',`https://gnews.io/api/v4/search?q=example&token=0f78a6d7a7468aad61f3f3650cd9bbe9&lang=en`,true)

xhr.onload=function()
{
     if(this.status===200)
     {
        let obj=JSON.parse(this.responseText);
        console.log(obj);
        let articles=obj.articles;
        let newshtml="";
        articles.forEach(function(element,index){
            let news=`
                       <div class="accordion-item">
                       <h2 class="accordion-header" id="heading${index}">
                       <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}"
                        aria-expanded="true" aria-controls="collapse${index}">
                        ${element.title}
                        </button>
                        </h2>

                        <div id="collapse${index}" class="accordion-collapse collapse " aria-labelledby="heading${index}"
                         data-bs-parent="#accordionExample">
                         <div class="accordion-body">${element.description}
                         <a href="${element.url}" target="_blank">Read more</a>
                         <p><b>Published at-${element.publishedAt}</b></p></div>
                     </div>
                     </div>`;
            newshtml+=news;
        });
        Bnews.innerHTML=newshtml;
     }
     else
     {
        console.log("Some error occured")
     }
}
xhr.send();
