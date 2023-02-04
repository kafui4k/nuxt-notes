<script setup lang="ts">
const { supabase } = useSupabase();
const { user } = useAuth();

const notesInput = reactive({
  title: "",
  note: "",
});

const handleSubmit = async () => {
  if (!notesInput.title || !notesInput.note) return;

  await supabase.from("notes").insert({
    title: notesInput.title,
    note: notesInput.note,
    user_id: user?.value?.id,
  });

  notesInput.title = "";
  notesInput.note = "";
};
</script>

<template>
  <div>
    <NCard class="card">
      <input
        class="input"
        type="text"
        placeholder="Note title"
        v-model="notesInput.title"
      />
      <textarea
        class="input"
        name=""
        id=""
        cols="30"
        rows="10"
        placeholder="My note"
        v-model="notesInput.note"
      ></textarea>
      <NButton @click="handleSubmit">Save Note</NButton>
    </NCard>
  </div>
</template>

<style scoped>
.card {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
}

.input {
  border: 0.1rem solid rgba(0, 0, 0, 0.2);
  margin-bottom: 0.5rem;
  border-radius: 2.5rem;
  padding: 0.25rem;
}
</style>
