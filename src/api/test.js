import axios from "axios";
async function getNews() {
  const resp = await axios.get(
    "http://localhost:8080/commercial_api/banners_v3/home_up?"
  );
}