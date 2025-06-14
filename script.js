const productDetails = [
  {
    scratch: `<iframe src="https://scratch.mit.edu/projects/1110900471/embed" allowtransparency="true" width="485" height="402" frameborder="0" scrolling="no" allowfullscreen class="modal-media"></iframe>`,
    name: "T0系特急電車",
    desc: "特急ちゅうきょうで使用されている車両",
    detail: "窓を大きくしてお座敷として素晴らしい仕様にしたのとカフェテリアを設置"
  },
  {
    scratch: `<iframe src="https://scratch.mit.edu/projects/1061422464/embed" allowtransparency="true" width="485" height="402" frameborder="0" scrolling="no" allowfullscreen class="modal-media"></iframe>`,
    name: "C-600型",
    desc: "引退車両",
    detail: "C-600形は古くて環境に優しくないので引退"
  },
  {
    scratch: `<iframe src="https://scratch.mit.edu/projects/1061422464/embed" allowtransparency="true" width="485" height="402" frameborder="0" scrolling="no" allowfullscreen class="modal-media"></iframe>`,
    name: "C1000系",
    desc: "表示できる情報がありません",
    detail: "この辺の車両は情報が少ないため、現状がわかりません。"
  },
  {
    scratch: `<iframe src="https://scratch.mit.edu/projects/1126485238/embed" allowtransparency="true" width="485" height="402" frameborder="0" scrolling="no" allowfullscreen class="modal-media"></iframe>`,
    name: "C1120系",
    desc: "中京電鉄C1100形付属編成を改造して子会社の新大宮鉄道に譲渡してもらいました。",
    detail: "大赤字路線の埼玉線に導入してみました。詳細は以下の通りです 最高時速 90km 起動加速力2.5km 運用路線埼玉線 1編成あたり2両"
  },
  {
    scratch: `<iframe src="https://scratch.mit.edu/projects/1039653307/embed" allowtransparency="true" width="485" height="402" frameborder="0" scrolling="no" allowfullscreen class="modal-media"></iframe>`,
    name: "C2000系",
    desc: "表示できる情報がありません",
    detail: "この辺の車両は情報が少ないため、現状がわかりません。"
  },
  {
    scratch: `<iframe src="https://scratch.mit.edu/projects/1174067713/embed" allowtransparency="true" width="485" height="402" frameborder="0" scrolling="no" allowfullscreen class="modal-media"></iframe>`,
    name: "C4000系",
    desc: "表示できる情報がありません",
    detail: "貴重な交直流電車(50/60Hz)だったため陸奥急さんから、通勤快速用に譲渡させてもらいました"
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
