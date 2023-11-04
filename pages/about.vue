<script setup lang="ts"></script>

<template>
  <main>
    <section class="lg:p-10 md:p-8 sm:p-2 lg:flex-row flex flex-col  items-center  justify-center w-full ">
      <div class="lg:w-1/2 w-2/3 flex flex-col space-y-6 lg:p-8 mb-8 lg:mb-0">
        <div class="text-4xl font-bold prose">
          About Us
        </div>
        <div class="">
          At [Your Company Name], we are passionate about technology and dedicated to delivering innovative solutions. As a team of software developers and IT specialists, we strive to push the boundaries of what's possible in the digital world. Our commitment to excellence and our love for all things tech drive us to provide cutting-edge services and products to our clients.
        </div>
        <div class="">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, ipsam!
        </div>
      </div>

      <div class="w-1/2 flex">
        <div class="flex">
          <img src="https://images.unsplash.com/photo-1698915583082-ae18c41f50c0?auto=format&fit=crop&q=80&w=1364&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" class="">
        </div>

        <div class="flex flex-col">
          <img src="https://images.unsplash.com/photo-1682686578707-140b042e8f19?auto=format&fit=crop&q=80&w=1375&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" class="">
          <img src="https://images.unsplash.com/photo-1698180687511-bd6c0104ee98?auto=format&fit=crop&q=80&w=1397&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="">
        </div>
      </div>
    </section>

    <section class="p-8 flex flex-col space-y-4 bg-base-100 mt-24">
      <div class="flex">
        <div class="w-1/2 flex items-center justify-center">
          <img src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=1170&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="">
        </div>

        <div class="w-1/2 flex flex-col space-y-6 p-10">
          <div class="text-4xl font-bold">
            The Mission
          </div>
          <p class="">
            Our Mission

            Our mission is to harness the power of technology to solve complex problems and make the world a better place. We are driven by the belief that the right software can transform businesses and improve lives. We aim to create solutions that are not only efficient but also user-friendly, ensuring a seamless experience for our clients and their customers.
          </p>
        </div>
      </div>
    </section>

    <section class="p-8 flex flex-col space-y-4">
      <div class="flex">
        <div class="w-1/2 flex flex-col space-y-6 p-10">
          <div class="text-4xl font-bold">
            What Sets us apart
          </div>
          <ul class="space-y-4">
            <li><strong>Technical Expertise:</strong> Our team comprises highly skilled software developers and IT specialists who excel in their respective fields. We keep up with the latest trends and technologies to provide the best solutions.</li>
            <li><strong>Innovation:</strong> We love staying on the cutting edge of technology. We're not afraid to think outside the box and find creative solutions to your challenges.</li>
            <li><strong>Customer-Centric Approach:</strong> We believe that our success is closely tied to the success of our clients. We work closely with you to understand your unique needs and tailor our services accordingly.</li>
            <li><strong>Passion:</strong> Our love for technology is at the core of what we do. It's not just a job; it's our passion, and that passion shines through in our work.</li>
          </ul>
        </div>
        <div class="w-1/2 flex items-center justify-center">
          <img src="https://images.unsplash.com/photo-1499540633125-484965b60031?auto=format&fit=crop&q=80&w=1171&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="">
        </div>
      </div>
    </section>

    <section class="p-8 flex flex-col space-y-4  ">
      <div class="flex">
        <div class="w-1/2 flex items-center justify-center">
          <img src="https://images.unsplash.com/photo-1558522195-e1201b090344?auto=format&fit=crop&q=80&w=1170&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="">
        </div>

        <div class="w-1/2 flex flex-col space-y-6 p-10">
          <div class="text-4xl font-bold">
            Our Services
          </div>
          <ul class="space-y-4">
            <li><strong>Software Development:</strong> We design and build custom software solutions that meet your business's specific needs.</li>
            <li><strong>IT Consultation:</strong> Our IT specialists provide expert guidance to help you make the right technology decisions for your business.</li>
            <li><strong>Podcasts:</strong> We also enjoy sharing our knowledge and insights through our tech-focused podcasts, where we discuss the latest trends and developments in the industry.</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="p-8 py-16  mt-24 flex flex-col items-center justify-center space-y-4 bg-base-100  ">
      <div class="text-center text-4xl font-bold">
        Join Us On Our Journey
      </div>

      <div class="w-2/3">
        We invite you to join us on this exciting journey of technological exploration and innovation. Whether you're a client seeking solutions or someone who shares our passion for technology, we're thrilled to have you with us.
        Feel free to reach out to us
      </div>
      <NuxtLink to="/contact" class="btn btn-warning w-fit">
        Contact Page
      </NuxtLink>
    </section>
  </main>
</template>

<style>

</style>
