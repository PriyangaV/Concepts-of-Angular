/*
  @ How could one create a single-page application using AngularJS? Which provider is used to achieve this objective

    $ Routing and Multiple Views. AngularJS has a built-in route provider to handle SPA (Single Page Application) based navigation.

    $ To work with routing in AngularJS, you must add the angular-route library using Bower.


  @ Main advantage of MVC pattern

    $ A main advantage of MVC is separation of concern.

    $ Separation of concern means we divide the application Model, Control and View.

    $ We can easily maintain our application because of separation of concern.

    $ In the same time we can split many developers work at a time.

    $ MVC stands for Model View Controller.

    $ It is a software design pattern for developing web applications.

    $ It is very popular because it isolates the application logic from the user interface layer and supports separation of concerns.

    $ Model: It is responsible for managing application data


    @ What is data binding in AngularJS how does it relate to the MVC architecture?

      $ Data-binding in AngularJS apps is the automatic synchronization of data between the model and view components.

      $ The way that AngularJS implements data-binding lets you treat the model as the single-source-of-truth in your application.

      $ The view is a projection of the model at all times.

    @ MVC (vs) MVVM (vs) MVP (model-view-presenter)
        $ Moreover, there was much confusion about whether Angular was really Model-View Controller (MVC) or Model-View-ViewModel (MVVM).

        $ In reality, it was neither!

        $ Rather, Angular follows a component-oriented architecture.

        $ Having said that, Angular does share some of the concepts of both MVC and MVVM.


        $ Whereas the MVC format is specifically designed to create a separation of concerns between the model and view,

        $ The MVVM format with data-binding is designed specifically to allow the view and model to communicate directly with each other.

        $ ... However, the MVVM format comes with its own flaws as well.


      > MVC
        ? Traditional MVC is where there is a

        * Model: Acts as the model for data

        * View : Deals with the view to the user which can be the UI

        * Controller: Controls the interaction between Model and View, where view calls the controller to update model. View can call multiple controllers if needed.

      > MVP
        ? Similar to traditional MVC but Controller is replaced by Presenter.

        $ More modular because of its low-coupling. Presenter is a mediator between the View and Model

        * But the Presenter, unlike Controller is responsible for changing the view as well. The view usually does not call the presenter.


      > MVVM
        ? The difference here is the presence of View Model

        $ We already have two-way binding between VM and UI component, so it is more automated than MVP)

        * It is kind of an implementation of Observer Design Pattern, where changes in the model are represented in the view as well, by the VM.

        * If a slider is changed, not only the model is updated but the data which may be a text, that is displayed in the view is updated as well. So there is a two-way data binding.

    @ Angular Directive Restrict

      * Angular Directive’s restrict key defines how a directive can be used in HTML

      $ Restrict is for defining the directive type, and it can be A (Attribute), C (Class), E (Element), and M (coMment)

      * A : Specifies that Directive will be used as an attribute, like <div item-widget></div>, as was done in last example. This is also the default behavior if restrict is not declared. Preferred if just modifying the behavior of existing elements.

      * E : Specifies that Directive will be used as an Element. Like <item-widget></item-widget>. Preferred if creating new content.

      * C : Specifies that Directive can be used as class name in existing HTML elements. Like <div class=”item-widget”></div>

      * M : Specifies that Directive can be used as HTML comments. Like <!– Using directive: item-widget–>

      > Best practices suggest to use only A & E types

      ``` .directive('itemWidget', [function() {
            return{
                templateUrl:'item.html',
                restrict:'E'
                restrict:'EA'
                restrict:'A'
            }
          }]); ```

    @ Service - Factory - Provider
        * Angular provides us with three ways to create and register our own service.

      1) Factory

      2) Service

      3) Provider

      $ Factory: A factory is a simple function which allows you to add some logic before creating the object. It returns the created object.

          > It is just a collection of functions like a class. Hence, it can be instantiated in different controllers when you are using it with constructor function

      $ Service: A service is a constructor function which creates the object using new keyword. You can add properties and functions to a service object by using this keyword. Unlike factory, it doesn’t return anything.

            > It is a singleton object. Use it when you need to share a single object across the application. For example, authenticated user details.

      $ Provider: A provider is used to create a configurable service object. It returns value by using $get() function.

            > When you need to provide module-wise configuration for your service object before making it available.

*/
