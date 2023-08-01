import React, {useState} from "react";
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';
import CreatableSelect from 'react-select/creatable';
import { styled } from "styled-components";
const Main = () => {
    const techCompanies = [
        { label: "보름달", value: 1 },
        { label: "상현달", value: 2 },
        { label: "하현달", value: 3 },
        { label: "그믐달", value: 4 },
        { label: "초승달", value: 5 },
      ];
      const techCompanies2 = [
        { label: "Visual Studio Code", value: 1 },
        { label: "IntelliJ", value: 2 },
        { label: "Eclipse", value: 3 },
        { label: "Unity", value: 4 },
      ];
      const techCompanies3 = [
        { label: "React", value: 1 },
        { label: "Next.js", value: 2 },
        { label: "HTML + CSS ", value: 3 },
        { label: "JavaScript", value: 4 },
        { label: "C++", value: 5 },
        { label: "Python", value: 6 },
        { label: "직접 입력", value: 7 },
      ];

      const handleInputChange = (inputValue) => {
        return inputValue;
      };    
    
      const handleCreateOption = (inputValue) => {
        console.log("새로운 옵션 생성:", inputValue);
        // 새로운 옵션을 처리하기 위한 사용자 정의 로직 추가 (예: 상태에 저장하거나 서버로 전송)
      };

      const [teamMembers, setTeamMembers] = useState([1]); // 초기 값으로 1개의 팀원을 갖는 배열을 설정

      const addTeamMember = () => {
        // 새로운 팀원 추가 함수
        setTeamMembers([...teamMembers, teamMembers.length + 1]);
      };

	return(
		<Group>
			<Title>MIRIM ITSHOW!</Title>
			<SubTitle>프로젝트 작성</SubTitle>
            <form>
                <div style={{display: 'flex', columnGap: 20, alignItems:'center'}}>
                    <label>작품명</label>
                    <Input type="text" placeholder="작품명을 입력해주세요"/>
                </div>
                <div style={{display: 'flex', columnGap: 20, alignItems:'center', marginTop: 20, marginBottom: 30}}>
                    <label>작품설명</label>
                    <Input type="text" placeholder="작품 설명을 입력하세요"/>
                </div>
                <div style={{display: 'grid', gridTemplateColumns: '25% 25% 25%', marginTop: 20}}>
                    <div style={{display: 'flex'}}>
                        <label style={{width: 50}}>주제</label>
                            <div className="row" style={{display: 'grid'}}>
                                <div className="col-md-4"></div>
                                <div className="col-md-4" style={{width: 252}}>
                                    <Select options={ techCompanies } />
                                </div>
                                <div className="col-md-4"></div>
                            </div>
                    </div>
                    <div style={{display: 'flex'}}>
                        <label style={{width: 70}}>개발툴</label>
                        <div className="row" style={{display: 'grid'}}>
                            <div className="col-md-4"></div>
                            <div className="col-md-4" style={{width: 252}}>
                            <CreatableSelect
                                placeholder="직접입력"
                                isClearable
                                onCreateOption={handleCreateOption}
                                options={techCompanies2}
                                onInputChange={handleInputChange}
                            />
                            </div>
                            <div className="col-md-4"></div>
                        </div>
                    </div>
                    <div style={{display: 'flex'}}>
                        <label style={{width: 80}}>개발언어</label>
                        <div className="row" style={{display: 'grid'}}>
                            <div className="col-md-4"></div>
                            <div className="col-md-4" style={{width: 252}}>
                            <CreatableSelect
                                placeholder="직접입력"
                                isClearable
                                onCreateOption={handleCreateOption}
                                options={techCompanies3}
                                onInputChange={handleInputChange}
                            />
                            </div>
                            <div className="col-md-4"></div>
                        </div>
                    </div>
                </div>

                <div>
                    <Text style={{marginTop: 30}}>전시기기</Text>
                    <div style={{display: 'grid', gridTemplateColumns: 'repeat(5, 10%)'}}>
                        <div>
                            <input type="checkbox" />
                            <Label>아이맥</Label>
                        </div>
                        <div>
                            <input type="checkbox" />
                            <Label>모니터 + PC</Label>
                        </div>
                        <div>
                            <input type="checkbox" />
                            <Label>모니터</Label>
                        </div>
                        <div>
                            <input type="checkbox" />
                            <Label>안드로이드폰</Label>
                        </div>
                        <div>
                            <input type="checkbox" />
                            <Label>아이폰</Label>
                        </div>
                        <div>
                            <input type="checkbox" />
                            <Label>아이패드</Label>
                        </div>
                        <div>
                            <input type="checkbox" />
                            <Label>갤럭시태블릿</Label>
                        </div>
                        <div>
                            <input type="checkbox" />
                            <Label>웹캠</Label>
                        </div>
                        <div>
                            <input type="checkbox" />
                            <Label>egg</Label>
                        </div>
                        <div>
                            <input type="checkbox" />
                            <Label>필요없음</Label>
                        </div>
                    </div>
                </div>

                <div style={{display: 'grid', gridTemplateColumns: '8% 20% 18%'}}>
                    <Text style={{marginTop: 30}}>팀장</Text>
                    <div style={{display: 'flex', columnGap: 20, alignItems:'center',marginTop: 30, marginRight: 30}}>
                        <label style={{width:100}}>학번</label>
                        <Input2 type="text" placeholder="학번 입력"/>
                    </div>
                    <div style={{display: 'flex', columnGap: 20, alignItems:'center',marginTop: 30}}>
                        <label style={{width:100}}>이름</label>
                        <Input2 type="text" placeholder="이름 입력"/>
                    </div>
                </div>

                <div style={{display: 'grid', gridTemplateColumns: '8% 40% 15%'}}>
                    <Text style={{marginTop: 30}}>팀원</Text>
                        <div key={member.id} style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 50%)', alignItems: 'center' }}>
                        <div style={{ display: 'flex', columnGap: 20, marginTop: 30 }}>
                            <label style={{ width: 100 }}>학번</label>
                            <Input2 type="text" placeholder="학번 입력" />
                        </div>
                        <div style={{ display: 'flex', columnGap: 20, marginTop: 30 }}>
                            <label style={{ width: 100 }}>이름</label>
                            <Input2 type="text" placeholder="이름 입력" />
                        </div>
                        </div>
                    <But onClick={addTeamMember}></But>
                </div>
            </form>
		</Group>
	)
}
const But = styled.button`
    background-image: url('assets/button.png');
    background-size: cover;
    width: 39px;
    height: 55px;
    background-color: white;
    border: none;
    margin: 0 auto;
    margin-top: 20px;
`
const Label = styled.label`
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 35px;
    color: #737373;
`
const Text = styled.div`
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 35px;
    color: #4F4F4F;
`
const Input = styled.input`
    width: 491px;
    height: 58px;
    background: #FFE6FF;
    border-radius: 10px;
    text-indent: 20px;
    border: none;
`
const Input2 = styled.input`
    width: 201px;
    height: 40px;
    background: #FFE6FF;
    border-radius: 10px;
    text-indent: 15px;
    border: none;
`
const Group = styled.div`
	margin-top: 80px;
`
const Title = styled.div`
	font-family: 'Noto Sans KR';
	font-style: normal;
	font-weight: 700;
	font-size: 24px;
	line-height: 35px;
	color: #FD25A6;
`
const SubTitle = styled.div`
	margin-bottom: 30px;
	font-family: 'Noto Sans KR';
	font-style: normal;
	font-weight: 500;
	font-size: 18px;
	line-height: 26px;
	color: #000000;
`
export default Main;