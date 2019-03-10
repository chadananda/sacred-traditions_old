<template>
  <div>
    <p
      class="text-center"
    >Please use the form below to contact us regarding our projects!</p>
    <form action="https://formspree.io/chad@sacred-traditions.org" method="POST" class="form-horizontal">
      <div class="form-group">
        <div class="col-sm-6">
          <label>Name</label>
          <input type="text" class="form-control form-bordered" name="name">
        </div>
        <div class="col-sm-6">
          <label>Email</label>
          <input type="email" class="form-control form-bordered" name="email">
        </div>
      </div>
      <div class="form-group">
        <div class="col-sm-12">
          <label>Message</label>
          <textarea class="form-control form-bordered" rows="8" name="message"></textarea>
        </div>
      </div>
      <div class="form-group">
        <div class="col-sm-12">
          <button type="submit">Submit</button>
        </div>
      </div>
    </form>
    <!-- .form-horizontal -->
  </div>
</template>
