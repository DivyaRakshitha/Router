import Radium from 'radium';
import React from 'react';
  
function Radium1() {
    const style1={
        ':hover': {
            background: color('#0074d9')
              .lighten(0.2)
              .hexString()
          }
        }
  return(
<div>

<button style={style1}>example of radium</button>
</div>


  )
}
  
export default Radium(Radium1);