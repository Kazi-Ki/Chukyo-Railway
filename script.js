const productDetails = [
  {
    scratch: `<iframe src="https://scratch.mit.edu/projects/1110900471/embed" allowtransparency="true" width="485" height="402" frameborder="0" scrolling="no" allowfullscreen class="modal-media"></iframe>`,
    name: "T0系特急電車",
    desc: "特急ちゅうきょうで使用されている車両",
    detail: "窓を大きくしてお座敷として素晴らしい仕様にしたのとカフェテリアを設置"
  },
  {
    scratch: `<iframe src="https://scratch.mit.edu/projects/1164410000/embed" allowtransparency="true" width="485" height="402" frameborder="0" scrolling="no" allowfullscreen class="modal-media"></iframe>`,
    name: "C-600型",
    desc: "引退車両",
    detail: "C-600形は古くて環境に優しくないので引退"
  },
  {
    scratch: `<iframe src="https://scratch.mit.edu/projects/1061422464/embed" allowtransparency="true" width="485" height="402" frameborder="0" scrolling="no" allowfullscreen class="modal-media"></iframe>`,
    name: "3000系観光列車",
    desc: "大きな窓と特別内装の観光用車両。",
    detail: "パノラマウィンドウと展望ラウンジ、地域の特産を活かした内装が特徴です。"
  },
  {
    scratch: `<iframe src="https://scratch.mit.edu/projects/1164412222/embed" allowtransparency="true" width="485" height="402" frameborder="0" scrolling="no" allowfullscreen class="modal-media"></iframe>`,
    name: "4000系空港アクセス車両",
    desc: "大きな荷物スペースと多言語案内を備えた新型車両。",
    detail: "空港利用者向けに大容量荷物スペース、多言語対応の案内表示を装備しています。"
  },
  {
    scratch: `<iframe src="https://scratch.mit.edu/projects/1164413333/embed" allowtransparency="true" width="485" height="402" frameborder="0" scrolling="no" allowfullscreen class="modal-media"></iframe>`,
    name: "5000系快速電車",
    desc: "都市間の素早い移動に適した高速車両。",
    detail: "高速運転と快適な乗り心地を両立。都市間輸送の主力車両です。"
  },
  {
    scratch: `<iframe src="https://scratch.mit.edu/projects/1164414444/embed" allowtransparency="true" width="485" height="402" frameborder="0" scrolling="no" allowfullscreen class="modal-media"></iframe>`,
    name: "6000系山岳車両",
    desc: "急勾配も力強く走る山岳専用車両。",
    detail: "強力なモーターと耐寒・耐雪装備で山岳路線も安全に運行します。"
  },
  {
    scratch: `<iframe src="https://scratch.mit.edu/projects/1164415555/embed" allowtransparency="true" width="485" height="402" frameborder="0" scrolling="no" allowfullscreen class="modal-media"></iframe>`,
    name: "7000系リゾート車両",
    desc: "リゾート地へのアクセスに最適な快適車両。",
    detail: "広い座席と特別デザインの内装で、リゾートへの旅を演出します。"
  },
  {
    scratch: `<iframe src="https://scratch.mit.edu/projects/1164416666/embed" allowtransparency="true" width="485" height="402" frameborder="0" scrolling="no" allowfullscreen class="modal-media"></iframe>`,
    name: "8000系新都市型",
    desc: "新都市エリア向けの最新鋭車両。",
    detail: "車内Wi-FiやUSBコンセントを完備した都市型の新世代車両。"
  },
  {
    scratch: `<iframe src="https://scratch.mit.edu/projects/1164417777/embed" allowtransparency="true" width="485" height="402" frameborder="0" scrolling="no" allowfullscreen class="modal-media"></iframe>`,
    name: "9000系支線車両",
    desc: "支線専用の小型・高効率車両。",
    detail: "小回りの利く設計で、地域密着の支線輸送に最適です。"
  },
  {
    scratch: `<iframe src="https://scratch.mit.edu/projects/1164418888/embed" allowtransparency="true" width="485" height="402" frameborder="0" scrolling="no" allowfullscreen class="modal-media"></iframe>`,
    name: "SL観光号",
    desc: "レトロな蒸気機関車で特別な旅を。",
    detail: "歴史的な蒸気機関車で運転士体験や記念撮影も人気です。"
  }
];

document.addEventListener('DOMContentLoaded', function () {
  const modalOverlay = document.getElementById('modalOverlay');
  const modalInner = document.getElementById('modalInner');
  const productCards = document.querySelectorAll('.product-card');

  productCards.forEach(card => {
    card.addEventListener('click', function () {
      const idx = parseInt(card.getAttribute('data-product'), 10);
      showModal(idx);
    });
  });

  function showModal(idx) {
    const prod = productDetails[idx];
    modalInner.innerHTML = `
      <div style="margin-bottom: 1em;">
        ${prod.scratch}
      </div>
      <div class="modal-explain">
        <h3>${prod.name}</h3>
        <p><strong>解説：</strong>${prod.desc}</p>
        <p>${prod.detail}</p>
      </div>
    `;
    modalOverlay.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }

  modalOverlay.addEventListener('click', function (e) {
    if (e.target === modalOverlay) closeModal();
  });

  function closeModal() {
    modalOverlay.style.display = 'none';
    document.body.style.overflow = '';
    modalInner.innerHTML = '';
  }
});
