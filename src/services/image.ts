import { postApi } from "./config/axios";

const imageService = {
  generateImage: (body: { prompt: string; size: string }) => {
    return postApi("/image-generator", body);
  },
};

export default imageService;
