import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { IPersistence } from "./i.persistence.service";

/**
 * @copyright (c) NTTDATA. All rights reserved.
 * @Licensed under the MIT License.
 * @version: 1.0.0
 * @author: NTTData Digital Experience Architects.
 * Esta es la clase encargada de guardar y leer desde la persistencia de la aplicación
 */
@Injectable({
    providedIn: 'root'
})
export class Persistence implements IPersistence {

    /**
    * Guardado de la informacion en la persistencia de la aplicacion
    * @param key llave principal para guardar el valor
    * @param value el valor a guardar en la llave
    */
    save(key: string, value: any): void {
        let valueSave = '';
        if (typeof value !== 'string') {
            valueSave = JSON.stringify(value);
        } else {
            valueSave = value;
        }

        sessionStorage.setItem(encodeURI(key), valueSave);
    }
    /**
     * Lectura de la informacion en la persistencia de la aplicacion
     * @param key llave principal para consultar un valor
     * @returns Un Observable con el valor obtenido por la key enviada
     */
    get(key: string): Observable<any> {
        return of(
            sessionStorage.getItem(encodeURI(key)) || ''
        );
    }

}