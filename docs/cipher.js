const cipher = {
    
    encode: (desplazar, texto) =>{
        let resultado = '';
        const letras = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
        const letras2 = 'abcdefghijklmnñopqrstuvwxyz';
        //Si aceptamos desplazamientos negativos, necesitamos hacerlo dos veces. Si no, sería:
        //desplazamiento = desplazamiento % 26;
        desplazar = (desplazar % 27 + 27) % 27;

        if (texto) {
            for (let i = 0; i < texto.length; ++i) {
                if (letras.indexOf(texto[i]) != -1)//primera condicional mayusculas
                {
                    let posicion = ((letras.indexOf(texto[i]) + desplazar) % 27);
                    resultado += letras[posicion];
                } else if (letras2.indexOf(texto[i]) != -1) { //segunda condicional minusculas
                    let posicion = ((letras2.indexOf(texto[i]) + desplazar) % 27);
                    resultado += letras2[posicion];
                }
                else // si no se cumple ninguna de las condicionales anteriores
                    resultado += texto[i]; // Números, espacios, símbolos... 
            }
        }
        return resultado;
    },

    decode: (desplazar, texto) =>{
        let resultado = '';
        const letras = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
        const letras2 = 'abcdefghijklmnñopqrstuvwxyz';
        //Si aceptamos desplazamientos negativos, necesitamos hacerlo dos veces. Si no, sería:
        //desplazamiento = desplazamiento % 26;
        desplazar = (desplazar % 27 - 27) % 27;

        if (texto) {
            for (let i = 0; i < texto.length; ++i) {
                if (letras.indexOf(texto[i]) != -1)//primera condicional mayusculas
                {
                    let posicion = ((letras.indexOf(texto[i]) - desplazar) % 27);
                    resultado += letras[posicion];
                } else if (letras2.indexOf(texto[i]) != -1) { //segunda condicional minusculas
                    let posicion = ((letras2.indexOf(texto[i]) - desplazar) % 27);
                    resultado += letras2[posicion];
                }
                else // si no se cumple ninguna de las condicionales anteriores
                    resultado += texto[i]; // Números, espacios, símbolos... 
            }
        }
        return resultado;
    }
   
};
export default cipher;