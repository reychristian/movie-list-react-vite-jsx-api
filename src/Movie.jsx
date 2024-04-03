// Movie.jsx
import React from 'react';

function Movie({ title, year, image }) {
  return (

    <div className="element">
      <div>
        <table style={{ borderCollapse: 'collapse', width: '100%' }}>
          <tbody>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                <img src={image} alt={title} style={{ maxWidth: '100px' }} />
              </td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                <h2>{title}</h2>
                <p>Year: {year}</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>



  );
}

export default Movie;
