/*
  @ Control Flow of Angular Architecture
    $ Modules
      # Angular App
        * Collection of many individual modules
          ^ Module <--> Module

        * Every module represents the feature area

        * Lines of code that can be Import / Export
          ^ User (users module) <--> Admin (admin module)

      # Root Module - AppModule

      # Each module is in turn made up of Components & Services

    $ Components
        * Controls the portion of the view
          ^ Navigation, Sidebar, MainContent

        # Root Component - AppComponent

        # Module 1
          * Root Component
            $ Component 1
              ? HTML Template
                ^  Represent the View
              ? Class
                ^ Controls the logic of that particluar view
            $ Component 2
              ? HTML Template
              ? Class
            $ Component 3
              ? HTML Template
              ? Class

    $ Services
      * Business Logic
        # Module
          ? Component
          ? Services
*/

/*
  @ Architecture Summary
    * Angular App - one or more modules
    * Module - One or more components and services
    * Components - HTML (View) + Class (View's Logic)
    * Services - Business Logic

    # Modules interact and ultimately render the view in the broswer
*/
