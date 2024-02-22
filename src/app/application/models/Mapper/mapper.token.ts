import { Mapper } from "./mapper";

/**
 * @copyright (c) NTTDATA. All rights reserved.
 * @Licensed under the MIT License.
 * @version: 1.0.0
 * @author: NTTData Digital Experience Architects.
 * Esta clase es la encargada de realizar el retorno mapeado de la información del token
 */
export class TokenMapper extends Mapper<any, string>{
    
  /**
   * Funcion para mapear un string en un objeto particular
   * @param param cadena string
   * @returns objeto de entrada
   */
  mapTo(param: string): any {
    return param;
  }
  /**
   * Funcion que recibe un objeto con la propiedad access_token en la cual se concatena con el string Bearer
   * @param param objeto de entrada
   * @returns cadena de token de autenticacion
   */
  mapFrom(param: any): string {
    return ('Bearer ').concat(param.access_token);
  }

}