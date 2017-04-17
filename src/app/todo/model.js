;
window.ToDo.models = window.ToDo.models || {};

window.ToDo.models.ToDo = function(title, completed) {
	this.title = ko.observable(title);
	this.completed = ko.observable(completed);
	this.editing = ko.observable(false);
};

window.ToDo.models.ToDoList = function(title) {
	this.title = ko.observable(title);
	this.currentTodo = ko.observable();
	this.todos = ko.observableArray([]);
	this.editing = ko.observable(false);
};