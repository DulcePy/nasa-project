export default function SideBar(props) {
  const { toggleModal, data } = props;

  return (
    <div className="sidebar">
      <div className="bg-overlay" onClick={toggleModal}></div>
      <div className="sidebar-content">
        <h2>{data?.title}</h2>
        <div className="description-container">
          <p className="description-title">{data?.date}</p>
          <p className="description-text">
            {data?.explanation}
          </p>
        </div>
        <button onClick={toggleModal}>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
}
