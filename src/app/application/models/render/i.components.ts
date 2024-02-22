/**
 * @copyright (c) NTTDATA. All rights reserved.
 * @Licensed under the MIT License.
 * @version: 1.0.0
 * @author: NTTData Digital Experience Architects.
 * Esta interfaz define los parametros de un Componente visual
 */
export interface IComponent {
    /** Elemento que se quiere renderizar itemMenu | input | button | calendar */
    element : string;
    /** Id del elemento con el cual se podra acceder a su valor */
    id : string;
    /** Label que mostrará el componente */
    label?: string;
    /** Placeholder que mostrará el componente */
    placeholder?: string;
    /** tipo que mostrará el componente */
    type?: string;
    /** clase que mostrará el componente */
    class?: string;
    /** funcion que invocará el componente */
    callback?: string;
    /** Validaciones que realizarán los componentes */
    validator?: string;
}