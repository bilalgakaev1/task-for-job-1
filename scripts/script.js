document.querySelector('.form-group_wrapper button').addEventListener('click', function(e) {
    e.preventDefault();
    
    // Получаем значения полей
    const nameInput = document.querySelector('.input-field[type="text"]');
    const emailInput = document.querySelector('.input-field[type="email"]');
    const checkbox = document.querySelector('.checkbox-input');
    
    // Проверяем условия
    let message = '';
    
    if (!nameInput.value.trim()) {
      message = 'Пожалуйста, введите ваше имя';
    } else if (!emailInput.value.trim()) {
      message = 'Пожалуйста, введите ваш email';
    } else if (!checkbox.checked) {
      message = 'Пожалуйста, согласитесь с Политикой Приватности';
    } else {
      message = 'Ваша заявка успешно создана!';
    }
    
    showModal(message);
  });
  
  function showModal(message) {
    const modalOverlay = document.createElement('div');
    modalOverlay.className = 'modal-overlay';
    
    const modal = document.createElement('div');
    modal.className = 'modal';
    
    const modalContent = document.createElement('div');
    modalContent.className = 'modal-content';
    modalContent.textContent = message;
    
    const closeBtn = document.createElement('button');
    closeBtn.className = 'modal-close';
    closeBtn.innerHTML = '&times;';
    closeBtn.addEventListener('click', closeModal);
    
    modal.appendChild(closeBtn);
    modal.appendChild(modalContent);
    modalOverlay.appendChild(modal);
    document.body.appendChild(modalOverlay);
    
    modalOverlay.addEventListener('click', function(e) {
      if (e.target === modalOverlay) {
        closeModal();
      }
    });
    
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        closeModal();
      }
    });
    
    function closeModal() {
      document.body.removeChild(modalOverlay);
      document.removeEventListener('keydown', closeModal);
    }
  }