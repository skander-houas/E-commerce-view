app.component("product-details",{
    props:{
        details:{
            
            required:true   
        },
        tailles:{
            required:true
        } 
        
     }
   ,

   template :
       /*html*/
       `
      
       <ul >
                 <li  v-for="detail in details">{{ detail }}</li>
       </ul>
       <p > Taille :</p>
       <div  class="container" > 
        <li class="container" v-for="taille  in tailles">{{taille}}</li>

        </div>
       `
});



