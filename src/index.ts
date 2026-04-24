type Livro = {
  titulo: string
  autor: string
  ano: number
  paginas: number
  lido: boolean
  avaliacao: number
}
const livros: Livro[] = [ { titulo: "O Hobbit", autor: "J.R.R. Tolkien", ano: 1937, paginas: 310, lido: true, avaliacao: 5 }, { titulo: "Clean Code", autor: "Robert C. Martin", ano: 2008, paginas: 464, lido: true, avaliacao: 4 }, { titulo: "1984", autor: "George Orwell", ano: 1949, paginas: 328, lido: false, avaliacao: 5 }, { titulo: "Dom Casmurro", autor: "Machado de Assis", ano: 1899, paginas: 256, lido: true, avaliacao: 5 }, { titulo: "O Nome do Vento", autor: "Patrick Rothfuss", ano: 2007, paginas: 662, lido: false, avaliacao:6 } ];


function exibirBiblioteca(livros:Livro[]): void {
  console.log('=== MINHA BIBLIOTECA ===\n')
  livros.forEach((livro:Livro, i:number) => {
    const autor = livro.autor
    const ano = livro.ano
    const pagina = livro.paginas
    const foiLido = livro.lido
    const avaliacao = livro.avaliacao

    let status: string

    if (foiLido) {
      status = `LIDO (${avaliacao}/5)`
    } else {
      status = 'PENDENTE'
    }

    console.log(
      `${i + 1}. "${livro.titulo}" (${ano}) - ${autor} - ${pagina} pag - ${status}`
    )
  })
}

exibirBiblioteca(livros)