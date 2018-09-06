const tasks = [
    {
      taskname: 'The "First Computer Programmer"',
      taskdescription: 'Ada Lovelace',
      opened: false,
    },
    {
      taskname: 'Invented the "Clarke Calculator"',
      taskdescription: 'Edith Clarke',
      opened: false,

    },
    {
      taskname: 'Famous World War II Enigma code breaker',
      taskdescription: 'Alan Turing',
      opened: false,
    },
    {
      taskname: 'Created satellite orbit analyzation software for NASA',
      taskdescription: 'Dr. Evelyn Boyd Granville',
      opened: false,
    },
  ];

  new Vue({
    el: '#taskmanager',
    data: {
      tasks: tasks,
      newTaskname: '',
      newTaskdescription: '',
      error: false
    },
    methods: {
      toggleTask: function(task){
          task.opened = !task.opened;
      },
      addNew: function() {
        if(!this.newTaskname || !this.newTaskdescription) {
          this.error = true;
        } else {
          this.tasks.push({
            taskname: this.newTaskname,
            taskdescription: this.newTaskdescription,
            opened: false
          });
          this.newTaskname = '',
          this.newTaskdescription = '',
          this.error = false
        }
      }
    }
  });
