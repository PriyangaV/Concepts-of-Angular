/*
  @ Angular Directives

    * What are directives?
        $ Directives add behaviour to an exising DOM element or and exisitng component instance

        ``` import { Directive, ElementRef, Input } from '@angular/core'

        @Directive ({
          selctor: 'highLight'
        })
        export class HighLightDirective {
          constructor(el: ElementRef) {
            el.nativeElement.style.color = 'red'
          }
        } ```

        $ This directive extends HTML element behaviour with red color
          > <p highLight>Hello!</p>

    * Various Kinda of Directive?
        > Three kinds of directives ( SAC )

        $ Structural - change the DOM layout

        $ Components - These are directives with a template

        $ Attributes - change the appearance or behaviour of an element, component

    * ngFor directive purpose (Structural)
        $ We use it in the template to display each item in the list

        $ We iterate over list of users using *ngFor
          > <li *ngFor="let user of users">{{user}}</li>

    * ngIf directive purpose (Structural)
        $ Sometimes an app needs to display a view or a portion of a view only under specific circumstances

        $ ngIf inserts or removes an based on a truthy/falsy condition

        > <p *ngIf="user.age === 18"> Eligible for Student Pass</p>

    * Create Directives Using CLI
        $ ng generate directive <name>
        > source file - directivename.directive.ts
        $ test file - .spec.ts
        > declare the direcive class file in root module

  * Attribute Directive
        $ Create HighLight directive class file 'hightlight.directive.ts'

        $ ElementRef import from core and inject in constructor

        $ Apply the attribute directive as an attribute to the host element

        $ Run the app to see the highlight behaviour on paragraph

        > <p highLight>Hello!</p>

*/
