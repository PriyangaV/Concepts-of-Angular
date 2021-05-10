/*
  @ Angular Forms
    * Vital to business applications
    $ Create an experience that guides the user efficiently and effectively through the workflow
      ? As a Developer
        * Data Binding
        * Change Tracking
        * Validation
        * Visual Feedback
        * Error Messages
        * Form Submission

      ? Prerequisites
        $ HTML
        $ CSS
        $ Javascript
        $ Angular - Templates, Components, Data Binding and Services

      ? Angular Forms
        $ Template (Collect data)
        $ Class (Bind data)
        $ Service (Send data)
        $ Server

        # Two Approaches
          * Template Driven Forms
            ^ Heavy on the component template

          * Reactive Forms
            ^ Heave on the component class

        @ Template-Driven Forms (TDF)
          $ Easy to use and similar to Angular JS forms
          $ Two way data binding with ngModel (directive)
          $ Bulky HTML and minimal Component code
          $ Automatically tracks the form and form elements state and validity
          * Unit testing is a challenge - E2E test with browser
          * Readability decreases with complex forms and validations
          ? Suitable for simple scenarios

            = Add the form HTML
            = Binding Data
            = Tracking state and validity
            = Providing visual feedback
            = Displaying error messages
            = Posting data to a server

            $ #formName="ngForm" - {{formName.value | json}}
            $ ngModel
            $ ngModelGroup

            ! Banana in a box - Two-Way binding

          # Track control state and Validity - Only on "onBlur"
            = State
              $ The Control has been visited
                ? Class if true
                  ^ ng-touched
                ? Class if false
                  ^ ng-untouched
            = State
              $ The Control's value has changed
                ? Class if true
                  ^ ng-dirty
                ? Class if false
                  ^ ng-pristine
            = State
              $ The Control's value is valid
                ? Class if true
                  ^ ng-valid
                ? Class if false
                  ^ ng-invalid

            # ngModel Properties
              ? Class               Property
              - ng-untouched        untouched
              - ng-touched          touched
              - ng-pristine         pristine
              - ng-dirty            dirty
              - ng-valid            valid
              - ng-invalid          invalid


          * Form Submit
            $ novalidate - prevent browser form submit

            $ express - web server
            $ body-parser - middleware to handle form data
            $ cors - package to make request across different ports

        @ TDF Summary
          * Create form template
          * Bind data with a model
          * Perfom validation
          * Provide visual feedback
          * Display error messages
          * Post the form data to a server
          * Receive the response
          * Handle any error

          $ FormGroup, FormControl (Reactive form building block)

          ? TDF is behind Model Drive Approach(Reactive Forms)

          # Angular abstracts the complexity for providing us ngModel and ngModelGroup directives, this maps to formControl and formGroup in Reactive Forms

        @ Reactive Forms
          $ Code and the logic resides in the component class

          $ No two way binding, as name suggests we need to react to user input values

          $ Well suited for complex scenarios

          $ Dynamic form fields (phone and then additional phone)

          $ Custom validation (password and confirm password)

          $ Dynamic validation (Subscribe to update, email is optional or mandatory based on subscribe field)

          $ Unit Test (logic is in component)

          # CLI generated project
          ? Add the form HTML / Create form template
          ? Create the form model
          $ Manage the form control values
          $ FormBuilder service
          * Validations - Simple, Custom, Cross-Field and Dynamic
          * Dynamic Form controls
          ! Submitting form data

      # FormGroup & FormControl
        ? Registration Form (Form Group) - [formGroup]="registrationForm" - form
          - Username (Form Control) - formControlName="userName" - input
          - Password (Form Control) - formControlName="password" - input
          - Confirm Password (Form Control) - formControlName="confirmPassword" - input

        ? setValue / patchValue - registrationForm.patchValue({})

        $ FormBuilder Service

        ! SafeNavigation Operator

        # Spam Registration

        * setValidators()
        * clearValidators()
        * updateValueAndValidity()

        $ FormArray - Dynamic FormControls
          * import FormArray
          * Define FormArray in FromGroup, FormBuilder.array([])
          * Create a getter
          * Create a method to push FormControl / FormGroup
          * FormArrayName directive in template div
          * Iterate using *ngFor structural directive
*/
