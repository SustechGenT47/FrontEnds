export type Action = {type: "ADD_TOKEN"|"ADD_USUARIO"|"ADD_ID"; payloud: string};

export const addToken = (token:string): Action =>({
    type: "ADD_TOKEN",
    payloud: token,
});

export const addUsuario = (usuario: string): Action =>({
    type: "ADD_USUARIO",
    payloud: usuario
});

export const addId=(id:string):Action =>({
    type:"ADD_ID",
    payloud: id
})