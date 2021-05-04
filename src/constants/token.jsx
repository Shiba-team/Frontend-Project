
export const getToken = () => {
    let token = null;

    try {
        token = window.localStorage.getItem("authen");
    } catch(e){
        console.log(e)
    }

    return token;
}

export const setToken = (token) => {
    try {
        window.localStorage.setItem("authen", token)
    } catch(e){
        console.log(e)        
    }
}

export const removeAll = () => {
    try {
        window.localStorage.clear()
    } catch(e){
        console.log(e)        
    }
}