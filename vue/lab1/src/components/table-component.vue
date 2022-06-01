<script>
export default {
  name: "table-component",
  props: ['records', 'title'],
}
</script>
<template>
  <h2>{{title}}</h2>
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Age</th>
        <th>Address</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="record in records" v-bind:key="record.id">
        <td>{{record.name}}</td>
        <td>{{record.age}}</td>
        <td>{{record.address}}</td>
      </tr>
    </tbody>
  </table>
</template>


<style scoped>

</style>
