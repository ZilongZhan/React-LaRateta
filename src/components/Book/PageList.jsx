import { Page } from "./Page";

export const PageList = ({ bookPages }) => {
  const randomArray = () => {
    let array;

    for (let index = 0; index < 4; index++) {
      const piece = Math.floor(Math.random() * 3);
      for (let j = 0; j < 4; j++) {}
    }
  };

  return (
    <>
      {bookPages.map((page, index) => (
        <Page key={index} page={page} />
      ))}
    </>
  );
};
