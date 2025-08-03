import styled from "styled-components";

export const LoginFormStyled = styled.div`
  margin-top: 50px;
  width: 100%;
  max-width: 495px;
  display: flex;
  flex-direction: column;
  column-gap: 10px;
  .title {
    font-size: ${({ theme }) => theme.FONTS.SIZES.S20};
    font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.SEMIBOLD};
  }
  .input_group {
    input {
      margin-top: 10px;
      padding: 10px;
      width: 95%;
      max-width: 495px;
      outline: none;
      border-radius: 5px;
      border: 1px solid ${({ theme }) => theme.COLORS.GRAY_1};
    }
    label {
      font-size: ${({ theme }) => theme.FONTS.SIZES.S14};
      color: ${({ theme }) => theme.COLORS.BLACK_1};
    }
  }
  .check_group {
    display: flex;
    column-gap: 10px;
    font-size: ${({ theme }) => theme.FONTS.SIZES.S14};
    font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.REGULAR};
  }
  .btn_submit {
    margin-top: 20px;
    width: 100%;
    max-width: 495px;
    height: 40px;
    border-radius: 6px;
    font-size: ${({ theme }) => theme.FONTS.SIZES.S16};
    font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.SEMIBOLD};
    color: ${({ theme }) => theme.COLORS.WHITE_1};
    background-color: ${({ theme }) => theme.COLORS.YELLOW_1};
    cursor: pointer;
    &:disabled {
      background-color: ${({ theme }) => theme.COLORS.GRAY_1};
      cursor: not-allowed;
    }
  }

  @media (max-width: ${({ theme }) => theme.SCREENS.IPAD}) {
    margin-top: 20px;
  }
`;
