# ACTIVITIES

## Create a new activity
To create a new activity, create a new js file and add the activity via the function :
``` js
bubble.your_activity = () => {
    // Redefined this
    var _this = bubble;
}
```


## FUNCTIONS
- [bubble.setCheckup](#setCheckup)
- [bubble.setTask](#setTask)

### bubble.setCheckup <a name="setCheckup"></a>
If you need to set a interval to check a function, use this function.
``` js
bubble.setCheckup({
    "function": [bubble.your_activity_1, bubble.your_activity_2],
    "interval": 1000 // milliseconds
});
```

### bubble.setTask(array) <a name="setTask"></a>
If you need to set a task to Bubble, use this function.
``` js
bubble.setTask({
    name: "name_of_your_task",
    function_start: bubble.function_of_your_task,
    task_end: {
        name: "name_of_your_task_end",
        function_start: bubble.function_of_your_task_end
    },
    stoppable: false,
    duration: 1200000 // milliseconds
});
```

| Parameter         | Type      |  Description          |
| :---------------- | :-------- | :-------------------- |
| name              | String    | Name of the task      |
| function_start    | Function  | Function of the task  |
| task_end          | Array     | Array of the task end |
| stoppable         | Boolean   | Set the posibility to stop the task for other one |
| duration          | Integer   | Duration of the task in milliseconds |