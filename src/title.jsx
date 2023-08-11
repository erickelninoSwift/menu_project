function title({ titleText }) {
  return (
    <>
      <div className="title">
        <h1>{titleText || "Default Title"}</h1>
      </div>
      <div className="title-underline"></div>
    </>
  );
}

export default title;
