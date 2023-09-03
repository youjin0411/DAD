import React, {useEffect, useState} from "react";
import Select from 'react-select';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import CreatableSelect from 'react-select/creatable';
import { styled } from "styled-components";
import axios from "axios";

const Main = () => {
    const navigate = useNavigate();
    const [proname, setProName] = useState("")
    const [isLoading, setIsLoading] = useState(false); // 생성 중임을 나타내는 로딩 상태
    const [prodesc, setProDesc] = useState("")
    const [prosubjec, setProSubject] = useState([])
    const [protools, setProTools] = useState([])
    const [prolanguage, setProLanguage] = useState([])
    const [prodevice, setProDevice] = useState([])
    const [proleader, setProLeader] = useState("")
    const [proteamone, setProTeamone] = useState("")
    const [proteamones, setProTeamones] = useState([])
    const [person, setPerson] = useState([1])
    const [techCompanies, setTechCompanies] = useState([])
    const [techLanguages, setTechLanguages] = useState([])
    const [techTools, setTechTools] = useState([])
    const [subjectValue, setSubjectValue] = useState(null);
    const [languageValue, setLanguageValue] = useState(null);
    const [toolValue, setToolValue] = useState(null);
    const [count, setCount] = useState([1]);
    async function fetchData() {
        try {
            const response = await axios.get("http://localhost:3001/options");
            setProSubject(response.data.data[0]);
            setProTools(response.data.data[1]);
            setProLanguage(response.data.data[2]);   
        } catch (error) {
            console.error(error);
        }
        } 
        fetchData();

        useEffect(() => {
            prosubjec.map((item, index) => {
                setTechCompanies((p) => [...p, {label: item[1], value: index}] )
            })
            protools.map((item, index) => {
                setTechTools((p) => [...p, {label: item[1], value: index}] )
            })
            prolanguage.map((item, index) => {  
                setTechLanguages((p) => [...p, {label: item[1], value: index}] )
            })
        }, [prosubjec, protools, prolanguage])

    useEffect(() => {
      localStorage.setItem('proname', proname)
      localStorage.setItem('prodesc',prodesc)
      localStorage.setItem('prosubjec',subjectValue)
      localStorage.setItem('protools', toolValue)
      localStorage.setItem('prolanguage',languageValue)
      localStorage.setItem('prodevice',prodevice)
      localStorage.setItem('proleader',proleader)
      localStorage.setItem('proteamone',proteamone)
      localStorage.setItem('proteamones',proteamones)
    }, [proname, prodesc, subjectValue, toolValue, languageValue, prodevice, proleader, proteamone, proteamones])

      // checkbox의 상태가 변경될 때 호출되는 함수
  const handleCheckboxChange = (event) => {
    const { checked, value } = event.target;

    if (checked) {
      // 선택한 항목 추가
      setProDevice((prevSelectedDevices) => prevSelectedDevices + event.target.value + " ");
    } else {
      // 선택 해제한 항목 제거
      setProDevice((prevSelectedDevices) =>
      prevSelectedDevices.replace(event.target.value + " ", "")
    );
    }
  };
    useEffect( () => {
        setProTeamones((p) => p + ","  + proteamone)
    }, [person])

      const handleInputChange = (inputValue) => {
        return inputValue;
      };    
    
      const handleCreateOption = (inputValue) => {
        localStorage.setItem("새로운 옵션 생성:", inputValue);
        // 새로운 옵션을 처리하기 위한 사용자 정의 로직 추가 (예: 상태에 저장하거나 서버로 전송)
      };

      const addTeamMember = () => {
        // 새로운 팀원 추가 함수
        setPerson((prevPerson) => prevPerson + "," + (parseInt(prevPerson) + 1));
        setCount((c) => [...c, 1]);
      };
      const onSubmit = (e) => {
        e.preventDefault();
      };

      const handleChange = (selectedOption) => {
        setSubjectValue(selectedOption.label);
      };

      const onSubmitPro = async () => {
		try {
			const response = await axios.update("http://localhost:3001/project", {
                proname: proname,
                prodesc: prodesc,
                prosubjec: subjectValue,
                proteamones: proteamones,
                proleader: proleader,
                prodevice: prodevice,
                protools: toolValue,
                prolanguage: languageValue
			});
			navigate('/detail')
		} catch (error) {
			alert("중복된 프로젝트 입니다.", error);	
		}
	};

	return(
		<Group>
			<Title>MIRIM ITSHOW!</Title>
			<SubTitle>프로젝트 작성</SubTitle>
            <form onSubmit={onSubmit}>
                <div style={{display: 'flex', columnGap: 20, alignItems:'center'}}>
                    <label>작품명</label>
                    <Input type="text" placeholder="작품명을 입력해주세요" value={proname} onChange={(event) => setProName(event.target.value)}/>
                </div>
                <div style={{display: 'flex', columnGap: 20, alignItems:'center', marginTop: 20, marginBottom: 30}}>
                    <label>작품설명</label>
                    <Input type="text" placeholder="작품 설명을 입력하세요" value={prodesc} onChange={(event) => setProDesc(event.target.value)}/>
                </div>
                <div style={{display: 'grid', gridTemplateColumns: '25% 25% 25%', marginTop: 20}}>
                    <div style={{display: 'flex'}}>
                        <label style={{width: 50}}>주제</label>
                            <div className="row" style={{display: 'grid'}}>
                                <div className="col-md-4"></div>
                                <div className="col-md-4" style={{width: 252}}>
                                    <Select options={ techCompanies } value={subjectValue} onChange={handleChange}/>
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
                                isClearable
                                isDisabled={isLoading}
                                isLoading={isLoading}
                                onChange={(event) => setToolValue(event.label)}
                                onCreateOption={handleCreateOption}
                                options={techTools} // Flatten the nested arrays
                                value={toolValue}
                                placeholder="직접 입력"
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
                                options={techLanguages}
                                onInputChange={handleInputChange}
                                value={languageValue} onChange={(event) => setLanguageValue(event.label)}
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
                            <input type="checkbox" 
                            value="아이맥"
                            onChange={handleCheckboxChange}/>
                            <Label>아이맥</Label>
                        </div>
                        <div>
                            <input type="checkbox"  
                            value="모니터 + PC"
                            onChange={handleCheckboxChange}/>
                            <Label>모니터 + PC</Label>
                        </div>
                        <div>
                        <input type="checkbox"  
                            value="모니터"
                            onChange={handleCheckboxChange}/>
                            <Label>모니터</Label>
                        </div>
                        <div>
                        <input type="checkbox"  
                            value="안드로이드폰"
                            onChange={handleCheckboxChange}/>
                            <Label>안드로이드폰</Label>
                        </div>
                        <div>
                        <input type="checkbox"  
                            value="아이폰"
                            onChange={handleCheckboxChange}/>
                            <Label>아이폰</Label>
                        </div>
                        <div>
                        <input type="checkbox"  
                            value="아이패드"
                            onChange={handleCheckboxChange}/>
                            <Label>아이패드</Label>
                        </div>
                        <div>
                        <input type="checkbox"  
                            value="갤럭시태블릿"
                            onChange={handleCheckboxChange}/>
                            <Label>갤럭시태블릿</Label>
                        </div>
                        <div>
                        <input type="checkbox"  
                            value="웹캠"
                            onChange={handleCheckboxChange}/>
                            <Label>웹캠</Label>
                        </div>
                        <div>
                        <input type="checkbox"  
                            value="egg"
                            onChange={handleCheckboxChange}/>
                            <Label>egg</Label>
                        </div>
                        <div>
                        <input type="checkbox"  
                            value="필요없음"
                            onChange={handleCheckboxChange}/>
                            <Label>필요없음</Label>
                        </div>
                    </div>
                </div>

                <div style={{display: 'grid', gridTemplateColumns: '8% 48%'}}>
                    <Text style={{marginTop: 30}}>팀장</Text>
                    <div style={{ display: 'flex', columnGap: 20, marginTop: 30 }}>
                            <label style={{ width: 80 }}>학번이름</label>
                            <Input2 type="text" placeholder="학번이름입력 ex)3302김유진" onChange={(e) => setProLeader(e.target.value)}/>
                        </div>
                </div>

                <div style={{display: 'grid', gridTemplateColumns: '8% 48%'}}>
                    <Text style={{marginTop: 30}}>팀원</Text>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 50%)', alignItems: 'center' }}>
                        {count.map((item, i) => (
                            <div key={i} style={{ display: 'flex', columnGap: 20, marginTop: 30 }}>
                                <label style={{ width: 80 }}>학번이름</label>
                                <Input2 type="text" placeholder="학번이름입력 ex)3302김유진" onChange={(event) => setProTeamone(event.target.value)}/>
                            </div>
				        ))}
                        </div>
                </div>
                <Btn type="submit" onClick={onSubmitPro}>수정</Btn>
            </form>
            <But onClick={addTeamMember}></But>
		</Group>
	)
}
const Btn = styled.button`
    width: 136px;
    height: 42px;
    background: #FD25A6;
    border-radius: 35px;
    font-size: 20px;
    float: right;
    margin-right: 40px;
    border: none;
    color: white;
    margin-top: 250px;
`
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
    width: 240px;
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