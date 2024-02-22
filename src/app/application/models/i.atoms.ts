import { FormGroup } from "@angular/forms";
import { IComponent } from "./render/i.components";
/**
 * @copyright (c) NTTDATA. All rights reserved.
 * @Licensed under the MIT License.
 * @version: 1.0.0
 * @author: NTTData Digital Experience Architects.
 * Esta interfaz define de forma generica los atomos(elementos visuales) que contiene la aplicacion
 */
export interface IAtoms {
    /**
     * Setea el atomo a mostrar a nivel visual
     * @param component componente obtenido desde un json
     */
    setComponent( component: IComponent ): void;
    /**
     * Setea el formulario que controlará las validaciones
     * @param form formulario para control de validaciones
     */
    setForm( form: FormGroup ): void;
    /**
     * Funcion para colocar visible o no un componente
     * @param value valor booleano para mostrar o no el componente
     */
    isVisible( value: boolean) : void;
}