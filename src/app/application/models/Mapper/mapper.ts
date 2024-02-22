/**
 * @copyright (c) NTTDATA. All rights reserved.
 * @Licensed under the MIT License.
 * @version: 1.0.0
 * @author: NTTData Digital Experience Architects.
 * Esta clase abstracta funciona como interfaz de las clases que la extiendan
 */
export abstract class Mapper<I, O> {
    /**
     * Funcion para mapear un objeto Input en un objeto output
     * @param param cadena string
     * @returns objeto de entrada
     */
    abstract mapFrom(param: I): O
    /**
     * Funcion para mapear un objeto output en un objeto input
     * @param param objeto de entrada
     * @returns cadena de token de autenticacion
     */
    abstract mapTo(param: O): I

}