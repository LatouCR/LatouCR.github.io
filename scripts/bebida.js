"use strict"

const restDB = firebase.firestore();

/* OBJETOS GENERALES */

const form = document.querySelector("#menu");

const collectionName = "bebidas";

/* METODOS DEL CRUD FIREBASE */

const onInsert = newBebida => restDB.collection(collectionName).doc().set(newBebida);

const onUpdate = (paramId, newBebida) => restDB.collection(collectionName).doc(paramId).update(newBebida);

const onDelete = paramId => restDB.collection(collectionName).doc(paramId).delete();

const finalAll = () => restDB.collection(collectionName).get();

const findById = paramId => restDB.collection(collectionName).doc(paramId).get();

const onFindAll = callback => restDB.collection(collectionName).onSnapshot(callback);

/* CONFIGURACION SUBMIT */
form.addEventListener("submit", async ev =>{
    ev.preventDefault();
    
    //CARGAR VARIABLES CON FORM
    let id_bebida = form.txt.value;
    let nombre_bebida = form.txt.value;
    let descripcion_bebida = form.txt.value;
    let precio_bebida = form.txt.value;
    let disponibilidad_bebida = form.txt.value;

    try{

            await onInsert(
                {   id_bebida, 
                    nombre_bebida, 
                    descripcion_bebida,
                    precio_bebida,
                    disponibilidad_bebida
                });
            alert("Comida almacenada correctamente!");
            limpiar();

    }catch (error){
        alert("Error!. Detalle: " + error);
    }
});
