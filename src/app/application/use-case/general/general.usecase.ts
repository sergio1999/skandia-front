import { IPersistence } from "../../models/i.persistence";
import { IRepository } from "../../models/i.repository";
import { IUseCase } from "../../models/i.usecase";

/**
 * @copyright (c) NTTDATA. All rights reserved.
 * @Licensed under the MIT License.
 * @version: 1.0.0
 * @author: NTTData Digital Experience Architects.
 * Esta es la clase padre que se utilizará para poder hacer uso de las dependencias de tipo repository
 * Todas las clases deben extender de esta clase para su correcto funcionamiento
 * Solo debe existir una unica implementacion por clase la cual debe funcionar aplicando el principio SOLID de Single Responsability
 */
export abstract  class GeneralUseCase implements IUseCase {
    
    /** Repositorio de servicios web */
    public repositoryWeb: IRepository;
    /** Repositorio de persistencia de datos */
    public repositoryLocal: IPersistence;

     /**
     * constructor de la clase
     * @param repository inyeccion de la libreria de consulta de servicios web
     * @param persistence inyeccion de libreria de persistencia local
     * @param environment inyeccion de objeto de variables de entorno
     * @returns observable que retorna el valor obtenido en un string
     */
    constructor( private repository: IRepository , persistence: IPersistence , public environment: any){
        this.repositoryWeb = repository;
        this.repositoryLocal = persistence;
    }
    /**
     * Operacion del caso de Uso a implementar de forma obligatoria cuando se hereda de la clase
     * @param params arreglo de parametros para el caso de uso
     * @returns observable que retorna el listado de items del menu
     */
    abstract getOperation(...params: any) :Promise<any> | any;

}