export default function Footer(props) {

    const {showModal, toggleModal} = props;
  return (
    <footer>
      <div className="bg-gradient"></div>
      <div>
        <h2>Some title here</h2>
        <h3>APOD PROJECT</h3>
      </div>
      <button className="info-button" onClick={toggleModal}>
        <i className="fa-solid fa-circle-info"></i>
      </button>
    </footer>
  );
}
