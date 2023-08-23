"use strict"

const restDB = firebase.firestore();

/* OBJETOS GENERALES */

const form = document.querySelector("#menu");

const collectionName = "comida";

/* METODOS DEL CRUD FIREBASE */

const onInsert = newComida => restDB.collection(collectionName).doc().set(newComida);

const onUpdate = (paramId, newComida) => restDB.collection(collectionName).doc(paramId).update(newComida);

const onDelete = paramId => restDB.collection(collectionName).doc(paramId).delete();

const finalAll = () => restDB.collection(collectionName).get();

const findById = paramId => restDB.collection(collectionName).doc(paramId).get();

const onFindAll = callback => restDB.collection(collectionName).onSnapshot(callback);

/* CONFIGURACION SUBMIT */
form.addEventListener("submit", async ev =>{
    ev.preventDefault();
    
    //CARGAR VARIABLES CON FORM
    let id_comida = form.txt.value;
    let nombre_comida = form.txt.value;
    let descripcion_comida = form.txt.value;
    let precio_comida = form.txt.value;
    let disponibilidad_comida = form.txt.value;

    try{

            await onInsert(
                {   id_comida, 
                    nombre_comida, 
                    descripcion_comida,
                    precio_comida,
                    disponibilidad_comida
                });
            alert("Comida almacenada correctamente!");
            limpiar();

    }catch (error){
        alert("Error!. Detalle: " + error);
    }
});