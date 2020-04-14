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
                <li>Para subir un libro, haz click en el boton siguiente y encargate de llenar todos los datos requeridos.</li>
                <li>Para agregarlo a tu catalogo, haz click en el boton siguiente y encargate de llenar todos los datos requeridos.</li>
            </ul>
            <button>Subir Libro</button>
            <button>Vender Libro</button>

        </div>
    </div>

</template>

<script>
export default {
    name: 'SideBar',
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