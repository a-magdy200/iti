import {reactive} from "vue";
export const adminsStore = reactive({
  admins: [{
    id: 1,
    name: "Admin #1",
    age: 33,
    address:"Home"
  }],
  addAdmin (admin) {
    this.admins.push(admin);
  },
});
