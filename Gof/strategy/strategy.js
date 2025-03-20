// Strategy インターフェース
class MenuStrategy {
  open(menu) {
    throw new Error("open() メソッドを実装してください");
  }

  close(menu) {
    throw new Error("close() メソッドを実装してください");
  }
}

// スライドアニメーション
class SlideStrategy extends MenuStrategy {
  open(menu) {
    menu.classList.add("open-slide");
  }

  close(menu) {
    menu.classList.remove("open-slide");
  }
}

// フェードインアニメーション
class FadeStrategy extends MenuStrategy {
  open(menu) {
    menu.classList.add("open-fade");
  }

  close(menu) {
    menu.classList.remove("open-fade");
  }
}

// スケール（拡大）アニメーション
class ScaleStrategy extends MenuStrategy {
  open(menu) {
    menu.classList.add("open-scale");
  }

  close(menu) {
    menu.classList.remove("open-scale");
  }
}

// メニュー管理クラス（Context）
class Menu {
  constructor(strategy) {
    this.menu = document.getElementById("nav-menu");
    this.hamburger = document.getElementById("hamburger");
    this.strategy = strategy;

    this.hamburger.addEventListener("click", () => this.toggle());
    document.addEventListener("click", (event) => this.handleOutsideClick(event));
  }

  setStrategy(strategy) {
    this.strategy = strategy;
  }

  toggle() {
    if (this.menu.classList.contains("open-slide") ||
        this.menu.classList.contains("open-fade") ||
        this.menu.classList.contains("open-scale")) {
      this.close();
    } else {
      this.open();
    }
  }

  open() {
    this.strategy.open(this.menu);
  }

  close() {
    this.strategy.close(this.menu);
  }

  handleOutsideClick(event) {
    if (!this.menu.contains(event.target) && !this.hamburger.contains(event.target)) {
      this.close();
    }
  }
}

// 初期化
document.addEventListener("DOMContentLoaded", () => {
  const menu = new Menu(new SlideStrategy());

  // 切り替えボタン
  document.getElementById("slide-btn").addEventListener("click", () => menu.setStrategy(new SlideStrategy()));
  document.getElementById("fade-btn").addEventListener("click", () => menu.setStrategy(new FadeStrategy()));
  document.getElementById("scale-btn").addEventListener("click", () => menu.setStrategy(new ScaleStrategy()));
});