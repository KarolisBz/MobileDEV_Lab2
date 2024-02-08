// This is ex 1 and 2 in 1 file

// Varibles
let taskArray: string[] = []; // (a)

// functions
function addTask(task: string): number // (b)
{
    console.log("Added " + task + " to the array");
    return taskArray.push(task); // returns the length of the new array
}

function listAllTasks(): void // (c)
{
    taskArray.forEach(element => {
        console.log(element);
    });
}

function deleteTask(task: string): number // (d)
{
    let targetIndex:number = taskArray.indexOf(task);

    if (targetIndex > -1)
    {
        taskArray.splice(targetIndex, 1)
        console.log("Deleted " + task + " from the array");
    } else {
        console.log(task + " is not in our task array");
    }

    return taskArray.length;
}

// testing
addTask("Homework!");
console.log(addTask("Eat"));
listAllTasks();
deleteTask("Eat");
listAllTasks();
deleteTask("asdeasd");
