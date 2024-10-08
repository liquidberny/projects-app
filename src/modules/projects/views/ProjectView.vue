<template>
  <bread-crumbs :name="project?.name ?? 'No name'"></bread-crumbs>
</template>

<script setup lang="ts">
import BreadCrumbs from '@/modules/common/components/BreadCrumbs.vue';
import { useProjectStore } from '../store/projects.store';
import { ref, watch } from 'vue';
import type { Project } from '../interfaces/project.interface';

interface Props {
  id: string;
}

const props = defineProps<Props>();
const projectStore = useProjectStore();
const project = ref<Project | undefined>();

// const project = projectStore.projectList.find((project) => project.id === props.id);

watch(
  () => props.id,
  () => {
    project.value = projectStore.projectList.find((project) => project.id === props.id);
  },
  {
    inmediate: true,
  },
);
</script>
