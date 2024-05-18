// class User {
//     constructor(name, email, password) {
//         this.name = name;
//         this.email = email;
//         this.password = password;
//     }

//     encryptPassword() {
//         return `${this.password}1234`;
//     }

//     changeUsername() {
//         return `${this.name.toUpperCase()}`
//     }
// }

// user1 = new User('randomUser', 'random@example.com', 'abcpqr')

// console.log(user1);

// console.log(user1.encryptPassword())

// console.log(user1.changeUsername())

class User {
    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }

    encryptPassword() {
        return `${this.password}1234`;
    }

    changeUsername() {
        return `${this.name.toUpperCase()}`
    }
}

class Admin extends User {
    constructor(name, email, password, role) {
        super(name, email, password);
        this.role = role;
    }

    changeRole() {
        return `${this.role.toUpperCase()}`
    }
}

user1 = new Admin('randomUser', '123@example.com', 'abcpqr', 'SdE')

console.log(user1.changeRole())