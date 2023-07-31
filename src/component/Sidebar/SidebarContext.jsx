import styled from 'styled-components'
const SidebarContent = () => {
    return(
        <Content>
            <Navbar>
                <>
                    <Nav href="/">테스트페이지</Nav>
                    <Nav href="/">테스트페이지</Nav>
                </>
            </Navbar>
            <Line></Line>
        </Content>
    )
};

const Content = styled.div`
    margin-top: 80px;
    margin-left: 140px;
    width: 15vw;
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
    width: 10vw;
    height: 3vh;
    background-color: #FD25A6;
    border-radius: 10px;
    padding: 15px;
    font-size: 1rem;
    text-decoration: none;
    color: white;
    cursor: pointer;  
`
const Icon = styled.img`
    margin-right: 0.8vw;
    width: 1.5vw;
    height: 2.5vh;
    display: flex;
    align-items: center;
    color: white;
    background-size: cover;
`
const Line = styled.div`
    border-right: 1px solid #E1E1E1;
    height: 80vh;
`
export default SidebarContent;