import Categoria from "./Categoria"

interface Produto{
    id: number
    nome: string
    descricao: string
    quantidade: number
    preco: number
    estado: string
    categoria?: Categoria | null
}

export default Produto;