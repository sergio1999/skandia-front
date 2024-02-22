/**
 * @copyright (c) NTTDATA. All rights reserved.
 * @Licensed under the MIT License.
 * @version: 1.0.0
 * @author: NTTData Digital Experience Architects.
 * Esta interfaz se encarga de la obligatoriedad de metodos en los casos de uso a implementar en la app
 */
export interface IUseCase {

    /**
     * Obtiene el resultado de la operacion de los casos de uso a implementar en la aplicacion
     * @param params arreglo de datos que se puede enviar a los casos de uso para su correcto funcionamiento
     * @returns Promise que retorna el valor obtenido del caso de uso
     */
    getOperation(...params:any): Promise<any> | any ;

}