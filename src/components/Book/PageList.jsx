import { Page } from "./Page";

export const PageList = ({ bookPages }) => {
  return (
    <>
      {bookPages.map((page, index) => (
        <Page key={index} page={page} />
      ))}
    </>
  );
};
