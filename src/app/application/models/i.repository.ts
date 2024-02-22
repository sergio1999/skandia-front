import { Observable } from "rxjs";
/**
 * @copyright (c) NTTDATA. All rights reserved.
 * @Licensed under the MIT License.
 * @version: 1.0.0
 * @author: NTTData Digital Experience Architects.
 * Esta interfaz se encarga de exponer los metodos para la consulta de servicios desde de la aplicacion
 */
export interface IRepository {

    /**
     * Metodo que se encargará de las implementaciones de tipo get
     * @param params arreglo de datos que se puede enviar a los servicios para su correcto funcionamiento
     * @returns Observable o Promise que retorna el valor obtenido del consumo de servicios
     */ 
    get( ...params:any) : Observable<any> | Promise <any> | any ;
    /**
     * Metodo que se encargará de las implementaciones de tipo post
     * @param params arreglo de datos que se puede enviar a los servicios para su correcto funcionamiento
     * @returns Observable o Promise que retorna el valor obtenido del consumo de servicios
     */ 
    post( ...params:any) : Observable<any> | Promise <any> | any ;
    /**
     * Metodo que se encargará de las implementaciones de tipo put
     * @param params arreglo de datos que se puede enviar a los servicios para su correcto funcionamiento
     * @returns Observable o Promise que retorna el valor obtenido del consumo de servicios
     */ 
    put( ...params:any) : Observable<any> | Promise <any> | any ;
    /**
     * Metodo que se encargará de las implementaciones de tipo patch
     * @param params arreglo de datos que se puede enviar a los servicios para su correcto funcionamiento
     * @returns Observable o Promise que retorna el valor obtenido del consumo de servicios
     */ 
    patch( ...params:any) : Observable<any> | Promise <any> | any ;
    /**
     * Metodo que se encargará de las implementaciones de tipo delete
     * @param params arreglo de datos que se puede enviar a los servicios para su correcto funcionamiento
     * @returns Observable o Promise que retorna el valor obtenido del consumo de servicios
     */ 
    delete( ...params:any) : Observable<any> | Promise <any> | any ;

}