const Notification = function () {
  const notication = document.querySelector('.notification');

  const show = function (message) {
      hide();

      notication.querySelector('.notification-description').textContent = message;
      notication.classList.add('active');

      setTimeout(() => hide(), 3000);
  };

  const hide = function () {
      const currentAlert = document.querySelector('.notification');

      if (currentAlert) {
          currentAlert.classList.remove('active');
      }
  };

  return {
      show
  }
};