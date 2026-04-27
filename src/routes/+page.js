import Project from "$lib/content/project"

export const load = async () => {
    return { places: await Project.byPlace() }
}