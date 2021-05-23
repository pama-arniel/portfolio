<template>
<section id="contact-section" class="text-white body-font relative">
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
              <label for="email" class="leading-7 text-sm">Email</label>
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
            <Button :text="'Send'"/>
          </div>
        </form>

        <div class="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
          <a class="text-indigo-500">pamajosearniel@gmail.com</a>
          <p class="leading-normal my-5">
            Cebu, Philippines
          </p>
          <span class="inline-flex">
            <a class="text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a class="ml-4 text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a class="ml-4 text-gray-500">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a class="ml-4 text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
import Button from './Button.vue'

import emailjs from 'emailjs-com';
import EmailConfig from '../assets/email_config.js'

export default {
  name: 'Contact',
  components: {
    Button
  },
  data() {
    return {
        name: '',
        email: '',
        message: '',
    };
  },
  methods: {
    sendEmail(e) {
      emailjs.sendForm(EmailConfig.SERVICE_ID, EmailConfig.TEMPLATE_ID, e.target, EmailConfig.USER_ID,
      {
        from_name: this.name,
        reply_to: this.email,
        message: this.message
      })
        .then((result) => {
            console.log('SUCCESS!', result.status, result.text);
        }, (error) => {
            console.log('FAILED...', error);
        });
    }
  }
}
</script>
