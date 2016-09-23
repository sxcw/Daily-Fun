// Implement the function asyncMap:
// asyncMap has two parameters, an array of asynchronous functions (tasks) and a callback.
// Each of the tasks takes a separate callback and invokes that callback when complete.
// The callback passed to asyncMap is then performed once on the array of results of the callbacks of the tasks.

var asyncMap = function(tasks, callback){
  var results = [];
  var finished = 0;
  tasks.forEach( (task,i) => {
    task((result) => {
      results[i] = result;
      if(finished === tasks.length-1) callback(results)
      finished++;
    })
  })
};  