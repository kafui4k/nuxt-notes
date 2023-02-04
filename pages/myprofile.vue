<script setup lang="ts">
const { supabase } = useSupabase();
const { user } = useAuth();

const notesResponse = ref();

if (process.client) {
  let { data: notes, error } = await supabase
    .from("notes")
    .select("*")
    .eq("user_id", user?.value?.id);

  notesResponse.value = notes;
}

definePageMeta({
  middleware: "auth",
});
</script>

<template>
  <div>
    <div class="container">
      <h3>My Notes</h3>
      <NotesForm />
      <div class="card-container" v-if="notesResponse">
        <NCard class="card" v-for="note in notesResponse" :key="note.id">
          <h2>{{ note.title }}</h2>
          <p>{{ note.note }}</p>
        </NCard>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 50%;
  margin: 0 auto;
  padding: 3rem 0;
  height: 90vh;
}

h3 {
  font-size: 2rem;
}

.card-container {
  margin-top: 1.5rem;
}

.card {
  padding: 1rem;
}

.card h2 {
  font-weight: bold;
  /* font-size: 0.5rem; */
  margin-top: 1.5rem;
}
</style>
