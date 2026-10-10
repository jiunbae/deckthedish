#!/usr/bin/env python3
"""src/*.html 본문에 공통 머리·머리말·꼬리말을 씌워 최상위 페이지를 만든다.

    python3 build.py

언어 전환과 문구는 site.js 가 맡는다. 법적 문서는 src 안에 언어별 <article data-lang-block> 으로 둔다.
"""
import os

ROOT = os.path.dirname(os.path.abspath(__file__))
PAGES = {
    "index.html": "",
    "privacy.html": "nav.privacy",
    "terms.html": "nav.terms",
    "support.html": "nav.support",
    "licenses.html": "nav.licenses",
}

HEAD = """<!doctype html>
<html lang="ko">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>Deck the Dish</title>
<meta name="description" content="주방덱 (Deck the Dish) — 카드로 차리는 동네 식당. A cozy deckbuilding cooking roguelike. キッチンデッキ — カードで営む町の食堂。">
<meta property="og:title" content="주방덱 · Deck the Dish · キッチンデッキ">
<meta property="og:description" content="A cozy deckbuilding cooking roguelike: run Grandma's neighborhood restaurant one card at a time.">
<meta property="og:image" content="https://jiun.dev/deckthedish/assets/og.jpg">
<meta name="theme-color" content="#2a1e17">
<link rel="icon" href="assets/icon-192.png">
<link rel="apple-touch-icon" href="assets/icon-180.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700;900&family=Noto+Sans+KR:wght@400;700;900&display=swap" rel="stylesheet">
<link rel="stylesheet" href="style.css">
<script src="site.js" defer></script>
</head>
"""

HEADER = """<header class="bar">
  <div class="wrap">
    <a class="brand" href="./"><img src="assets/icon-192.png" alt=""><span data-i18n="brand">주방덱</span></a>
    <nav>
      <a href="./#features" data-i18n="nav.features">특징</a>
      <a href="support.html" data-i18n="nav.support">지원</a>
      <a href="privacy.html" data-i18n="nav.privacy">개인정보 처리방침</a>
      <div class="lang" role="group" aria-label="Language">
        <button type="button" data-lang="ko" aria-pressed="true">한국어</button>
        <button type="button" data-lang="en" aria-pressed="false">EN</button>
        <button type="button" data-lang="ja" aria-pressed="false">日本語</button>
      </div>
    </nav>
  </div>
</header>
"""

FOOTER = """<footer>
  <div class="wrap">
    <span>© 2026 Jiun Bae · <span data-i18n="brand">주방덱</span> (Deck the Dish)</span>
    <span class="links">
      <a href="privacy.html" data-i18n="nav.privacy">개인정보 처리방침</a> ·
      <a href="terms.html" data-i18n="nav.terms">이용약관</a> ·
      <a href="support.html" data-i18n="nav.support">지원</a> ·
      <a href="licenses.html" data-i18n="nav.licenses">오픈소스 라이선스</a>
    </span>
    <span class="credits" data-i18n="footer.credits"></span>
  </div>
</footer>
</body>
</html>
"""


def main() -> None:
    for name, page_key in PAGES.items():
        body = open(os.path.join(ROOT, "src", name), encoding="utf-8").read()
        attr = f' data-page="{page_key}"' if page_key else ""
        html = HEAD + f"<body{attr}>\n" + HEADER + "\n" + body + "\n" + FOOTER
        open(os.path.join(ROOT, name), "w", encoding="utf-8").write(html)
        print("built", name)


if __name__ == "__main__":
    main()
