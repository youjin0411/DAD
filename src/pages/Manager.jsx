import styled from 'styled-components'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Select from 'react-select';
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

function createData(name, calories, fat, carbs) {
  return { name, calories, fat, carbs };
}

function createData2(name, calories) {
  return { name, calories};
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24),
  createData('Ice cream sandwich', 237, 9.0, 37),
  createData('Eclair', 262, 16.0, 24),
  createData('Cupcake', 305, 3.7, 67),
  createData('Gingerbread', 356, 16.0, 49),
];

const rows2 = [
  createData2('보름달', 10),
  createData2('보름달', 10),
  createData2('보름달', 10),
  createData2('보름달', 10),
  createData2('보름달', 10),
];
const Manager = () => {
    const techCompanies = [
      { label: "전체", value: 1 },
      { label: "작품명 순", value: 2 },
      { label: "학번 순", value: 3 },
      { label: "주제  순", value: 4 },
    ];
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
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.name}>
                        <StyledTableCell component="th" scope="row">
                            {row.name}
                        </StyledTableCell>
                        <StyledTableCell>{row.calories}</StyledTableCell>
                        <StyledTableCell align="right">{row.fat}</StyledTableCell>
                        <StyledTableCell align="right">{row.carbs}</StyledTableCell>
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
                    {rows2.map((row) => (
                        <StyledTableRow key={row.name}>
                          <StyledTableCell component="th" scope="row">
                              {row.name}
                          </StyledTableCell>
                          <StyledTableCell component="th" scope="row">
                              {row.calories}
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