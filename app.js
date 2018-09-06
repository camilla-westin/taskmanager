const tasks = [
    {
      name: 'Create vue.js base',
      description: 'Create a base to build upon.',
      type: 'Development',
      opened: false,
    },
    {
      name: 'Save data',
      description: 'Connect to mongodb to save the data.',
      type: 'Development',
      opened: false,
    },
    {
      name: 'Design cards',
      description: 'Design the cards to look pretty.',
      type: 'Design',
      opened: false,
    },
    {
      name: 'Sorting by category',
      description: 'Be able to sort cards by categories Dev, Design, Editor etc',
      type: 'Development',
      opened: false,
    }
];

new Vue({
    el: '#taskmanager',
    data: {
      tasks: tasks,
      newName: '',
      newDescription: '',
      type: '',
      newType: '',
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
            type: this.newType,
            opened: false
          });
          this.newName = '',
          this.newDescription = '',
          this.newType = '',
          this.error = false
        }
      },
      filterType: function() {
        this.type = event.target.value;
      }
    },
    computed: {
      uniqueItemsList: function (){
        const types = [];
        this.tasks.forEach(function(task){
          if (!types.includes(task.type)){
            types.push(task.type);
          }
        });
        return types;
      }
    }
});
