const scratchIframe = `<iframe src="https://scratch.mit.edu/projects/1164408676/embed" allowtransparency="true" width="300" height="140" frameborder="0" scrolling="no" allowfullscreen></iframe>`;

const productDetails = [
  {
    embed: scratchIframe,
    name: "1000系通勤電車",
    price: "定員：120名",
    desc: "都市部の通勤に特化した省エネ車両。",
    detail: "最新の省エネ技術を搭載し、快適な通勤空間と静音性を両立。乗降もスムーズな広いドア設計です。"
  },
  {
    embed: scratchIframe,
    name: "2000系特急型",
    price: "定員：80名",
    desc: "長距離移動に快適な座席と静かな車内。",
    detail: "リクライニングシートやWi-Fiを完備。静粛性に優れ、長距離でも快適な移動を実現。"
  },
  {
    embed: scratchIframe,
    name: "3000系観光列車",
    price: "定員：60名",
    desc: "大きな窓と特別内装の観光用車両。",
    detail: "パノラマウィンドウと展望ラウンジ、地域の特産を活かした内装が特徴です。"
  },
  {
    embed: scratchIframe,
    name: "4000系空港アクセス車両",
    price: "定員：100名",
    desc: "大きな荷物スペースと多言語案内を備えた新型車両。",
    detail: "空港利用者向けに大容量荷物スペース、多言語対応の案内表示を装備しています。"
  },
  {
    embed: scratchIframe,
    name: "5000系快速電車",
    price: "定員：110名",
    desc: "都市間の素早い移動に適した高速車両。",
    detail: "高速運転と快適な乗り心地を両立。都市間輸送の主力車両です。"
  },
  {
    embed: scratchIframe,
    name: "6000系山岳車両",
    price: "定員：70名",
    desc: "急勾配も力強く走る山岳専用車両。",
    detail: "強力なモーターと耐寒・耐雪装備で山岳路線も安全に運行します。"
  },
  {
    embed: scratchIframe,
    name: "7000系リゾート車両",
    price: "定員：90名",
    desc: "リゾート地へのアクセスに最適な快適車両。",
    detail: "広い座席と特別デザインの内装で、リゾートへの旅を演出します。"
  },
  {
    embed: scratchIframe,
    name: "8000系新都市型",
    price: "定員：130名",
    desc: "新都市エリア向けの最新鋭車両。",
    detail: "車内Wi-FiやUSBコンセントを完備した都市型の新世代車両。"
  },
  {
    embed: scratchIframe,
    name: "9000系支線車両",
    price: "定員：50名",
    desc: "支線専用の小型・高効率車両。",
    detail: "小回りの利く設計で、地域密着の支線輸送に最適です。"
  },
  {
    embed: scratchIframe,
    name: "SL観光号",
    price: "定員：40名",
    desc: "レトロな蒸気機関車で特別な旅を。",
    detail: "歴史的な蒸気機関車で運転士体験や記念撮影も人気です。"
  }
];

document.addEventListener('DOMContentLoaded', function () {
  const modalOverlay = document.getElementById('modalOverlay');
  const modalInner = document.getElementById('modalInner');
  const modalClose = document.getElementById('modalClose');
  const productCards = document.querySelectorAll('.product-card');

  productCards.forEach(card => {
    card.addEventListener('click', function () {
      const idx = parseInt(card.getAttribute('data-product'), 10);
      const prod = productDetails[idx];
      modalInner.innerHTML = `
        ${prod.embed}
        <h3>${prod.name}</h3>
        <p class="price">${prod.price}</p>
        <p>${prod.desc}</p>
        <p>${prod.detail}</p>
      `;
      modalOverlay.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    });
  });

  modalClose.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', function (e) {
    if (e.target === modalOverlay) {
      closeModal();
    }
  });

  function closeModal() {
    modalOverlay.style.display = 'none';
    document.body.style.overflow = '';
    modalInner.innerHTML = '';
  }
});
