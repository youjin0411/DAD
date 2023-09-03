import React, {useState} from "react";
import styled from 'styled-components'
import { useLocation } from "react-router-dom";

const ClickPage = () => {
	const [language, setLanguage] = useState([1,2])
	const { state } = useLocation();
	console.log(state)	
  return (
    <div>
			<Text style={{marginTop: 60}}>{state.PRONAME}</Text>
			<Desc>{state.PRODESC}</Desc>
			<div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 40%)', marginTop: 30}}>
				<Box></Box>
				<Box></Box>
			</div>
			<Text style={{marginTop: 30}}>Language</Text>
			<div style={{display: 'flex', columnGap: 30, marginTop: 15}}> 
				<Item>{state.LANGUAGE}</Item>
				</div>
			<Text style={{marginTop: 30}}>Tools</Text>
			<div style={{display: 'flex', columnGap: 30, marginTop: 15}}>
				<Item>{state.TOOLS}</Item>
				</div>
				<div style={{float: 'right', marginRight: 80, marginTop: 100}}>
					<Text style={{float: 'right'}}>Team</Text><br/>
					<Desc style={{float: 'right'}}>SW: {state.LEADER}</Desc><br/>
					<Desc style={{float: 'right'}}>Design: {state.TEAMONE	}</Desc>
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