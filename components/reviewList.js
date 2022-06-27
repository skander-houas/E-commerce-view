app.component('review-list', {
    props: {
        reviews:{
            type:Array,
            required: true
        }
    },
    template:
     /*html*/
    `
    <div class="review-container">
    <div class="main-section">
    <div class="hedding-title"><h1>Star Rating System</h1></div>
    <div class="rating-part">
    <div class="average-rating">
    <h2>2.5</h2>
    <i aria-hidden="true" class="fa fa-star"></i>
    <i aria-hidden="true" class="fa fa-star"></i>
    <i class="fa fa-star-half-o" aria-hidden="true"></i>
    <i aria-hidden="true" class="fa fa-star-o"></i>
    <i aria-hidden="true" class="fa fa-star-o"></i>
    <p>Average Rating</p>
    </div>
    <div class="loder-ratimg">
    <div class="progress"></div>
    <div class="progress-2"></div>
    <div class="progress-3"></div>
    <div class="progress-4"></div>
    <div class="progress-5"></div>
    </div>
    <div class="start-part">
    <i aria-hidden="true" class="fa fa-star"></i>
    <i aria-hidden="true" class="fa fa-star"></i>
    <i aria-hidden="true" class="fa fa-star"></i>
    <i aria-hidden="true" class="fa fa-star"></i>
    <i aria-hidden="true" class="fa fa-star"></i>
    <span>80%</span><br>
    <i aria-hidden="true" class="fa fa-star"></i>
    <i aria-hidden="true" class="fa fa-star"></i>
    <i aria-hidden="true" class="fa fa-star"></i>
    <i aria-hidden="true" class="fa fa-star"></i>
    <i aria-hidden="true" class="fa fa-star-o"></i>
    <span>60%</span><br>
    <i aria-hidden="true" class="fa fa-star"></i>
    <i aria-hidden="true" class="fa fa-star"></i>
    <i aria-hidden="true" class="fa fa-star"></i>
    <i aria-hidden="true" class="fa fa-star-o"></i>
    <i aria-hidden="true" class="fa fa-star-o"></i>
    <span>40%</span><br>
    <i aria-hidden="true" class="fa fa-star"></i>
    <i aria-hidden="true" class="fa fa-star"></i>
    <i aria-hidden="true" class="fa fa-star-o"></i>
    <i aria-hidden="true" class="fa fa-star-o"></i>
    <i aria-hidden="true" class="fa fa-star-o"></i>
    <span>20%</span><br>
    <i aria-hidden="true" class="fa fa-star"></i>
    <i aria-hidden="true" class="fa fa-star-o"></i>
    <i aria-hidden="true" class="fa fa-star-o"></i>
    <i aria-hidden="true" class="fa fa-star-o"></i>
    <i aria-hidden="true" class="fa fa-star-o"></i>
    <span>10%</span>
    </div>
    <div style="clear: both;"></div>
    <div class="reviews"><h1>Reviews</h1></div>
   
    <div class="comment">
    <i aria-hidden="true" class="fa fa-star"></i>
    <i aria-hidden="true" class="fa fa-star"></i>
    <i aria-hidden="true" class="fa fa-star-o"></i>
    <i aria-hidden="true" class="fa fa-star-o"></i>
    <i aria-hidden="true" class="fa fa-star-o"></i>
   
    </div>
    <div style="clear: both;"></div>
    </div>
    <div class="comment-part">
    <div class="user-img-part">
 
    <div class="user-text">
    <h4>Maintnant</h4>
    <span>Client(s)</span>
    <ul>
    <li v-for="(review, index) in reviews" :key="index" >
    <p> {{ review.name}}</p>
    <br>
    <br>
    <br>
    </li>
    </ul>
    <br>
    
    </div>
    <div style="clear: both;"></div>
    </div>
    <div class="comment">
    <i aria-hidden="true" class="fa fa-star"></i>
    <i aria-hidden="true" class="fa fa-star-o"></i>
    <i aria-hidden="true" class="fa fa-star-o"></i>
    <i aria-hidden="true" class="fa fa-star-o"></i>
    <i aria-hidden="true" class="fa fa-star-o"></i>
  
    <ul>
    <li style =" list-style:none;" v-for="(review, index) in reviews" :key="index"> 
    <p >{{review.recommand}}</p>
    <p >Evaluation: {{review.rating}}</p>
    <p > {{ review.review}}</p>
    </li>
    </ul>
    </div>
    <div style="clear: both;"></div>
    </div>
    </div>
   
        
    </div>
    `

})