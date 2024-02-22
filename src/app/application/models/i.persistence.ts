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
     * Setea un valor en la persistencia de la aplicacion bajo una key de acceso
     * @param key con la cual se guardará el valor en la persistencia
     * @param value valor a guardar en la persistencia de la aplicacion
     */
    save( key: string , value: any) : void ;
    /**
     * Obtiene un valor guardado en la persistencia de la aplicación
     * @param key con la cual se buscará el valor en la persistencia
     * @returns observable que retorna el valor obtenido en un string
     */
    get( key: string) : Observable<string> ;

}