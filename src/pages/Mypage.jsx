import { useState } from 'react'
import styled from 'styled-components'

const Mypage = () => {
    const [countList, setCountList] = useState([1,2])
    return(
        <Group>
			<Title>MyPage</Title>
			<SubTitle>나의 전시 작품 리스트</SubTitle>
            <div style={{display: 'grid', gridTemplateColumns: '40% 40%'}}>
                {countList.map((item, i) => (
                    <Box key={i}>
                        <Text style={{fontSize: 25, marginTop: 20, marginLeft: 40}}>{item}</Text>
                        <Text style={{fontSize: 18, marginLeft: 40}}>{item}sdfsdfsdfsdfsdfsd</Text>
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