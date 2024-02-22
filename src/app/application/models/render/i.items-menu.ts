/**
 * @copyright (c) NTTDATA. All rights reserved.
 * @Licensed under the MIT License.
 * @version: 1.0.0
 * @author: NTTData Digital Experience Architects.
 * Esta interfaz define los parametros que debe tener un item para renderizar en el menu
 */
export interface IItemMenu{
    /** Icono para el menú */
    icon : string;
    /** Label o nombre que mostrará el menú */
    labelMenu : string;
    /** Ruta de la pagina a la cual se invocará luego de clickear en el menu */
    page : string;
}