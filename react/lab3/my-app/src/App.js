import "./App.css";
import PropTypes from 'prop-types';

function Box({ type, style, children })
{
  const boxType = type ? `box--${type}` : '';
  const backgroundColor = color ? {backgroundColor: color} : {};
  return (
    <div className={`box box--${type}`} style={{fontStyle: 'italic', ...style, ...backgroundColor}}>
      {children}
    </div>
  );
}

Box.propTypes = {
  type: PropTypes.string,
  color: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
}

function App() {
  return (
    <div>
      <Box type="small" color="lightblue" style={{fontWeight: 'bold'}}>
        small lightblue box
      </Box>
      <Box type="medium" color="pink">
        <p>small lightblue box</p>
        <p>small lightblue box</p>
      </Box>
      <Box type="large" color="orange">
        large orange box
      </Box>
    </div>
  );
}

export default App;
