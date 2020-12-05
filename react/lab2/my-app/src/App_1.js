import "./App.css";

const smallBox = <div>small lightblue box</div>;
const mediumBox = <div>medium pink box</div>;
const largeBox = <div>large orange box</div>;

function Box({ type='', style, children }) {
  return (
    <div className={`box box--${type}`} style={{fontStyle: 'italic', ...style}}>
      {children}
    </div>
  );
}

function App() {
  return (
    <div>
      <Box type="small" style={{ backgroundColor: "lightblue" }}>
        small lightblue box
      </Box>
      <Box type="medium" style={{ backgroundColor: "pink" }}>
        medium pink box
      </Box>
      <Box type="large" style={{ backgroundColor: "orange" }}>
        large orange box
      </Box>
    </div>
  );
}

export default App;
