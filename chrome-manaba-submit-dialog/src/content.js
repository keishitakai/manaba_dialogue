'use strict';

const confirmSubmit = (e) => {
  if (confirm('以下の要素を確認してください。\n・拡張子\n・時間などの変化する値\n・目次のページ番号\n・ヘッダーの情報') === false) {
    e.preventDefault();
  }
  setConfirmToSubmitButton();
};

const setConfirmToSubmitButton = () => {
  let setIntervalId = 0;

  const innerMethod1 = () => {
    const submitButton = document.querySelector('input[name="action_ReportStudent_commitdone"]');
    if (submitButton === null) {
      return;
    }
    submitButton.addEventListener('click', confirmSubmit, { capture: true });
    clearInterval(setIntervalId);
  };

  const innerMethod2 = () => {
    const submitButton = document.querySelector('input[name="action_CollEdit_create"]');
    if (submitButton === null) {
      return;
    }
    submitButton.addEventListener('click', confirmSubmit, { capture: true });
    clearInterval(setIntervalId);
  };

  const innerMethod3 = () => {
    const submitButton = document.querySelectorAll('input[name="action_CollPostComment_comment"]')[1];
    if (submitButton === null) {
      return;
    }
    submitButton.addEventListener('click', confirmSubmit, { capture: true });
    clearInterval(setIntervalId);
  };

  setIntervalId = setInterval(innerMethod1, 1000);
  setIntervalId = setInterval(innerMethod2, 1000);
  setIntervalId = setInterval(innerMethod3, 1000);
};

window.addEventListener('load', setConfirmToSubmitButton);