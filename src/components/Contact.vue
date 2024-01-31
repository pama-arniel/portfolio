<template>
<div>
  <section id="contact-section" class="text-white body-font relative" v-scroll-animation>
    <div class="container px-5 py-24 mx-auto section-background">
      <div class="flex flex-col text-center w-full mb-12">
        <h1 class="text-4xl title-font purple-header mb-4">Send Me A Message</h1>
        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">I will reply to any inquiry as soon as possible.</p>
      </div>
      <div class="lg:w-1/2 md:w-2/3 mx-auto">
        <div class="flex flex-wrap -m-2">

          <!-- contact form -->
          <form class="flex flex-wrap -m-2" @submit.prevent="sendEmail">
            <div class="p-2 w-1/2">
              <div class="relative">
                <label for="name" class="leading-7 text-sm">Name</label>
                <input
                  v-model.trim="name"
                  type="text" id="name" name="from_name" required
                  class="w-full bg-white bg-opacity-80 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                >
              </div>
            </div>
            <div class="p-2 w-1/2">
              <div class="relative">
                <label for="email" class="leading-7 text-sm">Your Email</label>
                <input
                  v-model.trim="email"
                  type="email" id="email" name="reply_to" required
                  class="w-full bg-white bg-opacity-80 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                >
              </div>
            </div>
            <div class="p-2 w-full">
              <div class="relative">
                <label for="message" class="leading-7 text-sm">Message</label>
                <textarea
                  v-model="message"
                  id="message" name="message" required
                  class="w-full bg-white bg-opacity-80 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-black py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
            </div>
            <div class="p-2 w-full flex justify-center">
              <Button :text="'Send'" :isLoading="isLoading"/>
            </div>
          </form>

          <div class="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
            <a class="text-indigo-500">pamajosearniel@gmail.com</a>
            <p class="leading-normal my-5">
              Cebu, Philippines
            </p>
            
            <SocialMedia />
          </div>
        </div>
      </div>
    </div>
  </section>

  <Alert :type="alertType" ref='alertDialog'/>
</div>
</template>

<script>
import Button from './Button.vue'
import Alert from './Alert.vue'
import SocialMedia from './SocialMedia.vue'

import emailjs from 'emailjs-com';
import EmailConfig from '../assets/email_config.js'

export default {
  name: 'Contact',
  components: {
    Button,
    Alert,
    SocialMedia
  },
  data() {
    return {
        name: '',
        email: '',
        message: '',
        alertType: 'success',
        isLoading: false,
    };
  },
  methods: {
    sendEmail(e) {
      this.isLoading = true;
      emailjs.sendForm(EmailConfig.SERVICE_ID, EmailConfig.TEMPLATE_ID, e.target, EmailConfig.USER_ID,
      {
        from_name: this.name,
        reply_to: this.email,
        message: this.message
      })
        .then(() => {
            this.alertType = 'success';
            this.$refs.alertDialog.showAlert(true);
            
            // reset data
            this.isLoading = false;
            this.message = '';
            this.email = '';
            this.name = '';
        }, () => {
            this.alertType = 'error';
            this.$refs.alertDialog.showAlert(true);
            this.isLoading = false;
        });
    }
  }
}
</script>
