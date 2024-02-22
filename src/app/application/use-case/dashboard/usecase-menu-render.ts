import { Observable } from "rxjs";
import { IUseCase } from "../../models/i.usecase";
import { environment } from "../../../../environments/environment";
import { HttpClient, HttpResponse } from "@angular/common/http";
/**
 * @copyright (c) NTTDATA. All rights reserved.
 * @Licensed under the MIT License.
 * @version: 1.0.0
 * @author: NTTData Digital Experience Architects.
 * Esta clase se encarga de consultar el menu desde el json de configuracion y retornar el arreglo de items a visualizar
 */
export class UseCaseMenuRender implements IUseCase {
    /** Variable encargada de localizar el json de los items del menu */
    private VIEW = environment.host.serverservice.concat(environment.paths.cards);
    /**
     * constructor de la clase
     * @param repo inyeccion de la libreria de consulta de servicios web
     * @param local inyeccion de libreria de persistencia local
     * @param env inyeccion de objeto de variables de entorno
     * @returns observable que retorna el valor obtenido en un string
     */
    constructor(public http: HttpClient) {
    }
    /**
     * Operacion del caso de Uso de renderizado de menu
     * @param params arreglo de parametros para el caso de uso
     * @returns observable que retorna el listado de items del menu
     */
    getOperation(...params: any): Observable<any> {
        return this.http.get<HttpResponse<any>>(this.VIEW);
    }

}