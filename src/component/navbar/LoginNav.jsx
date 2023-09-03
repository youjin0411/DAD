import React, {useState, useEffect} from "react";
import styled from "styled-components";

const DropdownMenu = () => {
  const [data, setData] = useState('');
  const [auth, setAuth] = useState('');
  useEffect ( () => {
    setData(localStorage.getItem('nickname'))
    setAuth(localStorage.getItem('manager'))
  }, [])

  return (
    <>
      <Wrapper>
      {auth === 'N' ? (
        <Link href="/mypage" style={{width: 200, marginTop: 30}}>
            <div style={{display: 'flex'}}>
								<Profile src='/assets/person.png'/>
								<User>
									<p style={{color: '#6C5DD3', fontSize: 16}}>{data}</p>
                </User>
              </div>
        </Link>
      ) : (
        <Link style={{width: 200, marginTop: 30}}>
            <div style={{display: 'flex'}}>
								<Profile src='/assets/person.png'/>
								<User>
									<p style={{color: '#6C5DD3', fontSize: 16}}>{data}</p>
                </User>
              </div>
        </Link>
      )}
        
      </Wrapper>
    </>
  );
};

export default DropdownMenu;
const User = styled.div`
      display: flex;
    flex-direction: column;
    margin-left: 12px;
`
const Profile = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50px;
`
const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  column-gap: 3%;
  color: white;
  font-size: 1.5vw;
  width: 22%;
`;

const Link = styled.a`
  font-weight: 520;
  font-family: "Noto Serif";
  text-decoration: none;
  color: black;
  font-size: 0.8vw;
  width: 27%;
  display: block;
  text-align: center;
  border-radius: 2vw;
  padding: 0.1vw 0.1vw;
  box-shadow: 0.3vw 0.3vw 2.3vw 0.3vw rgb(235 235 235);
    &:hover {
      transition: all 0.3s;
      border: 0.2vw solid #abbf98;
    }
`;