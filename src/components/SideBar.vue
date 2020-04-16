<template>
    <div class="col-4">
        <div class="column-info">
            <h2>Proceso de Intercambio</h2>
            <h3>Buscar libro</h3>
            <ul>
                <li>Si buscas un libro aqui se mostraran todos aquellos que esten disponibles, puedes utilizar los filtros para buscar mas facil.</li>
                <li>En lo que encuentres el libro deseado haz click en el logo de whatsapp para enviar un mensaje al dueño del libro.</li>
            </ul>
            <h3>Subir libro</h3>
            <ul>
                <li>Para subir un libro no existente, haz click en el boton 'Subir Libro' y encargate de llenar todos los datos requeridos.</li>
                <li>Para agregarlo a tu catalogo, haz click en el boton 'Vender Libro' y encargate de llenar todos los datos requeridos.</li>
            </ul>
            <b-button v-b-modal.modal-1 :disabled='isDisabled'>Subir Libro</b-button>

            <b-modal id="modal-1" title="Subir Libro" hide-footer>
                <b-form>
                    <label>Titulo:</label><br>
                    <b-form-input type="text" v-model="Titulo"></b-form-input>
                    <label>Area:</label><br>
                    <b-form-input type="text" v-model="Area"></b-form-input>
                    <label>ISBN:</label><br>
                    <b-form-input type="text" v-model="ISBN"></b-form-input>
                </b-form>  
                <p style="color: red; padding-top: 5px;"> {{error}}</p>
                <b-button class="mt-3" block @click="uploadLibro">Upload</b-button>

            </b-modal>            
            <b-button v-b-modal.modal-2 :disabled='isDisabled'>Vender Libro</b-button>

            <b-modal id="modal-2" title="Vender Libro" hide-footer>
                <b-form>
                    <label>ISBN:</label><br>
                    <b-form-input type="text" v-model="ISBN"></b-form-input>
                    <label>Price:</label><br>
                    <b-form-input type="text" v-model="Price"></b-form-input>
                    <label>Location:</label><br>
                    <b-form-input type="text" v-model="Location"></b-form-input>
                </b-form>  
                <p style="color: red; padding-top: 5px;"> {{error}}</p>
                <b-button class="mt-3" block @click="saleLibro">Upload</b-button>
            </b-modal>    
        </div>
    </div>

</template>

<script>
const axios = require("axios");


export default {
    name: 'SideBar',
    data(){
        return {
                Titulo: '',
                Area: '',
                ISBN: '',
                Price: '',
                Location: '',
                error: '',
        };
    },
    props: {
        user: String,
        isLogged: Boolean,
    },
    methods: {
        uploadLibro: function (){
            if (this.Titulo == "" || this.Area == "" || this.ISBN == ""){
                this.error = "Hacen falta datos";
            }
            else{
                axios
                .post("https://wqxmyczq0l.execute-api.us-east-1.amazonaws.com/test/tianguis?Title="+this.Titulo+"&Subject="+this.Area+"&ISBN="+this.ISBN)
                .then(response => (console.log(response.data)));  
                this.Titulo = "";
                this.Area = "";
                this.ISBN = "";   
                this.$bvModal.hide('modal-1');
            }

        },
        saleLibro: function(){
            if (this.Price == "" || this.Location == "" || this.ISBN == ""){
                this.error = "Hacen falta datos";
            }
            else{
                axios
                .put("https://cors-anywhere.herokuapp.com/https://wqxmyczq0l.execute-api.us-east-1.amazonaws.com/test/tianguis?Username="+this.user+"&ISBN="+this.ISBN+"&Price="+this.Price+"&Location="+this.Location)
                .then(response => (console.log(response.data)));  
                // console.log("https://wqxmyczq0l.execute-api.us-east-1.amazonaws.com/test/tianguis?Username="+this.user+"&ISBN="+this.ISBN+"&Price="+this.Price+"&Location="+this.Location);
                this.ISBN = "";
                this.Price = "";   
                this.Location = "";   

                this.$bvModal.hide('modal-2');
            }
        },
    },
    computed:{
        isDisabled: function(){
            console.log("cambio");
    	    return !this.isLogged;
        }
    },
 
}
</script>

<style>
.column-info {
    margin-top: 40px;
    height: fit-content;
    background-color: #cbe2b0;
    width:80%;
    padding: 15px;
}
</style>