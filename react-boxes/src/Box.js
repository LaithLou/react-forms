function Box({ height, width, color, remove }) {
  const boxStyle = `height:${height} width:${width}, backgroundColor:${color}`;
  return (
    <div>
      <div style={`${boxStyle}`}></div>
      <form onSubmit={remove}>
        <button>remove box </button>
      </form>
    </div>
  );
}

export default Box;
