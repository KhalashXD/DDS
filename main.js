// Componente Card
const Card = ({ title, content, customAction }) => {
  const [likes, setLikes] = React.useState(0);
  const [bgColor, setBgColor] = React.useState("#f9f9f9");
//Contador de likes
  const handleLike = () => {
    setLikes(likes + 1);
  };
//Cambiar color
  const handleChangeColor = () => {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    setBgColor(randomColor);
  };

  return (//tarjetas en el div
    <div className="card" style={{ backgroundColor: bgColor }}>
      <h2>{title}</h2>
      <p>{content}</p>
      {customAction === "like" ? (//tarjeta likes
        <button onClick={handleLike}>Like {likes}</button>
      ) : (
        <button onClick={handleChangeColor}>Change Color</button>
      )}
    </div>
  );
};

// Aplicación principal
const App = () => {
  return (
    <div className="app">
      <h1>Tarjetas de React</h1>
      <Card title="Tarjeta de Likes" content="Debería ser un contador de likes" customAction="like" />
      <Card title="Tarjeta colorida" content="Debería cambiar de color" customAction="color" />
    </div>
  );
};

// Inicializando la root
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
