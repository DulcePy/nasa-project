export default function Footer(props) {
  const { toggleModal, data } = props;
  return (
    <footer>
      <div className="bg-gradient"></div>
      <div>
        <h3>Astronomy Picture of the Day</h3>
        <h2>{data?.title}</h2>
      </div>
      <button className="info-button" onClick={toggleModal}>
        <i className="fa-solid fa-circle-info"></i>
      </button>
    </footer>
  );
}
