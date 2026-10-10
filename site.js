// 사이트 다국어: data-i18n 요소의 글자, data-lang-block 구역, 스크린샷 경로를 언어에 맞게 바꾼다.
const LANGS = ["ko", "en", "ja"];

const T = {
  ko: {
    "brand": "주방덱",
    "nav.support": "지원",
    "nav.terms": "이용약관",
    "nav.licenses": "오픈소스 라이선스",
    "nav.features": "특징",
    "nav.how": "플레이 방법",
    "nav.privacy": "개인정보 처리방침",
    "hero.tagline": "카드로 차리는 동네 식당",
    "hero.lead": "할머니의 작은 식당을 맡은 첫 하루. 재료와 조리 카드를 조리대에 올려 주문을 완성하고, 아침부터 심야, 마지막 심사위원까지 대접하세요.",
    "hero.play": "브라우저에서 플레이",
    "hero.ios": "App Store 출시 예정 · 무료",
    "features.title": "한 판 20분, 매번 다른 주방",
    "features.sub": "덱빌딩 로그라이크의 선택과 요리 게임의 손맛을 짧은 모바일 한 판에 담았습니다.",
    "f1.title": "카드로 요리하기",
    "f1.text": "재료 카드를 조리대에 놓고 썰기·굽기·끓이기·버무리기를 순서대로. 같은 턴에 이어 쓰면 연계로 품질이 오릅니다.",
    "f2.title": "기다리는 손님들",
    "f2.text": "손님마다 인내심이 줄어듭니다. 어떤 주문을 먼저 낼지, 어떤 카드를 다음 턴에 남길지 고르세요.",
    "f3.title": "나만의 식당으로 성장",
    "f3.text": "영업이 끝날 때마다 카드를 수련하고 도구를 들여 조리 중심·품질 중심·순환 중 나만의 운영 특기를 만듭니다.",
    "f4.title": "이어지는 이야기",
    "f4.text": "단골과 이웃, 미식가, 그리고 심사위원. 요리 노트와 식당의 기억은 다음 영업에도 이어집니다.",
    "shots.title": "스크린샷",
    "shots.sub": "세로 화면 한 손 플레이에 맞춘 화면입니다.",
    "shot.1": "타이틀",
    "shot.2": "오늘의 덱 구성",
    "shot.3": "주방",
    "shot.4": "보상 고르기",
    "shot.5": "시장",
    "how.title": "플레이 방법",
    "how.1": "메뉴 스타일과 시작 덱을 고릅니다.",
    "how.2": "턴마다 에너지 3과 카드 5장. 재료를 조리대에 놓고 주문 순서대로 조리하세요.",
    "how.3": "완성된 요리는 바로 서빙됩니다. 품질이 높을수록 팁이 늘어납니다.",
    "how.4": "영업 사이 시장에서 카드를 얻고 수련해 덱을 키우세요.",
    "how.5": "하트 3개를 지키며 마지막 심사위원의 코스 요리를 완성하면 성공!",
    "info.title": "안내",
    "info.privacy.title": "개인정보",
    "info.privacy.text": "개발자는 개인정보를 직접 수집하지 않습니다. 진행 기록은 기기에만 저장되고, iOS 앱의 광고는 Google AdMob이 제공합니다.",
    "info.privacy.link": "개인정보 처리방침 보기",
    "info.support.title": "지원·문의",
    "info.support.text": "버그 제보나 의견은 GitHub 이슈로 남겨 주세요.",
    "info.support.link": "문의 남기기",
    "info.lang.title": "지원 언어",
    "info.lang.text": "한국어 · English · 日本語",
    "footer.credits": "일러스트는 Z-Image-Turbo(Apache-2.0)로 생성한 이미지를 바탕으로 제작했습니다. 글꼴 Noto Sans KR/JP(SIL OFL 1.1). Godot Engine(MIT)으로 만들었습니다.",
  },
  en: {
    "brand": "Deck the Dish",
    "nav.support": "Support",
    "nav.terms": "Terms of Use",
    "nav.licenses": "Open Source Licenses",
    "nav.features": "Features",
    "nav.how": "How to Play",
    "nav.privacy": "Privacy Policy",
    "hero.tagline": "Your neighborhood diner, one card at a time",
    "hero.lead": "Your first day running Grandma's little restaurant. Put ingredient and cooking cards on your stations to fill orders, and serve everyone from breakfast to late night — and the food critic at the end.",
    "hero.play": "Play in Browser",
    "hero.ios": "Coming to the App Store · Free",
    "features.title": "20-minute runs, a different kitchen every time",
    "features.sub": "The choices of a deckbuilding roguelike and the feel of a cooking game, packed into a short mobile run.",
    "f1.title": "Cook with Cards",
    "f1.text": "Place ingredients on a station, then Chop, Grill, Boil and Mix in order. Chain cooks in the same turn to raise quality.",
    "f2.title": "Customers Are Waiting",
    "f2.text": "Every customer's patience runs down. Decide which order to finish first and which cards to keep for next turn.",
    "f3.title": "Grow Your Own Restaurant",
    "f3.text": "Train cards and buy tools between shifts, and shape your specialty: Cooking, Quality, or Cycle & Adapt.",
    "f4.title": "A Story That Carries On",
    "f4.text": "Regulars, neighbors, a gourmet and the critic. Your recipe notebook and the restaurant's memories carry over to the next service.",
    "shots.title": "Screenshots",
    "shots.sub": "Designed for one-handed portrait play.",
    "shot.1": "Title",
    "shot.2": "Build today's deck",
    "shot.3": "Kitchen",
    "shot.4": "Pick a reward",
    "shot.5": "Market",
    "how.title": "How to Play",
    "how.1": "Choose a menu style and a starting deck.",
    "how.2": "Each turn you get 3 energy and 5 cards. Place ingredients on stations and cook in the order shown.",
    "how.3": "Finished dishes are served right away. Higher quality earns bigger tips.",
    "how.4": "Between shifts, get and train cards at the market to grow your deck.",
    "how.5": "Keep your 3 hearts and complete the critic's course to win!",
    "info.title": "Info",
    "info.privacy.title": "Privacy",
    "info.privacy.text": "The developer does not collect personal data. Progress is stored only on your device; ads in the iOS app are served by Google AdMob.",
    "info.privacy.link": "Read the privacy policy",
    "info.support.title": "Support",
    "info.support.text": "Report bugs or share feedback through GitHub Issues.",
    "info.support.link": "Contact us",
    "info.lang.title": "Languages",
    "info.lang.text": "한국어 · English · 日本語",
    "footer.credits": "Illustrations are based on images generated with Z-Image-Turbo (Apache-2.0). Fonts: Noto Sans KR/JP (SIL OFL 1.1). Made with Godot Engine (MIT).",
  },
  ja: {
    "brand": "キッチンデッキ",
    "nav.support": "サポート",
    "nav.terms": "利用規約",
    "nav.licenses": "オープンソースライセンス",
    "nav.features": "特徴",
    "nav.how": "遊び方",
    "nav.privacy": "プライバシーポリシー",
    "hero.tagline": "カードで営む町の食堂",
    "hero.lead": "おばあちゃんの小さな食堂を任された最初の一日。食材と調理のカードを調理台に置いて注文を仕上げ、朝から深夜、最後の審査員までおもてなししましょう。",
    "hero.play": "ブラウザで遊ぶ",
    "hero.ios": "App Store 配信予定 · 無料",
    "features.title": "1回20分、毎回ちがう厨房",
    "features.sub": "デッキ構築ローグライクの選択と料理ゲームの手触りを、短いモバイルの1プレイに。",
    "f1.title": "カードで料理",
    "f1.text": "食材を調理台に置き、切る・焼く・煮る・和えるを順番に。同じターンに続けると連携で品質が上がります。",
    "f2.title": "待っているお客さん",
    "f2.text": "お客さんの忍耐は少しずつ減っていきます。どの注文を先に出すか、どのカードを次のターンに残すかを選びましょう。",
    "f3.title": "自分だけの食堂へ",
    "f3.text": "営業の合間にカードを修練し道具をそろえて、調理重視・品質重視・循環から得意分野を作ります。",
    "f4.title": "続いていく物語",
    "f4.text": "常連さん、ご近所さん、美食家、そして審査員。料理ノートと食堂の思い出は次の営業にも続きます。",
    "shots.title": "スクリーンショット",
    "shots.sub": "縦画面・片手プレイに合わせた画面です。",
    "shot.1": "タイトル",
    "shot.2": "今日のデッキ",
    "shot.3": "厨房",
    "shot.4": "報酬を選ぶ",
    "shot.5": "市場",
    "how.title": "遊び方",
    "how.1": "メニュースタイルと最初のデッキを選びます。",
    "how.2": "毎ターン、エネルギー3とカード5枚。食材を調理台に置き、注文の順番どおりに調理しましょう。",
    "how.3": "完成した料理はすぐに提供されます。品質が高いほどチップが増えます。",
    "how.4": "営業の合間に市場でカードを手に入れ、修練してデッキを育てましょう。",
    "how.5": "ハート3つを守りながら、最後の審査員のコース料理を完成させればクリア！",
    "info.title": "ご案内",
    "info.privacy.title": "プライバシー",
    "info.privacy.text": "開発者は個人情報を直接収集しません。進行データは端末内にのみ保存され、iOS アプリの広告は Google AdMob が配信します。",
    "info.privacy.link": "プライバシーポリシーを見る",
    "info.support.title": "サポート",
    "info.support.text": "不具合の報告やご意見は GitHub Issues からお寄せください。",
    "info.support.link": "お問い合わせ",
    "info.lang.title": "対応言語",
    "info.lang.text": "한국어 · English · 日本語",
    "footer.credits": "イラストは Z-Image-Turbo（Apache-2.0）で生成した画像をもとに制作しました。フォント Noto Sans KR/JP（SIL OFL 1.1）。Godot Engine（MIT）で制作。",
  },
};

function pickLang() {
  const q = new URLSearchParams(location.search).get("lang");
  if (LANGS.includes(q)) return q;
  try {
    const saved = localStorage.getItem("lang");
    if (LANGS.includes(saved)) return saved;
  } catch (e) { /* 저장소를 못 쓰는 환경 */ }
  const nav = (navigator.language || "en").slice(0, 2);
  return LANGS.includes(nav) ? nav : "en";
}

function apply(lang) {
  document.documentElement.lang = lang;
  const dict = T[lang];
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const v = dict[el.dataset.i18n];
    if (v !== undefined) el.textContent = v;
  });
  document.querySelectorAll("[data-lang-block]").forEach((el) => {
    el.classList.toggle("on", el.dataset.langBlock === lang);
  });
  document.querySelectorAll("img[data-shot]").forEach((el) => {
    el.src = `shots/${lang}/${el.dataset.shot}.jpg`;
  });
  document.querySelectorAll("img[data-wordmark]").forEach((el) => {
    el.src = `assets/wordmark_${lang}.png`;
    el.alt = `${dict["brand"]} — ${dict["hero.tagline"]}`;
  });
  document.querySelectorAll(".lang button").forEach((b) => {
    b.setAttribute("aria-pressed", String(b.dataset.lang === lang));
  });
  const page = document.body.dataset.page;
  const brand = dict["brand"];
  document.title = page && dict[page] ? `${dict[page]} — ${brand}` : `${brand} — ${dict["hero.tagline"]}`;
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".lang button").forEach((b) => {
    b.addEventListener("click", () => {
      try { localStorage.setItem("lang", b.dataset.lang); } catch (e) { /* 무시 */ }
      apply(b.dataset.lang);
    });
  });
  apply(pickLang());
});
