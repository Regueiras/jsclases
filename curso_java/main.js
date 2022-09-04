window.onload = () => {
    let button = document.querySelector("#btn");
  
    // Función para calcular el IMC
    button.addEventListener("click", calculateBMI);
};
  
function calculateBMI() {
  
    /* Obtener información del usuario sobre la variable de altura. */
    let height = parseInt(document
            .querySelector("#height").value);
  
    /* Obtener entrada del usuario en la variable de peso.*/
    let weight = parseInt(document
            .querySelector("#weight").value);
  
    let result = document.querySelector("#result");
  
    //Comprobando que el usuario proporcione un valor adecuado o no
    if (height === "" || isNaN(height)) 
        result.innerHTML = "Provide a valid Height!";
  
    else if (weight === "" || isNaN(weight)) 
        result.innerHTML = "Provide a valid Weight!";
  
    // Si ambas entradas son válidas, calcule el bmi
    else {
  
        // Fijación de hasta 2 decimales
        let bmi = (weight / ((height * height) 
                            / 10000)).toFixed(2);
  
        // Dividiendo según las condiciones de IMC
        if (bmi < 18.6) result.innerHTML =
            `Abaixo do peso : <span>${bmi}</span>`;
  
        else if (bmi >= 18.6 && bmi < 24.9) 
            result.innerHTML = 
                `Normal : <span>${bmi}</span>`;
  
        else result.innerHTML =
            `Acima do peso : <span>${bmi}</span>`;
    }
}


