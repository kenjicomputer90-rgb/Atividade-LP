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

function adicionarLivro(livro: Livro): void {
  if (livro.ano <= 0) {
    console.log("Ano inválido")
    return
  }

  if (livro.paginas <= 0) {
    console.log("Número de páginas inválido")
    return
  }

  livros.push(livro)
  console.log(`Livro "${livro.titulo}" adicionado com sucesso.`)
}

function removerLivro(titulo: string): void {
  const index = livros.findIndex(l => l.titulo === titulo)

  if (index === -1) {
    console.log("Livro não encontrado")
    return
  }

  livros.splice(index, 1)
  console.log(`Livro "${titulo}" removido com sucesso.`)
}
exibirBiblioteca(livros)


adicionarLivro({
  titulo: "O Hobbit 2",
  autor: "J.R.R. Tolkien",
  ano: 1937,
  paginas: 310,
  lido: true,
  avaliacao: 5
})

adicionarLivro({
  titulo: "Clean Code 2",
  autor: "Robert C. Martin",
  ano: 2008,
  paginas: 464,
  lido: false,
  avaliacao: 4
})


removerLivro("O Hobbit 2")
exibirBiblioteca(livros)

function buscarPorTitulo(termo: string): void {
  const encontrados = livros.filter(l => l.titulo.includes(termo))

  console.log("\nBusca por título:")
  encontrados.forEach(l => {
    console.log(l.titulo)
  })
}

function listarPorAutor(autor: string): void {
  const lista = livros
    .filter(l => l.autor === autor)
    .map(l => l.titulo)

  console.log("\nLivros do autor:")
  lista.forEach(titulo => {
    console.log(titulo)
  })
}

buscarPorTitulo("Code")
listarPorAutor("Robert C. Martin")