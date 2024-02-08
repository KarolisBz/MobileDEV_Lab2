/*
3. In this exercise, the aim is to implement the same functionality as exercise 2 using an
interface instead. A class will be required to implement the interface. To complete this
exercise you will need to do the following: Create an interface and add the following to
it:

(a) An array of strings.
(b) An addTask function which:
i. Recieves a string as a parameter.
ii. Prints a message in the console indicating the insertion.
iii. Returns the number of elements in the array after the insertion.
(c) A listAllTasks function which:
i. Prints in the console all the tasks of the list.
(d) A deleteTask function which:
i. Recieves a string as a parameter.
ii. Prints a message in the console indicating the deletion.
iii. Returns the number of elements in the array after the deletion
*/

import {taskInterface} from './interface';

class taskClass implements taskInterface 
{
    // Varibles
    taskArray: string[] = [];

    addTask(task: string): number {
        console.log("Added " + task + " to the array");
        return this.taskArray.push(task); // returns the length of the new array
    }

    listAllTasks(): void
    {
        this.taskArray.forEach(element => {
            console.log(element);
        }); 
    }


    deleteTask(task: string): number
    {
        let targetIndex:number = this.taskArray.indexOf(task);

        if (targetIndex > -1)
        {
            this.taskArray.splice(targetIndex, 1)
            console.log("Deleted " + task + " from the array");
        } else {
            console.log(task + " is not in our task array");
        }

        return this.taskArray.length;
    }
}

// creating new class obj and testging
let task1:taskClass = new taskClass();

task1.addTask("Homework!");
console.log(task1.addTask("Eat"));
task1.listAllTasks();
task1.deleteTask("Eat");
task1.listAllTasks();
task1.deleteTask("asdeasd");
