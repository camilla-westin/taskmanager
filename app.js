  const tasks = [
    {
      name: 'Create vue.js base',
      description: 'Create a base to build upon.',
      opened: false,
    },
    {
      name: 'Save data',
      description: 'Connect to mongodb to save the data.',
      opened: false,

    },
    {
      name: 'Design cards',
      description: 'Design the cards to look pretty.',
      opened: false,
    },
    {
      name: 'Sorting by category',
      description: 'Be able to sort cards by categories Dev, Design, Editor etc',
      opened: false,
    },
  ];

  new Vue({
    el: '#taskmanager',
    data: {
      tasks: tasks,
      newName: '',
      newDescription: '',
      error: false
    },
    methods: {
      toggleTask: function(task){
          task.opened = !task.opened;
      },
      addNew: function() {
        if(!this.newName || !this.newDescription) {
          this.error = true;
        } else {
          this.tasks.push({
            name: this.newName,
            description: this.newDescription,
            opened: false
          });
          this.newName = '',
          this.newDescription = '',
          this.error = false
        }
      }
    }
  });
