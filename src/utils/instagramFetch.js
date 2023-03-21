import axios from 'axios';

const fetchInstagramImages = async () => {
  const res = await axios.get(`https://graph.instagram.com/me/media?fields=media_url,media_type,permalink&access_token=${import.meta.env.VITE_IG_ACCESS_TOKEN}`);
  return res.data;
};

export default fetchInstagramImages;
