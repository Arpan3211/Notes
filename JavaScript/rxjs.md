# What is Rxjs, Subscriber, Observable, folkJoins


#### 1. **RxJS (Reactive Extensions for JavaScript)**:

RxJS is a library for composing asynchronous and event-based programs using **observables**. It provides powerful operators to handle data streams, making it easy to work with events, async requests, and more complex operations. It is widely used with frameworks like Angular.

- **Core Idea**: RxJS is all about dealing with streams of data (such as clicks, input events, or HTTP responses) over time and reacting to them.

#### 2. **Observable**:

An **Observable** is a core concept in RxJS. It represents a stream of values (data, events, etc.) over time. Observables can emit multiple values, either synchronously or asynchronously.

- You can think of an Observable as a function that can **emit** (or push) values over time to its subscribers.
- Observables can emit:
  - **Next**: A value (e.g., a click event or data from an API).
  - **Error**: An error, stopping the observable.
  - **Complete**: Indicating that the observable has finished emitting values.

```javascript
import { Observable } from "rxjs";

const observable = new Observable((subscriber) => {
  subscriber.next("First value");
  subscriber.next("Second value");
  subscriber.complete();
});
```

#### 3. **Subscriber**:

A **Subscriber** is the object that listens to the values emitted by an observable. When you subscribe to an observable, you define what should happen when the observable emits a value (or when an error occurs or it completes).

- You can handle three types of events in a subscriber: **next**, **error**, and **complete**.

```javascript
observable.subscribe({
  next(value) {
    console.log(value);
  },
  error(err) {
    console.error("Error: " + err);
  },
  complete() {
    console.log("Completed!");
  },
});
```

#### 4. **forkJoin**:

`forkJoin` is a static RxJS operator used when you need to wait for several observables to complete and then combine their last emitted values. It is helpful for handling multiple requests or operations in parallel.

- **forkJoin** will only emit when all the provided observables have completed.
- It will give you an array of the last values emitted by each observable.

```javascript
import { forkJoin, of } from "rxjs";
import { delay } from "rxjs/operators";

forkJoin({
  first: of("First").pipe(delay(1000)),
  second: of("Second").pipe(delay(2000)),
}).subscribe((results) => {
  console.log(results); // { first: 'First', second: 'Second' }
});
```

- **RxJS** is a library for reactive programming.
- **Observable** is the core entity in RxJS representing data streams.
- **Subscriber** is what listens to the data from an Observable.
- **forkJoin** is an operator that waits for multiple observables to complete and then emits their results.
