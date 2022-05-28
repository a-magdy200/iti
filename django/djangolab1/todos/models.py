from django.db import models

# Create your models here.
from django.db import models


class Note(models.Model):
    id = models.AutoField
    title = models.CharField(max_length=30)
    note = models.CharField(max_length=300)
