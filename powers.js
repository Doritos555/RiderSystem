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
    "Rex Genome": "imagens/revice/base.jpg",
    "Barid Rex Genome": "imagens/revice/Barid Rex Genome.jpg",
    "Volcano Rex Genome/Barid Rex Genome": "imagens/revice/Volcano Rex Genome.jpg",
    "Jack Revice Genome": "imagens/revice/Jack Revice Genome.jpg",
    "Thunder Gale Genome": "imagens/revice/Thunder Gale Genome.jpg",
    "Ultimate Genome Revi/Ultimate Genome Vice": "imagens/revice/Ultimate Genome.jpg"
  },
  geats: {
    MagnumBoost: "imagens/geats/Base.jpg",
    "Fever Magnum Form": "imagens/geats/Fever Magnum Form.jpg",
    "Fever Boost Form": "imagens/geats/Fever Boost Form.jpg",
    "Command Form Cannon Mode": "imagens/geats/Command Form Cannon Mode.jpg",
    "Command Form Jet Mode": "imagens/geats/Command Form Jet Mode.jpg",
    "Boost MarkII": "imagens/geats/Boost MarkII.jpg",
    "Laser Boost": "imagens/geats/laser boost.jpg",
    "Boost MarkIII": "imagens/geats/Boost MarkIII.jpg",
    "Geats MarkIX": "imagens/geats/Geats MarkIX.jpg"
  },
  gotchard: {
    Steamhopper: "imagens/gotchard/base.jpg",
    "Cross Ufo-X": "imagens/gotchard/Cross Ufo-X.jpg",
    "Cross X-Rex": "imagens/gotchard/Cross X-Rex.jpg",
    "Fire Gotchard": "imagens/gotchard/Fire Gotchard.jpg",
    "Iron Gotchard": "imagens/gotchard/Iron Gotchard.jpg",
    "Platinum Gotchard": "imagens/gotchard/Platinum Gotchard.jpg",
    "Rainbow Gotchard": "imagens/gotchard/Rainbow Gotchard.jpg"
  },
  gavv: {
    "Poppin Gummy": "imagens/gavv/base.jpg",
    Caking: "imagens/gavv/caking.jpg",
    "Blizzard Sorbet": "imagens/gavv/blizzard sorbet.jpg",
    "Over Gavv": "imagens/gavv/over.jpg",
    "Master Gavv": "imagens/gavv/master.jpg"
  },
  zeztz: {
    "Physicam Impact": "Imagens/Zeztz/base.jpg",
    "Technolom Machinery": "Imagens/Zeztz/Technolom Machinery.jpg",
    "Esprim Barrier": "Imagens/Zeztz/Esprim Barrier.jpg",
    "Paradigm Gravity": "Imagens/Zeztz/Paradigm Gravity.jpg"
  }
};

// ===== Vídeos de cada forma =====
const riderVideos = {
  zeroone: {
    "Rising Hopper": "Imagens/Zero One/Videos/base.mp4",
    "Shining Hopper": "Imagens/Zero One/Videos/Shining Hopper.mp4",
    "Shining Assault Hopper": "Imagens/Zero One/Videos/Shining Assault Hopper.mp4",
    "MetalCluster Hopper": "Imagens/Zero One/Videos/MetalCluster Hopper.mp4",
    "Zero Two": "Imagens/Zero One/Videos/Zero Two.mp4"
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
    "Rex Genome": "imagens/revice/Videos/base.mp4",
    "Barid Rex Genome": "imagens/revice/Videos/Barid Rex Genome.mp4",
    "Volcano Rex Genome/Barid Rex Genome": "imagens/revice/Videos/Volcano Rex Genome.mp4",
    "Jack Revice Genome": "imagens/revice/Videos/Jack Revice Genome.mp4",
    "Thunder Gale Genome": "imagens/revice/Videos/Thunder Gale Genome.mp4",
    "Ultimate Genome Revi/Ultimate Genome Vice": "imagens/revice/Videos/Ultimate Genome.mp4"
  },
  geats: {
    MagnumBoost: "Imagens/Geats/Videos/base.mp4",
    "Fever Magnum Form": "Imagens/Geats/Videos/Fever Magnum Form.mp4",
    "Fever Boost Form": "Imagens/Geats/Videos/Fever Boost Form.mp4",
    "Command Form Cannon Mode": "Imagens/Geats/Videos/Command Form Cannon Mode.mp4",
    "Command Form Jet Mode": "Imagens/Geats/Videos/Command Form Jet Mode.mp4",
    "Boost MarkII": "Imagens/Geats/Videos/Boost MarkII.mp4",
    "Laser Boost": "Imagens/Geats/Videos/Laser Boost.mp4",
    "Boost MarkIII": "Imagens/Geats/Videos/Boost MarkIII.mp4",
    "Geats MarkIX": "Imagens/Geats/Videos/Geats MarkIX.mp4"
  },
  gotchard: {
    Steamhopper: "Imagens/Gotchard/Videos/base.mp4",
    "Cross Ufo-X": "Imagens/Gotchard/Videos/Cross Ufo-X.mp4",
    "Cross X-Rex": "Imagens/Gotchard/Videos/Cross X-Rex.mp4",
    "Fire Gotchard": "Imagens/Gotchard/Videos/Fire Gotchard.mp4",
    "Iron Gotchard": "Imagens/Gotchard/Videos/Iron Gotchard.mp4",
    "Platinum Gotchard": "Imagens/Gotchard/Videos/Platinum Gotchard.mp4",
    "Rainbow Gotchard": "Imagens/Gotchard/Videos/Rainbow Gotchard.mp4"
  },
  gavv: {
    "Poppin Gummy": "Imagens/Gavv/Videos/base.mp4",
    Caking: "Imagens/Gavv/Videos/Caking.mp4",
    "Blizzard Sorbet": "Imagens/Gavv/Videos/Blizzard Sorbet.mp4",
    "Over Gavv": "Imagens/Gavv/Videos/Over Gavv.mp4",
    "Master Gavv": "Imagens/Gavv/Videos/base.mp4"
  },
  zeztz: {
    base: "Imagens/Zeztz/Videos/base.mp4",
    "Technolom Machinery": "Imagens/Zeztz/Videos/Technolom Machinery.mp4",
    "Esprim Barrier": "Imagens/Zeztz/Videos/Esprim Barrier.mp4",
    "Paradigm Gravity": "Imagens/Zeztz/Videos/Paradigm Gravity.mp4"
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
  zeztz: "base"
};

// ===== Troca de imagem =====
function trocarForma(rider, forma, event) {
  if (event) event.preventDefault();
  const img = document.getElementById(`img-${rider}`);
  if (img && riders[rider] && riders[rider][forma]) {
    img.src = riders[rider][forma];
    img.alt = `${rider} - ${forma}`;
    formasSelecionadas[rider] = forma;
  }
}

// ===== DOMContentLoaded =====
document.addEventListener("DOMContentLoaded", () => {

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
