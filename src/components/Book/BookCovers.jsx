import { bookPages } from "../../../assets";
import { PageList } from "./PageList";

export const BookCovers = () => {
  return (
    <>
      <div className="cover">
        <label htmlFor="checkbox-0">
          <img
            className="cover-image"
            src="../../../assets/book/page-0.jpg"
            alt="cover"
          />
        </label>
      </div>
      <PageList bookPages={bookPages} />
      <div className="back-cover"></div>
    </>
  );
};
