import { useEffect, useState } from "react";
import styled from 'styled-components'
import axios from 'axios';
const Board = () => {
	const [text, setText] = useState([])
	const [name, setName] = useState('')
	const [pw, setPw] = useState('')
	const [textContent, setTextContent] = useState('')

	async function getProject() {
		try {
			const response = await axios.get("http://localhost:3001/board");
			console.log(response.data)
			setText(response.data);
		} catch (error) {
			console.error("오류 발생:", error);
		}
	}
	getProject();

	async function postProject() {
		try {
			const response = await axios.post("http://localhost:3001/board", {
				name: name,
				pw: pw,
				textContent: textContent
			});
		} catch (error) {
			console.error("오류 발생:", error);
		}
	}
	const onSubmit = (e) => {
		e.preventDefault();
	}

	const Delete = (name) => {
    try {
        const response = axios.delete(`http://localhost:3001/board/${name}`);
				getProject();
    } catch (error) {
        console.error("오류 발생:", error);
    }
}

	const Edit = (item) => {
		alert('비밀번호를 입력해주세요')
		const inputpw = prompt('비밀번호를 입력해주세요')
		if(inputpw === item.PASSWORD) {
			alert('삭제되었습니다.')
			Delete(item.NAME)
		} else {
			alert('비밀번호가 틀렸습니다.')
		}
	}

	return(	
<Group>
			<Title>MIRIM ITSHOW!</Title>
			<SubTitle style={{marginLeft: 100}}>학생들의 작품을 본 후기를 한줄로 작성해주세요 </SubTitle>
			<MainGroup>
				<G>
					<Box style={{backgroundColor: '#F3D2D2'}}>
						<Text>후기 작성</Text>
						<form style={{display: 'grid', marginTop: 20}} onSubmit={onSubmit}>
							<Text style={{color: `#38405D` }}>작성자명</Text>
							<Inputs
							style={{height: 42}}
								type="text"
								placeholder="작성자님의 성명을 작성해주세요."
								onChange={(name) => setName(name.target.value)} 
							/>
							<Text style={{color: `#38405D` }}>후기 작성</Text>
							<textarea cols="5" rows="5" style={{width: 380, borderRadius: 8, border: 'none'}} placeholder='작성자님의 후기를 작성해주세요.'
							onChange={(text) => setTextContent(text.target.value)}></textarea>
							<Text style={{color: `#38405D` }}>비밀번호</Text>
							<Inputs
								style={{height: 42}}
								type="password"
								placeholder="비밀번호를 통해 후기글 삭제 할 수 있습니다."
								onChange={(pw) => setPw(pw.target.value)} 
							/>
							<SubTitle style={{fontSize: 16}}>※ 학생들이 직접 보는 게시판 이므로 따뜻한 말 한 마디 부탁드립니다.</SubTitle>
							<Button onClick={postProject}>제출</Button>
							</form>
					</Box>
				</G>
				<G>
					<Box style={{backgroundColor: '#D0ECFF'}}>
						<Text>게시판</Text>
						{text.map((item, i) => (
							<Item onClick={() => Edit(item)}>
								<div style={{marginLeft: 20}}>{item.NAME}</div>
								<div style={{float: 'right', marginRight: 20}}>{item.CONTEXT}</div>
							</Item>
						))}
					</Box>
				</G>
			</MainGroup>
		</Group>
	)
}

const Item = styled.div`
	width: 454px;
	height: 64px;
	background: #FFFFFF;
	border-radius: 20px;
`
const Button = styled.button`
width: 197px;
height: 60px;
background: #FFA8E7;
border-radius: 40px;
border: none;
margin: 0 auto;
`
const Group = styled.div`
	margin-top: 80px;
`
const Inputs = styled.input`
  width: 380px;
  margin-top: 8px;
  border: 0;
  border-radius: 8px;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.05);
  padding-left: 10px;
  outline: 0;
`
const MainGroup = styled.div`
	display: grid;
	grid-template-columns: 43% 43%;
	align-items: center;
	justify-content: center;
`
const G = styled.div``
const Box = styled.div`
	width: 520px;
	height: 606px;
	display: flex;
	flex-direction: column;
	box-shadow: 0px 1px 60px rgba(0, 0, 0, 0.05);
	border-radius: 20px;
	display: flex;
	row-gap: 20px;
	padding: 30px;
`
const Title = styled.div`
	font-family: 'Noto Sans KR';
	font-style: normal;
	font-weight: 700;
	font-size: 24px;
	line-height: 35px;
	color: #FD25A6;
	margin-left: 100px;
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
const Text = styled.div`
	font-family: 'Noto Sans KR';
	font-style: normal;
	font-weight: 500;
	font-size: 20px;
	line-height: 26px;
	color: #3F3A3A;
`
export default Board;