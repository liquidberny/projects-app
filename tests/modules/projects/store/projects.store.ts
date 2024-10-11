import { useProjectStore } from '@/modules/projects/store/projects.store';
import { createPinia, setActivePinia } from 'pinia';

describe('useProjectsStore', () => {
  //tenemos que inicializar pinia
  beforeEach(() => {
    setActivePinia(createPinia());
    localStorage.clear();
  });

  test('should return default values', () => {
    const {
      noProjects,
      addProject,
      addTaskToProject,
      projectList,
      projects,
      projectsWithCompletion,
      toogleTask,
    } = useProjectStore();
    expect(noProjects).toBe(true);
    expect(projectList).toEqual([]);
    expect(projects).toEqual([]);
    expect(projectsWithCompletion).toEqual([]);

    //acciones
    expect(addProject).toBeInstanceOf(Function);
    expect(addTaskToProject).toBeInstanceOf(Function);
    expect(toogleTask).toBeInstanceOf(Function);
  });
});
