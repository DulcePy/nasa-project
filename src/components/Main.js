export default function Main(props) {
  const {data} = props;
  return (
    <div className="image-container">
      <img
        className="main-image"
        alt={data.title || 'NASA Image'}
        src={data.hdurl}
      />
    </div>
  );
}
