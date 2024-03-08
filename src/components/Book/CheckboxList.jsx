import { Checkbox } from "./Checkbox";

export const CheckboxList = ({ bookPages }) => {
  return (
    <>
      {bookPages.map((page, index) => (
        <Checkbox key={index} page={page} />
      ))}
    </>
  );
};
