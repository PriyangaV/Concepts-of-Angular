/*
   @ Data-Binding
    $ Interpolation
    $ Property & Event Binding
      * Html Elements | Native Properties & Events
      * Directives | Custom Properties & Events
      * Components | Custom Properties & Events
*/

/*
  ~ Bindings
    @ Property Binding
      * Attribute vs Property
        ? $0.getAttribute('value')
        ? $0.value

        # Attributes and Properties are not the same
          $ Attributes - Defined by HTML (initial value)
          $ Properties - Defined by DOM [Document Object Model] (current value)

          * Attributes initialize DOM properties and then they are done!

          * Attribute values cannot change once they are initialized!

          $ Property values however can change!

        ! Property binding vs Interpolation
          * Interpolation will work only with "String Value"

          * [attr]="value"

          * bind-attr="value"

    @ Class Binding

    @ Style Binding

    @ Event Binding
      $ Data Binding
        * From Class to Template
      $ Event Binding (mouse events, keyboard events, user clicks)
        * From Template to Class
*/

/*
  @ Template Reference Variables
    $ #value

  @ Directive
    $ Custom HTML attrribute that Angular provides

    ? Structural Directive
      * Add or Remove HTML elements
        $ ngIf
        $ ngSwitch
        $ ngFor

  @ Component Interaction
    * Parent AppComponent
        $ Sends Data to Child(Test) Component
    * Child TestComponent
        $ Sends Data to Parent(App) Component

    # Decorator
      ? @Input() - Parent to Child
      ? @Output() - Child to Parent - EventEmitter

      ^ Hey Angular - From Parent to Child
      ^ Hello Ng-Tutorial - From Child to Parent
*/
