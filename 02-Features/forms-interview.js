/*
  @ What are forms? Why they're used?
    $ It's common way to send some data, getting some data from the user, get the user information like, username, password

    $ Handling user input with forms is the cornerstone of many common applications

    $ Applications use forms to enable users to log in, to update a profile, to enter sensitive information, and to perform many other data-entry tasks

    * Different Types of forms
        > Reactive Forms
            ? More scable, reusable, and testable

              $ In Reactive Forms each form element in the view is directly linked to a form model (FormControl instance)

              $ Updates from the view to the model

              $ From the model to the view are synchronous and aren't dependent on the UI rendered

            $ What are modules needed?
                @ Input Event -------> Form Control Instance

                @ ReactiveFormsModule

                $ formControlName="password"

        > Template-Driven Forms
            @ We don't create the formModel ourselves, We rely on angular to create the ngForm which will internally create formGroup

            ? Simple form to an app, such as an email list signup form

            $ In Template-Driven Forms, each form element is linked to a directive that manages the form model internally

            @ Asynchronous

            $ FormsModule
              > <form (ngSubmit)="onSubmit(f)" #f="ngForm">
                  ? Template Reference - #f
                <input name="name" ngModel #name="ngModel" />
                  $ ngModel is responsible for creating the form control

            @ Input Event ---NgModel----> Form Control Instance

        > ngForm
          $ It's directive

          $ Creates a top-level FormGroup instance and binds it to a form to tract aggregate from value and validation status

          * it's created for all forms and we have imported FormsModule

          ? It's also possible to create form without ngForm
            > mentioning 'ngNoForm'
              - Mostly in reactive Forms we don't need it

        > ngModel
            $ NgModel directive creates the formcontrol instance to manage the template form control

        > name attribute
            $ It tells the ngModel directive what key to store that FormControl under in the parent FormGroup

        > Template Reference Variable
            $ It's a way of capturing a reference to a specific element, component or directive so that it can be used somewhere else in the same template



    @ Reactive (vs) Template Forms
        $ Template
            * Asynschronous
            * Less Control
            * Two way data binding using [(ngModel)] syntax
            * Suitable for simple scenarios and fails for complex scenarios
            * Easy to use
            * Not scalable
            * Not easily Testable
            * Small

        $ Reactive
            * Synchronous
            * More Control
            * No data binding is done (immutable data model preferred by most developers)
            * Handles any complex scenarios
            * More flexible, but needs practice
            * Scalable
            * Easily Testable
            * Complex and Large

*/
