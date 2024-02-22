import { Observable } from "rxjs";

/**
 * @copyright (c) NTTDATA. All rights reserved.
 * @Licensed under the MIT License.
 * @version: 1.0.0
 * @author: NTTData Digital Experience Architects.
 * Esta interfaz se encarga de exponer los metodos para la persistencia de la aplicacion
 */
export interface IPersistence {

    /**
     * Guardado de la informacion en la persistencia de la aplicacion
     * @param key llave principal para guardar el valor
     * @param value el valor a guardar en la llave
     */
    save(key: string, value: any): void;
    /**
     * Lectura de la informacion en la persistencia de la aplicacion
     * @param key llave principal para consultar un valor
     * @returns Un Observable con el valor obtenido por la key enviada
     */
    get(key: string): Observable<any> | Promise<any> | any;

}