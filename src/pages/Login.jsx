import styled from 'styled-components';
import React, { useState} from "react";
import axios from 'axios';

const Login = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState(""); 
  
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // 서버로 로그인 요청을 보냄
      const response = await axios.post("http://localhost:3001/login", {
        email: id,
        password: pw
      }, {
        withCredentials: true // 쿠키와 자격 증명을 전송
      });
      console.log(response)
      // 응답의 상태 코드를 확인하여 로그인 성공 여부를 판단
      if (response.status === 200) {
        const user = response.data.user;
        const message = response.data.message;
        alert(message); // 로그인 성공 출력
        console.log(user)
        localStorage.setItem('id', user.email)  
        localStorage.setItem('manager', user.auth)
        localStorage.setItem('nickname', user.nickname)
        localStorage.getItem('id')
        window.location.replace('/');
      } else {
        // 로그인 실패 처리
        alert('로그인 실패: 이메일 또는 비밀번호가 잘못되었습니다.');
      }
    } catch (error) {
      console.error("로그인 중 오류 발생:", error.message);
    }
  };
  return (
    <Main>
      <Text>Welcome</Text>
			<Context>로그인하기</Context>
			<form style={{display: 'grid', justifyContent: 'center', marginTop: 40}}>
        <label style={{color: `#38405D` }}>Email</label>
        <Inputs
          type="email"
          placeholder="Email을 입력해주세요"
          onChange={(e) => setId(e.target.value)}
        />
      <label style={{color: `#38405D` }}>Password</label>
        <Inputs
          type="email"
          placeholder="Password를 입력해주세요"
          onChange={(e) => setPw(e.target.value)}
        />
        <Button onClick={handleLogin}>로그인</Button>
			</form>
    </Main>
  );
};
const Button = styled.button`
  margin-top: 30px;
  box-sizing: border-box;
  width: 250px;
  height: 38px;
  background: linear-gradient(0deg, #FCB6E0, #FCB6E0), #6C5DD3;
  border-radius: 8px;
  color: #ffffff;
  border: none;
`
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
  width: 405px;
  height: 452px;
	margin: 0 auto;
	margin-top: 150px;
`;

export default Login;
