import styled from 'styled-components';

const Login = () => {
  return (
    <Main>
      <Text>Welcome</Text>
			<Context>로그인하기</Context>
			<form style={{display: 'grid', justifyContent: 'center', marginTop: 40}}>
        <label style={{color: `#38405D` }}>Email</label>
        <Inputs
          type="email"
          placeholder="Email을 입력해주세요"
          // onChange={handleIdChange} 
        />
      <label style={{color: `#38405D` }}>Password</label>
        <Inputs
          type="email"
          placeholder="Password를 입력해주세요"
          // onChange={handleIdChange} 
        />
        <button></button>
			</form>
    </Main>
  );
};
const Inputs = styled.input`
  width: 250px;
  height: 42px;
  margin-top: 8px;
  border: 0;
  border-radius: 8px;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.05);
  padding-left: 10px;
  outline: 0;
`
const Context = styled.div`
	font-family: 'Noto Sans KR';
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 23px;
	color: #333333;
	display: flex;
	justify-content: center;
`
const Text = styled.div`
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

export default Login;
