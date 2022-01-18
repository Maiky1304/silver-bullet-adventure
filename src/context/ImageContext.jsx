import { createContext, useContext, useState } from "react";

const ImageContext = createContext(0);

const ImageProvider = ({ children }) => {
  const state = useState(0);

  return (
    <ImageContext.Provider value={state}>{children}</ImageContext.Provider>
  );
};

export { ImageProvider };
export default function useImage() {
  return useContext(ImageContext);
}
