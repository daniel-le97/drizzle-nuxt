<script setup lang="ts">
import Hero from "~/components/Hero.vue";

const { $client } = useNuxtApp();

const { data: authors } = useAsyncData("authors", () => {
  return $client.getBooks.query();
});

const handleDelete = async (id: string): Promise<void> => {
  await $client.deleteBook.mutate({ id });

  refreshNuxtData("authors").catch((error) => {
    console.error('Could not refresh the "authors" cache');
    console.error(error);
  });
};

</script>

<template>
  <Hero />
  <main class="p-8 mt-48 flex flex-col items-center justify-start gap-8">
    <section>
      <h1 class="mb-8 font-bold text-xl">Authors</h1>
      <table class="table bg-white min-w-[300px]">
        <thead>
          <tr>
            <th>ID</th>
            <th>Firstname</th>
            <th>Lastname</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="author in authors" :key="author.id">
            <td>{{ author.id }}</td>
            <td>{{ author.title }}</td>
            <td>{{ author.createdAt }}</td>
            <td>
              <button @click="() => handleDelete(author.id)">
                <Icon name="ph:trash" size="18" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </section>

    <section class="">
      <h2 class="text-lg font-semibold mb-4 relative -top-2">Add author</h2>
      <AuthorForm />
    </section>

    <section>
      <div class="rounded-md p-2 card glass w-full">
        <div class="flex space-x-4 mx-auto">
          <div>
            <img
              src="https://imgs.search.brave.com/H-lJ3BpWOxay8dqqBF5qIjMeRk2AKZCwa09lkFZymPw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9kZXZl/bG9wMzY1LmdpdGxh/Yi5pby9udXh0anMt/Mi44LlgtZG9jL2Vu/L2xvZ29zL251eHQu/c3Zn.svg"
              alt=""
              class="w-24 h-24"
            />
          </div>
          <div>
            <img
              src="https://pbs.twimg.com/profile_images/1710017636166193152/7aUeiYMx_400x400.jpg"
              alt=""
              class="w-24 h-24 rounded-full"
            />
          </div>
          <div>
            <img
              src="https://imgs.search.brave.com/M-y4eFtW0iLiem_QarqonoXy8JBysIPMTTo_6-ZaOoE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zZWVr/bG9nby5jb20vaW1h/Z2VzL1QvdGFpbHdp/bmQtY3NzLWxvZ28t/NUFENDE3NTg5Ny1z/ZWVrbG9nby5jb20u/cG5n"
              alt=""
              class="w-24 h-24 object-fit"
            />
          </div>
        </div>
      </div>
    </section>

    <PricingPlan />
  </main>

  <!-- <section class="flex flex-col space-y-4 justify-center items-center p-10">
   <div class="flex space-x-4 w-full p-2">
     <div class="card w-1/2 glass ">
      <figure>
        <img
          class="rounded-md shadow-md w-full h-96 object-cover"
          src="https://imgs.search.brave.com/vcC208m6FcvH9KZ-S64oKTHJsdoCHw12X2Q05PfVQ3M/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9raW5z/dGEuY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDIyLzA2L251/eHQtanMtaW1hZ2Ut/MTAyNHg1MTIuanBl/Zw"
          alt="car!"
        />
      </figure>
    </div>

    <div class="p-4 w-1/2 rounded-md card glass ">
 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi repellat fugiat laboriosam error dignissimos. Accusantium enim aut eos nesciunt numquam atque officia rerum explicabo vel. Tempora sit voluptatibus facilis hic corporis reiciendis quibusdam unde nemo aspernatur voluptate rem aperiam commodi esse architecto id maxime ut harum ullam, excepturi quae ipsam nulla voluptatem perferendis earum. Nemo explicabo aspernatur atque aperiam recusandae vero. Officiis, cumque ipsam. Aliquam optio pariatur architecto aspernatur quos maxime, maiores ipsa, laborum, laudantium perferendis provident facere temporibus. Molestias sunt debitis cum alias magnam vitae odio iste reiciendis obcaecati. Debitis officia eum quas velit facilis ratione doloremque quibusdam perferendis.
    </div>
   </div>

    <div class="flex space-x-4 w-full p-2">
  

    <div class="p-4 w-1/2 rounded-md card glass ">
 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi repellat fugiat laboriosam error dignissimos. Accusantium enim aut eos nesciunt numquam atque officia rerum explicabo vel. Tempora sit voluptatibus facilis hic corporis reiciendis quibusdam unde nemo aspernatur voluptate rem aperiam commodi esse architecto id maxime ut harum ullam, excepturi quae ipsam nulla voluptatem perferendis earum. Nemo explicabo aspernatur atque aperiam recusandae vero. Officiis, cumque ipsam. Aliquam optio pariatur architecto aspernatur quos maxime, maiores ipsa, laborum, laudantium perferendis provident facere temporibus. Molestias sunt debitis cum alias magnam vitae odio iste reiciendis obcaecati. Debitis officia eum quas velit facilis ratione doloremque quibusdam perferendis.
    </div>
       <div class="card w-1/2 glass ">
      <figure>
        <img
          class="rounded-md shadow-md w-full h-96 object-cover"
          src="https://imgs.search.brave.com/vcC208m6FcvH9KZ-S64oKTHJsdoCHw12X2Q05PfVQ3M/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9raW5z/dGEuY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDIyLzA2L251/eHQtanMtaW1hZ2Ut/MTAyNHg1MTIuanBl/Zw"
          alt="car!"
        />
      </figure>
    </div>
   </div>




    <div class="flex space-x-4 w-full p-2">
     <div class="card w-1/2 glass ">
      <figure>
        <img
          class="rounded-md shadow-md w-full h-96 object-cover"
          src="https://imgs.search.brave.com/vcC208m6FcvH9KZ-S64oKTHJsdoCHw12X2Q05PfVQ3M/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9raW5z/dGEuY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDIyLzA2L251/eHQtanMtaW1hZ2Ut/MTAyNHg1MTIuanBl/Zw"
          alt="car!"
        />
      </figure>
    </div>

    <div class="p-4 w-1/2 rounded-md card glass ">
 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi repellat fugiat laboriosam error dignissimos. Accusantium enim aut eos nesciunt numquam atque officia rerum explicabo vel. Tempora sit voluptatibus facilis hic corporis reiciendis quibusdam unde nemo aspernatur voluptate rem aperiam commodi esse architecto id maxime ut harum ullam, excepturi quae ipsam nulla voluptatem perferendis earum. Nemo explicabo aspernatur atque aperiam recusandae vero. Officiis, cumque ipsam. Aliquam optio pariatur architecto aspernatur quos maxime, maiores ipsa, laborum, laudantium perferendis provident facere temporibus. Molestias sunt debitis cum alias magnam vitae odio iste reiciendis obcaecati. Debitis officia eum quas velit facilis ratione doloremque quibusdam perferendis.
    </div>
   </div>







  </section> -->
</template>
