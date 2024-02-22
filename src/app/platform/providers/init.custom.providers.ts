import { HttpClient } from "@angular/common/http";
import { NgModule, Provider } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { HttpService } from "../http/http.service";
import { Persistence } from "../persistence/persistence.service";

/**
 * Inyeccion de dependencias a los casos de uso
 */
const getProviders = () => {
    let arrayProviders: Provider[] = [];
    arrayProviders.push({
        provide: HttpService,
        useClass: HttpService,
        deps: [HttpClient , DomSanitizer]
    });
    arrayProviders.push({
        provide: Persistence,
        useClass: Persistence
    });
    return arrayProviders;
};

/**
 * @copyright (c) NTTDATA. All rights reserved.
 * @Licensed under the MIT License.
 * @version: 1.0.0
 * @author: NTTData Digital Experience Architects.
 * Esta clase se encarga de instanciar todos los casos de uso como providers de la aplicación
 */
@NgModule({
    providers : getProviders(),
})
export class InitCustomProviderModule { }