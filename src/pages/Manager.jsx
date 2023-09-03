import styled from 'styled-components'
import { useState, useEffect } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { useNavigate } from 'react-router-dom';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Select from 'react-select';
import axios from 'axios';
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const Manager = () => {
  const [countList, setCountList] = useState([]);
  const [subject, setSubject] = useState([]);
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);
  const [tableData, setTableData] = useState([]);
   const [checkedItems, setCheckedItems] = useState({}); // 각 항목의 공개 여부

  const navigate = useNavigate();
    const techCompanies = [
      { label: "전체", value: 1 },
      { label: "작품명 순", value: 2 },
      { label: "학번 순", value: 3 },
      { label: "주제  순", value: 4 },
    ];
    async function getProject() {
      try {
        const response = await axios.get("http://localhost:3001/project");
        setCountList(response.data);
      } catch (error) {
        console.error("오류 발생:", error);
      }
    }
    getProject();

    async function getSubject() {
      try {
        const response = await axios.get("http://localhost:3001/subject");
        setSubject(response.data);
      } catch (error) {
        console.error("오류 발생:", error);
      }
    }
    getSubject();
    
    const handleCheckboxChange = async (event, PRONAME) => {
      const { checked } = event.target;
  
      // 항목의 공개 여부 업데이트
      setCheckedItems((prevCheckedItems) => ({
        ...prevCheckedItems,
        [PRONAME]: checked,
      }));
      try {
        const response = await axios.post('http://localhost:3001/update-public-status', {
          PRONAME: PRONAME,
          checked: checked,
        });
      } catch (error) {
        alert('오류 발생: ' + error.message);
      }
      
    };  

    return(
        <Group>
          <Title>MIRIM ITSHOW! </Title>
          <SubTitle>학생 작품 관리 페이지</SubTitle>
          <div style={{display: 'flex'}}>
                  <div className="row" style={{display: 'grid'}}>
                      <div className="col-md-4"></div>
                      <div className="col-md-4" style={{width: 252}}>
                          <Select options={ techCompanies } placeholder="전체"/>
                      </div>
                      <div className="col-md-4"></div>
                  </div>
          </div>
            <TableContainer component={Paper} style={{marginLeft: '-20px', marginTop: 20}}>
                <Table aria-label="customized table">
                    <TableHead>
                    <TableRow>
                        <StyledTableCell>작품명</StyledTableCell>
                        <StyledTableCell>작품 소개</StyledTableCell>
                        <StyledTableCell align="right">주제&nbsp;</StyledTableCell>
                        <StyledTableCell align="right">더보기&nbsp;</StyledTableCell>
                        <StyledTableCell align="right">공개여부&nbsp;</StyledTableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {countList.map((row) => (
                        <StyledTableRow key={row.PRONAME}>
                          <StyledTableCell component="th" scope="row">
                              {row.PRONAME}
                          </StyledTableCell>
                          <StyledTableCell>{row.PRODESC}</StyledTableCell>
                          <StyledTableCell align="right">{row.SUBJECT}</StyledTableCell>
                          <StyledTableCell align="right"><button onClick={() => { navigate('/click', {state : row}) }}>자세히</button></StyledTableCell>
                          <StyledTableCell align="right">
                          <input
                            type="checkbox"
                            checked={checkedItems[row.PRONAME] || false}
                            onChange={(e) => handleCheckboxChange(e, row.PRONAME)}
                          />공개</StyledTableCell>
                        </StyledTableRow>
                    ))}
                    </TableBody>
                </Table>
                </TableContainer>

                <TableContainer component={Paper} style={{marginLeft: '-20px', marginTop: 60, width: 400}}>
                <Table aria-label="customized table">
                    <TableHead>
                    <TableRow>
                        <StyledTableCell>주제명</StyledTableCell>
                        <StyledTableCell>작품 수</StyledTableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {subject.map((row) => (
                        <StyledTableRow key={row.SUBJECTNAME}>
                          <StyledTableCell component="th" scope="row">
                              {row.SUBJECTNAME}
                          </StyledTableCell>
                          <StyledTableCell component="th" scope="row">
                              {row.COUNT}
                          </StyledTableCell>
                        </StyledTableRow>
                    ))}
                    </TableBody>
                </Table>
                </TableContainer>
        </Group>
    )
}
const Group = styled.div`
	margin-top: 80px;
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
export default Manager;