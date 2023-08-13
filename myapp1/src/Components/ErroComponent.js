import React from 'react'

function ErroComponent() {
  const div_Styles = {
    color: 'red',
    height: '20rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    fontSize: '2rem',
    fontWeight: '500'
  };
  

  return (
    <>
  <div style={div_Styles} className="error_page">
    <h1 style={{ fontSize: div_Styles.fontSize, fontWeight: div_Styles.fontWeight}}>You have entered the Wrong page. "Please check the url"</h1>
  </div>
    </>
  )
}

export default ErroComponent
