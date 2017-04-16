;

window.ToDo.viewModels = window.ToDo.viewModels || {};

window.ToDo.viewModels.ToDo = function(data) {
	var self = this;

	self.currentTodo = ko.observable();

	self.todos = ko.observableArray(data);

	self.addTodo = function() {
		var current = self.currentTodo();
		if (current) {
			self.todos.push(new ToDo.models.ToDo(current));
			self.currentTodo('');
		}
	}.bind(this);

	self.removeTodo = function(todo) {
		self.todos.remove(todo);
	}.bind(this);

	self.editTodo = function(todo) {
		todo.editing(true);
		todo.currentTitle = todo.title();
	}.bind(this);

	self.saveEdit = function(todo) {
		var title = todo.title();

		if (title === '') {
			self.removeTodo(todo);
		}

		todo.editing(false);
	}.bind(this);

	self.cancelEdit = function(todo) {
		todo.title(todo.currentTitle);
		todo.editing(false);
	}.bind(this);

	self.toggleComplete = function(todo) {
		todo.completed(!todo.completed());
	}.bind(this);
};