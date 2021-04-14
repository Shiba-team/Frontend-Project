export var getToken = () => {
    let token = null;
    try {
        token = window.localStorage.getItem("token")
    } catch (e) {
    }

    return token;
};

export var setToken = token => {
    try {
        window.localStorage.setItem("token", token)
    } catch (e) {
    }

    return token;
};

export var removeToken = () => {
    try {
        window.localStorage.removeItem("token")
    } catch (e) {
    }

    return token;
};