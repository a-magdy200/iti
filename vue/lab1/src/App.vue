<script>
import {studentsStore} from "./store/studentsStore";
import {adminsStore} from "./store/adminsStore";
import TableComponent from "./components/table-component.vue";
import FormComponent from "./components/form-component.vue";

export default {
  components: {FormComponent, TableComponent},
  data() {
    return {
      count: 0,
      view: 'form',
      students: studentsStore.students,
      admins: adminsStore.admins,
    }
  },
  methods: {
    submit (data) {
      data.id = Math.ceil(Math.random() * 999999);
      if (data.userType === 'student') {
        studentsStore.addStudent(data);
      } else {
        adminsStore.addAdmin(data);
      }
    },
    changeView(view) {
      this.view = view;
    }
  }
}
</script>

<template>
  <div>
    <button @click="changeView('form')">Form</button>
    <button @click="changeView('students')">Students</button>
    <button @click="changeView('admins')">Admins</button>
  </div>
  <div>
    <keep-alive>
      <form-component v-if="view === 'form'" :submit="submit" />
    </keep-alive>
    <table-component v-if="view === 'students'" title="Students" :records="students" />
    <table-component v-if="view === 'admins'" title="Admins" :records="admins" />
  </div>
</template>

