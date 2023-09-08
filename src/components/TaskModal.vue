<template>
  <transition name="pop" appear>
    <div
      v-if="taskStore.modalStatus"
      class="relative z-10 modal"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        class="fixed inset-0 bg-gray-500 bg-opacity-40 transition-opacity"
      ></div>

      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div
          class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
        >
          <div
            class="relative transform rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
          >
            <div class="form-container">
              <modal-form :formObject="taskStore.lastTask"></modal-form>
            </div>

            <div
              class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6"
            >
              <button
                type="button"
                class="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
              >
                save
              </button>
              <button
                @click.prevent="closeModal"
                type="button"
                class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
  import { useTaskStore } from '@/stores/task'

  import ModalForm from '@/components/ModalForm.vue'
  const taskStore = useTaskStore()
  const closeModal = () => {
    taskStore.changeModalStatus()
  }
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
