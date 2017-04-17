;

window.ToDo.viewModels = window.ToDo.viewModels || {};

window.ToDo.viewModels.ToDo = function(data) {
	var self = this;

	//self.currentTodo = ko.observable();

	//self.todos = ko.observableArray(data);

	self.todoLists = ko.observableArray(data || []);
	self.currentTodoList = ko.observable();

	self.addTodoList = function() {
		var current = self.currentTodoList();

		if (current) {
			self.todoLists.push(new ToDo.models.ToDoList(current));
			self.currentTodoList('');
		}
	}.bind(this);

	self.editTodoList = function(list) {
		list.editing(true);
		list.currentTitle = list.title();
	}.bind(this);

	self.removeTodoList = function(list) {
		self.todoLists.remove(list);
	}.bind(this);

	self.saveEditList = function(list) {
		var title = list.title();

		if (title === '') {
			return;
		}

		list.editing(false);
	}.bind(this);

	self.cancelEditList = function(list) {
		list.title(list.currentTitle);
		list.editing(false);
	}.bind(this);
	
	self.addTodo = function(list) {
		var current = list.currentTodo();

		if (current) {
			list.todos.push(new ToDo.models.ToDo(current, false));
			list.currentTodo('');
		}
	}.bind(this);

	self.removeTodo = function(list, todo) {
		list.todos.remove(todo);
	}.bind(this);
	
	self.toggleComplete = function(list, todo) {
		todo.completed(!todo.completed());
	}.bind(this);

	self.editTodo = function(list, todo) {
		todo.editing(true);
		todo.currentTitle = todo.title();
	}.bind(this);

	self.saveEdit = function(list, todo) {
		var title = todo.title();

		if (title === '') {
			self.removeTodo(todo);
		}

		todo.editing(false);
	}.bind(this);

	self.cancelEdit = function(list, todo) {
		todo.title(todo.currentTitle);
		todo.editing(false);
	}.bind(this);
};