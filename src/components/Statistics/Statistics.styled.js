import styled from 'styled-components';

const StyledMark = styled.li`
  font-size: 16px;
  color: #275362;
`;

const StyledReview = styled(StyledMark)`
  color: #0a6067;
  font-weight: bold;
  line-height: 2;
`;

export { StyledMark, StyledReview };
