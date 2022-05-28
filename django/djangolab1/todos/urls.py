from django.urls import path
from .views import *

app_name = "todos"

urlpatterns = [
    path("", read_all_todos, name="list"),
    path("<int:todo_id>", read_one_todo, name="read-one"),
    path("create", create_todo, name="create"),
    path("<int:todo_id>/edit", edit_todo, name="edit"),
    path("<int:todo_id>/delete", delete_todo, name="delete"),
]
