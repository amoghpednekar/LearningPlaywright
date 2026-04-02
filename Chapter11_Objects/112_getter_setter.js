const user = {
    firstname: "Amogh",
    lastname: "Pednekar",
    get fullname() {
        return this.firstname + " " + this.lastname;
    },
    set fullname(value) {
        [this.firstname, this.lastname] = value.split(" ");
    }
}
console.log(user.fullname);
user.fullname = "Akash Sharma";
console.log(user.fullname);

