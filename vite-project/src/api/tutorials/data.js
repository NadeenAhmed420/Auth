import axiosInstance from '../axiosInstance';

const BASE_PATH = '/tutorial';

export async function getAllTutorials() {
  const res = await axiosInstance.get(BASE_PATH);
  return res.data.tutorials;
}

export async function getTutorialById(id) {
  const res = await axiosInstance.get(`${BASE_PATH}/${id}`);
  return res.data.tutorial;
}

export async function createTutorial(tutorialData) {
  const res = await axiosInstance.post(BASE_PATH, tutorialData);
  return res.data.tutorial;
}

export async function updateTutorial(id, updatedData) {
  const res = await axiosInstance.put(`${BASE_PATH}/${id}`, updatedData);
  return res.data.tutorial;
}

export async function deleteTutorial(id) {
  const res = await axiosInstance.delete(`${BASE_PATH}/${id}`);
  return res.data.message;
}
