import { Observable } from "rxjs";

/**
 * @copyright (c) NTTDATA. All rights reserved.
 * @Licensed under the MIT License.
 * @version: 1.0.0
 * @author: NTTData Digital Experience Architects.
 * Esta interfaz se encarga de exponer los metodos para la conexion http
 */
export interface IHttpClient {
    /**
     * Consulta de servicio por metodo GET
     * @param params objeto que contiene en los index 0:url 1: opciones
     * @returns Observable con la respuesta del servicio
     */
    get( ...params:any) : Observable<any> | Promise <any> | any ;
    /**
     * Consulta de servicio por metodo POST
     * @param params objeto que contiene en los index 0:url 1:cuerpo de la peticion 2: opciones
     * @returns Observable con la respuesta del servicio
     */
    post( ...params:any) : Observable<any> | Promise <any> | any ;
    /**
     * Consulta de servicio por metodo PUT
     * @param params objeto que contiene en los index 0:url 1:cuerpo de la peticion 2: opciones
     * @returns Observable con la respuesta del servicio
     */
    put( ...params:any) : Observable<any> | Promise <any> | any ;
    /**
     * Consulta de servicio por metodo PATCH
     * @param params objeto que contiene en los index 0:url 1:cuerpo de la peticion 2: opciones
     * @returns Observable con la respuesta del servicio
     */
    patch( ...params:any) : Observable<any> | Promise <any> | any ;
    /**
     * Consulta de servicio por metodo DELETE
     * @param params objeto que contiene en los index 0:url 1: opciones
     * @returns Observable con la respuesta del servicio
     */
    delete( ...params:any) : Observable<any> | Promise <any> | any ;

}