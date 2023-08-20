"use strict"

const restDB = firebase.firestore();

/* OBJETOS GENERALES */

const form = document.querySelector("#reserva");

const collectionName = "reservaciones";

/* METODOS DEL CRUD FIREBASE */

const onInsert = newReserva => restDB.collection(collectionName).doc().set(newReserva);

const onUpdate = (paramId, newReserva) => restDB.collection(collectionName).doc(paramId).update(newReserva);

const onDelete = paramId => restDB.collection(collectionName).doc(paramId).delete();

const finalAll = () => restDB.collection(collectionName).get();

const findById = paramId => restDB.collection(collectionName).doc(paramId).get();

const onFindAll = callback => restDB.collection(collectionName).onSnapshot(callback);

/* CONFIGURACION SUBMIT */
form.addEventListener("submit", async ev =>{
    ev.preventDefault();
    
    //CARGAR VARIABLES CON FORM
    //let numero_mesa = form.nombreTXT.value;
    let nombre_reserva = form.nombre.value;
    let fecha = form.fecha.value;
    let hora = form.hora.value;
    let cantidad_personas = form.cantidad.value;
    let nota = form.nota.value;
    let correo = form.correo.value;

    try{
        await onInsert(
            {   //numero_mesa,
                nombre_reserva,
                correo,
                fecha,
                hora,
                cantidad_personas,
                nota
            });    
        alert("Comida almacenada correctamente!");
        limpiar();        
 
    }catch (error){
        alert("Error!. Detalle: " + error);
    }
});



