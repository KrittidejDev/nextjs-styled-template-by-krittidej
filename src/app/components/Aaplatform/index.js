import { AaPlatformContainer } from "./styled";
import cx from "classnames";

const Aaplatform = ({ theme_standard }) => {
  const customClass = cx({
    theme_standard: theme_standard,
  });
  return (
    <AaPlatformContainer className={customClass}>
      <div>AaPlatformContainer</div>
    </AaPlatformContainer>
  );
};

export default Aaplatform;
