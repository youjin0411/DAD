import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom/dist';
import axios from 'axios';

const SignUp = () => {
  const navigate = useNavigate();
  const [personchk, setPersonChk] = useState('N');
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [nickname, setNickname] = useState("");
  const [manager, setManager] = useState("N");
  const [mpw, setMpw] = useState("");

  //하나의 체크박스만 체크되도록 하는 함수  
  const checkOnlyOne = (checkThis) => {
    const checkboxes = document.getElementsByName('chk')
    if(checkThis === 1){
      setManager('Y')
    }
    for (let i = 0; i < checkboxes.length; i++) {
      //방금 클릭한 체크박스를 제외한 모든 체크박스를 false로 변경한다. 
      if (checkboxes[i] !== checkThis) {
        checkboxes[i].checked = false
      }
    }
    setPersonChk(checkThis.value)
  }

  useEffect(() => {
    if(personchk === '1') {
      setManager('N')
    }else{
      setManager('Y')
    }
  }, [personchk])
  console.log(manager)

  const handleIdChange = (e) => {
    setId(e.target.value);
  };

  const handlePwChange = (e) => {
    setPw(e.target.value);
  };

  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
  };

  const handleMpwChange = (e) => {
    setMpw(e.target.value);
  }

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
			const response = await axios.post("http://localhost:3001/user", {
				email: id,
        password: pw,
        student_name : nickname,
        teach_auth: manager,
			});
			navigate('/login')
		} catch (error) {
			alert("중복된 센서 패드 라벨 입니다.", error);	
		}
  };

  return (
    <Main>
      <Text>Welcome ! </Text>
      <Context>회원가입하기</Context>
      <form style={{display: 'grid', justifyContent: 'center', marginTop: 40}}>
        <label style={{color: `#38405D` }}>Email</label>
        <Inputs
          type="email"
          placeholder="Email을 입력해주세요"
          onChange={handleIdChange}
        />
        <label style={{color: `#38405D` }}>Password</label>
        <Inputs
            type="email"
            placeholder="Password를 입력해주세요"
            onChange={handlePwChange}
          />
          <div style={{display: 'flex', justifyContent:'center', columnGap: 20, marginTop: 30 }}>
            <input
              type="checkbox"
              value="1"
              name='chk'
              onChange={(e) => checkOnlyOne(e.target)} 
            />학생
            <input
              type="checkbox"
              value="2"
              name='chk'
              onChange={(e) => checkOnlyOne(e.target)}
            />교사
          </div>
          { personchk === "1" ? (
              <div style={{display: 'grid'}}>
                <label>학번이름</label>
                <Inputs placeholder='학번이름을 입력하세요.' type='text' onChange={handleNicknameChange}/>
              </div>
          ) : (
            <div style={{display: 'grid'}}>
              <label>성명</label>
              <Inputs placeholder='닉네임을 입력해주세요(최대6글자)' type='text' onChange={handleNicknameChange}/>
              <label>교사 인증코드</label>
              <Inputs placeholder='인증코드를 입력하세요' type='text' onChange={handleMpwChange}/>
            </div>
          ) 
          }
        <Button onClick={handleSignUp}>회원가입</Button>
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
  width: 445px;
  height: 682px;
	margin: 0 auto;
	margin-top: 100px;
`;

export default SignUp;
