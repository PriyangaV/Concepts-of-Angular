/*
  @ Dependency Injection
    * Code without DI - drawbacks
      class Engine {
        constructor(){}
      }
      class Tires {
        constructor(){}
      }
      class Car {
        engine;
        tires;
        constructor() {
          this.engine = new Engine();
          this.tires = new Tires();
        }
      }
      class Engine {
        constructor(newParam){} - Car class will be broken, same to Tires
      }

      ? Drawbacks
        $ Any time dependency changes, the Car class needs to be changed
        $ This code is not suitable for testing, anytime new Car instanciate, getting the same Engine and Tires

    * DI as a design pattern
      $ DI is a coding pattern in which a class receives its dependencies from external sources rather than creating them itself!

      ? Without DI
        class Car {
          engine;
          tires;
          constructor() {
            this.engine = new Engine();
            this.tires = new Tires();
          }
        }

      ? With DI
        class Car {
          engine;
          tires;
          constructor(engine, tires) {
            this.engine = engine;
            this.tires = tires;
          }
        }

        $ Car class doesn't create the dependencies, instead it consumes

        # As design Pattern

          var myEngine = new Engine();
          var myTires = new Tires();
          var myCar = new Car(myEngine, myTires);

          var myEngine = new Engine(parameter);
          var myTires = new Tires();
          var myCar = new Car(myEngine, myTires);

          var myEngine = new Engine(parameter);
          var myTires = new Tires(parameter);
          var myCar = new Car(myEngine, myTires);

          # In Testing

            var oldEngine = new Engine(oldparameter);
            var oldTires = new Tires(oldparameter);
            var oldCar = new Car(oldEngine, oldTires);

            var newEngine = new Engine(newparameter);
            var newTires = new Tires(newparameter);
            var newCar = new Car(newEngine, newTires);

        ? What if a car has 10 or n number of dependencies?
            $ As the number of dependencies grow, it becomes really  difficult manage the code

            var myEngine = new Engine();
            var myTires = new Tires();
            var depA = new dependency();
            var depB = new dependency();
            var depZ = new dependency();
            var myCar = new Car(myEngine, myTires, depA, depB, depZ);

            var myEngine = new Engine();
            var myTires = new Tires();
            var depA = new dependency();
            var depB = new dependency();
            var depAB = new dependency();
            var depZ = new dependency(depAB);
            var myCar = new Car(myEngine, myTires, depA, depB, depZ);

    * DI as a framework

        @ Injector (Where we register all our dependencies) - kinda container
          Engine        ServiceA
          Tires         ServiceB
          DepA          SeviceC
          DepB          ..
          ..            ..
          ..            ..
          ..            ..
          DepZ          ServiceZ
        ^ |              |
          Car           EmpList

    * Define the EmployeeService class

    * Register with Injector

    * Declare as Dependency in EmpList and EmpDetail

          EmployeeService (Injector)
                |
          |-----------|
        EmpList     EmpDetail

    # Hierarchical DI in Angular
        * AppModule
          * AppComponent
            * EmpList Comp (Register here)
              ? Child
              ? Child
            * EmpDetail Comp

        * AppModule (Register here)
          * AppComponent (yes)
            * EmpList Comp (yes)
              ? Child
              ? Child
            * EmpDetail Comp (yes)
              ? Child
              ? Child

        # Provider Metadata in Module

        $ @Injectable()
          - Necessary when we need to inject the service inside another service as a dependency
*/
