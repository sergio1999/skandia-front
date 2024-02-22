
import { Injectable, SecurityContext } from '@angular/core';
import { IHttpClient } from './i.http.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';

/**
 * @copyright (c) NTTDATA. All rights reserved.
 * @Licensed under the MIT License.
 * @version: 1.0.0
 * @author: NTTData Digital Experience Architects.
 * Esta clase se encarga de consumir los servicios de la aplicación
 */
@Injectable({
  providedIn: 'root'
})
export class HttpService implements IHttpClient {

  /**
   * constructor de la clase
   * @param http inyeccion de la libreria de consulta de servicios web
   * @param sanitizer inyeccion de libreria para validacion de urls
   */
  constructor(private http: HttpClient , private sanitizer: DomSanitizer) { }
  /**
   * Consulta de servicio por metodo GET
   * @param params objeto que contiene en los index 0:url 1: opciones
   * @returns Observable con la respuesta del servicio
   */
  get(...params: any): Observable<any> {
    return this.http.get( this.validateURL(params) , params[1]);
  }
   /**
   * Consulta de servicio por metodo POST
   * @param params objeto que contiene en los index 0:url 1:cuerpo de la peticion 2: opciones
   * @returns Observable con la respuesta del servicio
   */
  post(...params: any): Observable<any> {
    return this.http.post(this.validateURL(params), params[1] , params[2]);
  }
   /**
   * Consulta de servicio por metodo PUT
   * @param params objeto que contiene en los index 0:url 1:cuerpo de la peticion 2: opciones
   * @returns Observable con la respuesta del servicio
   */
  put(...params: any): Observable<any> {
    return this.http.put(this.validateURL(params) , params[1] , params[2]);
  }
   /**
   * Consulta de servicio por metodo PATCH
   * @param params objeto que contiene en los index 0:url 1:cuerpo de la peticion 2: opciones
   * @returns Observable con la respuesta del servicio
   */
  patch(...params: any): Observable<any> {
    return this.http.patch(this.validateURL(params) , params[1] , params[2]);
  }
  /**
   * Consulta de servicio por metodo DELETE
   * @param params objeto que contiene en los index 0:url 1: opciones
   * @returns Observable con la respuesta del servicio
   */
  delete(...params: any): Observable<any> {
    return this.http.delete(this.validateURL(params) , params[1]);
  }
  /**
   * Validacion de Url para Sanitizar la url
   * @param params objeto que contiene en los index 0:url 1: opciones
   * @returns Observable con la respuesta del servicio
   */
  private validateURL(...params: any): string{
    const url: string = this.sanitizer.sanitize(SecurityContext.URL, params[0]) || '';
    console.log('Call endpoint ' , url);
    if (url.indexOf('unsafe') > -1) {
      throw new Error('URL NOT VALID.');
    }
    return url;
  }
}
