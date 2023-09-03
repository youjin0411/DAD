import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const Mypage = () => {
    const navigate = useNavigate();
    const [countList, setCountList] = useState(['FrameMe','VoiceFlow', 'Roomin']);
    const [teamLeaderProjects, setTeamLeaderProjects] = useState([]);
    const [teamMemberProjects, setTeamMemberProjects] = useState([]);
    const [userId, setUserId]  = useState(localStorage.getItem('nickname'));
    async function getProject() {
        try {
            const result = await axios.get("http://localhost:3001/mypage",  {
                params: {
                userId: userId,
                },
            });
            const { teamLeaderProjects, teamMemberProjects } = result.data;
            console.log(result.data)
            setTeamLeaderProjects(teamLeaderProjects);
            setTeamMemberProjects(teamMemberProjects);
        } catch (error) {   
            console.error("오류 발생:", error);
        }
    }
    getProject();
        
    return(
        <Group>
			<Title>MyPage</Title>
			<SubTitle>팀장인 프로젝트 리스트</SubTitle>
            <div style={{display: 'grid', gridTemplateColumns: '40% 40%', gridRowGap: 20}}>
                {teamLeaderProjects.map((item, i) => (
                    <Box key={i}>
                        <Text style={{fontSize: 25, marginTop: 20, marginLeft: 40}}>{item.PRONAME}</Text>
                        <Text style={{fontSize: 18, marginLeft: 40}}>{item.PRODESC}의 설명을 담을 자리 입니다.</Text>
                        <Btn onClick={() => navigate('/')}>수정</Btn>
                    </Box>
                ))}
            </div>

            <SubTitle>팀원인 프로젝트 리스트</SubTitle>
            <div style={{display: 'grid', gridTemplateColumns: '40% 40%', gridRowGap: 20}}>
                {teamMemberProjects.map((item, i) => (
                    <Box key={i}>
                        <Text style={{fontSize: 25, marginTop: 20, marginLeft: 40}}>{item.PRONAME}</Text>
                        <Text style={{fontSize: 18, marginLeft: 40}}>{item.PRODESC}의 설명을 담을 자리 입니다.</Text>
                        <Btn>수정</Btn>
                    </Box>
                ))}
            </div>
        </Group>
    )
}
const Btn = styled.button`
    width: 80px;
    height: 33px;
    background: #FFFFFF;
    border-radius: 30px;
    border: none;
    float: right;
    margin-top: 20px;
    margin-right: 20px;
`
const Group = styled.div`
	margin-top: 80px;
`
const Text = styled.div`
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 700;
    line-height: 32px;
    color: #FFFFFF;
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

const Box = styled.div`
    width: 530px;
    height: 158px;
    background: #FFB0FC;
    border-radius: 20px;
`
export default Mypage;