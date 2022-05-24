import { Action } from './Actions';

// Altere a Interface de TokenState para UserState, e adicione o campo ID
export interface TokenState {
    tokens: string,
    usuarios: string,
    id:string
    
}

// Altere a Inicialiazação do State adicionando o campo ID
const initialState = {
    tokens: "",
    usuarios: "",
    id:""
    
}

// Mude TokenState para UserState
export const tokenReducer = (state: TokenState = initialState, action: Action) => {
    switch (action.type) {
        case "ADD_TOKEN": {

            /* Seguindo a Interface UserState, retornamos o Token com a informação adicionada e o 
                ID com a informação inicial dele*/
            return { tokens: action.payloud, usuarios: state.usuarios, id:state.id }
        }
        case "ADD_USUARIO": {

            /* Seguindo a Interface UserState, retornamos o ID com a informação adicionada e o 
                Token com a informação inicial dele*/
            return { usuarios: action.payloud, tokens: state.tokens,id:state.id }
        }case "ADD_ID": {
             
            return {id:action.payloud, tokens:state.tokens, usuarios:state.usuarios}

        }
       
        default:
            return state
    }
}