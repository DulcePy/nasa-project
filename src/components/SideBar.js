export default function SideBar(props) {
  const { toggleModal } = props;

  return (
    <div className="sidebar">
      <div className="bg-overlay" onClick={toggleModal}></div>
      <div className="sidebar-content">
        <h2>Some title here</h2>
        <div className="description-container">
          <p>Description</p>
          <p className="description-text">
            lorem ipsum dolor sit amet, consectetur adipiscing elit. sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <button onClick={toggleModal}>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
}
