type Livro = {
  titulo: string
  autor: string
  ano: number
  paginas: number
  lido: boolean
  avaliacao: number
}
const livros: Livro[] = [ { titulo: "O Hobbit", autor: "J.R.R. Tolkien", ano: 1937, paginas: 310, lido: true, avaliacao: 5 }, { titulo: "Clean Code", autor: "Robert C. Martin", ano: 2008, paginas: 464, lido: true, avaliacao: 4 }, { titulo: "1984", autor: "George Orwell", ano: 1949, paginas: 328, lido: false, avaliacao: 5 }, { titulo: "Dom Casmurro", autor: "Machado de Assis", ano: 1899, paginas: 256, lido: true, avaliacao: 5 }, { titulo: "O Nome do Vento", autor: "Patrick Rothfuss", ano: 2007, paginas: 662, lido: false, avaliacao:6 } ];

{}
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



function marcarComoLido(titulo: string, avaliacao: number): void {
  const livro = livros.find(l => l.titulo === titulo)

  if (!livro) {
    console.log("Livro não encontrado")
    return
  }

  if (avaliacao < 1 || avaliacao > 5) {
    console.log("Avaliação inválida (use de 1 a 5)")
    return
  }

  livro.lido = true
  livro.avaliacao = avaliacao

  console.log(`Livro "${titulo}" marcado como lido`)
}


function listarLidos(): void {
  const lidos = livros.filter(l => l.lido === true)

  console.log("\nLivros lidos:")
  lidos.forEach(l => {
    console.log(l.titulo)
  })
}

function listarPendentes(): void {
  const pendentes = livros.filter(l => l.lido === false)

  console.log("\nLivros pendentes:")
  pendentes.forEach(l => {
    console.log(l.titulo)
  })
}

function mostrarEstatisticas(): void {
  const total = livros.length

  const lidos = livros.filter(l => l.lido)
  const qtdLidos = lidos.length

  const porcentagemLidos =
    total === 0 ? 0 : (qtdLidos / total) * 100

  const somaAvaliacoes = lidos
    .filter(l => l.avaliacao > 0)
    .map(l => l.avaliacao)
    .reduce((acc, val) => acc + val, 0)

  const qtdAvaliacoes = lidos.filter(l => l.avaliacao > 0).length
{[]}
  const mediaAvaliacoes =
    qtdAvaliacoes === 0 ? 0 : somaAvaliacoes / qtdAvaliacoes

let melhorLivro;

if (lidos.length === 0) {
  melhorLivro = null; 
} else {
  melhorLivro = lidos
    .filter(l => l.avaliacao > 0)
    .reduce((melhor, atual) =>
      atual.avaliacao > melhor.avaliacao ? atual : melhor
    );
}

  const totalPaginasLidas = lidos
    .map(l => l.paginas)
    .reduce((acc, val) => acc + val, 0)

  console.log("=== ESTATISTICAS ===\n")

  console.log(`Total de livros: ${total}\n`)

  console.log(
    `Livros lidos: ${qtdLidos} (${porcentagemLidos.toFixed(2)}%)\n`
  )

  console.log(
    `Media das avaliacoes: ${mediaAvaliacoes.toFixed(2)}\n`
  )

  console.log(
    `Livro melhor avaliado: ${melhorLivro?.titulo ?? "Nenhum"}\n`
  )

  console.log(
    `Total de paginas lidas: ${totalPaginasLidas}`
  )
}


function exibirPorDecada(livros: Livro[]) {
  const decadasJaExibidas: number[] = []

  for (let i = 0; i < livros.length; i++) {
    const decada = Math.floor(livros[i]!.ano / 10) * 10

    if (!decadasJaExibidas.includes(decada)) {
      decadasJaExibidas.push(decada)

      const livrosDaDecada = livros.filter(l =>
        Math.floor(l.ano / 10) * 10 === decada
      )

      console.log(`\nDécada de ${decada}:`)

      livrosDaDecada.forEach(l => {
        console.log(`- ${l.titulo} (${l.ano})`)
      })
    }
  }
}
exibirBiblioteca(livros)
exibirPorDecada(livros)

removerLivro("O Hobbit 2")
exibirBiblioteca(livros)


buscarPorTitulo("Code")
listarPorAutor("Robert C. Martin")


marcarComoLido("Clean Code 2", 5)

listarLidos()
listarPendentes()
 
mostrarEstatisticas()