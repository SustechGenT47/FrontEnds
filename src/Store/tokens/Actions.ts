export type Action = {type: "ADD_TOKEN", payloud: string};

export const addToken = (token:string): Action =>({
    type: "ADD_TOKEN",
    payloud: token,
});