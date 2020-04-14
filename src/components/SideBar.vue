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
            <b-button v-b-modal.modal-1>Subir Libro</b-button>

            <b-modal id="modal-1" title="Subir Libro" hide-footer>
                <form>
                    <label>Titulo:</label><br>
                    <input type="text" v-model="Titulo"><br>
                    <label>Area:</label><br>
                    <input type="text" v-model="Area"><br>
                    <label>ISBN:</label><br>
                    <input type="text" v-model="ISBN"><br>
                </form>  
                <p style="color: red; padding-top: 5px;"> {{error}}</p>
                <b-button class="mt-3" block @click="uploadLibro">Upload</b-button>

            </b-modal>            
            <b-button v-b-modal.modal-2>Vender Libro</b-button>

            <b-modal id="modal-2" title="Vender Libro" hide-footer>
                <form>
                    <label>Test name:</label><br>
                    <input type="text"><br>

                </form>  
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
                error: '',
        };
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

        },
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