import React, { useState } from 'react'

const Singers = ({id, name, gender, winner, position}) => {
  return (
    <div>
        <hr />
        <h2> O artista é: {name}</h2>
        <h2> Canta o estilo: {gender}</h2>
        <h2> No top Billboard, posição: {position}</h2>
        {winner && <h1> É o melhor do seu gênero </h1>}
    </div>
  )
}

export default Singers