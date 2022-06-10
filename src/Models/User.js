class User{

    constructor(
        id = -1,
        userName = '', 
        password = '', 
        fName = '', 
        lName = '', 
        email = '', 
        registrationDate = '') {

        this.id = id
        this.userName = userName;
        this.password = password;
        this.fName = fName;
        this.lName = lName;
        this.email = email;
        this.registrationDate = registrationDate;
    }

    setUserName(userName){
        this.userName = userName;
    }

    setRegistrationDate(registrationDate){
        this.registrationDate = registrationDate;
    }
  
    setFName(fName){
        this.fName = fName;
    }

    setLName(lName){
        this.lName = lName;
    }

    setPassword(password){
        this.password = password;
    }

    setId(id){
        this.id = id;
    }

    setEmail(email){
        this.email = email;
    }

    getUserName(){
        return this.userName;
    }

    getFName(){
        return this.fName;
    }

    getPassword(){
        return this.password;
    }

    getId(){
        return this.id;
    }

    getEmail(){
        return this.email;
    }

    getRegistrationDate(){
        return this.registrationDate;
    }
}

export default User