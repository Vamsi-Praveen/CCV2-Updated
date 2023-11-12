import axios from "axios"

//loader function
export const getContest = async ({ params }) => {
  const contest = await axios.get(`http://localhost:8000/coding/${params.id}`)
  return contest.data;
}

export const getGallery = async () =>{
  const Gallery = await axios.get(`http://localhost:8000/gallery/all`)
  return Gallery.data;
}