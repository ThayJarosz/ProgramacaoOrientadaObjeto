// Classe Musica
class Musica {
  constructor(titulo, artista, duracao) {
    this.titulo = titulo;
    this.artista = artista;
    this.duracao = duracao;
  }
}

// Classe Playlist
class Playlist {
  constructor(nome) {
    this.nome = nome;
    this.musicas = [];
  }

  adicionarMusica(musica) {
    this.musicas.push(musica);
    console.log(`Música "${musica.titulo}" adicionada à playlist "${this.nome}".`);
  }

  reproduzir() {
    console.log(`Reproduzindo playlist: ${this.nome}`);
    this.musicas.forEach((musica, index) => {
      console.log(`${index + 1}. ${musica.titulo} - ${musica.artista} (${musica.duracao} segundos)`);
    });
  }
}

// Classe BibliotecaMusical
class BibliotecaMusical {
  constructor() {
    this.musicas = [];
  }

  adicionarMusica(musica) {
    this.musicas.push(musica);
    console.log(`Música "${musica.titulo}" adicionada à biblioteca musical.`);
  }
}

// Classe Usuario
class Usuario {
  constructor(nome) {
    this.nome = nome;
    this.bibliotecaMusical = new BibliotecaMusical();
    this.playlists = [];
  }

  criarPlaylist(nome) {
    const novaPlaylist = new Playlist(nome);
    this.playlists.push(novaPlaylist);
    console.log(`Playlist "${nome}" criada.`);
    return novaPlaylist;
  }

  adicionarMusicaNaPlaylist(musica, playlist) {
    playlist.adicionarMusica(musica);
  }

  reproduzirPlaylist(playlist) {
    playlist.reproduzir();
  }
}

// Exemplo de uso
const usuario1 = new Usuario("João");
const musica1 = new Musica("Imagine", "John Lennon", 180);
const musica2 = new Musica("Bohemian Rhapsody", "Queen", 320);

usuario1.bibliotecaMusical.adicionarMusica(musica1);
usuario1.bibliotecaMusical.adicionarMusica(musica2);

const playlist1 = usuario1.criarPlaylist("Playlist Favoritas");
usuario1.adicionarMusicaNaPlaylist(musica1, playlist1);
usuario1.adicionarMusicaNaPlaylist(musica2, playlist1);

usuario1.reproduzirPlaylist(playlist1);
