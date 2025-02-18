<script setup>
import { useModalStore } from '@/stores/modalStore'
import { ref } from 'vue'

const isOpen = ref(false) // Состояние модального окна
const modalStore = useModalStore()
const isClosed = () => {
  modalStore.isOpen = false
}
</script>
<template>
  <div v-if="modalStore.isOpen" class="modal-overlay" @click="isOpen = false">
    <div class="modal" @click.stop>
      <h2>Регистрация</h2>
      <FormKit type="form" @submit="register" :actions="false">
        <template #default="{ state }">
          <FormKit type="email" name="email" label="Email" validation="required|email" />
          <FormKit type="text" name="login" label="Логин" validation="required" />
          <FormKit type="password" name="password" label="Пароль" validation="required|min:6" />

          <p v-if="errorMessage" class="error">{{ errorMessage }}</p>

          <div class="modal-actions">
            <button class="custom-btn" type="submit" :disabled="!state.valid">
              Зарегистрироваться
            </button>
            <button class="close-btn" type="button" @click="isClosed">Отмена</button>
          </div>
        </template>
      </FormKit>
    </div>
  </div>
</template>
<style scoped>
.open-modal-btn {
  background: #4caf50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: 0.3s;
}
.open-modal-btn:hover {
  background: #45a049;
}

/* Затемненный фон */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

/* Модальное окно */
.modal {
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 400px;
  text-align: center;
}

/* Ошибка */
.error {
  color: red;
  margin-top: 10px;
}

/* Действия внутри модалки */
.modal-actions {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

/* Кастомные кнопки */
.custom-btn {
  background: #007bff;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;
}
.custom-btn:hover {
  background: #0056b3;
}

.close-btn {
  background: #ccc;
  color: black;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;
}
.close-btn:hover {
  background: #bbb;
}
</style>
