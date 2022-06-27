app.component("review-form",{
    data(){
        return{
            name: '',
            review: '',
            rating:null,
            recommand:null
        }
    },
    template:
    /*html*/
    `
    
        <form class="review-form" @submit.prevent="onSubmit">
            <h3>laisser un commentaire</h3>
            <label for="name">Name:</label>
            <input type="text" id="name" v-model="name">

            <label for="review">Commentaire:</label>
            <textarea id="review" v-model="review"></textarea>

            <label for="rating">Evaluation</label>
            <select id="rating" v-model.number="rating">
                <option>5</option>
                <option>4</option>
                <option>3</option>
                <option>2</option>
                <option>1</option>
            </select>

            <label for="recommand">Recommanderiez-vous ce produit?</label>
            <select id="recommand" v-model.number="recommand">
            <option>Yes</option>
            <option>No</option>
            </select>

            <input type="submit" class="button" value="Envoyer">
        </form>
    `,
    methods: {
        onSubmit(){
            if (this.name==='' || this.review==='' || this.rating=== null || this.recommand=== null ){
                alert('Commentaire incomplet. SVP remplissez les champs.');
                return;
            }
            let productReview = {
                name: this.name,
                review: this.review,
                rating: this.rating,
                recommand: this.recommand
            }
            this.$emit('review-submitted',productReview);
            
            this.name='';
            this.review='';
            this.rating=null;
            this.recommand=null;
        }
    }

})