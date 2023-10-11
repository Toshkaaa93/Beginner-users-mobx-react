import { makeAutoObservable } from "mobx";

class UsersStore {
  users = [];
  isLoading = true;
  invites = [];
  success = false;
  searchValue = ''

  constructor() {
    makeAutoObservable(this);
  }
   
   setLoading(i) {
  this.isLoading = i
   }

  fetchUsers() {
    this.setLoading(true)
    fetch("https://reqres.in/api/users")
      .then((res) => res.json())
      .then((json) => {
        this.users = [...this.users,...json.data];
      })
      .catch((err) => {
        console.warn(err);
        alert("Ошибка при получении пользователей");
      })
      .finally(()=>this.setLoading(false));
  }

  onClickInvite(id) {
    if (this.invites.includes(id)) {
        this.invites = this.invites.filter((_id) => _id !== id);
      } else {
        this.invites = [...this.invites,id];
      }
  }

  onClickSendInvites() {
   this.success = true;
  }

  setSearchValue(i) {
    this.searchValue = `${i}`;
  }
}

export default UsersStore = new UsersStore();
