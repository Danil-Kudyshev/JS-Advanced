(function () {
    'use strict';

    class User {
        constructor(task) {
            this.a = task;
        }
        do() {
            this.a.run();
        }
    }

    class Task {
        constructor(task) {
            this.task = task;
        }
        run() {
            console.log(this.task);
        }
    }

    const a = new Task('Сделать дела');
    const b = new User(a);
    b.do();

})();
