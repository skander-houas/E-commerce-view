app.component("product-display",{
    props:{
      premium:{
          type:Boolean,
          required:true
      }
    },
    template :
    /*html*/
    `
    <div class="product-display">
    <div class="product-container">
      <div class="product-image">
        <img  v-bind:src="image" alt="">
      </div>
      <div class="product-info">
        <h1>{{ title }}</h1>
        <p>{{ sale }}</p>
        <p v-if="inStock">En stock</p>
        <p v-else>En rupture de stock</p>
        <p>Expedition: {{shipping}}</p>
        <p>Prix: {{prix}}</p>
      
        <product-details :details="details"  :tailles="tailles"></product-details>
      <br>
        <div v-for="(variant, index) in variants" 
             :key="variant.id"    
             @mouseover="updateVariant(index)" 
             class="color-circle"
             :style="{ backgroundColor: variant.color }">
             <br>
        </div>
        <br>
        <div class=container-btn>
            <button class="button" 
                    v-on:click="addToCart"
                    :class="{ disabledButton: !inStock }"
                    :disabled="!inStock">
                    Add to Cart
            </button>
        
        
            <button class="button" 
                    v-on:click="removeFromCart"
                    :class="{ disabledButton: !inStock }"
                    :disabled="!inStock">
                    Remove Item
            </button>
        </div >
        </div>
    </div>
    
    <review-list v-if="reviews.length" :reviews="reviews"></review-list>
    <review-form @review-submitted="addReview"></review-form>
    </div>`
,
data () {
    return {
        prix:15,
        brand: "Nike",
        product: 'Chaussettes',
        onSale: true,
        selectedVariant: 0,
        tailles: ['37','38','39','40 ','41','42','43'],
        details: ['50% coton', '30% laine', '20% polyester'],
        variants: [
            { id: 2001, color: "green", image: './assets/images/socks_green.jpg', quantity: 50 },
            { id: 2002, color: "blue" , image: './assets/images/socks_blue.jpg' , quantity: 0 },
            { id: 2003, color: "grey" , image: './assets/images/socks_grey.jpg' , quantity: 10 },
        ],
        reviews:[]
    }
},
methods: {
    addToCart() {
        this.$emit('add-to-cart',this.variants[this.selectedVariant].id);
    },
    removeFromCart() {
        this.$emit('remove-from-cart',this.variants[this.selectedVariant].id);
    },
    updateVariant(index) {
        this.selectedVariant = index;
    },
    addReview(review){
        this.reviews.push(review);
    }
},
computed: {
    title() {
        return this.brand + " " + this.product;
    },
    image() {
        return this.variants[this.selectedVariant].image;
    },
    inStock() {
        return this.variants[this.selectedVariant].quantity
    }, 
    sale() {
       if (this.onSale) {
           return this.brand + " " + this.product + " est en vente";
       } 
       return '';
    },
    shipping() {
       return  this.premium ? "Gratuit" : "8dt"
    }
}
});
