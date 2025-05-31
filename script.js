const productDetails = [
  {
    img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=cover&w=400&q=80",
    name: "スマートIoTデバイス",
    price: "価格：¥29,800",
    desc: "遠隔管理が可能な次世代IoTデバイス。オフィスや工場の効率化を実現します。",
    detail: "Wi-FiやLTE接続対応、センサー連携も可能。専用アプリからリアルタイムで状態監視や操作が行えます。API連携にも対応し、さまざまなシステム拡張が可能です。"
  },
  {
    img: "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=cover&w=400&q=80",
    name: "AIチャットボット",
    price: "価格：¥98,000",
    desc: "カスタマーサポートに最適なAI搭載のチャットボット。24時間自動対応が可能です。",
    detail: "自然言語処理AIを搭載し、お客様の質問や要望に自動で応答。FAQ自動学習・多言語対応・管理画面付きで、導入後もカンタン運用。"
  },
  {
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=cover&w=400&q=80",
    name: "業務管理クラウドシステム",
    price: "価格：月額 ¥12,000",
    desc: "社員の勤怠管理やプロジェクト進捗を一元管理できるクラウドサービス。",
    detail: "クラウドベースでどこからでも利用可能。勤怠・タスク・ファイル共有・進捗管理など多機能。セキュリティも万全で、スマートフォンにも対応。"
  },
  {
    img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=cover&w=400&q=80",
    name: "クラウド型名刺管理",
    price: "価格：月額 ¥2,900",
    desc: "スマホで撮影するだけで簡単に名刺をデジタル化・共有。",
    detail: "OCR技術で名刺情報を自動読み取り。社内共有や外部連携にも対応し、名刺管理の手間を大幅削減。"
  },
  {
    img: "https://images.unsplash.com/photo-1482062364825-616fd23b8fc1?auto=format&fit=cover&w=400&q=80",
    name: "オンライン会議システム",
    price: "価格：月額 ¥9,800",
    desc: "高画質・高音質でスムーズなコミュニケーションを実現。",
    detail: "画面共有・録画・チャット機能付き。大規模ミーティングも安定運用。セキュリティも万全。"
  },
  {
    img: "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?auto=format&fit=cover&w=400&q=80",
    name: "AI画像解析ソフト",
    price: "価格：¥250,000",
    desc: "画像から自動で異常を検出、品質管理や医療現場で活用可能。",
    detail: "機械学習モデルによる高精度な画像解析。工場の検品工程や医療画像診断の効率化に。"
  },
  {
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=cover&w=400&q=80",
    name: "リモートワーク管理ツール",
    price: "価格：月額 ¥7,800",
    desc: "社員の勤怠や作業進捗を遠隔で管理・分析。",
    detail: "PC操作ログ・タスク管理・勤怠打刻・レポート自動生成など、リモートワークの課題をまとめて解決。"
  },
  {
    img: "https://images.unsplash.com/photo-1515168833906-d2a3b82b1a48?auto=format&fit=cover&w=400&q=80",
    name: "AI翻訳デバイス",
    price: "価格：¥39,800",
    desc: "リアルタイムで多言語翻訳可能な携帯型デバイス。",
    detail: "50言語以上対応。ネット不要のオフライン翻訳も可能。海外出張やインバウンド対応に最適。"
  },
  {
    img: "https://images.unsplash.com/photo-1454023492550-5696f8ff10e1?auto=format&fit=cover&w=400&q=80",
    name: "スマートロックシステム",
    price: "価格：¥18,000",
    desc: "スマホで解錠、入退室履歴も自動記録。安心・安全を提供。",
    detail: "遠隔操作や一時パス発行も可能。個人宅からオフィス・施設まで幅広く対応。"
  },
  {
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=cover&w=400&q=80",
    name: "IoT温湿度センサー",
    price: "価格：¥12,000",
    desc: "遠隔地の温湿度データをリアルタイムでモニタリング。",
    detail: "アラート通知、クラウド連携、データ長期保存など多機能。農業・物流・オフィス管理などに。"
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
        <img src="${prod.img}" alt="${prod.name}">
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