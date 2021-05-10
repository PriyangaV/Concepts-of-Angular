/*
 * @ RxJS
      $ It's library for composing asynchronous and callback-based code in a functional, react style using Observables

      $ Many APIs such as HTTPClient produce and consume RxJs Observables and also uses operators for processing observables

      $ We can import observables and opeators for using HttpClient
          > import { Observable, throwError } from 'rxjs'
          > import { catchError, retry } from 'rxjs/operators'

    ? What's Subscribing?
      > An Observalbe instance begins publishing values only when someonw subscribes to it
        * We need to use 'subscribe()' method of the instance, passing an observer object to receive the notifications
          $ Sequence of 5 integers, starting from 1

          ``` const source = range(1, 5)
              const myObserver = {
                next: x => console.log(x),
                error: err => console.log(err),
                complete: () => console.log(completed)
              }

              source.subscribe(myObserver);
              - // next value 1
              - // next value 2
              - // next value 3
              - // next value 4
              - // next value 5
              - // complete function  ```

    ? What's an Observable?
      > It's an unique object similar to promise that can help manage async code

      > Observables are not part fo the javascript language so we need to rely on a popular Observable library called RxJs

      > Observables are created using new keyword

              ``` import { Observable } from 'rxjs'
                  const observable = new Observable(observer => {
                    setTimeout(() => {
                      observer.next('Hello Universe, from a Observable!')
                    }, 1000)
                  }) ```

    ? What are observables?
      > Observables are declarative which provide support for passing messages between publishers and subscribers in our application

      $ They are mainly used for event handling, asynchronous programming, and handling multiple values

      > In this case, you define a function for publishing values, but it's not executed until a consumer subscribes to it

      $ The subscribed consumer then receives notifications until the function completes, or until they unsubscribe

    ? What is an observer?
      > Observer is an interface for a consumer of push-based notifications delivered by an Observable
          $ It has below structure
                  ``` interface Observer<T> {
                    closed?: boolean;
                    next: (value: T) => void;
                    error: (err: any) => void;
                    complete: () => void;
                  } ```

      > A handler that implements the Observer interface for receiving observable notifications will be passed as a parameter for observable as below
            $ myObservable.subscribe(myObserver)

    ? Difference between Promise and Observable

        > Observable
            $ Declarative: Computation does not start until subscription so that they can be run whenever we need the result

            $ Provides multiple stream of values over time

            $ Subscribe method is used for error handling which makes centralized and predictable error handling

            $ Provides chaining and subscription to handle complex applications

        > Promise
            $ Execute immediately on creation

            $ Provide only one value

            $ Push errors to the child promises

            $ Uses only .then() clause


    ? Observable Create Functions
          > RxJS provides creation functions for the process of creating observables from things such as promises, events, timers and Ajax requests

            * Create an observable from a promise
            * Create an observable that creates an AJAX request
            * Create an observable from a counter
            * Create an observable from an event

    ? What is multicasting?
        $ Multicasting is a the practice of broadcasting to a list of multiple subscribers in a single execution

    ? How do you perform error handling in observables?
        $ We can handle errors by specifying an error callback on the observer,
          > instead of relying on try/catch which are ineffective in asynchronous environment

          ``` myObservable.subscribe({
            next(num) {console.log(num)},
            error(err) {console.log(err)}
          }); ```

    ? Short hand notation for subscribe method
          $ subscribe() method can accept callback function definitions in line, for next, error and complete handlers is known as short hand notation
            > or subscribe method with positional arguments

              ``` myObservable.subscribe({
                    next(num) {console.log(num)},
                    error(err) {console.log(err)},
                    () => {console.log(completed)}
                  }); ```

    ? Utility functions provided by RxJs
          $ RxJs library also provides below utility funtions for creating and working with observables
              * Converting existing code for async operations into observables
              * Iterating through the values in a stream
              * Mapping values to different types
              * Filtering items
              * Composing multiple streams

*/
