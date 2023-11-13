<template>
<!-- Open the modal using ID.showModal() method -->

<dialog id="my_modal_1" class="modal">
  <div class="modal-box">
   <slot/>
    <div class="modal-action">
      <form method="dialog">
        <!-- if there is a button in form, it will close the modal -->
        <button class="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
</template>
