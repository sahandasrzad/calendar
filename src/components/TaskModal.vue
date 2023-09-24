<template>
  <transition name="pop" appear>
    <div
      v-if="taskStore.modalStatus"
      class="relative z-10 modal"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div class="fixed inset-0 bg-gray-500 bg-opacity-40 transition-opacity"></div>
      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div
          class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
        >
          <div
            class="relative transform rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
          >
            <div class="form-container">
              <modal-form :formObject="taskStore.task"></modal-form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
  import {useTaskStore} from '@/stores/task'
  import ModalForm from '@/components/ModalForm.vue'
  // pinia store
  let taskStore = useTaskStore()
  //
</script>
<style scoped>
  .pop-enter-active,
  .pop-leave-active {
    transition: opacity 0.5s ease;
  }
  .pop-enter-from,
  .pop-leave-to {
    opacity: 0;
  }
</style>
