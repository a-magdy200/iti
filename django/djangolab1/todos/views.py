import random

from django.http import HttpResponse
from django.shortcuts import render, redirect

from todos.forms import TodoForm

todos = [{
    "id": 1,
    "title": "hello",
    "note": "hello world"
}]


# Create your views here.
def read_all_todos(request):
    return render(request, 'todos.html', {'todos': todos})


def read_one_todo(request, **kwargs):
    todo = list(filter(lambda n: n['id'] == kwargs.get('todo_id'), todos))[0]
    return render(request, 'todo-details.html', {"todo": todo})


def create_todo(request):
    if request.method == 'POST':
        form = TodoForm(request.POST)
        if form.is_valid():
            print(form.data)
            todos.append({
                "id": random.randint(1, 99999),
                "title": form.data.get('title'),
                "note": form.data.get('note'),
            })
        return redirect('/todos/')
    form = TodoForm()
    return render(request, "todo-form.html", {"form": form, "title": "Create a new Todo"})


def edit_todo(request, **kwargs):
    if request.method == 'POST':
        form = TodoForm(request.POST)
        if form.is_valid():
            for todo in todos:
                if todo.get('id') == kwargs.get('todo_id'):
                    todo.update({
                        "title": form.data.get('title'),
                        "note": form.data.get('note'),
                    })
        return redirect("/todos/")
    todo = list(filter(lambda n: n['id'] == kwargs.get('todo_id'), todos))[0]
    form = TodoForm(todo)
    return render(request, "todo-form.html", {"form": form, "title": "Edit Todo"})


def delete_todo(request, **kwargs):
    todo = list(filter(lambda t: t['id'] == kwargs.get('todo_id'), todos))[0]
    todos.remove(todo)
    return redirect("/todos/")

