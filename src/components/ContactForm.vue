<template>
  <div>
    <p class="text-center">Please use the form below to contact us regarding our projects!</p>
    <form action="https://formspree.io/chad@sacred-traditions.org" method="POST" class="form-horizontal">
      <b-row>
      
        <b-col cols="12" sm="6">
          <div class="form-group">
            <label>Name</label>
            <input type="text" class="form-control form-bordered" name="name">
          </div>
        </b-col>
        <b-col cols="12" sm="6">
          <div class="form-group">
            <label>Email</label>
            <input type="email" class="form-control form-bordered" name="email">
          </div>
        </b-col>
      
      
        <b-col cols="12" sm="12">
          <div class="form-group">
            <label>Message</label>
            <textarea class="form-control form-bordered" rows="8" name="message"></textarea>
          </div>
        </b-col>
      
      
        <b-col cols="12" sm="12">
          <div class="form-group">
            <button type="submit">Submit</button>
          </div>
        </b-col>
      
      </b-row>
    </form>
    <!-- .form-horizontal -->
  </div>
</template>
