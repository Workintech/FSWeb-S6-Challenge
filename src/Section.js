import React from "react";
import styled from "styled-components";
function Section(props) {
  const { data, handleClick, icerik } = props;

  const SCAciklama = styled.div`
    ${(props) =>
      props.icerik !== props.dataName ? `display:none` : `display:block`}
  `;
  const SCSection = styled.div`
    width: 31%;
    margin: 10px auto;
    background-color: rgba(20, 0, 0, 0.3);
    color: white;
    padding: 1px 0 14px 0px;
  `;
  return (
    <>
      <SCSection>
        <h3 key={data.name}>{data.name}</h3>
        <button onClick={() => handleClick(data.name)}>
          {icerik !== data.name ? "+" : "-"}
        </button>
        <SCAciklama icerik={icerik} dataName={data.name}>
          <p>Gender: {data.gender}</p>
          <p>Height: {data.height}</p>
          <p>Mass: {data.mass}</p>
          <p>BirthYear: {data.birth_year}</p>
          <p>Eye Color: {data.eye_color}</p>
          <p>Hair Color: {data.hair_color}</p>
          <p>Skin Color: {data.skin_color}</p>
          {<p>Appears in {data.films.length} films</p>}
        </SCAciklama>
      </SCSection>
    </>
  );
}
export default Section;
