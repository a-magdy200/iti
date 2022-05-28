from django import forms


class TodoForm(forms.Form):
    title = forms.CharField(label="Title", max_length=30, min_length=3)
    note = forms.CharField(label="Note", max_length=300, min_length=3)

