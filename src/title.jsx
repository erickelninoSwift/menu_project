function title({ titleText }) {
  return (
    <>
      <div className="title">
        <h2>{titleText || "Default Title"}</h2>
        <div className="title-underline"></div>
      </div>
    </>
  );
}

export default title;
