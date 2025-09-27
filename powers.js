// powers.js

// ===== Dados dos Riders =====
const riders = {
  zeroone: {
    "Rising Hopper": "imagens/zero one/base.jpg",
    "Shining Hopper": "imagens/zero one/shining hopper.jpg",
    "Shining Assault Hopper": "imagens/zero one/Shining Assault Hopper.jpg",
    "MetalCluster Hopper": "imagens/zero one/MetalCluster Hopper.jpg",
    "Zero Two": "imagens/zero one/Zero Two.jpg"
  },
  saber: {
    "Brave Dragon": "imagens/Saber/Base.jpg",
    "Crimson Dragon": "imagens/Saber/Crimson Dragon.jpg",
    "Dragonic Knight": "imagens/Saber/Dragonic Knight.jpg",
    "Primitive Dragon": "imagens/Saber/Primitive Dragon.jpg",
    "Elemental Primitive Dragon": "imagens/Saber/Elemental Primitive Dragon.jpg",
    "Xross Saber": "imagens/Saber/Xross Saber.jpg"
  },
  revice: {
    "Rex Genome": "Imagens/Revice/base.jpg",
    "Barid Rex Genome": "Imagens/Revice/Barid Rex Genome.jpg",
    "Volcano Rex Genome/Barid Rex Genome": "Imagens/Revice/Volcano Rex Genome.jpg",
    "Jack Revice Genome": "Imagens/Revice/Jack Revice Genome.jpg",
    "Thunder Gale Genome": "Imagens/Revice/Thunder Gale Genome.jpg",
    "Ultimate Genome Revi/Ultimate Genome Vice": "Imagens/Revice/Ultimate Genome.jpg"
  },
  geats: {
    MagnumBoost: "Imagens/Geats/Base.jpg",
    "Fever Magnum Form": "Imagens/Geats/Fever Magnum Form.jpg",
    "Fever Boost Form": "Imagens/Geats/Fever Boost Form.jpg",
    "Command Form Cannon Mode": "Imagens/Geats/Command Form Cannon Mode.jpg",
    "Command Form Jet Mode": "Imagens/Geats/Command Form Jet Mode.jpg",
    "Boost MarkII": "Imagens/Geats/Boost MarkII.jpg",
    "Laser Boost": "Imagens/Geats/laser boost.jpg",
    "Boost MarkIII": "Imagens/Geats/Boost MarkIII.jpg",
    "Geats MarkIX": "Imagens/Geats/Geats MarkIX.jpg"
  },
  gotchard: {
    Steamhopper: "Imagens/Gotchard/Base.jpg",
    "Cross Ufo-X": "Imagens/Gotchard/Cross Ufo-X.jpg",
    "Cross X-Rex": "Imagens/Gotchard/Cross X-Rex.jpg",
    "Fire Gotchard": "Imagens/Gotchard/Fire Gotchard.jpg",
    "Iron Gotchard": "Imagens/Gotchard/Iron Gotchard.jpg",
    "Platinum Gotchard": "Imagens/Gotchard/Platinum Gotchard.jpg",
    "Rainbow Gotchard": "Imagens/Gotchard/Rainbow Gotchard.jpg"
  },
  gavv: {
    "Poppin Gummy": "Imagens/Gavv/Base.jpg",
    Caking: "Imagens/Gavv/Caking.jpg",
    "Blizzard Sorbet": "Imagens/Gavv/Blizzard Sorbet.jpg",
    "Over Gavv": "Imagens/Gavv/Over.jpg",
    "Master Gavv": "Imagens/Gavv/Master.jpg"
  },
  zeztz: {
    "Physicam Impact": "Imagens/Zeztz/Base.jpg",
    "Technolom Machinery": "Imagens/Zeztz/Technolom Machinery.jpg",
    "Esprim Barrier": "Imagens/Zeztz/Esprim Barrier.jpg",
    "Paradigm Gravity": "Imagens/Zeztz/Paradigm Gravity.jpg"
  }
};

// ===== Vídeos de cada forma =====
const riderVideos = {
  zeroone: {
    "Rising Hopper": "Imagens/Zero One/videos/base.mp4",
    "Shining Hopper": "Imagens/Zero One/videos/Shining Hopper.mp4",
    "Shining Assault Hopper": "Imagens/Zero One/videos/Shining Assault Hopper.mp4",
    "MetalCluster Hopper": "Imagens/Zero One/videos/MetalCluster Hopper.mp4",
    "Zero Two": "Imagens/Zero One/videos/Zero Two.mp4"
  },
  saber: {
    "Brave Dragon": "Imagens/Saber/videos/base.mp4",
    "Crimson Dragon": "Imagens/Saber/videos/Crimson Dragon.mp4",
    "Dragonic Knight": "Imagens/Saber/videos/Dragonic Knight.mp4",
    "Primitive Dragon": "Imagens/Saber/videos/Primitive Dragon.mp4",
    "Elemental Primitive Dragon": "Imagens/Saber/videos/Elemental Primitive Dragon.mp4",
    "Xross Saber": "Imagens/Saber/videos/Xross Saber.mp4"
  },
  revice: {
    "Rex Genome": "Imagens/Revice/videos/base.mp4",
    "Barid Rex Genome": "Imagens/Revice/videos/Barid Rex Genome.mp4",
    "Volcano Rex Genome/Barid Rex Genome": "Imagens/Revice/videos/Volcano Rex Genome.mp4",
    "Jack Revice Genome": "Imagens/Revice/videos/Jack Revice Genome.mp4",
    "Thunder Gale Genome": "Imagens/Revice/videos/Thunder Gale Genome.mp4",
    "Ultimate Genome Revi/Ultimate Genome Vice": "Imagens/Revice/videos/Ultimate Genome.mp4"
  },
  geats: {
    MagnumBoost: "Imagens/Geats/videos/base.mp4",
    "Fever Magnum Form": "Imagens/Geats/videos/Fever Magnum Form.mp4",
    "Fever Boost Form": "Imagens/Geats/videos/Fever Boost Form.mp4",
    "Command Form Cannon Mode": "Imagens/Geats/videos/Command Form Cannon Mode.mp4",
    "Command Form Jet Mode": "Imagens/Geats/videos/Command Form Jet Mode.mp4",
    "Boost MarkII": "Imagens/Geats/videos/Boost MarkII.mp4",
    "Laser Boost": "Imagens/Geats/videos/Laser Boost.mp4",
    "Boost MarkIII": "Imagens/Geats/videos/Boost MarkIII.mp4",
    "Geats MarkIX": "Imagens/Geats/videos/Geats MarkIX.mp4"
  },
  gotchard: {
    Steamhopper: "Imagens/Gotchard/videos/base.mp4",
    "Cross Ufo-X": "Imagens/Gotchard/videos/Cross Ufo-X.mp4",
    "Cross X-Rex": "Imagens/Gotchard/videos/Cross X-Rex.mp4",
    "Fire Gotchard": "Imagens/Gotchard/videos/Fire Gotchard.mp4",
    "Iron Gotchard": "Imagens/Gotchard/videos/Iron Gotchard.mp4",
    "Platinum Gotchard": "Imagens/Gotchard/videos/Platinum Gotchard.mp4",
    "Rainbow Gotchard": "Imagens/Gotchard/videos/Rainbow Gotchard.mp4"
  },
  gavv: {
    "Poppin Gummy": "Imagens/Gavv/videos/base.mp4",
    Caking: "Imagens/Gavv/videos/Caking.mp4",
    "Blizzard Sorbet": "Imagens/Gavv/videos/Blizzard Sorbet.mp4",
    "Over Gavv": "Imagens/Gavv/videos/Over Gavv.mp4",
    "Master Gavv": "Imagens/Gavv/videos/base.mp4"
  },
  zeztz: {
    "Physicam Impact": "Imagens/Zeztz/Videos/base.mp4", // Corrigido 'base' para 'Physicam Impact' para corresponder ao HTML/riderVideos
    "Technolom Machinery": "Imagens/Zeztz/videos/Technolom Machinery.mp4",
    "Esprim Barrier": "Imagens/Zeztz/videos/Esprim Barrier.mp4",
    "Paradigm Gravity": "Imagens/Zeztz/videos/Paradigm Gravity.mp4"
  }
};

// ===== Forma atual selecionada de cada Rider =====
const formasSelecionadas = {
  zeroone: "Rising Hopper",
  saber: "Brave Dragon",
  revice: "Rex Genome",
  geats: "MagnumBoost",
  gotchard: "Steamhopper",
  gavv: "Poppin Gummy",
  zeztz: "Physicam Impact" // Corrigido para a forma base correta
};

// ===== Troca de imagem e destaque do botão =====
function trocarForma(rider, forma, event) {
  if (event) event.preventDefault();
  
  const img = document.getElementById(`img-${rider}`);
  if (img && riders[rider] && riders[rider][forma]) {
    img.src = riders[rider][forma];
    img.alt = `${rider} - ${forma}`;
    formasSelecionadas[rider] = forma;

    // Lógica para mudar o estilo do botão
    // Encontra a section pai para evitar afetar outras tabelas
    const section = img.closest('section');
    const tabela = section ? section.querySelector('.tabela-formas') : null;
    
    if (tabela) {
      // 1. Remove a classe 'active' de todos os botões da tabela
      tabela.querySelectorAll('a').forEach(a => {
        a.classList.remove('active');
      });

      // 2. Adiciona a classe 'active' ao botão clicado
      if (event && event.currentTarget) {
        event.currentTarget.classList.add('active');
      }
    }
  }
}

// ===== Ativa as formas base ao carregar a página =====
function setInitialFormsActive() {
  // Mapeia os riders com base no HTML (s1 a s7)
  const riderSections = [
    's1', 's2', 's3', 's4', 's5', 's6', 's7'
  ];

  riderSections.forEach(id => {
    const section = document.getElementById(id);
    if (section) {
      // Pega o primeiro link (botão) da tabela de formas
      const firstLink = section.querySelector('.tabela-formas a');
      if (firstLink) {
        // Adiciona a classe 'active' ao primeiro botão (forma base)
        firstLink.classList.add('active');
      }
    }
  });
}

// ===== DOMContentLoaded =====
document.addEventListener("DOMContentLoaded", () => {
    
  // *** Ativa os botões das formas base ao carregar ***
  setInitialFormsActive();

  // Botão voltar ao topo
  const topoBtn = document.getElementById("topo-btn");
  window.addEventListener("scroll", () => {
    topoBtn.style.opacity = window.scrollY > 200 ? 1 : 0;
  });
  topoBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Scroll suave do menu
  document.querySelectorAll('#menu-horizontal a').forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        window.scrollTo({ top: targetSection.offsetTop, behavior: 'smooth' });
      }
    });
  });

  // Clique na imagem mostra o vídeo correspondente
  document.querySelectorAll('img[id^="img-"]').forEach(img => {
    img.addEventListener('click', () => {
      const rider = img.id.replace("img-", "");
      const forma = formasSelecionadas[rider];
      if (riderVideos[rider] && riderVideos[rider][forma]) {
        const videoElement = document.getElementById("video-rider");
        const videoSource = document.getElementById("video-source");
        videoSource.src = riderVideos[rider][forma];
        videoElement.load();
        document.getElementById("video-modal").style.display = "flex";
      }
    });
  });

  // Fechar modal
  document.querySelector('.close').addEventListener('click', () => {
    const videoElement = document.getElementById("video-rider");
    document.getElementById('video-modal').style.display = 'none';
    videoElement.pause();
  });
});
