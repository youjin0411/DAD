import styled from 'styled-components';

const SignUp = () => {
  return (
    <Main>
      <Text>Welcome</Text>
    </Main>
  );
};

const Text = styled.div`
  width: 445px;
  height: 682px;
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 900;
  font-size: 25px;
  line-height: 36px;
  color: #fd25a6;
	display: flex;
	justify-content: center;
	margin-top: 20px;
`;

const Main = styled.div`
  border-radius: 0.625rem;
  background: #fff;
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.05);
  box-sizing: border-box;
  width: 445px;
  height: 682px;
	margin: 0 auto;
	margin-top: 100px;
`;

export default SignUp;
