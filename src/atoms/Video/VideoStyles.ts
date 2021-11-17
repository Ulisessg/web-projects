import styled from 'styled-components';

const VideoStyled = styled.section`
  margin: 200px;
  background-color: gray;
  & video {
    cursor: pointer;
    width: 800px;
    height: 300px;
  }
`;

export default VideoStyled;
