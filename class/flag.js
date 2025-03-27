class Prison {
    constructor(breakFlag, deathFlag) {
        this.breakFlag = breakFlag;
        this.deathFlag = deathFlag;
    }

    commit() {
        $(this.breakFlag).prop('disabled', true);
        $(this.deathFlag).prop('disabled', false);
    }
}

// 例: ボタンの無効化と有効化
const jail = new Prison("#breakButton", "#deathButton");
jail.commit();