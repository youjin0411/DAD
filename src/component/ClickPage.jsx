import React, {useState} from "react";
import styled from 'styled-components'

const ClickPage = ({ values }) => {
	const [language, setLanguage] = useState([1,2])
  return (
    <div>
			<Text style={{marginTop: 60}}>FrameMe</Text>
			<Desc>FRAME ME는 전시의 추억을 담아갈 수 있는 사진 촬영 서비스 입니다.</Desc>
			<div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 40%)', marginTop: 30}}>
				<Box></Box>
				<Box></Box>
			</div>
			<Text style={{marginTop: 30}}>Language</Text>
			<div style={{display: 'flex', columnGap: 30, marginTop: 15}}>
				{language.map((item, i) => (
					<Item>{item}</Item>
				))}
				</div>
			<Text style={{marginTop: 30}}>Tools</Text>
			<div style={{display: 'flex', columnGap: 30, marginTop: 15}}>
				{language.map((item, i) => (
					<Item>{item}</Item>
				))}
				</div>
				<div style={{float: 'right', marginRight: 80, marginTop: 100}}>
					<Text style={{float: 'right'}}>Team</Text><br/>
					<Desc style={{float: 'right'}}>SW: </Desc><br/>
					<Desc style={{float: 'right'}}>Design: </Desc>
				</div>
    </div>
  );
};
const Item = styled.div`
	text-align: center;
	width: 127px;
	height: 46px;
	background: #958CF9;
	border-radius: 40px;
	color: white;
	font-size: 20px;
`
const Box= styled.div`
	background-color: pink;
	width: 542px;
	height: 305px;
	border-radius: 30px;
`
const Text = styled.div`
	font-family: 'Noto Sans KR';
	font-style: normal;
	font-weight: 700;
	font-size: 28px;
	line-height: 41px;
	color: #6C6969;
`
const Desc = styled.div`
	font-family: 'Noto Sans KR';
	font-style: normal;
	font-weight: 500;
	font-size: 18px;
	line-height: 26px;
	color: #979797;
`
export default ClickPage;