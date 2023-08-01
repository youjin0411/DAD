import React from "react";
import { styled } from "styled-components";
const Main = () => {
	return(
		<Group>
			<Title>MIRIM ITSHOW!</Title>
			<SubTitle>미림 마이스터고의 아이티쇼에 오신걸 환영합니다!</SubTitle>

			<MainGroup>
				<G>
					<Banner1 style={{background: `#F7CFFB`}}>
						<Icon src='assets/developerlogo.png'></Icon>
						<BannerText>For Developer</BannerText>
					</Banner1>
					<Box>
						<Text>개발자 전시 부스</Text>
						<ClickGroup>
							<GIcon style={{background: `#D0ECFF`}}><MiniIcon src='assets/developerlogo.png'></MiniIcon></GIcon>
							<TG>
									<Text>작품 소개</Text>
									<Intro>개발자 작품 소개 페이지</Intro>
								</TG>
						</ClickGroup>
						<ClickGroup>
							<GIcon style={{background: `#F3D2D2`}}><MiniIcon src='assets/developerlogo.png'></MiniIcon></GIcon>
							<TG>
									<Text>배치도</Text>
									<Intro>개발 전시 배치도 입니다.</Intro>
								</TG>
						</ClickGroup>
						<ClickGroup>
							<GIcon style={{background: `#E3EED0`}}><MiniIcon src='assets/developerlogo.png'></MiniIcon></GIcon>
							<TG>
									<Text>SW과 소개</Text>
									<Intro>SW 개발과를 소개합니다.</Intro>
								</TG>
						</ClickGroup>
					</Box>
				</G>
				<G>
					<Banner1 style={{background: `#AABDFF`}}>
						<Icon src="assets/designlogo.png"></Icon>
						<BannerText>For Designer</BannerText>
					</Banner1>
					<Box>
						<Text>디자인과 전시 부스</Text>
						<ClickGroup>
							<GIcon style={{background: `#D0ECFF`}}><MiniIcon src='assets/designlogo.png'></MiniIcon></GIcon>
							<TG>
									<Text>작품 소개</Text>
									<Intro>디자인과 작품 소개 페이지</Intro>
								</TG>
						</ClickGroup>
						<ClickGroup>
							<GIcon style={{background: `#F3D2D2`}}><MiniIcon src='assets/designlogo.png'></MiniIcon></GIcon>
							<TG>
									<Text>배치도</Text>
									<Intro>디자인 전시 배치도 입니다.</Intro>
								</TG>
						</ClickGroup>
						<ClickGroup>
							<GIcon style={{background: `#E3EED0`}}><MiniIcon src='assets/designlogo.png'></MiniIcon></GIcon>
							<TG>
									<Text>DESIGN과 소개</Text>
									<Intro>SW 개발과를 소개합니다.</Intro>
								</TG>
						</ClickGroup>
					</Box>
				</G>
			</MainGroup>
		</Group>
	)
}
const Group = styled.div`
	margin-top: 80px;
`
const GIcon = styled.div`
	width: 85px;
	height: 85px;
	border-radius: 10px;
`
const ClickGroup = styled.div`
	display: flex;
	column-gap: 20px;
`
const MiniIcon = styled.img`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 85px;
	height: 50px;
`
const TG = styled.div`
	display: grid;
`
const Intro = styled.div`
	margin-top: -25px;
	font-family: 'Noto Sans KR';
	font-style: normal;
	font-weight: 500;
	font-size: 13px;
	line-height: 19px;
	color: #BDBDBD;
`
const MainGroup = styled.div`
	display: grid;
	grid-template-columns: 43% 43%;
	align-items: center;
	justify-content: center;
`
const G = styled.div``
const Banner1 = styled.div`
	width: 490px;
	height: 161px;
	border-radius: 20px;
	display: flex;
	align-items: center;
	column-gap: 40px;
`
const Icon = styled.img`
	width: 238px;
	height: 139px;
`
const BannerText = styled.div`
	font-family: 'Noto Sans KR';
	font-style: normal;
	font-weight: 700;
	font-size: 28px;
	line-height: 41px;
	color: #FFFFFF;
`
const Box = styled.div`
	width: 480px;
	height: 486px;
	display: flex;
	flex-direction: column;
	background: #FFFFFF;
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
	margin-left: 100px;
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
	font-size: 18px;
	line-height: 26px;
	color: #000000;
`
export default Main;