import styled from 'styled-components'
import Select from 'react-select';
import { useState } from 'react';
const DetailPage = () => {
	const [countList, setCountList] = useState([1,2, 3])
	const techCompanies = [
		{ label: "전체", value: 1 },
		{ label: "작품명 순", value: 2 },
		{ label: "학번 순", value: 3 },
		{ label: "주제  순", value: 4 },
	];
	return (
		<div>
			<Title>IT SHOW, SW 작품</Title>
			<div style={{display: 'flex', float:'right', marginRight: 100}}>
                  <div className="row" style={{display: 'grid'}}>
                      <div className="col-md-4"></div>
                      <div className="col-md-4" style={{width: 252}}>
                          <Select options={ techCompanies } placeholder="전체"/>
                      </div>
                      <div className="col-md-4"></div>
                  </div>
          </div>

				<div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 26%)', marginTop: 50, gridColumnGap: 30}}>
					{countList.map((item, i) => (
						<div>
							<Box key={i}></Box>
							<div style={{display: 'flex',justifyContent:'center', fontWeight: 600}}>작품명 : Frame Me</div>
						</div>
					))}
				</div>
		</div>
	)
}
const Title = styled.div`
	font-family: 'Noto Sans KR';
	font-style: normal;
	font-weight: 700;
	font-size: 24px;
	line-height: 35px;
	color: #FD25A6;
	margin-top: 80px;
`
const Box = styled.div`
	width: 378px;
	height: 213px;
	border-radius: 30px;
	background-image: url('assets/developerlogo.png');
	background-size: cover;
`
export default DetailPage;