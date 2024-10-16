/**
 * Q. Challenge:
 *    a. Learn how to use setTimeout()
 *       => It takes a fn
 *       => It takes a timer: After how many seconds do you want me to
 *          call this fn.
 *    b. Now, write a function that takes a message and delay and print
 *       that message after the delay.
 * 
 * => Journey of setTimeout:
 *    a. First goes to callstack
 *    b. Callstack sees setTimeout, I don't know this, it gives it to webAPIs.
 *    c. setTimeout: Fn, timer. Let me wait for 3seconds - Guarantee of
 *       3 seconds waiting.
 *    d. Waiting in Job Queue aka Task Queue
 *    e. Event Loop will see! Wow! there's new task on job queue
 *    f. Event Loop will check if callstack is empty
 *    g. If it is empty, fn will be executed.
 *    h. If it's busy, then fn will wait in Job Queue - Guarantee of
 *       timer expires in this case(may take more than 3 seconds).
 * */ 

setTimeout(() => console.log("Tanay"), 4000);


/**
 * Understanding:
 * setTimeout() places the callback function on the event queue after
 * the given time.
 * 
 * Remember:
 * 1. It doesn't guarantee time.
 * 2. setTimeout(fn, 0) is used to do calculation when callstack is empty.
 *    Therefore not blocking the render.
*/