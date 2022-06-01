<template>
  <form @submit.prevent="onSubmit">
    <div>
      <label>
        Name
        <input v-model="name" type="text" name="name">
      </label>
    </div>
    <div>
      <label>
        Age
        <input v-model="age" type="text" name="age">
      </label>
    </div>
    <div>
      <label>
        Address
        <input v-model="address" type="text" name="address">
      </label>
    </div>
    <div>
      <label>
        Student
        <input v-model="userType" type="radio" value="student" name="userType">
      </label>
      <label>
        Admin
        <input v-model="userType" type="radio" value="admin" name="userType">
      </label>
    </div>
    <button type="submit">submit</button>
  </form>
</template>

<script>
export default {
  name: "form-component",
  props: ['submit'],
  data() {
    return {
      name: '',
      age: '',
      userType: 'student',
      address: '',
    }
  },
  methods: {
    onSubmit() {
      const data = {
        name: this.name,
        age: this.age,
        address: this.address,
        userType: this.userType,
      };
      this.submit(data);
      this.name = '';
      this.age = '';
      this.userType = 'student';
      this.address = '';
    }
  }
}
</script>

<style scoped>

</style>
