import { FormGroup } from "@angular/forms";
import { IAtoms } from "src/app/application/models/i.atoms";
import { IComponent } from "src/app/application/models/render/i.components";
/**
 * @copyright (c) NTTDATA. All rights reserved.
 * @Licensed under the MIT License.
 * @version: 1.0.0
 * @author: NTTData Digital Experience Architects.
 * Esta clase se encarga inyectar variables globales a los atomos que hereden de ella
 * Todos los componentes que hagan parte de formularios deberían heredar de esta clase
 */
export class AtomsParent implements IAtoms {

   /** Datos para set de componente a cada atomo  */
   public component!: IComponent;
   /** Formulario para validaciones en los atomos */
   public formGroup!: FormGroup;
   /** Visibilidad del componente */
   public isVisibleValue: boolean = true;
   /**
    * Funcion que setea los datos del componente
    * @param component valores por defecto para el componente
    */
   setComponent(component: IComponent): void {
      this.component = component;
   }
   /**
   * Funcion que setea el formulario al componente
   * @param formGroup form para validaciones
   */
   setForm(formGroup: FormGroup): void {
      this.formGroup = formGroup;
   }
   /**
    * Funcion que visibiliza o no un componente
    * @param value booleano para visualizar o no el componente
    */
   isVisible(value: boolean): void {
      this.isVisibleValue = value;
   }

}