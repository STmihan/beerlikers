class RoutesConstants {
    constructor() {
        this.BASE_URL = import.meta.env.VITE_BASE_URL;
        this.USERS = new UsersConstants(this.BASE_URL);
        this.FORMS = new FormsConstants(this.BASE_URL);
        this.AUTH = new AuthConstants(this.BASE_URL);
    }
}

class UsersConstants {
    constructor(BASE_URL) {
        this.BASE_URL = BASE_URL + '/users';
        this.WHOAMI = this.BASE_URL + '/whoami';
    }
}

class FormsConstants {
    constructor(BASE_URL) {
        this.BASE_URL = BASE_URL + '/forms';
        this.GET_ALL = this.BASE_URL;
        this.POST_NEW = this.BASE_URL;
    }
}

class AuthConstants {
    constructor(BASE_URL) {
        this.BASE_URL = BASE_URL + '/auth';
        this.LOGIN = this.BASE_URL + '/login/';
        this.LOGOUT = this.BASE_URL + '/logout/';
    }
}

export default new RoutesConstants();
