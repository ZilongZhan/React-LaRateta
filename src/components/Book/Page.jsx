export const Page = ({ page }) => {
  console.log(page);
  return (
    <>
      <style>
        {`
          #checkbox-${page}:checked ~ .book .page-${page} {
            transform: rotateY(-180deg);
            z-index: ${page};
          }
        
          .page-${page} {
            z-index: ${13 - page};
          }

          .back-${page} {
            transform: rotateY(180deg);
            position: absolute;
            width: 100%;
            height: 100%;
            backface-visibility: hidden;
            z-index: ${page};
          }
        `}
      </style>
      <div className={`page page-${page}`}>
        <div className="front-page">
          <img src={`../../../assets/book/page-${page}.jpg`} alt="page" />
          <label className="next" htmlFor={`checkbox-${page}`}>
            <i>{page}</i>
          </label>
        </div>
        <div className={`back-${page}`}>
          <label className="prev" htmlFor={`checkbox-${page}`}>
            <i>{page}</i>
          </label>
        </div>
      </div>
    </>
  );
};
