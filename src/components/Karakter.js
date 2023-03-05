import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/material";

export default function Karakter({ char, films }) {
  const [expanded, setExpanded] = useState(false);
  const [expandedSub, setExpandedSub] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const handleChangeSub = (panel) => (event, isExpanded) => {
    setExpandedSub(isExpanded ? panel : false);
  };

  const CustomType = styled(Typography)`
    text-align: left;
    flex: 1;
  `;

  const CustomBox = styled(Box)`
    margin-bottom: 0.5rem;
    display: flex;
    flex-wrap: wrap;
  `;

  return (
    <Accordion
      sx={{ background: "rgba(255, 255, 180, 0.5)" }}
      expanded={expanded === "panel1"}
      onChange={handleChange("panel1")}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1bh-content"
        id="panel1bh-header"
      >
        <CustomType sx={{ width: "33%" }}>{char.name}</CustomType>
        <CustomType sx={{ color: "text.secondary" }}>
          {char.birth_year}
        </CustomType>
      </AccordionSummary>
      <AccordionDetails>
        <CustomBox>
          <CustomType>Name : </CustomType>
          {char.name}
        </CustomBox>
        <CustomBox>
          <CustomType>Height : </CustomType>
          {char.height}
        </CustomBox>
        <CustomBox>
          <CustomType>Hair Color : </CustomType>
          {char.hair_color}
        </CustomBox>
        <CustomBox>
          <CustomType>Skin color : </CustomType>
          {char.skin_color}
        </CustomBox>
        <CustomBox>
          <CustomType>Eye color : </CustomType>
          {char.eye_color}
        </CustomBox>
        {films.map((film, index) => {
          return (
            <Accordion
              key={film.episode_id}
              sx={{ background: "rgba(255, 255, 180, 0)" }}
              expanded={expandedSub === "panel2" + index}
              onChange={handleChangeSub("panel2" + index)}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel2bh-content${index}`}
                id={`panel2bh-header${index}`}
              >
                <CustomType>Appeared In : </CustomType>
                {film.title}
              </AccordionSummary>
              <AccordionDetails>
                <CustomBox>
                  <CustomType>{film.opening_crawl}</CustomType>
                </CustomBox>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </AccordionDetails>
    </Accordion>
  );
}