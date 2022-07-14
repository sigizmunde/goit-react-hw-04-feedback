import { SectionBox } from "./Section.styled";
import PropTypes from "prop-types";

function Section({ heading, children }) {
  return (
    <SectionBox>
      <h2 className="block__caption">{heading}</h2>
      {children}
    </SectionBox>
  );
}

export default Section;

Section.propTypes = {
  heading: PropTypes.string.isRequired,
  children: PropTypes.node,
};
