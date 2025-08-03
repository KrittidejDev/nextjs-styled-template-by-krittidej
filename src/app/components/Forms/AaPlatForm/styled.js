import styled from "styled-components";

export const AaPlatformStyled = styled.div`
  background: ${({ theme }) => theme.COLORS.WHITE_1};
  color: ${({ theme }) => theme.COLORS.BLACK_1};
  font-size: ${({ theme }) => theme.FONTS.SIZES.S14};
  font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.REGULAR};
`;
