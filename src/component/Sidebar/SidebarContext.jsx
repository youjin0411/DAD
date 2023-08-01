import styled from 'styled-components'
import { useState } from 'react';
const SidebarContent = () => {
    const [islogin, setIsLogin] = useState(false);
    return(
        <Content>
            <Navbar>
                {islogin ? (
                    <>
                        <Nav href="/">◌ 전시작품 작성 ◌</Nav>
                        <Nav href="/">◌ 전시 작품 ◌</Nav>
                        <Nav href="/">◌ 게시판 ◌</Nav>
                    </>
                ) : (
                    <>
                        <Nav href="/">◌ 전시 작품 ◌</Nav>
                        <Nav href="/">◌ 게시판 ◌</Nav>
                    </> 
                )
                }
            </Navbar>
            <Line></Line>
        </Content>
    )
};

const Content = styled.div`
    margin-top: 80px;
    margin-left: 240px;
    width: 10vw;
    height: auto;
    display: flex;
    justify-content: space-between;
`
const Navbar = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 14px;
`
const Nav = styled.a`
    display: flex;
    align-items: center;
    width: 7vw;
    height: 1%.5;
    background-color: #FD25A6;
    border-radius: 10px;
    padding: 15px;
    font-size: 0.8rem;
    text-decoration: none;
    color: white;
    cursor: pointer;  
`
const Line = styled.div`
    border-right: 1px solid #E1E1E1;
    height: 80vh;
`
export default SidebarContent;